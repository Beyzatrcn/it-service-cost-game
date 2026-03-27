import streamlit as st

from game_logic import (
    apply_action,
    create_game_state,
    get_score_breakdown,
    get_service_rows,
    reset_game,
)


st.set_page_config(page_title="IT Service Controller", layout="wide")


def _init_state() -> None:
    if "game" not in st.session_state:
        st.session_state.game = create_game_state()


def _inject_styles() -> None:
    st.markdown(
        """
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

        :root {
            --bg-top: #07111f;
            --bg-bottom: #02060c;
            --panel: rgba(8, 18, 34, 0.82);
            --panel-strong: rgba(10, 22, 42, 0.96);
            --line: rgba(116, 184, 255, 0.26);
            --text: #e9f2ff;
            --muted: #8ea6c7;
            --cyan: #6de2ff;
            --teal: #57c7b6;
            --amber: #ffbf69;
            --red: #ff7272;
        }

        .stApp {
            background:
                radial-gradient(circle at top left, rgba(66, 141, 255, 0.18), transparent 30%),
                radial-gradient(circle at top right, rgba(86, 207, 182, 0.16), transparent 28%),
                linear-gradient(180deg, var(--bg-top), var(--bg-bottom));
            color: var(--text);
        }

        .block-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
            max-width: 1350px;
        }

        h1, h2, h3, h4 {
            font-family: "Rajdhani", sans-serif;
            letter-spacing: 0.03em;
            color: var(--text);
        }

        p, li, div, span, label {
            font-family: "IBM Plex Sans", sans-serif;
        }

        [data-testid="stVerticalBlock"] > [data-testid="stMarkdownContainer"] p {
            color: var(--muted);
        }

        .hud-shell {
            background: linear-gradient(135deg, rgba(11, 24, 45, 0.95), rgba(5, 12, 24, 0.92));
            border: 1px solid var(--line);
            border-radius: 22px;
            padding: 1.4rem 1.5rem;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.28);
        }

        .hero-title {
            font-size: 2.7rem;
            font-weight: 700;
            margin: 0;
            line-height: 1;
        }

        .hero-subtitle {
            margin-top: 0.45rem;
            color: var(--muted);
            font-size: 0.98rem;
        }

        .section-label {
            color: var(--cyan);
            text-transform: uppercase;
            letter-spacing: 0.16em;
            font-size: 0.78rem;
            margin-bottom: 0.4rem;
        }

        .hud-stat {
            background: linear-gradient(180deg, rgba(12, 26, 49, 0.96), rgba(7, 17, 33, 0.96));
            border: 1px solid rgba(109, 226, 255, 0.2);
            border-radius: 18px;
            padding: 1rem 1.1rem;
            min-height: 118px;
        }

        .hud-stat-label {
            color: var(--muted);
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .hud-stat-value {
            color: var(--text);
            font-family: "Rajdhani", sans-serif;
            font-size: 2.3rem;
            font-weight: 700;
            line-height: 1.05;
            margin-top: 0.55rem;
        }

        .hud-stat-note {
            color: var(--cyan);
            font-size: 0.9rem;
            margin-top: 0.35rem;
        }

        .event-panel,
        .history-panel,
        .service-card {
            background: linear-gradient(180deg, rgba(8, 18, 34, 0.92), rgba(5, 11, 22, 0.96));
            border: 1px solid var(--line);
            border-radius: 20px;
            padding: 1.2rem;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .event-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.4rem;
        }

        .event-copy {
            color: var(--text);
            font-size: 1.02rem;
            margin-bottom: 0.9rem;
        }

        .service-chip {
            display: inline-block;
            border: 1px solid rgba(255, 191, 105, 0.38);
            color: var(--amber);
            border-radius: 999px;
            padding: 0.25rem 0.7rem;
            font-size: 0.82rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-top: 0.15rem;
        }

        .service-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.8rem;
            margin-bottom: 1rem;
        }

        .service-name {
            font-family: "Rajdhani", sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1;
        }

        .status-chip {
            border-radius: 999px;
            padding: 0.2rem 0.65rem;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            border: 1px solid currentColor;
        }

        .status-stable {
            color: var(--teal);
            background: rgba(87, 199, 182, 0.08);
        }

        .status-watch {
            color: var(--amber);
            background: rgba(255, 191, 105, 0.08);
        }

        .status-critical {
            color: var(--red);
            background: rgba(255, 114, 114, 0.08);
        }

        .kpi-row {
            margin-bottom: 0.95rem;
        }

        .kpi-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            margin-bottom: 0.32rem;
        }

        .kpi-name {
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 0.76rem;
        }

        .kpi-value {
            color: var(--text);
            font-family: "Rajdhani", sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
        }

        .kpi-track {
            width: 100%;
            height: 10px;
            background: rgba(255, 255, 255, 0.06);
            border-radius: 999px;
            overflow: hidden;
        }

        .kpi-fill {
            height: 100%;
            border-radius: 999px;
            background: linear-gradient(90deg, rgba(109, 226, 255, 0.45), rgba(87, 199, 182, 0.92));
        }

        .kpi-fill.warn {
            background: linear-gradient(90deg, rgba(255, 191, 105, 0.5), rgba(255, 191, 105, 0.95));
        }

        .kpi-fill.danger {
            background: linear-gradient(90deg, rgba(255, 114, 114, 0.5), rgba(255, 114, 114, 0.95));
        }

        .history-entry {
            padding: 0.8rem 0;
            border-bottom: 1px solid rgba(142, 166, 199, 0.12);
        }

        .history-entry:last-child {
            border-bottom: 0;
            padding-bottom: 0;
        }

        .history-round {
            color: var(--cyan);
            font-size: 0.82rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            margin-bottom: 0.2rem;
        }

        .history-main {
            color: var(--text);
            font-size: 0.95rem;
            line-height: 1.45;
        }

        .history-note {
            color: var(--muted);
            font-size: 0.88rem;
            margin-top: 0.35rem;
        }

        .stButton > button {
            width: 100%;
            border-radius: 14px;
            border: 1px solid rgba(109, 226, 255, 0.35);
            background: linear-gradient(180deg, rgba(12, 32, 59, 1), rgba(7, 18, 33, 1));
            color: var(--text);
            font-family: "Rajdhani", sans-serif;
            font-weight: 700;
            letter-spacing: 0.03em;
            min-height: 3.1rem;
        }

        .stButton > button:hover {
            border-color: rgba(109, 226, 255, 0.8);
            color: white;
        }

        [data-testid="stHorizontalBlock"] {
            align-items: stretch;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )


def _render_header() -> None:
    st.markdown(
        """
        <div class="hud-shell">
            <div class="section-label">Operations Command</div>
            <div class="hero-title">IT Service Controller</div>
            <div class="hero-subtitle">
                Keep Cloud Compute, Storage, and IT Support stable while balancing cost pressure and user sentiment.
            </div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def _render_stat_card(label: str, value: str, note: str) -> None:
    st.markdown(
        f"""
        <div class="hud-stat">
            <div class="hud-stat-label">{label}</div>
            <div class="hud-stat-value">{value}</div>
            <div class="hud-stat-note">{note}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )


def _render_top_metrics() -> None:
    game = st.session_state.game
    score_breakdown = get_score_breakdown(game["services"])

    col1, col2, col3, col4 = st.columns(4)
    with col1:
        _render_stat_card("Round", str(game["round"]), "Decision cycle")
    with col2:
        _render_stat_card("Current Score", str(game["score"]), "This round standing")
    with col3:
        _render_stat_card("Total Score", str(game["total_score"]), "Campaign total")
    with col4:
        _render_stat_card(
            "Balance",
            f'{score_breakdown["cost_efficiency"]} / {score_breakdown["satisfaction"]}',
            "Cost efficiency / satisfaction",
        )


def _status_class(service: dict[str, int | str]) -> tuple[str, str]:
    sla = int(service["sla"])
    satisfaction = int(service["satisfaction"])
    cost = int(service["cost"])

    if sla < 88 or satisfaction < 60 or cost > 110:
        return "Critical", "status-critical"
    if sla < 94 or satisfaction < 72 or cost > 85:
        return "Watch", "status-watch"
    return "Stable", "status-stable"


def _bar_tone(metric_name: str, value: int) -> str:
    if metric_name == "Cost":
        if value > 100:
            return "danger"
        if value > 80:
            return "warn"
        return ""

    if value < 70:
        return "danger"
    if value < 85:
        return "warn"
    return ""


def _bar_width(metric_name: str, value: int) -> int:
    if metric_name == "Cost":
        return max(8, min(100, int((value / 200) * 100)))
    return max(8, min(100, value))


def _render_kpi(label: str, value: int, suffix: str = "") -> str:
    tone = _bar_tone(label, value)
    width = _bar_width(label, value)
    tone_class = f" {tone}" if tone else ""
    return f"""
        <div class="kpi-row">
            <div class="kpi-meta">
                <div class="kpi-name">{label}</div>
                <div class="kpi-value">{value}{suffix}</div>
            </div>
            <div class="kpi-track">
                <div class="kpi-fill{tone_class}" style="width: {width}%;"></div>
            </div>
        </div>
    """


def _render_dashboard() -> None:
    st.markdown(
        '<div class="section-label" style="margin-top: 1rem;">Service Grid</div>',
        unsafe_allow_html=True,
    )
    rows = get_service_rows(st.session_state.game["services"])
    columns = st.columns(len(rows))

    for column, service in zip(columns, rows):
        status_text, status_class = _status_class(service)
        with column:
            st.markdown(
                f"""
                <div class="service-card">
                    <div class="service-header">
                        <div class="service-name">{service["name"]}</div>
                        <div class="status-chip {status_class}">{status_text}</div>
                    </div>
                    {_render_kpi("Cost", int(service["cost"]))}
                    {_render_kpi("Usage", int(service["usage"]))}
                    {_render_kpi("SLA", int(service["sla"]), "%")}
                    {_render_kpi("Satisfaction", int(service["satisfaction"]))}
                </div>
                """,
                unsafe_allow_html=True,
            )


def _render_event_panel() -> None:
    game = st.session_state.game
    event = game["current_event"]

    st.markdown(
        f"""
        <div class="event-panel">
            <div class="section-label">Live Incident</div>
            <div class="event-title">{event["title"]}</div>
            <div class="event-copy">{event["description"]}</div>
            <div class="service-chip">{event["service"]}</div>
        </div>
        """,
        unsafe_allow_html=True,
    )

    st.write("")
    action_columns = st.columns(3)
    for index, (column, action) in enumerate(zip(action_columns, event["choices"])):
        with column:
            if st.button(
                action["label"],
                use_container_width=True,
                key=f"action_{game['round']}_{index}",
            ):
                st.session_state.game = apply_action(game, index)
                st.rerun()


def _render_history() -> None:
    history = st.session_state.game["history"]

    if not history:
        st.markdown(
            """
            <div class="history-panel">
                <div class="section-label">Mission Log</div>
                <div class="history-main">No actions recorded yet. Resolve the first live incident to begin the run.</div>
            </div>
            """,
            unsafe_allow_html=True,
        )
        return

    entries = []
    for item in reversed(history[-5:]):
        entries.append(
            f"""
            <div class="history-entry">
                <div class="history-round">Round {item["round"]}</div>
                <div class="history-main">{item["event"]} | {item["service"]}</div>
                <div class="history-main">Action: {item["action"]} | Score: {item["score"]}</div>
                <div class="history-note">{item["result"]}</div>
            </div>
            """
        )

    st.markdown(
        f"""
        <div class="history-panel">
            <div class="section-label">Mission Log</div>
            {''.join(entries)}
        </div>
        """,
        unsafe_allow_html=True,
    )


def main() -> None:
    _init_state()
    _inject_styles()
    _render_header()
    st.write("")
    _render_top_metrics()
    st.write("")

    left, right = st.columns([1.75, 1])
    with left:
        _render_event_panel()
    with right:
        if st.button("Start New Run", use_container_width=True):
            st.session_state.game = reset_game()
            st.rerun()
        st.write("")
        _render_history()

    st.write("")
    _render_dashboard()


if __name__ == "__main__":
    main()
