from __future__ import annotations

from copy import deepcopy
from dataclasses import asdict, dataclass
import random
from typing import Any


SERVICE_NAMES = ["Cloud Compute", "Storage", "IT Support"]


@dataclass
class ServiceState:
    name: str
    cost: int
    usage: int
    sla: int
    satisfaction: int

    def apply(self, changes: dict[str, int]) -> None:
        self.cost = _clamp(self.cost + changes.get("cost", 0), 20, 200)
        self.usage = _clamp(self.usage + changes.get("usage", 0), 0, 100)
        self.sla = _clamp(self.sla + changes.get("sla", 0), 70, 100)
        self.satisfaction = _clamp(
            self.satisfaction + changes.get("satisfaction", 0), 0, 100
        )


EVENT_TEMPLATES = [
    {
        "title": "Vendor Price Increase",
        "description": "A supplier raised operating costs for {service}.",
        "choices": [
            {
                "label": "Absorb the increase",
                "effects": {"target": {"cost": 12, "satisfaction": 3}},
                "result": "You protected users, but your budget took the hit.",
            },
            {
                "label": "Optimize capacity",
                "effects": {"target": {"cost": 4, "usage": -5, "sla": -2}},
                "result": "Costs improved, but performance became tighter.",
            },
            {
                "label": "Pass costs to users",
                "effects": {"target": {"cost": -4, "satisfaction": -9}},
                "result": "Finance is happier than your users.",
            },
        ],
    },
    {
        "title": "Service Quality Drop",
        "description": "{service} is showing signs of instability and SLA is at risk.",
        "choices": [
            {
                "label": "Launch emergency fix",
                "effects": {"target": {"cost": 10, "sla": 6, "satisfaction": 4}},
                "result": "The fix worked, although it cost extra.",
            },
            {
                "label": "Monitor for one round",
                "effects": {"target": {"cost": -2, "sla": -6, "satisfaction": -4}},
                "result": "You saved money now, but users noticed the instability.",
            },
            {
                "label": "Scale service resources",
                "effects": {"target": {"cost": 7, "usage": 6, "sla": 3}},
                "result": "Capacity improved and usage recovered.",
            },
        ],
    },
    {
        "title": "Demand Surge",
        "description": "Usage for {service} is rising faster than forecast.",
        "choices": [
            {
                "label": "Scale up immediately",
                "effects": {"target": {"cost": 9, "usage": 8, "sla": 2, "satisfaction": 3}},
                "result": "The service handled the surge well.",
            },
            {
                "label": "Shift workload to other teams",
                "effects": {
                    "target": {"cost": 2, "usage": 3, "satisfaction": -2},
                    "all": {"cost": 1},
                },
                "result": "You spread the load, but it added small overhead elsewhere.",
            },
            {
                "label": "Delay response",
                "effects": {"target": {"cost": -3, "usage": -4, "sla": -5, "satisfaction": -6}},
                "result": "You avoided spend, but demand was not met.",
            },
        ],
    },
    {
        "title": "Customer Frustration",
        "description": "Feedback shows falling confidence in {service}.",
        "choices": [
            {
                "label": "Invest in service improvement",
                "effects": {"target": {"cost": 8, "sla": 3, "satisfaction": 8}},
                "result": "The improvement program restored confidence.",
            },
            {
                "label": "Improve communication only",
                "effects": {"target": {"cost": 2, "satisfaction": 4}},
                "result": "Better messaging helped, but the core issues remain.",
            },
            {
                "label": "Ignore feedback for now",
                "effects": {"target": {"cost": -2, "satisfaction": -8, "usage": -3}},
                "result": "Short-term savings came at the cost of trust.",
            },
        ],
    },
    {
        "title": "Automation Opportunity",
        "description": "You found a chance to automate part of {service}.",
        "choices": [
            {
                "label": "Fund the automation project",
                "effects": {"target": {"cost": 6, "usage": 5, "satisfaction": 2}},
                "result": "The project needs investment now but should improve efficiency.",
            },
            {
                "label": "Run a pilot",
                "effects": {"target": {"cost": 2, "usage": 2, "sla": 1}},
                "result": "The pilot showed modest operational gains.",
            },
            {
                "label": "Skip it",
                "effects": {"target": {"cost": 0, "satisfaction": -2}},
                "result": "Nothing changed operationally, and some teams saw a missed chance.",
            },
        ],
    },
]


def create_initial_services() -> list[ServiceState]:
    return [
        ServiceState("Cloud Compute", cost=82, usage=72, sla=96, satisfaction=81),
        ServiceState("Storage", cost=68, usage=66, sla=97, satisfaction=79),
        ServiceState("IT Support", cost=58, usage=74, sla=94, satisfaction=77),
    ]


def create_game_state() -> dict[str, Any]:
    services = create_initial_services()
    score = calculate_score(services)
    game_state = {
        "round": 1,
        "services": services,
        "score": score,
        "total_score": score,
        "history": [],
        "current_event": None,
    }
    game_state["current_event"] = generate_random_event(services)
    return game_state


def generate_random_event(services: list[ServiceState]) -> dict[str, Any]:
    service = random.choice(services)
    template = deepcopy(random.choice(EVENT_TEMPLATES))
    template["service"] = service.name
    template["title"] = template["title"]
    template["description"] = template["description"].format(service=service.name)
    return template


def apply_action(game_state: dict[str, Any], action_index: int) -> dict[str, Any]:
    event = game_state["current_event"]
    selected_action = event["choices"][action_index]
    target_service = _find_service(game_state["services"], event["service"])

    _apply_effects(game_state["services"], target_service, selected_action["effects"])

    game_state["score"] = calculate_score(game_state["services"])
    game_state["total_score"] += game_state["score"]
    game_state["history"].append(
        {
            "round": game_state["round"],
            "event": event["title"],
            "service": event["service"],
            "action": selected_action["label"],
            "result": selected_action["result"],
            "score": game_state["score"],
        }
    )

    game_state["round"] += 1
    game_state["current_event"] = generate_random_event(game_state["services"])
    return game_state


def get_service_rows(services: list[ServiceState]) -> list[dict[str, int | str]]:
    return [asdict(service) for service in services]


def calculate_score(services: list[ServiceState]) -> int:
    average_cost = sum(service.cost for service in services) / len(services)
    average_satisfaction = sum(service.satisfaction for service in services) / len(services)

    cost_efficiency = _clamp(int(100 - (average_cost - 40) * 0.9), 0, 100)
    return int((cost_efficiency * 0.55) + (average_satisfaction * 0.45))


def get_score_breakdown(services: list[ServiceState]) -> dict[str, int]:
    average_cost = sum(service.cost for service in services) / len(services)
    average_satisfaction = sum(service.satisfaction for service in services) / len(services)
    cost_efficiency = _clamp(int(100 - (average_cost - 40) * 0.9), 0, 100)
    return {
        "cost_efficiency": cost_efficiency,
        "satisfaction": int(average_satisfaction),
    }


def reset_game() -> dict[str, Any]:
    return create_game_state()


def _apply_effects(
    services: list[ServiceState], target_service: ServiceState, effects: dict[str, Any]
) -> None:
    target_service.apply(effects.get("target", {}))

    if "all" in effects:
        for service in services:
            if service.name != target_service.name:
                service.apply(effects["all"])


def _find_service(services: list[ServiceState], service_name: str) -> ServiceState:
    for service in services:
        if service.name == service_name:
            return service
    raise ValueError(f"Unknown service: {service_name}")


def _clamp(value: int | float, minimum: int, maximum: int) -> int:
    return max(minimum, min(int(round(value)), maximum))
