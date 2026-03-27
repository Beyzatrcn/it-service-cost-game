const SPIEL_CONFIG = {
  maxRunden: 10,
  startBudget: 430000,
};

const START_DIENSTE = [
  {
    id: "teams",
    name: "Microsoft Teams",
    kategorie: "Kommunikation und Zusammenarbeit",
    gruppe: "kommunikation",
    status: "Aktiv",
    kosten: 18000,
    stabilitaet: 82,
    akzeptanz: 84,
    risiko: 24,
    rolle: "Zentrales Werkzeug fuer Zusammenarbeit und Meetings.",
    hinweis: "Breit im Einsatz, aber nicht ueberall verbindlicher Standard.",
  },
  {
    id: "zoom",
    name: "Zoom",
    kategorie: "Kommunikation und Zusammenarbeit",
    gruppe: "kommunikation",
    status: "Aktiv",
    kosten: 16000,
    stabilitaet: 74,
    akzeptanz: 72,
    risiko: 31,
    rolle: "Zusatzwerkzeug fuer Vorlesungen, Gast-Events und Institute.",
    hinweis: "Parallelbetrieb mit Teams verursacht spuerbare Doppelkosten.",
  },
  {
    id: "email",
    name: "E-Mail-System",
    kategorie: "Kommunikation und Zusammenarbeit",
    gruppe: "kommunikation",
    status: "Aktiv",
    kosten: 21000,
    stabilitaet: 90,
    akzeptanz: 86,
    risiko: 16,
    rolle: "Kritischer Basisdienst fuer die gesamte Hochschule.",
    hinweis: "Pflichtservice mit laufendem Betriebs- und Archivierungsaufwand.",
  },
  {
    id: "cloud_a",
    name: "Cloud-Plattform A",
    kategorie: "Compute / Rechenleistung",
    gruppe: "compute",
    status: "Aktiv",
    kosten: 52000,
    stabilitaet: 78,
    akzeptanz: 82,
    risiko: 29,
    rolle: "Flexible Plattform fuer dynamische Forschungs-Workloads.",
    hinweis: "Sehr skalierbar, aber teuer im laufenden Verbrauch.",
  },
  {
    id: "cloud_b",
    name: "Cloud-Plattform B",
    kategorie: "Compute / Rechenleistung",
    gruppe: "compute",
    status: "Aktiv",
    kosten: 39000,
    stabilitaet: 76,
    akzeptanz: 79,
    risiko: 27,
    rolle: "Integrierte Plattform fuer Verwaltungs- und Standardlasten.",
    hinweis: "Mittleres Kostenniveau, aber Parallelbetrieb bleibt teuer.",
  },
  {
    id: "local_servers",
    name: "Lokale Server",
    kategorie: "Compute / Rechenleistung",
    gruppe: "compute",
    status: "Aktiv",
    kosten: 30000,
    stabilitaet: 72,
    akzeptanz: 70,
    risiko: 34,
    rolle: "Lokale Grundlast fuer berechenbare Standardbedarfe.",
    hinweis: "Guenstiger als Cloud, aber weniger flexibel bei Spitzenlasten.",
  },
  {
    id: "cloud_storage",
    name: "Cloud-Speicher",
    kategorie: "Speicher / Datenablage",
    gruppe: "speicher",
    status: "Aktiv",
    kosten: 32000,
    stabilitaet: 78,
    akzeptanz: 81,
    risiko: 28,
    rolle: "Flexible Ablage fuer aktive Projekt- und Forschungsdaten.",
    hinweis: "Wird stark genutzt und treibt die Speicherkosten sichtbar.",
  },
  {
    id: "network_storage",
    name: "Netzwerkspeicher",
    kategorie: "Speicher / Datenablage",
    gruppe: "speicher",
    status: "Aktiv",
    kosten: 24000,
    stabilitaet: 75,
    akzeptanz: 73,
    risiko: 25,
    rolle: "Zentrale Standardablage fuer die Hochschule.",
    hinweis: "Guenstig und vertraut, aber begrenzt in Wachstum und Tempo.",
  },
  {
    id: "archive_storage",
    name: "Archivspeicher",
    kategorie: "Speicher / Datenablage",
    gruppe: "speicher",
    status: "Aktiv",
    kosten: 9000,
    stabilitaet: 65,
    akzeptanz: 58,
    risiko: 18,
    rolle: "Langfristige Ablage fuer selten benoetigte Daten.",
    hinweis: "Sehr guenstig, aber bewusst langsam im Zugriff.",
  },
  {
    id: "internal_support",
    name: "Internes Support-Team",
    kategorie: "Support",
    gruppe: "support",
    status: "Aktiv",
    kosten: 30000,
    stabilitaet: 79,
    akzeptanz: 84,
    risiko: 23,
    rolle: "Persoenlicher Support mit Hochschul-Know-how.",
    hinweis: "Qualitativ stark, aber personell begrenzt.",
  },
  {
    id: "external_support",
    name: "Externer Support-Dienstleister",
    kategorie: "Support",
    gruppe: "support",
    status: "Aktiv",
    kosten: 16000,
    stabilitaet: 66,
    akzeptanz: 63,
    risiko: 35,
    rolle: "Entlastet bei Standardanfragen und Spitzenlast.",
    hinweis: "Flexibel, aber weniger nah an Forschung und Lehre.",
  },
  {
    id: "basic_monitoring",
    name: "Basis-Monitoring",
    kategorie: "Sicherheit",
    gruppe: "sicherheit",
    status: "Aktiv",
    kosten: 15000,
    stabilitaet: 75,
    akzeptanz: 68,
    risiko: 30,
    rolle: "Mindestabsicherung fuer zentrale Systeme.",
    hinweis: "Deckt Grundereignisse ab, reicht aber nicht fuer alles.",
  },
  {
    id: "advanced_monitoring",
    name: "Erweitertes Security Monitoring",
    kategorie: "Sicherheit",
    gruppe: "sicherheit",
    status: "Aktiv",
    kosten: 26000,
    stabilitaet: 84,
    akzeptanz: 74,
    risiko: 18,
    rolle: "Vertiefte Erkennung und Reaktion bei Sicherheitsereignissen.",
    hinweis: "Senkt Risiko spuerbar, kostet aber sichtbar mehr.",
  },
  {
    id: "finance",
    name: "Finanzsystem",
    kategorie: "Business-Systeme",
    gruppe: "business",
    status: "Aktiv",
    kosten: 34000,
    stabilitaet: 90,
    akzeptanz: 80,
    risiko: 18,
    rolle: "Kritischer Kernservice fuer Finanzprozesse und Abschluesse.",
    hinweis: "Muss verlässlich bleiben und wird eher modernisiert als reduziert.",
  },
  {
    id: "bi_platform",
    name: "BI- / Reporting-Plattform",
    kategorie: "Business-Systeme",
    gruppe: "business",
    status: "Aktiv",
    kosten: 22000,
    stabilitaet: 74,
    akzeptanz: 77,
    risiko: 27,
    rolle: "Berichts- und Analyseplattform fuer Steuerung und Controlling.",
    hinweis: "Wichtig fuer Management, aber anfällig bei uneinheitlichen Datenquellen.",
  },
];

const GRUPPEN_INFO = {
  kommunikation: {
    label: "Kommunikation",
    beschreibung: "Teams und Zoom decken aehnliche Zwecke ab. Doppelspurigkeit ist leicht erkennbar.",
    dienstIds: ["teams", "zoom", "email"],
  },
  compute: {
    label: "Compute",
    beschreibung: "Mehrere Plattformen verbessern Redundanz, treiben aber Steuerung und Kosten.",
    dienstIds: ["cloud_a", "cloud_b", "local_servers"],
  },
  speicher: {
    label: "Speicher",
    beschreibung: "Nicht jeder Speicher ist fuer jeden Zweck gleich sinnvoll oder gleich teuer.",
    dienstIds: ["cloud_storage", "network_storage", "archive_storage"],
  },
  support: {
    label: "Support",
    beschreibung: "Internes Know-how und externe Entlastung muessen passend balanciert werden.",
    dienstIds: ["internal_support", "external_support"],
  },
  sicherheit: {
    label: "Sicherheit",
    beschreibung: "Risikoreduktion entsteht nicht durch Abschalten, sondern durch sinnvolle Priorisierung.",
    dienstIds: ["basic_monitoring", "advanced_monitoring"],
  },
  business: {
    label: "Business-Systeme",
    beschreibung: "Kritische Systeme werden optimiert und modernisiert, nicht blind abgebaut.",
    dienstIds: ["finance", "bi_platform"],
  },
};

function umlautText(text) {
  return String(text)
    .replace(/(^|[^aeiouy\u00e4\u00f6\u00fcAEIOUY\u00c4\u00d6\u00dc])Ae/g, (_, prefix) => `${prefix}\u00c4`)
    .replace(/(^|[^aeiouy\u00e4\u00f6\u00fcAEIOUY\u00c4\u00d6\u00dc])Oe/g, (_, prefix) => `${prefix}\u00d6`)
    .replace(/(^|[^aeiouy\u00e4\u00f6\u00fcAEIOUY\u00c4\u00d6\u00dc])Ue/g, (_, prefix) => `${prefix}\u00dc`)
    .replace(/(^|[^aeiouy\u00e4\u00f6\u00fcAEIOUY\u00c4\u00d6\u00dc])ae/g, (_, prefix) => `${prefix}\u00e4`)
    .replace(/(^|[^aeiouy\u00e4\u00f6\u00fcAEIOUY\u00c4\u00d6\u00dc])oe/g, (_, prefix) => `${prefix}\u00f6`)
    .replace(/(^|[^aeiouy\u00e4\u00f6\u00fcAEIOUY\u00c4\u00d6\u00dc])ue/g, (_, prefix) => `${prefix}\u00fc`);
}

function geld(wert) {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    maximumFractionDigits: 0,
  }).format(wert);
}

function clamp(wert, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, wert));
}

function tiefeKopie(objekt) {
  return JSON.parse(JSON.stringify(objekt));
}

function statusAktiv(status) {
  return status !== "Ausser Betrieb";
}

function erstelleAenderung(id, felder) {
  return { id, ...felder };
}

const SZENARIEN = [
  {
    id: "kommunikation_lizenzen",
    gruppe: "kommunikation",
    titel: "Teams und Zoom werden parallel genutzt. Die Lizenzkosten steigen weiter.",
    beschreibung:
      "Die Kommunikationsgruppe ist historisch gewachsen. Du musst nun sichtbar entscheiden, welcher Service Standard sein soll und wie stark Parallelbetrieb weitergetragen wird.",
    betroffeneServices: ["teams", "zoom"],
    auswahl: [
      {
        key: "kommunikation_gruppe",
        label: "Kommunikationsgruppe",
        beschreibung: "Teams und Zoom gemeinsam steuern.",
        aktionen: [
          {
            id: "teams_standard",
            titel: "Teams als Standard definieren",
            beschreibung: "Zoom bleibt nur fuer Ausnahmefaelle verfuegbar.",
            anwenden: () => ({
              feedback:
                "Teams wird als Standardloesung gesetzt. Zoom bleibt fuer Sonderfaelle erhalten, verliert aber deutlich an Breite.",
              aenderungen: [
                erstelleAenderung("teams", {
                  status: "Standardloesung",
                  kostenDelta: 2000,
                  akzeptanzDelta: 3,
                  stabilitaetDelta: 2,
                  risikoDelta: -2,
                  hinweis: "Teams ist nun das verbindliche Hauptwerkzeug.",
                }),
                erstelleAenderung("zoom", {
                  status: "Nur fuer Ausnahmefaelle",
                  kostenDelta: -9000,
                  akzeptanzDelta: -8,
                  stabilitaetDelta: -3,
                  risikoDelta: 3,
                  hinweis: "Zoom bleibt fuer Spezialfaelle und externe Kontexte verfuegbar.",
                }),
              ],
            }),
          },
          {
            id: "beide_weiter",
            titel: "Beide Loesungen weiterfuehren",
            beschreibung: "Hohe Akzeptanz, aber keine Kostendisziplin.",
            anwenden: () => ({
              feedback:
                "Die Hochschule vermeidet Reibung, bezahlt aber weiterhin fuer zwei sich stark ueberschneidende Kommunikationsdienste.",
              aenderungen: [
                erstelleAenderung("teams", {
                  status: "Aktiv",
                  kostenDelta: 1500,
                  akzeptanzDelta: 1,
                  risikoDelta: -1,
                  hinweis: "Bleibt unveraendert im Parallelbetrieb.",
                }),
                erstelleAenderung("zoom", {
                  status: "Aktiv",
                  kostenDelta: 1500,
                  akzeptanzDelta: 1,
                  risikoDelta: -1,
                  hinweis: "Parallelbetrieb bleibt bewusst bestehen.",
                }),
              ],
            }),
          },
          {
            id: "schrittweise_konsolidierung",
            titel: "Schrittweise Konsolidierung starten",
            beschreibung: "Uebergang kontrolliert ueber mehrere Runden.",
            anwenden: () => ({
              feedback:
                "Die Konsolidierung startet moderat. Kurzfristig entstehen Schulungs- und Governance-Aufwaende, spaeter sinken die Doppelkosten kontrolliert.",
              aenderungen: [
                erstelleAenderung("teams", {
                  status: "In Migration",
                  kostenDelta: 1000,
                  akzeptanzDelta: 1,
                  hinweis: "Teams wird strukturell vorbereitet und begleitet ausgebaut.",
                }),
                erstelleAenderung("zoom", {
                  status: "Reduziert",
                  kostenDelta: -3000,
                  akzeptanzDelta: -3,
                  risikoDelta: 1,
                  hinweis: "Zoom wird etappenweise zurueckgenommen.",
                }),
              ],
              programme: [
                {
                  id: "programm_kommunikation",
                  name: "Kommunikationskonsolidierung",
                  restRunden: 2,
                  text: "Zoom-Nutzung sinkt weiter, Teams wird organisatorisch gefestigt.",
                  aenderungen: [
                    erstelleAenderung("zoom", { kostenDelta: -1500, akzeptanzDelta: -1, hinweis: "Weitere Konsolidierungswelle laeuft." }),
                    erstelleAenderung("teams", { kostenDelta: 500, akzeptanzDelta: 1, hinweis: "Schulung und Standards wirken weiter." }),
                  ],
                },
              ],
            }),
          },
        ],
      },
      {
        key: "zoom_service",
        label: "Zoom gezielt betrachten",
        beschreibung: "Zoom als Spezialdienst oder Rueckbaupfad steuern.",
        aktionen: [
          {
            id: "zoom_spezialfaelle",
            titel: "Zoom auf Spezialfaelle begrenzen",
            beschreibung: "Campusweiter Standard wird damit klarer.",
            anwenden: () => ({
              feedback:
                "Zoom wird nicht abgeschaltet, aber auf klar definierte Spezialfaelle begrenzt. Die Service-Landschaft wird nachvollziehbarer.",
              aenderungen: [
                erstelleAenderung("zoom", {
                  status: "Nur fuer Ausnahmefaelle",
                  kostenDelta: -8000,
                  akzeptanzDelta: -6,
                  stabilitaetDelta: -2,
                  risikoDelta: 2,
                  hinweis: "Zoom ist nur noch fuer begruendete Ausnahmefaelle vorgesehen.",
                }),
                erstelleAenderung("teams", {
                  status: "Standardloesung",
                  kostenDelta: 1500,
                  akzeptanzDelta: 2,
                  stabilitaetDelta: 1,
                  hinweis: "Teams uebernimmt automatisch mehr Standardnutzung.",
                }),
              ],
            }),
          },
          {
            id: "zoom_bewusst_weiter",
            titel: "Zoom bewusst weiterfuehren",
            beschreibung: "Fuer Gastvortraege und Events priorisieren.",
            anwenden: () => ({
              feedback:
                "Zoom bleibt ein aktiver Zweitdienst. Das ist fachlich begruendbar, verlaengert aber den teuren Parallelbetrieb.",
              aenderungen: [
                erstelleAenderung("zoom", {
                  status: "Aktiv",
                  kostenDelta: 2500,
                  akzeptanzDelta: 2,
                  risikoDelta: -1,
                  hinweis: "Wird als paralleler Event- und Spezialdienst bewusst gehalten.",
                }),
              ],
            }),
          },
          {
            id: "zoom_auslaufend",
            titel: "Zoom als auslaufenden Dienst markieren",
            beschreibung: "Rueckbau signalisieren, aber nicht abrupt stoppen.",
            anwenden: () => ({
              feedback:
                "Zoom erhaelt klar den Status 'Auslaufend'. So wird sichtbar, dass der Dienst noch existiert, aber nicht mehr strategisch ausgebaut wird.",
              aenderungen: [
                erstelleAenderung("zoom", {
                  status: "Auslaufend",
                  kostenDelta: -5000,
                  akzeptanzDelta: -4,
                  risikoDelta: 1,
                  hinweis: "Neue Nutzungen werden nicht mehr aktiv gefoerdert.",
                }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "compute_kosten",
    gruppe: "compute",
    titel: "Cloud-Kosten steigen stark, weil mehrere Institute mehr Rechenleistung anfordern.",
    beschreibung:
      "Die Compute-Gruppe ist leistungsfaehig, aber teuer. Du musst sichtbar entscheiden, welche Plattform staerker priorisiert oder reduziert wird.",
    betroffeneServices: ["cloud_a", "cloud_b", "local_servers"],
    auswahl: [
      {
        key: "compute_gruppe",
        label: "Compute-Gruppe",
        beschreibung: "Die drei Rechenpfade gemeinsam bewerten.",
        aktionen: [
          {
            id: "hauptplattform",
            titel: "Workloads auf eine Hauptplattform buendeln",
            beschreibung: "Doppelte Governance abbauen, Abhaengigkeit erhoehen.",
            anwenden: () => ({
              feedback:
                "Ein Teil der Redundanz wird bewusst aufgegeben. Die Plattformlandschaft wird guenstiger, aber konzentrierter.",
              aenderungen: [
                erstelleAenderung("cloud_a", {
                  status: "Reduziert",
                  kostenDelta: -9000,
                  stabilitaetDelta: -3,
                  akzeptanzDelta: -2,
                  risikoDelta: 4,
                  hinweis: "Cloud A nimmt nur noch Speziallasten auf.",
                }),
                erstelleAenderung("cloud_b", {
                  status: "Standardloesung",
                  kostenDelta: 5000,
                  stabilitaetDelta: 2,
                  akzeptanzDelta: 2,
                  risikoDelta: -1,
                  hinweis: "Cloud B wird als Hauptplattform fuer neue Lasten definiert.",
                }),
                erstelleAenderung("local_servers", {
                  status: "Reduziert",
                  kostenDelta: -3000,
                  risikoDelta: 2,
                  hinweis: "Lokale Systeme tragen nur noch stabile Grundlasten.",
                }),
              ],
            }),
          },
          {
            id: "redundanz_behalten",
            titel: "Redundanz bewusst beibehalten",
            beschreibung: "Teurer, aber aus Betriebssicht sehr robust.",
            anwenden: () => ({
              feedback:
                "Die drei Compute-Pfade bleiben parallel aktiv. Die Redundanz ist stark, die Kosten aber ebenfalls.",
              aenderungen: [
                erstelleAenderung("cloud_a", { kostenDelta: 6000, akzeptanzDelta: 2, hinweis: "Mehr Last wird ohne harte Begrenzung zugelassen." }),
                erstelleAenderung("cloud_b", { kostenDelta: 5000, akzeptanzDelta: 1, hinweis: "Bleibt voll aktiv und parallel im Einsatz." }),
                erstelleAenderung("local_servers", { kostenDelta: 2000, stabilitaetDelta: 1, hinweis: "Lokale Reserve wird weiter mitgetragen." }),
              ],
            }),
          },
          {
            id: "grundlast_lokal",
            titel: "Lokale Systeme fuer Grundlast staerken",
            beschreibung: "Cloud-Spitzen reduzieren, lokale Berechenbarkeit nutzen.",
            anwenden: () => ({
              feedback:
                "Planbare Lasten werden staerker lokal gebunden. Cloud bleibt wichtig, verliert aber etwas Volumen.",
              aenderungen: [
                erstelleAenderung("local_servers", {
                  status: "Standardloesung",
                  kostenDelta: 7000,
                  stabilitaetDelta: 3,
                  akzeptanzDelta: 1,
                  risikoDelta: -1,
                  hinweis: "Lokale Systeme werden fuer planbare Lasten gezielt ausgebaut.",
                }),
                erstelleAenderung("cloud_a", {
                  status: "Reduziert",
                  kostenDelta: -4000,
                  akzeptanzDelta: -1,
                  hinweis: "Ein Teil der Last wird lokal uebernommen.",
                }),
                erstelleAenderung("cloud_b", {
                  status: "Reduziert",
                  kostenDelta: -3000,
                  akzeptanzDelta: -1,
                  hinweis: "Cloud B wird staerker auf passende Faelle begrenzt.",
                }),
              ],
            }),
          },
        ],
      },
      {
        key: "cloud_a_service",
        label: "Cloud-Plattform A",
        beschreibung: "Den teuersten Compute-Dienst gezielt steuern.",
        aktionen: [
          {
            id: "cloud_a_kontingent",
            titel: "Cloud A kontingentieren",
            beschreibung: "Verbrauch deckeln und Transparenz erhoehen.",
            anwenden: () => ({
              feedback:
                "Cloud A wird durch Kontingente enger gesteuert. Das senkt den Verbrauch, fuehrt aber zu Diskussionen in forschungsnahen Bereichen.",
              aenderungen: [
                erstelleAenderung("cloud_a", {
                  status: "Reduziert",
                  kostenDelta: -10000,
                  akzeptanzDelta: -5,
                  risikoDelta: 3,
                  hinweis: "Zusatzverbrauch muss nun begruendet werden.",
                }),
              ],
            }),
          },
          {
            id: "cloud_a_priorisieren",
            titel: "Cloud A weiter priorisieren",
            beschreibung: "Flexibilitaet hoch halten und Kosten akzeptieren.",
            anwenden: () => ({
              feedback:
                "Cloud A bleibt der bevorzugte Pfad fuer flexible Forschungslasten. Das hilft dem Betrieb, treibt aber die Kosten.",
              aenderungen: [
                erstelleAenderung("cloud_a", {
                  status: "Aktiv",
                  kostenDelta: 12000,
                  stabilitaetDelta: 2,
                  akzeptanzDelta: 3,
                  risikoDelta: -1,
                  hinweis: "Cloud A nimmt zusaetzliche Spitzenlast auf.",
                }),
              ],
            }),
          },
          {
            id: "cloud_a_migration",
            titel: "Workloads von Cloud A verlagern",
            beschreibung: "Ein Teil wandert auf Cloud B und lokal.",
            anwenden: () => ({
              feedback:
                "Ein Teil der Workloads wird von Cloud A weg migriert. Das spart Kosten, schafft aber temporaren Umstellungsdruck.",
              aenderungen: [
                erstelleAenderung("cloud_a", {
                  status: "In Migration",
                  kostenDelta: -7000,
                  stabilitaetDelta: -2,
                  akzeptanzDelta: -2,
                  risikoDelta: 2,
                  hinweis: "Cloud A verliert Volumen zugunsten anderer Plattformen.",
                }),
                erstelleAenderung("cloud_b", {
                  kostenDelta: 3000,
                  stabilitaetDelta: 1,
                  hinweis: "Cloud B uebernimmt einen Teil der migrierten Last.",
                }),
                erstelleAenderung("local_servers", {
                  kostenDelta: 2000,
                  stabilitaetDelta: 1,
                  hinweis: "Lokale Infrastruktur traegt wieder mehr Grundlast.",
                }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "speicher_wachstum",
    gruppe: "speicher",
    titel: "Cloud-Speicher waechst schneller als geplant und wird zum Kostentreiber.",
    beschreibung:
      "Du musst nun sichtbar entscheiden, ob du aktive Daten, Altbestaende oder die ganze Speichergruppe neu steuerst.",
    betroffeneServices: ["cloud_storage", "network_storage", "archive_storage"],
    auswahl: [
      {
        key: "cloud_storage_service",
        label: "Cloud-Speicher",
        beschreibung: "Den teuersten Speicher gezielt begrenzen oder ausbauen.",
        aktionen: [
          {
            id: "archivieren",
            titel: "Aeltere Daten in den Archivspeicher verschieben",
            beschreibung: "Cloud-Speicher sinkt, Archivanteil steigt.",
            anwenden: () => ({
              feedback:
                "Alte Daten werden sichtbar aus dem Cloud-Speicher herausgenommen. Das spart Kosten, reduziert aber die Zugriffsqualitaet fuer Altbestaende.",
              aenderungen: [
                erstelleAenderung("cloud_storage", {
                  status: "Reduziert",
                  kostenDelta: -8000,
                  akzeptanzDelta: -2,
                  risikoDelta: -1,
                  hinweis: "Aktive Daten bleiben in der Cloud, Altbestaende wandern ab.",
                }),
                erstelleAenderung("archive_storage", {
                  status: "Aktiv",
                  kostenDelta: 3000,
                  stabilitaetDelta: 1,
                  akzeptanzDelta: -1,
                  hinweis: "Archivspeicher wird staerker genutzt.",
                }),
              ],
            }),
          },
          {
            id: "cloud_ausbauen",
            titel: "Cloud-Speicher ausbauen",
            beschreibung: "Flexibilitaet hoch halten und Kosten akzeptieren.",
            anwenden: () => ({
              feedback:
                "Der Cloud-Speicher wird ohne neue Regeln erweitert. Das sichert Komfort, verlaengert aber die teure Speicherlogik.",
              aenderungen: [
                erstelleAenderung("cloud_storage", {
                  status: "Aktiv",
                  kostenDelta: 11000,
                  stabilitaetDelta: 2,
                  akzeptanzDelta: 3,
                  risikoDelta: 1,
                  hinweis: "Zusaetzliche Kapazitaet wird direkt freigegeben.",
                }),
              ],
            }),
          },
          {
            id: "datenklassifizierung",
            titel: "Datenklassifizierung einfuehren",
            beschreibung: "Speicherklassen sauber trennen und ungenutzte Daten bereinigen.",
            anwenden: () => ({
              feedback:
                "Mit einer Datenklassifizierung wird die Speicherlandschaft fachlich sauberer. Der Effekt wirkt nicht nur auf Kosten, sondern auch auf Risiko.",
              aenderungen: [
                erstelleAenderung("cloud_storage", {
                  status: "Konsolidiert",
                  kostenDelta: -6000,
                  akzeptanzDelta: -1,
                  risikoDelta: -2,
                  hinweis: "Nicht jede Datei bleibt automatisch im teuersten Speicher.",
                }),
                erstelleAenderung("network_storage", {
                  status: "Aktiv",
                  kostenDelta: -2000,
                  risikoDelta: -1,
                  hinweis: "Netzwerkspeicher wird wieder klarer fuer Standarddaten genutzt.",
                }),
                erstelleAenderung("archive_storage", {
                  status: "Aktiv",
                  kostenDelta: 1500,
                  stabilitaetDelta: 1,
                  hinweis: "Archivklassen werden strukturierter verwendet.",
                }),
              ],
              programme: [
                {
                  id: "programm_datenklassifizierung",
                  name: "Datenklassifizierung",
                  restRunden: 2,
                  text: "Weitere Daten werden in passende Klassen verschoben.",
                  aenderungen: [
                    erstelleAenderung("cloud_storage", { kostenDelta: -1200, risikoDelta: -1, hinweis: "Weitere ungenutzte Daten werden bereinigt." }),
                    erstelleAenderung("archive_storage", { kostenDelta: 300, hinweis: "Archivanteil waechst kontrolliert weiter." }),
                  ],
                },
              ],
            }),
          },
        ],
      },
      {
        key: "speicher_gruppe",
        label: "Speichergruppe",
        beschreibung: "Cloud, Netzwerk und Archiv gemeinsam steuern.",
        aktionen: [
          {
            id: "cloud_fokus",
            titel: "Produktive Daten in der Cloud priorisieren",
            beschreibung: "Schneller Zugriff, hohes Kostenniveau.",
            anwenden: () => ({
              feedback:
                "Die Speicherstrategie bleibt stark cloudzentriert. Das ist bequem, aber wirtschaftlich zunehmend schwerer zu vertreten.",
              aenderungen: [
                erstelleAenderung("cloud_storage", { kostenDelta: 9000, akzeptanzDelta: 2, hinweis: "Cloud bleibt erste Wahl fuer fast alle Daten." }),
                erstelleAenderung("network_storage", { status: "Reduziert", kostenDelta: -1500, akzeptanzDelta: -1, hinweis: "Standardablage verliert etwas Bedeutung." }),
              ],
            }),
          },
          {
            id: "speicher_balancieren",
            titel: "Speicherrollen sauber aufteilen",
            beschreibung: "Aktive Daten, Standarddaten und Archiv klar trennen.",
            anwenden: () => ({
              feedback:
                "Die drei Speicherformen erhalten sichtbar klarere Rollen. Das kostet etwas Steuerungsaufwand, senkt aber Doppelstrukturen.",
              aenderungen: [
                erstelleAenderung("cloud_storage", { status: "Standardloesung", kostenDelta: -4000, risikoDelta: -1, hinweis: "Nur aktive Daten bleiben im teuren Cloud-Pfad." }),
                erstelleAenderung("network_storage", { status: "Standardloesung", kostenDelta: 1000, stabilitaetDelta: 1, hinweis: "Standarddaten werden wieder bewusster lokal gehalten." }),
                erstelleAenderung("archive_storage", { status: "Aktiv", kostenDelta: 1000, stabilitaetDelta: 1, hinweis: "Archiv wird in die Gesamtstrategie eingebunden." }),
              ],
            }),
          },
          {
            id: "netzwerk_staerken",
            titel: "Netzwerkspeicher fuer Standardlast ausbauen",
            beschreibung: "Guenstiger, aber weniger flexibel als Cloud.",
            anwenden: () => ({
              feedback:
                "Der Netzwerkspeicher wird fuer Standardlast staerker genutzt. Das senkt Cloud-Abhaengigkeit, erhoeht aber die Bedeutung lokaler Kapazitaet.",
              aenderungen: [
                erstelleAenderung("network_storage", { status: "Standardloesung", kostenDelta: 4000, stabilitaetDelta: 2, akzeptanzDelta: 1, hinweis: "Standarddaten werden wieder staerker lokal gebuendelt." }),
                erstelleAenderung("cloud_storage", { status: "Reduziert", kostenDelta: -5000, akzeptanzDelta: -1, risikoDelta: 1, hinweis: "Cloud wird weniger fuer Standarddaten genutzt." }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "support_belastung",
    gruppe: "support",
    titel: "Das interne Support-Team ist ueberlastet. Tickets bleiben zu lange offen.",
    beschreibung:
      "Du musst sichtbar entscheiden, ob du intern staerkst, extern entlastest oder den Support anders organisierst.",
    betroffeneServices: ["internal_support", "external_support"],
    auswahl: [
      {
        key: "internal_support_service",
        label: "Internes Support-Team",
        beschreibung: "Supportqualitaet intern sichern oder entlasten.",
        aktionen: [
          {
            id: "intern_ausbauen",
            titel: "Internes Team personell staerken",
            beschreibung: "Hohe Qualitaet, aber dauerhafte Mehrkosten.",
            anwenden: () => ({
              feedback:
                "Das interne Team wird verstaerkt. Wissen bleibt in der Hochschule, allerdings steigt die Kostenbasis sichtbar.",
              aenderungen: [
                erstelleAenderung("internal_support", {
                  status: "Aktiv",
                  kostenDelta: 9000,
                  stabilitaetDelta: 4,
                  akzeptanzDelta: 5,
                  risikoDelta: -3,
                  hinweis: "Mehr interne Kapazitaet verbessert Qualitaet und Erreichbarkeit.",
                }),
              ],
            }),
          },
          {
            id: "self_service",
            titel: "Self-Service und Automatisierung ausbauen",
            beschreibung: "Kurzfristig holprig, langfristig effizienter.",
            anwenden: () => ({
              feedback:
                "Routineanfragen werden in Self-Service und Automatisierung verschoben. Das braucht Umgewoehnung, entlastet spaeter aber spuerbar.",
              aenderungen: [
                erstelleAenderung("internal_support", {
                  status: "Modernisiert",
                  kostenDelta: -2000,
                  akzeptanzDelta: -2,
                  risikoDelta: 1,
                  hinweis: "Klassische Tickets sollen kuenftig seltener werden.",
                }),
              ],
              programme: [
                {
                  id: "programm_self_service",
                  name: "Self-Service-Programm",
                  restRunden: 2,
                  text: "Automatisierung entlastet den Support schrittweise.",
                  aenderungen: [
                    erstelleAenderung("internal_support", { stabilitaetDelta: 2, akzeptanzDelta: 1, risikoDelta: -1, hinweis: "Self-Service zeigt erste Entlastungswirkung." }),
                    erstelleAenderung("external_support", { kostenDelta: -500, hinweis: "Weniger Standardtickets muessen extern abgefangen werden." }),
                  ],
                },
              ],
            }),
          },
          {
            id: "intern_priorisieren",
            titel: "Internes Team nur fuer komplexe Faelle priorisieren",
            beschreibung: "Qualitaet bei Spezialfaellen hoch halten.",
            anwenden: () => ({
              feedback:
                "Das interne Team konzentriert sich auf komplexe Faelle. Standardanfragen werden anders kanalisiert, was nicht allen Nutzenden sofort gefaellt.",
              aenderungen: [
                erstelleAenderung("internal_support", {
                  status: "Standardloesung",
                  kostenDelta: -1500,
                  akzeptanzDelta: -1,
                  risikoDelta: -1,
                  hinweis: "Fokus liegt nun klar auf hochwertigen Spezialfaellen.",
                }),
              ],
            }),
          },
        ],
      },
      {
        key: "external_support_service",
        label: "Externer Support-Dienstleister",
        beschreibung: "Externe Entlastung ausweiten oder bewusst klein halten.",
        aktionen: [
          {
            id: "extern_ausweiten",
            titel: "Externe Hilfe fuer Standardfaelle einkaufen",
            beschreibung: "Entlastet intern, Qualitaet bleibt gemischt.",
            anwenden: () => ({
              feedback:
                "Der externe Dienstleister uebernimmt mehr Standardfaelle. Das entlastet intern schnell, fuehlt sich aber weniger nah am Hochschulkontext an.",
              aenderungen: [
                erstelleAenderung("external_support", {
                  status: "Aktiv",
                  kostenDelta: 7000,
                  stabilitaetDelta: 2,
                  akzeptanzDelta: -2,
                  risikoDelta: 1,
                  hinweis: "Mehr Volumen wird nach aussen gegeben.",
                }),
                erstelleAenderung("internal_support", {
                  status: "Intern behalten",
                  kostenDelta: -2000,
                  stabilitaetDelta: 1,
                  akzeptanzDelta: 1,
                  hinweis: "Interne Kapazitaet gewinnt Luft fuer anspruchsvolle Faelle.",
                }),
              ],
            }),
          },
          {
            id: "extern_begrenzen",
            titel: "Extern nur fuer Spitzenlast behalten",
            beschreibung: "Mehr intern, weniger Abhaengigkeit nach aussen.",
            anwenden: () => ({
              feedback:
                "Der externe Dienst bleibt klein und wird nur fuer Lastspitzen genutzt. Das staerkt die interne Steuerbarkeit, braucht aber intern genug Reserven.",
              aenderungen: [
                erstelleAenderung("external_support", {
                  status: "Nur fuer Ausnahmefaelle",
                  kostenDelta: -5000,
                  akzeptanzDelta: -2,
                  risikoDelta: 2,
                  hinweis: "Externe Hilfe wird auf echte Engpaesse begrenzt.",
                }),
                erstelleAenderung("internal_support", {
                  kostenDelta: 3000,
                  stabilitaetDelta: 1,
                  akzeptanzDelta: 1,
                  hinweis: "Intern muss mehr Regelvolumen gehalten werden.",
                }),
              ],
            }),
          },
          {
            id: "extern_standardisieren",
            titel: "Klare Trennung intern und extern standardisieren",
            beschreibung: "Standardfaelle extern, Spezialfaelle intern.",
            anwenden: () => ({
              feedback:
                "Die Rollenteilung wird transparent gemacht. Das verbessert Nachvollziehbarkeit und hilft, Doppelarbeit im Support zu vermeiden.",
              aenderungen: [
                erstelleAenderung("external_support", { status: "Standardloesung", kostenDelta: 3000, stabilitaetDelta: 1, hinweis: "Standardfaelle werden klar extern gebuendelt." }),
                erstelleAenderung("internal_support", { status: "Intern behalten", kostenDelta: -1000, akzeptanzDelta: 2, risikoDelta: -1, hinweis: "Internes Team fokussiert auf komplexe Faelle." }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "sicherheit_monitoring",
    gruppe: "sicherheit",
    titel: "Ein Vorfall zeigt Luecken im Monitoring. Die Hochschulleitung verlangt sichtbare Antworten.",
    beschreibung:
      "Sicherheit darf nicht einfach abgeschaltet werden. Entscheidend ist, welches Niveau du wo priorisierst und wie sich das in den Services zeigt.",
    betroffeneServices: ["basic_monitoring", "advanced_monitoring"],
    auswahl: [
      {
        key: "advanced_service",
        label: "Erweitertes Monitoring",
        beschreibung: "Den ausgebauten Sicherheitsdienst gezielt steuern.",
        aktionen: [
          {
            id: "soc_ausbauen",
            titel: "Erweitertes Monitoring ausbauen",
            beschreibung: "Mehr Sicherheit, aber klares Kostenplus.",
            anwenden: () => ({
              feedback:
                "Das erweiterte Monitoring wird ausgebaut. Risiko sinkt klar, der finanzielle Aufwand wird aber ebenfalls sehr sichtbar.",
              aenderungen: [
                erstelleAenderung("advanced_monitoring", {
                  status: "Standardloesung",
                  kostenDelta: 9000,
                  stabilitaetDelta: 4,
                  akzeptanzDelta: 1,
                  risikoDelta: -10,
                  hinweis: "Erweiterte Sicht und Reaktion werden priorisiert.",
                }),
                erstelleAenderung("basic_monitoring", {
                  kostenDelta: 2000,
                  risikoDelta: -3,
                  hinweis: "Auch das Basisniveau wird sauber nachgezogen.",
                }),
              ],
            }),
          },
          {
            id: "soc_gezielt",
            titel: "Nur kritische Bereiche erweitern",
            beschreibung: "Mittelweg aus Kosten und Risiko.",
            anwenden: () => ({
              feedback:
                "Nur besonders kritische Bereiche werden vertieft abgesichert. Das spart Geld, laesst aber gewisse Luecken bestehen.",
              aenderungen: [
                erstelleAenderung("advanced_monitoring", {
                  status: "Aktiv",
                  kostenDelta: 3000,
                  stabilitaetDelta: 1,
                  risikoDelta: -5,
                  hinweis: "Der Ausbau konzentriert sich auf priorisierte Zonen.",
                }),
              ],
            }),
          },
          {
            id: "soc_zurueckstellen",
            titel: "Ausbau verschieben und nur beobachten",
            beschreibung: "Kosten schonen, Restrisiko bewusst in Kauf nehmen.",
            anwenden: () => ({
              feedback:
                "Der Ausbau wird verschoben. Finanziell ist das bequemer, sicherheitlich aber nur schwer vermittelbar.",
              aenderungen: [
                erstelleAenderung("advanced_monitoring", {
                  status: "Reduziert",
                  kostenDelta: -3000,
                  stabilitaetDelta: -2,
                  akzeptanzDelta: -1,
                  risikoDelta: 8,
                  hinweis: "Erweiterte Erkennung wird nicht weiter ausgebaut.",
                }),
              ],
            }),
          },
        ],
      },
      {
        key: "basis_service",
        label: "Basis-Monitoring",
        beschreibung: "Mindestniveau halten oder gezielt modernisieren.",
        aktionen: [
          {
            id: "basis_modernisieren",
            titel: "Basis-Monitoring modernisieren",
            beschreibung: "Breitere Abdeckung ohne vollen SOC-Ausbau.",
            anwenden: () => ({
              feedback:
                "Das Basis-Monitoring wird technisch verbessert. Das schliesst offensichtliche Luecken, ersetzt aber keinen echten Ausbau auf hohem Niveau.",
              aenderungen: [
                erstelleAenderung("basic_monitoring", {
                  status: "Modernisiert",
                  kostenDelta: 4000,
                  stabilitaetDelta: 2,
                  akzeptanzDelta: 1,
                  risikoDelta: -6,
                  hinweis: "Mindestschutz wird qualitativ angehoben.",
                }),
              ],
            }),
          },
          {
            id: "basis_minimum",
            titel: "Beim Mindestniveau bleiben",
            beschreibung: "Keine grosse Investition, dafuer hoehere Restgefahr.",
            anwenden: () => ({
              feedback:
                "Es bleibt beim Mindestniveau. Das spart kurzfristig, erhoeht aber den Druck auf alle anderen Sicherheitsmassnahmen.",
              aenderungen: [
                erstelleAenderung("basic_monitoring", {
                  status: "Aktiv",
                  kostenDelta: 0,
                  stabilitaetDelta: -1,
                  risikoDelta: 5,
                  hinweis: "Das Monitoring bleibt funktional, aber nicht deutlich besser als zuvor.",
                }),
              ],
            }),
          },
          {
            id: "basis_priorisieren",
            titel: "Andere Vorhaben stoppen und Sicherheit priorisieren",
            beschreibung: "Sicherheit geht vor, andere Services warten.",
            anwenden: () => ({
              feedback:
                "Sicherheit wird bewusst vor andere Verbesserungen gestellt. Das senkt Risiko stark, bremst aber andere Entwicklungen sichtbar ab.",
              aenderungen: [
                erstelleAenderung("basic_monitoring", {
                  status: "Standardloesung",
                  kostenDelta: 5000,
                  stabilitaetDelta: 2,
                  risikoDelta: -7,
                  hinweis: "Sicherheitsabdeckung wird aktiv priorisiert.",
                }),
                erstelleAenderung("bi_platform", {
                  status: "Reduziert",
                  kostenDelta: -2000,
                  akzeptanzDelta: -2,
                  hinweis: "Nicht kritische Weiterentwicklungen werden verschoben.",
                }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "budgetdruck",
    gruppe: "business",
    titel: "Das IT-Budget wird fuer das naechste Jahr gekuerzt. Die Leitung erwartet eine sichtbare Reaktion.",
    beschreibung:
      "Du musst nun begruenden, welche Services standardisiert, reduziert oder bewusst geschuetzt werden. Reine Globalmassnahmen reichen nicht.",
    betroffeneServices: ["zoom", "cloud_b", "external_support", "bi_platform"],
    auswahl: [
      {
        key: "budget_gruppe",
        label: "Doppelspurigkeiten abbauen",
        beschreibung: "Parallele Services bewusst identifizieren.",
        aktionen: [
          {
            id: "budget_duplikate",
            titel: "Teure Parallelstrukturen reduzieren",
            beschreibung: "Fachlich begruendeter Sparpfad.",
            anwenden: () => ({
              feedback:
                "Die Reaktion auf den Budgetdruck erfolgt strukturell. Gespart wird dort, wo Ueberschneidungen am besten belegbar sind.",
              budgetDelta: -35000,
              aenderungen: [
                erstelleAenderung("zoom", { status: "Nur fuer Ausnahmefaelle", kostenDelta: -5000, akzeptanzDelta: -3, hinweis: "Wird nicht mehr als gleichwertiger Hauptdienst gefuehrt." }),
                erstelleAenderung("cloud_b", { status: "Reduziert", kostenDelta: -4000, akzeptanzDelta: -1, risikoDelta: 2, hinweis: "Eine Plattform wird nicht mehr in voller Breite vorgehalten." }),
                erstelleAenderung("external_support", { status: "Nur fuer Ausnahmefaelle", kostenDelta: -2000, akzeptanzDelta: -1, hinweis: "Externe Hilfe bleibt gezielt fuer Engpaesse." }),
              ],
            }),
          },
          {
            id: "budget_investitionen",
            titel: "Investitionen verschieben",
            beschreibung: "Kurzfristig sparen, spaeteren Nachholbedarf erzeugen.",
            anwenden: () => ({
              feedback:
                "Kurzfristig entlastet das den Finanzrahmen. Fachlich werden aber mehrere Modernisierungen auf spaeter verschoben.",
              budgetDelta: -35000,
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Reduziert", kostenDelta: -3000, stabilitaetDelta: -1, akzeptanzDelta: -1, risikoDelta: 3, hinweis: "Weiterentwicklung wird vertagt." }),
                erstelleAenderung("finance", { status: "Aktiv", kostenDelta: -1500, stabilitaetDelta: -1, risikoDelta: 2, hinweis: "Nur noetigste Pflege bleibt uebrig." }),
              ],
            }),
          },
          {
            id: "budget_nutzernahe",
            titel: "Nutzernahe Services schuetzen",
            beschreibung: "Weniger sichtbare Bereiche tragen mehr Sparlast.",
            anwenden: () => ({
              feedback:
                "Frontnahe Services bleiben stabiler, dafuer steigen Risiken in weniger sichtbaren Bereichen des Betriebs.",
              budgetDelta: -35000,
              aenderungen: [
                erstelleAenderung("basic_monitoring", { status: "Reduziert", kostenDelta: -2500, stabilitaetDelta: -2, risikoDelta: 6, hinweis: "Nicht sichtbare Sicherheitsreserven werden enger gefahren." }),
                erstelleAenderung("external_support", { status: "Reduziert", kostenDelta: -2500, akzeptanzDelta: -1, hinweis: "Entlastungsreserven im Hintergrund werden kleiner." }),
                erstelleAenderung("cloud_storage", { kostenDelta: -2000, akzeptanzDelta: -1, risikoDelta: 2, hinweis: "Versteckte Reserven werden aus Kostengruenden abgebaut." }),
              ],
            }),
          },
        ],
      },
      {
        key: "bi_service",
        label: "BI- / Reporting-Plattform",
        beschreibung: "Reporting direkt auf Wirtschaftlichkeit pruefen.",
        aktionen: [
          {
            id: "bi_standardisieren",
            titel: "BI-Plattform standardisieren und vereinfachen",
            beschreibung: "Weniger Sonderloesungen, klarere Kosten.",
            anwenden: () => ({
              feedback:
                "Die BI-Plattform wird vereinfacht. Das reduziert Sonderpfade, kann aber einzelne Bereiche kurzfristig bremsen.",
              budgetDelta: -35000,
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Konsolidiert", kostenDelta: -5000, stabilitaetDelta: 1, akzeptanzDelta: -2, risikoDelta: -1, hinweis: "Sonderreports werden auf einen klareren Standard gebracht." }),
              ],
            }),
          },
          {
            id: "bi_schuetzen",
            titel: "BI-Plattform gezielt schuetzen",
            beschreibung: "Steuerungsfaehigkeit als Prioritaet halten.",
            anwenden: () => ({
              feedback:
                "Die BI-Plattform bleibt bewusst stabil, damit Management und Controlling sauber steuern koennen. Gespart wird dafuer an anderen Stellen.",
              budgetDelta: -35000,
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Aktiv", kostenDelta: 1000, akzeptanzDelta: 2, risikoDelta: -1, hinweis: "Steuerungsfaehigkeit wird bewusst geschuetzt." }),
                erstelleAenderung("zoom", { status: "Reduziert", kostenDelta: -3000, akzeptanzDelta: -2, hinweis: "Sparwirkung wird in einer weniger kritischen Doppelspurigkeit gesucht." }),
              ],
            }),
          },
          {
            id: "bi_verschieben",
            titel: "BI-Weiterentwicklung verschieben",
            beschreibung: "Kurzfristige Kostenentlastung, spaetere Qualitaetsfragen.",
            anwenden: () => ({
              feedback:
                "Die Plattform laeuft weiter, aber Weiterentwicklung wird auf spaeter verschoben. Das spart sofort, erhoeht aber den Modernisierungsstau.",
              budgetDelta: -35000,
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Auslaufend", kostenDelta: -4000, stabilitaetDelta: -2, akzeptanzDelta: -2, risikoDelta: 4, hinweis: "Die Plattform wird nur noch benoetigt gepflegt." }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "legacy_parallel",
    gruppe: "compute",
    titel: "Mehrere alte Systeme laufen weiter parallel, obwohl neue Loesungen vorhanden sind.",
    beschreibung:
      "Die Kosten sind sichtbar, aber auch die Uebergangsrisiken. Du musst konkret entscheiden, wo Altlasten auslaufen oder bewusst behalten werden.",
    betroffeneServices: ["local_servers", "network_storage", "email"],
    auswahl: [
      {
        key: "legacy_gruppe",
        label: "Altlasten gemeinsam steuern",
        beschreibung: "Parallelbetrieb fachlich sauber abbauen oder begruenden.",
        aktionen: [
          {
            id: "legacy_abloesen",
            titel: "Alt-Systeme schrittweise abloesen",
            beschreibung: "Kontrollierter Rueckbau statt harter Schnitt.",
            anwenden: () => ({
              feedback:
                "Altlasten werden sichtbar in einen geordneten Rueckbau ueberfuehrt. Das spart strukturell, ohne den Betrieb abrupt zu brechen.",
              aenderungen: [
                erstelleAenderung("local_servers", { status: "Auslaufend", kostenDelta: -5000, stabilitaetDelta: -1, risikoDelta: 1, hinweis: "Nur passende Grundlasten bleiben vorerst lokal." }),
                erstelleAenderung("network_storage", { status: "Auslaufend", kostenDelta: -2500, akzeptanzDelta: -1, hinweis: "Historische Ablagepfade werden sichtbar reduziert." }),
                erstelleAenderung("email", { status: "Modernisiert", kostenDelta: -1500, risikoDelta: -1, hinweis: "Alte Betriebswege werden bereinigt." }),
              ],
            }),
          },
          {
            id: "legacy_weiter",
            titel: "Parallelbetrieb weiterfuehren",
            beschreibung: "Stabiler Uebergang, aber hohe Betriebskosten.",
            anwenden: () => ({
              feedback:
                "Der Parallelbetrieb bleibt bewusst bestehen. Das ist heute sicherer, verlaengert aber technische und finanzielle Altlasten.",
              aenderungen: [
                erstelleAenderung("local_servers", { status: "Aktiv", kostenDelta: 2500, stabilitaetDelta: 1, akzeptanzDelta: 1, hinweis: "Lokale Plattform bleibt voll im aktiven Betrieb." }),
                erstelleAenderung("network_storage", { status: "Aktiv", kostenDelta: 1500, hinweis: "Historische Speicherpfade bleiben vorerst bestehen." }),
              ],
            }),
          },
          {
            id: "legacy_teuerste",
            titel: "Nur die teuersten Alt-Systeme sofort stilllegen",
            beschreibung: "Starker Kosteneffekt, hohes Umstellungsrisiko.",
            anwenden: () => ({
              feedback:
                "Der harte Schnitt spart sofort Geld, erzeugt aber deutliche Umstellungs- und Akzeptanzrisiken in den betroffenen Bereichen.",
              aenderungen: [
                erstelleAenderung("local_servers", { status: "Ausser Betrieb", kosten: 0, stabilitaetDelta: -8, akzeptanzDelta: -4, risikoDelta: 8, hinweis: "Lokale Server werden weitgehend stillgelegt." }),
                erstelleAenderung("network_storage", { status: "Reduziert", kostenDelta: -5000, stabilitaetDelta: -3, akzeptanzDelta: -2, risikoDelta: 3, hinweis: "Nur ein Restbestand bleibt aktiv." }),
              ],
            }),
          },
        ],
      },
      {
        key: "email_service",
        label: "E-Mail-System",
        beschreibung: "Den Kernservice modernisieren statt blind sparen.",
        aktionen: [
          {
            id: "email_modernisieren",
            titel: "Betrieb und Archivierung modernisieren",
            beschreibung: "Kosten senken, ohne den Basisdienst zu gefaehrden.",
            anwenden: () => ({
              feedback:
                "Das E-Mail-System wird modernisiert. Die Kosten sinken kontrolliert, ohne den Servicecharakter infrage zu stellen.",
              aenderungen: [
                erstelleAenderung("email", { status: "Modernisiert", kostenDelta: -4000, stabilitaetDelta: 2, akzeptanzDelta: 1, risikoDelta: -2, hinweis: "Betrieb und Archivierung werden effizienter." }),
              ],
              programme: [
                {
                  id: "programm_email",
                  name: "E-Mail-Optimierung",
                  restRunden: 2,
                  text: "Weitere Betriebsverbesserungen senken Aufwand.",
                  aenderungen: [
                    erstelleAenderung("email", { kostenDelta: -700, risikoDelta: -1, hinweis: "Optimierung wirkt weiter im Betrieb." }),
                  ],
                },
              ],
            }),
          },
          {
            id: "email_auslagern",
            titel: "Teilfunktionen extern vergeben",
            beschreibung: "Intern entlasten, aber Naehe verlieren.",
            anwenden: () => ({
              feedback:
                "Ein Teil des E-Mail-Betriebs geht nach aussen. Das spart intern etwas Aufwand, schafft aber neue Abstimmung und mehr Abhaengigkeit.",
              aenderungen: [
                erstelleAenderung("email", { status: "Reduziert", kostenDelta: -3000, akzeptanzDelta: -2, risikoDelta: 2, hinweis: "Nicht alle Betriebsanteile bleiben intern." }),
                erstelleAenderung("external_support", { status: "Aktiv", kostenDelta: 2000, akzeptanzDelta: -1, hinweis: "Externe Schnittstellen uebernehmen mehr Leistung." }),
              ],
            }),
          },
          {
            id: "email_unveraendert",
            titel: "Bestehenden Betrieb weiterfuehren",
            beschreibung: "Stabil, aber ohne strukturelle Entlastung.",
            anwenden: () => ({
              feedback:
                "Der E-Mail-Betrieb bleibt unveraendert. Das vermeidet Reibung, haelt die Kosten aber auf hohem Niveau.",
              aenderungen: [
                erstelleAenderung("email", { status: "Aktiv", kostenDelta: 2000, akzeptanzDelta: 1, hinweis: "Es gibt keine strukturelle Veraenderung im Betrieb." }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "bi_qualitaet",
    gruppe: "business",
    titel: "Die BI-Plattform liefert widerspruechliche Kennzahlen wegen uneinheitlicher Datenquellen.",
    beschreibung:
      "Die Auswirkung ist nicht nur global. Du musst gezielt entscheiden, wie BI und Finanzsystem technisch und organisatorisch weiterlaufen.",
    betroffeneServices: ["bi_platform", "finance"],
    auswahl: [
      {
        key: "bi_service",
        label: "BI-Plattform",
        beschreibung: "Berichtswesen und Datenqualitaet gezielt steuern.",
        aktionen: [
          {
            id: "datenharmonisierung",
            titel: "Datenharmonisierung priorisieren",
            beschreibung: "Kurzfristig teurer, langfristig sauberer.",
            anwenden: () => ({
              feedback:
                "Datenquellen und Regeln werden harmonisiert. Das kostet sichtbar Projektaufwand, verbessert aber Vertrauen und Steuerbarkeit deutlich.",
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Modernisiert", kostenDelta: 7000, stabilitaetDelta: 3, akzeptanzDelta: 3, risikoDelta: -5, hinweis: "Die Plattform wird technisch und fachlich bereinigt." }),
                erstelleAenderung("finance", { status: "Aktiv", kostenDelta: 3000, stabilitaetDelta: 1, risikoDelta: -2, hinweis: "Finanzdaten werden sauberer integriert." }),
              ],
            }),
          },
          {
            id: "manuell_korrigieren",
            titel: "Manuelle Korrekturen akzeptieren",
            beschreibung: "Schnell, aber fehleranfaellig.",
            anwenden: () => ({
              feedback:
                "Das Problem wird manuell abgefedert. Berichte bleiben lieferbar, die Fehleranfaelligkeit und Frustration im Betrieb steigen jedoch.",
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Aktiv", kostenDelta: 1500, stabilitaetDelta: -2, risikoDelta: 4, hinweis: "Manuelle Sonderwege ersetzen keine saubere Loesung." }),
              ],
            }),
          },
          {
            id: "zusatztool",
            titel: "Zusatztool fuer einzelne Bereiche zulassen",
            beschreibung: "Kurzfristig bequem, langfristig fragmentiert.",
            anwenden: () => ({
              feedback:
                "Ein zusaetzlicher Reporting-Pfad beruhigt einzelne Bereiche, verschlechtert aber die Gesamtharmonie der Datenlandschaft.",
              aenderungen: [
                erstelleAenderung("bi_platform", { status: "Reduziert", kostenDelta: 5000, stabilitaetDelta: -1, akzeptanzDelta: 1, risikoDelta: 6, hinweis: "Mehr Schattenreporting erzeugt neue Komplexitaet." }),
              ],
            }),
          },
        ],
      },
      {
        key: "finance_service",
        label: "Finanzsystem",
        beschreibung: "Das Quellsystem fuer viele Kennzahlen direkt betrachten.",
        aktionen: [
          {
            id: "schnittstellen_bereinigen",
            titel: "Finanzschnittstellen bereinigen",
            beschreibung: "Qualitaet im Kernsystem sichtbar verbessern.",
            anwenden: () => ({
              feedback:
                "Das Finanzsystem wird an den kritischen Schnittstellen bereinigt. Dadurch sinken Widersprueche in den Folgeplattformen.",
              aenderungen: [
                erstelleAenderung("finance", { status: "Modernisiert", kostenDelta: 4000, stabilitaetDelta: 3, akzeptanzDelta: 1, risikoDelta: -4, hinweis: "Quellsystem und Datenuebergaben werden vereinheitlicht." }),
                erstelleAenderung("bi_platform", { stabilitaetDelta: 2, akzeptanzDelta: 2, risikoDelta: -2, hinweis: "BI profitiert direkt von den saubereren Finanzdaten." }),
              ],
            }),
          },
          {
            id: "finanzsystem_unveraendert",
            titel: "Finanzsystem nur stabil weiterfuehren",
            beschreibung: "Keine grosse Baustelle, aber auch keine Verbesserung.",
            anwenden: () => ({
              feedback:
                "Das Finanzsystem bleibt unangetastet. Die Steuerung bleibt damit kurzfristig ruhig, strukturelle Datenprobleme verschwinden jedoch nicht.",
              aenderungen: [
                erstelleAenderung("finance", { status: "Aktiv", kostenDelta: 1000, risikoDelta: 2, hinweis: "Keine strukturelle Bereinigung im Quellsystem." }),
              ],
            }),
          },
          {
            id: "finanz_priorisieren",
            titel: "Qualitaetssicherung im Finanzsystem priorisieren",
            beschreibung: "Mehr Sicherheit, dafuer weniger Spielraum anderswo.",
            anwenden: () => ({
              feedback:
                "Das Finanzsystem wird fachlich abgesichert. Das ist fuer Controlling sinnvoll, bindet aber Mittel und Aufmerksamkeit.",
              aenderungen: [
                erstelleAenderung("finance", { status: "Standardloesung", kostenDelta: 5000, stabilitaetDelta: 2, risikoDelta: -3, hinweis: "Qualitaetssicherung wird bewusst vorgezogen." }),
                erstelleAenderung("cloud_b", { kostenDelta: -2000, hinweis: "Nicht kritische Ausbauschritte werden zurueckgestellt." }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "email_betrieb",
    gruppe: "kommunikation",
    titel: "Das E-Mail-System verursacht hohe Betriebs- und Archivierungskosten.",
    beschreibung:
      "Der Dienst ist unverzichtbar, aber nicht jeder Betriebsanteil muss gleich teuer bleiben. Die Aenderung muss direkt am Service sichtbar sein.",
    betroffeneServices: ["email", "archive_storage", "external_support"],
    auswahl: [
      {
        key: "email_service",
        label: "E-Mail-System",
        beschreibung: "Kernservice optimieren statt radikal abbauen.",
        aktionen: [
          {
            id: "email_betrieb_optimieren",
            titel: "Betrieb und Archivierung modernisieren",
            beschreibung: "Strukturierter Effizienzpfad fuer den Kernservice.",
            anwenden: () => ({
              feedback:
                "Der Betrieb wird modernisiert. Das spart kontrolliert Kosten und verbessert die technische Nachvollziehbarkeit im Hintergrund.",
              aenderungen: [
                erstelleAenderung("email", { status: "Modernisiert", kostenDelta: -5000, stabilitaetDelta: 2, akzeptanzDelta: 1, risikoDelta: -2, hinweis: "Betrieb und Archivierung werden effizienter aufgestellt." }),
                erstelleAenderung("archive_storage", { kostenDelta: 1000, stabilitaetDelta: 1, hinweis: "Archivklassen uebernehmen mehr Altbestand." }),
              ],
            }),
          },
          {
            id: "email_unveraendert_2",
            titel: "Bestehenden Betrieb weiterfuehren",
            beschreibung: "Keine Umstellung, aber auch keine Kostensenkung.",
            anwenden: () => ({
              feedback:
                "Das E-Mail-System bleibt unveraendert. Das ist stabil, aber wirtschaftlich wenig ueberzeugend.",
              aenderungen: [
                erstelleAenderung("email", { status: "Aktiv", kostenDelta: 2500, akzeptanzDelta: 1, hinweis: "Laufender Betrieb bleibt ohne strukturelle Entlastung bestehen." }),
              ],
            }),
          },
          {
            id: "email_teilweise_extern",
            titel: "Teilfunktionen extern vergeben",
            beschreibung: "Interne Entlastung mit Qualitaets- und Steuerungsrisiken.",
            anwenden: () => ({
              feedback:
                "Ein Teil des Betriebs wird nach aussen vergeben. Das entlastet intern, macht den Service aber weniger direkt steuerbar.",
              aenderungen: [
                erstelleAenderung("email", { status: "Reduziert", kostenDelta: -2500, akzeptanzDelta: -2, risikoDelta: 2, hinweis: "Teile des Betriebs liegen nicht mehr direkt in der Hochschule." }),
                erstelleAenderung("external_support", { status: "Aktiv", kostenDelta: 2500, akzeptanzDelta: -1, hinweis: "Externer Partner uebernimmt einen Teil des Betriebs." }),
              ],
            }),
          },
        ],
      },
      {
        key: "archive_service",
        label: "Archivspeicher",
        beschreibung: "Archivkosten und Zugriffsqualitaet im Zusammenspiel sehen.",
        aktionen: [
          {
            id: "mail_archivierung_erweitern",
            titel: "Mehr E-Mail-Daten ins Archiv verschieben",
            beschreibung: "Kostenvorteil mit langsamerem Zugriff auf Altbestaende.",
            anwenden: () => ({
              feedback:
                "Mehr Altbest\u00e4nde werden archiviert. Das ist wirtschaftlich sinnvoll, verschiebt aber den Zugriffskomfort bei alten Postfaechern.",
              aenderungen: [
                erstelleAenderung("archive_storage", { status: "Aktiv", kostenDelta: 2500, akzeptanzDelta: -2, hinweis: "Archivanteil fuer E-Mail nimmt deutlich zu." }),
                erstelleAenderung("email", { kostenDelta: -3000, risikoDelta: -1, hinweis: "Aktiver E-Mail-Speicher wird entlastet." }),
              ],
            }),
          },
          {
            id: "mail_archivierung_standard",
            titel: "Archivierung auf aktuellem Niveau lassen",
            beschreibung: "Keine neue Komplexitaet, wenig Kosteneffekt.",
            anwenden: () => ({
              feedback:
                "Die Archivierung bleibt unveraendert. Das fuehlt sich einfach an, liefert aber auch keine spuerbare Entlastung.",
              aenderungen: [
                erstelleAenderung("archive_storage", { status: "Aktiv", kostenDelta: 500, hinweis: "Archivkosten steigen leicht mit dem Bestand." }),
              ],
            }),
          },
          {
            id: "mail_archivierung_regeln",
            titel: "Archivierungsregeln standardisieren",
            beschreibung: "Mehr Governance, klarere Datenhaltung.",
            anwenden: () => ({
              feedback:
                "Mit klaren Regeln wird sichtbar, welche Daten wohin gehoeren. Das hilft Kosten und Risiko zugleich, kostet aber Disziplin im Alltag.",
              aenderungen: [
                erstelleAenderung("archive_storage", { status: "Standardloesung", kostenDelta: 1200, risikoDelta: -2, hinweis: "Archivspeicher wird geordneter und planbarer genutzt." }),
                erstelleAenderung("email", { kostenDelta: -2000, akzeptanzDelta: -1, risikoDelta: -1, hinweis: "Aktive Datenhaltung wird klarer begrenzt." }),
              ],
            }),
          },
        ],
      },
    ],
  },
  {
    id: "forschungswelle",
    gruppe: "compute",
    titel: "Neue Forschungsprojekte verlangen kurzfristig mehr Compute und Speicher.",
    beschreibung:
      "Die Hochschule braucht schnell Kapazitaet. Die Entscheidung muss an den konkreten Services und ihren Werten sichtbar werden.",
    betroffeneServices: ["cloud_a", "cloud_b", "local_servers", "cloud_storage"],
    auswahl: [
      {
        key: "forschung_cloud",
        label: "Cloud-Dienste",
        beschreibung: "Schnell skalieren oder gezielt steuern.",
        aktionen: [
          {
            id: "forschung_cloud_priorisieren",
            titel: "Cloud gezielt priorisieren",
            beschreibung: "Sehr schnell, aber teuer.",
            anwenden: () => ({
              feedback:
                "Die Nachfrage wird schnell in die Cloud genommen. Forschung profitiert sofort, der Kostendruck steigt deutlich.",
              aenderungen: [
                erstelleAenderung("cloud_a", { status: "Aktiv", kostenDelta: 9000, stabilitaetDelta: 3, akzeptanzDelta: 3, hinweis: "Cloud A nimmt kurzfristig zusaetzliche Forschungsarbeit auf." }),
                erstelleAenderung("cloud_storage", { kostenDelta: 6000, akzeptanzDelta: 2, hinweis: "Projektdateien bleiben vor allem in der Cloud." }),
              ],
            }),
          },
          {
            id: "forschung_verteilen",
            titel: "Last zwischen Cloud und lokal verteilen",
            beschreibung: "Ausgewogener, aber koordinativ aufwendiger.",
            anwenden: () => ({
              feedback:
                "Die Last wird breiter verteilt. Das ist wirtschaftlich und technisch ausgewogener, verlangt aber mehr aktives Management.",
              aenderungen: [
                erstelleAenderung("cloud_a", { kostenDelta: 3000, stabilitaetDelta: 1, hinweis: "Nur ein Teil der Mehrlast geht in Cloud A." }),
                erstelleAenderung("cloud_b", { kostenDelta: 2500, stabilitaetDelta: 1, hinweis: "Cloud B traegt passende Teile der neuen Nachfrage." }),
                erstelleAenderung("local_servers", { status: "Aktiv", kostenDelta: 3500, stabilitaetDelta: 2, akzeptanzDelta: 1, hinweis: "Planbare Grundlast wird lokal aufgenommen." }),
                erstelleAenderung("cloud_storage", { kostenDelta: 2500, hinweis: "Datenwachstum wird besser aufgeteilt." }),
              ],
            }),
          },
          {
            id: "forschung_kontingente",
            titel: "Kontingente und Priorisierung einfuehren",
            beschreibung: "Kostenkontrolle auf Kosten von Komfort.",
            anwenden: () => ({
              feedback:
                "Die Nachfrage wird staerker priorisiert. Das haelt Kosten im Rahmen, fuehrt aber zu Widerstand in forschungsnahen Bereichen.",
              aenderungen: [
                erstelleAenderung("cloud_a", { status: "Reduziert", kostenDelta: -2000, akzeptanzDelta: -4, risikoDelta: 2, hinweis: "Zusatznutzung braucht nun eine harte Priorisierung." }),
                erstelleAenderung("cloud_b", { status: "Reduziert", kostenDelta: -1500, akzeptanzDelta: -2, hinweis: "Nicht alle Anfragen werden sofort freigegeben." }),
                erstelleAenderung("cloud_storage", { status: "Reduziert", kostenDelta: -1000, akzeptanzDelta: -2, hinweis: "Auch Datenwachstum wird enger gesteuert." }),
              ],
            }),
          },
        ],
      },
      {
        key: "local_compute",
        label: "Lokale Server",
        beschreibung: "Lokale Grundlast bewusst als Gegengewicht staerken oder klein halten.",
        aktionen: [
          {
            id: "lokal_ausbauen",
            titel: "Lokale Kapazitaet ausbauen",
            beschreibung: "Mehr Grundlast lokal halten.",
            anwenden: () => ({
              feedback:
                "Lokale Server werden fuer planbare Lasten ausgebaut. Das senkt externe Abhaengigkeit, macht die Hochschule aber intern kapazitaetsabhaengiger.",
              aenderungen: [
                erstelleAenderung("local_servers", { status: "Standardloesung", kostenDelta: 8000, stabilitaetDelta: 4, akzeptanzDelta: 2, risikoDelta: -1, hinweis: "Lokale Grundlast wird sichtbar priorisiert." }),
                erstelleAenderung("cloud_a", { kostenDelta: -3000, hinweis: "Ein Teil der Last muss nicht mehr in die teuerste Cloud." }),
              ],
            }),
          },
          {
            id: "lokal_behalten",
            titel: "Lokale Server als Grundreserve behalten",
            beschreibung: "Keine grosse Aenderung, solide Reserve.",
            anwenden: () => ({
              feedback:
                "Die lokale Infrastruktur bleibt eine Reserve fuer stabile Lasten. Das ist nachvollziehbar, loest aber das Wachstum nicht grundsaetzlich.",
              aenderungen: [
                erstelleAenderung("local_servers", { status: "Aktiv", kostenDelta: 2000, stabilitaetDelta: 1, hinweis: "Lokale Systeme bleiben als Reserve erhalten." }),
              ],
            }),
          },
          {
            id: "lokal_kleinhalten",
            titel: "Lokale Server nur fuer Spezialfaelle behalten",
            beschreibung: "Weniger interne Komplexitaet, mehr Cloud-Abhaengigkeit.",
            anwenden: () => ({
              feedback:
                "Lokale Server werden nur noch fuer Spezialfaelle vorgehalten. Die Service-Landschaft wird schlanker, aber einseitiger.",
              aenderungen: [
                erstelleAenderung("local_servers", { status: "Nur fuer Ausnahmefaelle", kostenDelta: -6000, stabilitaetDelta: -4, akzeptanzDelta: -2, risikoDelta: 5, hinweis: "Lokale Grundlast wird fast voll aufgegeben." }),
                erstelleAenderung("cloud_a", { kostenDelta: 3000, risikoDelta: 1, hinweis: "Mehr Last muss in flexible Cloud-Pfade ausweichen." }),
              ],
            }),
          },
        ],
      },
    ],
  },
];

const elemente = {
  startScreen: document.getElementById("start-screen"),
  spielScreen: document.getElementById("spiel-screen"),
  endeScreen: document.getElementById("ende-screen"),
  startButton: document.getElementById("start-button"),
  restartButton: document.getElementById("restart-button"),
  playAgainButton: document.getElementById("play-again-button"),
  weiterButton: document.getElementById("weiter-button"),
  bestaetigenButton: document.getElementById("bestaetigen-button"),
  gesamtKosten: document.getElementById("gesamt-kosten"),
  budgetWert: document.getElementById("budget-wert"),
  rundeWert: document.getElementById("runde-wert"),
  stabilitaetKopfwert: document.getElementById("stabilitaet-kopfwert"),
  zufriedenheitKopfwert: document.getElementById("zufriedenheit-kopfwert"),
  risikoKopfwert: document.getElementById("risiko-kopfwert"),
  fokusWert: document.getElementById("fokus-wert"),
  stabilitaetWert: document.getElementById("stabilitaet-wert"),
  zufriedenheitWert: document.getElementById("zufriedenheit-wert"),
  risikoWert: document.getElementById("risiko-wert"),
  stabilitaetBalken: document.getElementById("stabilitaet-balken"),
  zufriedenheitBalken: document.getElementById("zufriedenheit-balken"),
  risikoBalken: document.getElementById("risiko-balken"),
  servicesGrid: document.getElementById("services-grid"),
  scenarioTitel: document.getElementById("szenario-titel"),
  scenarioBeschreibung: document.getElementById("szenario-beschreibung"),
  scenarioRundeBadge: document.getElementById("szenario-runde-badge"),
  gruppenBadge: document.getElementById("gruppen-badge"),
  serviceHinweisBadge: document.getElementById("service-hinweis-badge"),
  betroffeneServices: document.getElementById("betroffene-services"),
  serviceAuswahl: document.getElementById("service-auswahl"),
  massnahmenAuswahl: document.getElementById("massnahmen-auswahl"),
  feedbackText: document.getElementById("feedback-text"),
  folgeBadge: document.getElementById("folge-badge"),
  veraenderungenListe: document.getElementById("veraenderungen-liste"),
  massnahmenListe: document.getElementById("massnahmen-liste"),
  protokollListe: document.getElementById("protokoll-liste"),
  endeTitel: document.getElementById("ende-titel"),
  endeText: document.getElementById("ende-text"),
  endeStats: document.getElementById("ende-stats"),
};

let spielstand;

function mischeArray(array) {
  const kopie = [...array];
  for (let index = kopie.length - 1; index > 0; index -= 1) {
    const tauschIndex = Math.floor(Math.random() * (index + 1));
    [kopie[index], kopie[tauschIndex]] = [kopie[tauschIndex], kopie[index]];
  }
  return kopie;
}

function holeDienst(stand, dienstId) {
  return stand.dienste.find((dienst) => dienst.id === dienstId);
}

function aktiveDiensteInGruppe(stand, gruppe) {
  return GRUPPEN_INFO[gruppe].dienstIds.filter((dienstId) => {
    const dienst = holeDienst(stand, dienstId);
    return dienst && statusAktiv(dienst.status) && dienst.kosten > 0;
  });
}

function berechneGesamtkosten(stand) {
  return stand.dienste.reduce((summe, dienst) => summe + dienst.kosten, 0);
}

function berechneGlobaleKennzahlen(stand) {
  const aktiveDienste = stand.dienste.filter((dienst) => statusAktiv(dienst.status));
  const basisStabilitaet =
    aktiveDienste.reduce((summe, dienst) => summe + dienst.stabilitaet, 0) / aktiveDienste.length;
  const basisZufriedenheit =
    aktiveDienste.reduce((summe, dienst) => summe + dienst.akzeptanz, 0) / aktiveDienste.length;
  const basisRisiko =
    aktiveDienste.reduce((summe, dienst) => summe + dienst.risiko, 0) / aktiveDienste.length;

  let stabilitaet = basisStabilitaet;
  let zufriedenheit = basisZufriedenheit;
  let risiko = basisRisiko;

  const kommunikationAktiv = aktiveDiensteInGruppe(stand, "kommunikation").filter((id) => id !== "email").length;
  if (kommunikationAktiv >= 2) {
    stabilitaet += 2;
    zufriedenheit += 1;
    risiko -= 1;
  } else if (kommunikationAktiv === 1) {
    zufriedenheit -= 1;
    risiko += 1;
  }

  const computeAktiv = aktiveDiensteInGruppe(stand, "compute").length;
  if (computeAktiv >= 3) {
    stabilitaet += 3;
    risiko -= 3;
  } else if (computeAktiv === 2) {
    stabilitaet += 1;
    risiko -= 1;
  } else if (computeAktiv === 1) {
    stabilitaet -= 7;
    risiko += 8;
  }

  const speicherAktiv = aktiveDiensteInGruppe(stand, "speicher").length;
  if (speicherAktiv >= 3) {
    stabilitaet += 2;
    risiko -= 2;
  } else if (speicherAktiv === 1) {
    stabilitaet -= 4;
    zufriedenheit -= 2;
    risiko += 4;
  }

  const supportAktiv = aktiveDiensteInGruppe(stand, "support").length;
  if (supportAktiv >= 2) {
    stabilitaet += 1;
    zufriedenheit += 1;
    risiko -= 1;
  } else if (supportAktiv === 1) {
    zufriedenheit -= 1;
    risiko += 2;
  }

  const sicherheitAktiv = aktiveDiensteInGruppe(stand, "sicherheit");
  if (sicherheitAktiv.includes("basic_monitoring") && sicherheitAktiv.includes("advanced_monitoring")) {
    stabilitaet += 2;
    risiko -= 6;
  } else if (sicherheitAktiv.includes("basic_monitoring")) {
    risiko += 3;
  } else {
    stabilitaet -= 10;
    risiko += 14;
  }

  const budgetquote = berechneGesamtkosten(stand) / stand.budget;
  if (budgetquote > 1) {
    stabilitaet -= 2;
    risiko += 4;
  } else if (budgetquote > 0.95) {
    risiko += 2;
  }

  return {
    kosten: berechneGesamtkosten(stand),
    budget: stand.budget,
    stabilitaet: clamp(Math.round(stabilitaet), 0, 100),
    zufriedenheit: clamp(Math.round(zufriedenheit), 0, 100),
    risiko: clamp(Math.round(risiko), 0, 100),
  };
}

function neuesSpiel() {
  return {
    runde: 1,
    maxRunden: SPIEL_CONFIG.maxRunden,
    budget: SPIEL_CONFIG.startBudget,
    dienste: tiefeKopie(START_DIENSTE),
    szenarien: mischeArray(SZENARIEN),
    aktuellesSzenario: null,
    ausgewaehlteAuswahl: null,
    ausgewaehlteAktion: null,
    aenderungenDerRunde: [],
    aktiveProgramme: [],
    protokoll: [],
    feedback:
      "W\u00e4hle zuerst einen Service oder eine Service-Gruppe aus. Danach kannst du eine konkrete Massnahme best\u00e4tigen.",
    geaenderteDienstIds: [],
    entscheidungOffen: true,
    spielVorbei: false,
  };
}

function schnappschussVonDienst(dienst) {
  return {
    id: dienst.id,
    name: dienst.name,
    status: dienst.status,
    kosten: dienst.kosten,
    stabilitaet: dienst.stabilitaet,
    akzeptanz: dienst.akzeptanz,
    risiko: dienst.risiko,
    hinweis: dienst.hinweis,
  };
}

function wendeDienstAenderungenAn(stand, aenderungen, art) {
  const veraenderungen = [];

  aenderungen.forEach((aenderung) => {
    const dienst = holeDienst(stand, aenderung.id);
    if (!dienst) return;

    const vorher = schnappschussVonDienst(dienst);

    if (typeof aenderung.kosten === "number") {
      dienst.kosten = clamp(aenderung.kosten, 0, 120000);
    }
    if (typeof aenderung.kostenDelta === "number") {
      dienst.kosten = clamp(dienst.kosten + aenderung.kostenDelta, 0, 120000);
    }
    if (typeof aenderung.stabilitaetDelta === "number") {
      dienst.stabilitaet = clamp(dienst.stabilitaet + aenderung.stabilitaetDelta, 0, 100);
    }
    if (typeof aenderung.akzeptanzDelta === "number") {
      dienst.akzeptanz = clamp(dienst.akzeptanz + aenderung.akzeptanzDelta, 0, 100);
    }
    if (typeof aenderung.risikoDelta === "number") {
      dienst.risiko = clamp(dienst.risiko + aenderung.risikoDelta, 0, 100);
    }
    if (aenderung.status) {
      dienst.status = aenderung.status;
    }
    if (aenderung.rolle) {
      dienst.rolle = aenderung.rolle;
    }
    if (aenderung.hinweis) {
      dienst.hinweis = aenderung.hinweis;
    }
    if (dienst.status === "Ausser Betrieb") {
      dienst.kosten = 0;
    }

    const nachher = schnappschussVonDienst(dienst);
    if (JSON.stringify(vorher) !== JSON.stringify(nachher)) {
      veraenderungen.push({
        dienstId: dienst.id,
        name: dienst.name,
        art,
        vorher,
        nachher,
      });
    }
  });

  return veraenderungen;
}

function generiereGruppenfolge(stand, gruppe) {
  const aktiveIds = aktiveDiensteInGruppe(stand, gruppe);

  if (gruppe === "kommunikation") {
    if (aktiveIds.includes("teams") && aktiveIds.includes("zoom")) {
      return {
        text: "Folge: Die Kommunikationsgruppe bleibt redundant und robust, aber weiterhin teuer.",
        aenderungen: [],
      };
    }
    if (aktiveIds.includes("teams")) {
      return {
        text: "Folge: Teams wird klarer zum Hauptpfad. Das spart Kosten, senkt aber die Wahlfreiheit in einzelnen Bereichen.",
        aenderungen: [],
      };
    }
  }

  if (gruppe === "compute") {
    if (aktiveIds.length >= 3) {
      return {
        text: "Folge: Die Compute-Redundanz bleibt hoch. Aus Betriebssicht stark, aus Kostensicht anspruchsvoll.",
        aenderungen: [],
      };
    }
    if (aktiveIds.length === 1) {
      return {
        text: "Folge: Nur noch ein zentraler Compute-Pfad bleibt aktiv. Das Risiko von Abhaengigkeiten steigt sichtbar.",
        aenderungen: [
          erstelleAenderung(aktiveIds[0], {
            risikoDelta: 4,
            stabilitaetDelta: -2,
            hinweis: "Die verbleibende Plattform traegt nun fast die gesamte Abhaengigkeit.",
          }),
        ],
      };
    }
  }

  if (gruppe === "speicher") {
    if (aktiveIds.includes("archive_storage") && aktiveIds.includes("cloud_storage")) {
      return {
        text: "Folge: Die Speicherrollen werden klarer. Aktive und archivierte Daten sind besser getrennt.",
        aenderungen: [],
      };
    }
  }

  if (gruppe === "support") {
    if (aktiveIds.includes("internal_support") && aktiveIds.includes("external_support")) {
      return {
        text: "Folge: Internes Know-how und externe Entlastung bleiben kombiniert. Das ist betrieblich robust, aber organisatorisch anspruchsvoll.",
        aenderungen: [],
      };
    }
  }

  if (gruppe === "sicherheit") {
    if (aktiveIds.includes("advanced_monitoring")) {
      return {
        text: "Folge: Das Sicherheitsniveau bleibt sichtbar ueber dem Mindestniveau.",
        aenderungen: [],
      };
    }
    return {
      text: "Folge: Die Sicherheitsgruppe liegt nur noch nahe am Mindestniveau. Restluecken bleiben bestehen.",
      aenderungen: [
        erstelleAenderung("basic_monitoring", {
          risikoDelta: 2,
          hinweis: "Restluecken bleiben ohne erweiterten Ausbau bestehen.",
        }),
      ],
    };
  }

  if (gruppe === "business") {
    return {
      text: "Folge: Aenderungen in Business-Systemen wirken weniger spektakulaer, aber direkt auf Steuerbarkeit und Verlaesslichkeit.",
      aenderungen: [],
    };
  }

  return { text: "", aenderungen: [] };
}

function pruefeZusatzeffekt(stand, szenario) {
  const kennzahlen = berechneGlobaleKennzahlen(stand);
  if (kennzahlen.risiko < 74) {
    return { text: "", aenderungen: [] };
  }

  if (Math.random() > 0.45) {
    return { text: "", aenderungen: [] };
  }

  const dienstId = szenario.betroffeneServices
    .map((id) => holeDienst(stand, id))
    .sort((a, b) => b.risiko - a.risiko)[0]?.id;

  if (!dienstId) {
    return { text: "", aenderungen: [] };
  }

  return {
    text: "Zusatzereignis: Das hohe Gesamtrisiko loest eine negative Folge im betroffenen Bereich aus.",
    aenderungen: [
      erstelleAenderung(dienstId, {
        stabilitaetDelta: -5,
        akzeptanzDelta: -3,
        risikoDelta: 6,
        hinweis: "Ein Folgerisiko materialisiert sich nach der Entscheidung.",
      }),
    ],
  };
}

function fuegeProgrammHinzu(stand, programm) {
  stand.aktiveProgramme = stand.aktiveProgramme.filter((eintrag) => eintrag.id !== programm.id);
  stand.aktiveProgramme.push({ ...programm });
}

function verarbeiteProgramme(stand) {
  const protokolle = [];
  const alleAenderungen = [];
  const verbleibend = [];

  stand.aktiveProgramme.forEach((programm) => {
    const veraenderungen = wendeDienstAenderungenAn(stand, programm.aenderungen, "Laufende Massnahme");
    if (veraenderungen.length > 0) {
      alleAenderungen.push(...veraenderungen);
      protokolle.push(`${programm.name}: ${programm.text}`);
    }
    programm.restRunden -= 1;
    if (programm.restRunden > 0) {
      verbleibend.push(programm);
    }
  });

  stand.aktiveProgramme = verbleibend;
  return { protokolle, aenderungen: alleAenderungen };
}

function zieheNaechstesSzenario(stand) {
  stand.aktuellesSzenario = stand.szenarien.shift() || null;
  stand.ausgewaehlteAuswahl = null;
  stand.ausgewaehlteAktion = null;
  stand.entscheidungOffen = true;
}

function auswahlObjekt() {
  if (!spielstand.aktuellesSzenario || !spielstand.ausgewaehlteAuswahl) return null;
  return spielstand.aktuellesSzenario.auswahl.find(
    (eintrag) => eintrag.key === spielstand.ausgewaehlteAuswahl
  );
}

function aktionObjekt() {
  const auswahl = auswahlObjekt();
  if (!auswahl || !spielstand.ausgewaehlteAktion) return null;
  return auswahl.aktionen.find((aktion) => aktion.id === spielstand.ausgewaehlteAktion);
}

function formatDelta(vorher, nachher, formatter = (wert) => wert) {
  return `${formatter(vorher)} -> ${formatter(nachher)}`;
}

function globaleBewertung(stand) {
  const kennzahlen = berechneGlobaleKennzahlen(stand);
  const budgetquote = kennzahlen.kosten / kennzahlen.budget;

  if (budgetquote < 0.95 && kennzahlen.stabilitaet >= 72 && kennzahlen.risiko <= 35) {
    return "Starke Steuerung: wirtschaftlich, stabil und nachvollziehbar.";
  }
  if (budgetquote <= 1 && kennzahlen.stabilitaet >= 58 && kennzahlen.risiko <= 55) {
    return "Solide Steuerung: gute Balance zwischen Kosten und Betrieb.";
  }
  return "Angespannte Steuerung: das Portfolio blieb nur mit deutlichen Kompromissen tragfaehig.";
}

function renderKennzahlen() {
  const kennzahlen = berechneGlobaleKennzahlen(spielstand);
  elemente.gesamtKosten.textContent = geld(kennzahlen.kosten);
  elemente.budgetWert.textContent = geld(kennzahlen.budget);
  elemente.rundeWert.textContent = `${spielstand.runde} / ${spielstand.maxRunden}`;
  elemente.stabilitaetKopfwert.textContent = kennzahlen.stabilitaet;
  elemente.zufriedenheitKopfwert.textContent = kennzahlen.zufriedenheit;
  elemente.risikoKopfwert.textContent = kennzahlen.risiko;
  elemente.fokusWert.textContent = spielstand.aktuellesSzenario
    ? umlautText(GRUPPEN_INFO[spielstand.aktuellesSzenario.gruppe].label)
    : "-";

  elemente.stabilitaetWert.textContent = kennzahlen.stabilitaet;
  elemente.zufriedenheitWert.textContent = kennzahlen.zufriedenheit;
  elemente.risikoWert.textContent = kennzahlen.risiko;
  elemente.stabilitaetBalken.style.width = `${kennzahlen.stabilitaet}%`;
  elemente.zufriedenheitBalken.style.width = `${kennzahlen.zufriedenheit}%`;
  elemente.risikoBalken.style.width = `${kennzahlen.risiko}%`;
}

function renderServices() {
  const aktuelleGruppe = spielstand.aktuellesSzenario?.gruppe;
  const betroffeneIds = spielstand.aktuellesSzenario?.betroffeneServices || [];
  const fokusGruppe = aktuelleGruppe ? GRUPPEN_INFO[aktuelleGruppe] : null;
  const detailDienste = fokusGruppe
    ? [...fokusGruppe.dienstIds].sort((dienstIdA, dienstIdB) => {
        const aBetroffen = betroffeneIds.includes(dienstIdA) ? 1 : 0;
        const bBetroffen = betroffeneIds.includes(dienstIdB) ? 1 : 0;
        if (aBetroffen !== bBetroffen) {
          return bBetroffen - aBetroffen;
        }
        return holeDienst(spielstand, dienstIdB).kosten - holeDienst(spielstand, dienstIdA).kosten;
      })
    : [];

  const fokusHtml = fokusGruppe
    ? `
      <section class="service-gruppe fokus-gruppe">
        <div class="dienst-kopf">
          <h3>${umlautText(fokusGruppe.label)}</h3>
          <div class="dienst-status">Aktuell im Fokus</div>
        </div>
        <p class="gruppe-copy">${umlautText(fokusGruppe.beschreibung)}</p>
        <div class="dienst-liste">
          ${detailDienste
            .map((dienstId) => {
              const dienst = holeDienst(spielstand, dienstId);
              const istBetroffen = betroffeneIds.includes(dienst.id);
              const betont =
                spielstand.geaenderteDienstIds.includes(dienst.id) || istBetroffen ? "betont" : "";
              return `
                <article class="dienst-karte aktiv-fokus ${betont}">
                  <div class="dienst-kopf">
                    <div>
                      <div class="dienst-tag">${umlautText(dienst.kategorie)}</div>
                      <h3 class="dienst-name">${umlautText(dienst.name)}</h3>
                    </div>
                    <div class="dienst-status">${umlautText(dienst.status)}</div>
                  </div>
                  <div class="dienst-kosten">${geld(dienst.kosten)}</div>
                  <p class="dienst-beschreibung">${umlautText(dienst.hinweis)}</p>
                  <div class="dienst-werte">
                    <div class="mini-wert">
                      <span>Stabilitaet</span>
                      <strong>${dienst.stabilitaet}</strong>
                    </div>
                    <div class="mini-wert">
                      <span>Akzeptanz</span>
                      <strong>${dienst.akzeptanz}</strong>
                    </div>
                    <div class="mini-wert">
                      <span>Risiko</span>
                      <strong>${dienst.risiko}</strong>
                    </div>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    `
    : "";

  const andereGruppenHtml = Object.entries(GRUPPEN_INFO)
    .filter(([gruppenKey]) => gruppenKey !== aktuelleGruppe)
    .map(([gruppenKey, gruppe]) => {
      const gruppenDienste = gruppe.dienstIds.map((dienstId) => holeDienst(spielstand, dienstId));
      const gruppenKosten = gruppenDienste.reduce((summe, dienst) => summe + dienst.kosten, 0);
      const aktiveAnzahl = gruppenDienste.filter((dienst) => statusAktiv(dienst.status)).length;
      return `
        <article class="gruppe-kompakt">
          <div class="dienst-kompakt-kopf">
            <strong>${umlautText(gruppe.label)}</strong>
            <span class="dienst-status">${aktiveAnzahl} aktiv</span>
          </div>
          <div class="dienst-kompakt-werte">
            <span>${geld(gruppenKosten)}</span>
            <span>${gruppenDienste.length} Services</span>
          </div>
        </article>
      `;
    })
    .join("");

  elemente.servicesGrid.innerHTML = `
    ${fokusHtml}
    <section class="service-gruppe service-uebersicht">
      <div class="dienst-kopf">
        <h3>Andere Gruppen</h3>
        <div class="dienst-tag">Kompakt</div>
      </div>
      <div class="gruppen-kompakt-grid">${andereGruppenHtml}</div>
    </section>
  `;
}

function renderSzenario() {
  const szenario = spielstand.aktuellesSzenario;
  if (!szenario) return;

  elemente.scenarioTitel.textContent = umlautText(szenario.titel);
  elemente.scenarioBeschreibung.textContent = umlautText(szenario.beschreibung);
  elemente.scenarioRundeBadge.textContent = `Runde ${spielstand.runde}`;
  elemente.gruppenBadge.textContent = `Gruppe: ${umlautText(GRUPPEN_INFO[szenario.gruppe].label)}`;
  elemente.serviceHinweisBadge.textContent = "Betroffene Services";
  elemente.betroffeneServices.innerHTML = szenario.betroffeneServices
    .map((dienstId) => `<span class="service-badge">${umlautText(holeDienst(spielstand, dienstId).name)}</span>`)
    .join("");
}

function renderServiceAuswahl() {
  const szenario = spielstand.aktuellesSzenario;
  elemente.serviceAuswahl.innerHTML = szenario.auswahl
    .map(
      (eintrag) => `
        <button class="wahl-chip ${spielstand.ausgewaehlteAuswahl === eintrag.key ? "aktiv" : ""}" type="button" data-auswahl-key="${eintrag.key}" ${!spielstand.entscheidungOffen ? "disabled" : ""}>
          <strong>${umlautText(eintrag.label)}</strong>
          <span>${umlautText(eintrag.beschreibung)}</span>
        </button>
      `
    )
    .join("");
}

function renderMassnahmen() {
  const auswahl = auswahlObjekt();
  if (!auswahl) {
    elemente.massnahmenAuswahl.innerHTML =
      '<div class="massnahme-button"><strong>W\u00e4hle zuerst einen Service</strong><span>Erst nach der Auswahl werden passende Massnahmen freigeschaltet.</span></div>';
    elemente.bestaetigenButton.disabled = true;
    return;
  }

  elemente.massnahmenAuswahl.innerHTML = auswahl.aktionen
    .map(
      (aktion) => `
        <button class="massnahme-button ${spielstand.ausgewaehlteAktion === aktion.id ? "aktiv" : ""}" type="button" data-aktion-id="${aktion.id}" ${!spielstand.entscheidungOffen ? "disabled" : ""}>
          <strong>${umlautText(aktion.titel)}</strong>
          <span>${umlautText(aktion.beschreibung)}</span>
        </button>
      `
    )
    .join("");

  elemente.bestaetigenButton.disabled = !spielstand.entscheidungOffen || !spielstand.ausgewaehlteAktion;
}

function renderVeraenderungen() {
  if (spielstand.aenderungenDerRunde.length === 0) {
    elemente.veraenderungenListe.innerHTML =
      '<div class="veraenderung-card"><div class="protokoll-main">Noch keine Auswirkungen vorhanden.</div><div class="protokoll-impact">Nach der Best\u00e4tigung erscheinen hier die betroffenen Services mit alten und neuen Werten.</div></div>';
    return;
  }

  elemente.veraenderungenListe.innerHTML = spielstand.aenderungenDerRunde
    .map(
      (eintrag) => `
        <article class="veraenderung-card ${eintrag.art === "Folgewirkung" ? "folge" : ""}">
          <div class="vergleich-kopf">
            <div>
              <p class="card-label">${umlautText(eintrag.art)}</p>
              <h3 class="dienst-name">${umlautText(eintrag.name)}</h3>
            </div>
            <div class="dienst-status">${umlautText(eintrag.nachher.status)}</div>
          </div>
          <div class="vergleich-grid">
            <div class="vergleich-box">
              <h4>Vorher</h4>
              <div class="delta-list">
                Status: ${umlautText(eintrag.vorher.status)}<br />
                Kosten: ${geld(eintrag.vorher.kosten)}<br />
                Stabilit\u00e4t: ${eintrag.vorher.stabilitaet}<br />
                Akzeptanz: ${eintrag.vorher.akzeptanz}<br />
                Risiko: ${eintrag.vorher.risiko}
              </div>
            </div>
            <div class="vergleich-box">
              <h4>Nachher</h4>
              <div class="delta-list">
                Status: ${umlautText(eintrag.nachher.status)}<br />
                Kosten: ${geld(eintrag.nachher.kosten)}<br />
                Stabilit\u00e4t: ${eintrag.nachher.stabilitaet}<br />
                Akzeptanz: ${eintrag.nachher.akzeptanz}<br />
                Risiko: ${eintrag.nachher.risiko}
              </div>
            </div>
          </div>
          <ul class="delta-list">
            <li>Status: ${formatDelta(umlautText(eintrag.vorher.status), umlautText(eintrag.nachher.status))}</li>
            <li>Kosten: ${formatDelta(eintrag.vorher.kosten, eintrag.nachher.kosten, geld)}</li>
            <li>Stabilit\u00e4t: ${formatDelta(eintrag.vorher.stabilitaet, eintrag.nachher.stabilitaet)}</li>
            <li>Akzeptanz: ${formatDelta(eintrag.vorher.akzeptanz, eintrag.nachher.akzeptanz)}</li>
            <li>Risiko: ${formatDelta(eintrag.vorher.risiko, eintrag.nachher.risiko)}</li>
            <li>Hinweis: ${umlautText(eintrag.nachher.hinweis)}</li>
          </ul>
        </article>
      `
    )
    .join("");
}

function renderProgramme() {
  if (spielstand.aktiveProgramme.length === 0) {
    elemente.massnahmenListe.innerHTML =
      '<div class="massnahme-item"><div class="massnahme-name">Keine laufenden Programme</div><div class="massnahme-text">Mehrstufige Massnahmen erscheinen hier mit ihrer Restlaufzeit.</div></div>';
    return;
  }

  elemente.massnahmenListe.innerHTML = spielstand.aktiveProgramme
    .map(
      (programm) => `
        <div class="massnahme-item">
          <div class="massnahme-titel">${programm.restRunden} Runde(n) Restlaufzeit</div>
          <div class="massnahme-name">${umlautText(programm.name)}</div>
          <div class="massnahme-text">${umlautText(programm.text)}</div>
        </div>
      `
    )
    .join("");
}

function renderProtokoll() {
  if (spielstand.protokoll.length === 0) {
    elemente.protokollListe.innerHTML =
      '<div class="protokoll-item"><div class="protokoll-main">Noch keine Runde abgeschlossen.</div></div>';
    return;
  }

  elemente.protokollListe.innerHTML = spielstand.protokoll
    .slice(-5)
    .reverse()
    .map(
      (eintrag) => `
        <div class="protokoll-item">
          <div class="protokoll-runde">Runde ${eintrag.runde}</div>
          <div class="protokoll-main">${umlautText(eintrag.titel)}</div>
          <div class="protokoll-impact">${umlautText(eintrag.text)}</div>
        </div>
      `
    )
    .join("");
}

function renderButtons() {
  elemente.bestaetigenButton.classList.toggle("hidden", !spielstand.entscheidungOffen);
  elemente.weiterButton.classList.toggle("hidden", spielstand.entscheidungOffen);
}

function renderSpiel() {
  renderKennzahlen();
  renderSzenario();
  renderServiceAuswahl();
  renderMassnahmen();
  renderServices();
  renderVeraenderungen();
  renderProgramme();
  renderProtokoll();
  renderButtons();
  elemente.feedbackText.textContent = umlautText(spielstand.feedback);
  elemente.folgeBadge.textContent = spielstand.entscheidungOffen ? "Warte auf Entscheidung" : "Auswirkung sichtbar";
}

function zeigeSpielScreen() {
  elemente.startScreen.classList.add("hidden");
  elemente.endeScreen.classList.add("hidden");
  elemente.spielScreen.classList.remove("hidden");
}

function zeigeEnde(titel, text) {
  spielstand.spielVorbei = true;
  elemente.startScreen.classList.add("hidden");
  elemente.spielScreen.classList.add("hidden");
  elemente.endeScreen.classList.remove("hidden");
  elemente.endeTitel.textContent = umlautText(titel);
  elemente.endeText.textContent = umlautText(text);

  const kennzahlen = berechneGlobaleKennzahlen(spielstand);
  elemente.endeStats.innerHTML = [
    { label: "Gesamtkosten", wert: geld(kennzahlen.kosten) },
    { label: "Budget", wert: geld(kennzahlen.budget) },
    { label: "Stabilit\u00e4t", wert: `${kennzahlen.stabilitaet} / 100` },
    { label: "Nutzerzufriedenheit", wert: `${kennzahlen.zufriedenheit} / 100` },
    { label: "Risiko", wert: `${kennzahlen.risiko} / 100` },
    { label: "Management-Urteil", wert: globaleBewertung(spielstand) },
  ]
    .map(
      (eintrag) => `
        <div class="ende-stat">
          <span>${umlautText(eintrag.label)}</span>
          <strong>${umlautText(eintrag.wert)}</strong>
        </div>
      `
    )
    .join("");
}

function pruefeSpielende() {
  const kennzahlen = berechneGlobaleKennzahlen(spielstand);

  if (kennzahlen.kosten > kennzahlen.budget) {
    zeigeEnde(
      "Budgetkontrolle verloren",
      "Die Gesamtkosten liegen \u00fcber dem Budgetrahmen. Die Service-Landschaft gilt so nicht mehr als wirtschaftlich steuerbar."
    );
    return true;
  }

  if (kennzahlen.stabilitaet <= 0) {
    zeigeEnde(
      "Betrieb instabil",
      "Die Stabilit\u00e4t ist auf 0 gefallen. Zu viele Risiken und Einschnitte haben den Betrieb gekippt."
    );
    return true;
  }

  if (spielstand.runde > spielstand.maxRunden) {
    zeigeEnde(
      "Strategie erfolgreich abgeschlossen",
      "Du hast alle Runden \u00fcberstanden und die IT-Service-Landschaft nachvollziehbar gesteuert."
    );
    return true;
  }

  return false;
}

function auswahlWaehlen(key) {
  if (!spielstand.entscheidungOffen) return;
  spielstand.ausgewaehlteAuswahl = key;
  spielstand.ausgewaehlteAktion = null;
  renderSpiel();
}

function aktionWaehlen(aktionId) {
  if (!spielstand.entscheidungOffen) return;
  spielstand.ausgewaehlteAktion = aktionId;
  renderSpiel();
}

function entscheidungBestaetigen() {
  if (!spielstand.entscheidungOffen) return;
  const aktion = aktionObjekt();
  if (!aktion) return;

  const ergebnis = aktion.anwenden(spielstand);
  const direkteAenderungen = wendeDienstAenderungenAn(
    spielstand,
    ergebnis.aenderungen || [],
    "Direkte Aenderung"
  );

  const gruppenfolge = generiereGruppenfolge(spielstand, spielstand.aktuellesSzenario.gruppe);
  const folgeAenderungen = wendeDienstAenderungenAn(
    spielstand,
    gruppenfolge.aenderungen || [],
    "Folgewirkung"
  );

  const zusatzeffekt = pruefeZusatzeffekt(spielstand, spielstand.aktuellesSzenario);
  const risikoAenderungen = wendeDienstAenderungenAn(
    spielstand,
    zusatzeffekt.aenderungen || [],
    "Folgewirkung"
  );

  if (ergebnis.budgetDelta) {
    spielstand.budget = Math.max(250000, spielstand.budget + ergebnis.budgetDelta);
  }

  (ergebnis.programme || []).forEach((programm) => fuegeProgrammHinzu(spielstand, programm));

  spielstand.aenderungenDerRunde = [
    ...direkteAenderungen,
    ...folgeAenderungen,
    ...risikoAenderungen,
  ];
  spielstand.geaenderteDienstIds = spielstand.aenderungenDerRunde.map((eintrag) => eintrag.dienstId);
  spielstand.feedback = [
    ergebnis.feedback,
    gruppenfolge.text,
    zusatzeffekt.text,
  ]
    .filter(Boolean)
    .join(" ");
  spielstand.protokoll.push({
    runde: spielstand.runde,
    titel: aktion.titel,
    text: spielstand.feedback,
  });
  spielstand.entscheidungOffen = false;

  renderSpiel();

  if (pruefeSpielende()) {
    return;
  }
}

function naechsteRunde() {
  if (spielstand.entscheidungOffen || spielstand.spielVorbei) return;

  spielstand.runde += 1;
  const programmEffekte = verarbeiteProgramme(spielstand);
  if (programmEffekte.aenderungen.length > 0) {
    spielstand.aenderungenDerRunde = programmEffekte.aenderungen;
    spielstand.geaenderteDienstIds = programmEffekte.aenderungen.map((eintrag) => eintrag.dienstId);
    spielstand.feedback = `Zwischen den Runden wirken laufende Programme weiter. ${programmEffekte.protokolle.join(" ")}`;
  } else {
    spielstand.aenderungenDerRunde = [];
    spielstand.geaenderteDienstIds = [];
    spielstand.feedback =
      "Neue Runde. W\u00e4hle wieder einen konkreten Service oder eine Service-Gruppe und f\u00fchre eine nachvollziehbare Massnahme aus.";
  }

  if (pruefeSpielende()) {
    return;
  }

  zieheNaechstesSzenario(spielstand);
  renderSpiel();
}

function starteSpiel() {
  spielstand = neuesSpiel();
  zieheNaechstesSzenario(spielstand);
  zeigeSpielScreen();
  renderSpiel();
}

elemente.startButton.addEventListener("click", starteSpiel);
elemente.restartButton.addEventListener("click", starteSpiel);
elemente.playAgainButton.addEventListener("click", starteSpiel);
elemente.bestaetigenButton.addEventListener("click", entscheidungBestaetigen);
elemente.weiterButton.addEventListener("click", naechsteRunde);
elemente.serviceAuswahl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-auswahl-key]");
  if (!button) return;
  auswahlWaehlen(button.dataset.auswahlKey);
});
elemente.massnahmenAuswahl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-aktion-id]");
  if (!button) return;
  aktionWaehlen(button.dataset.aktionId);
});


