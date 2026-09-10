// Fragenkatalog Kapitel 7 – Europa im Überblick
// Geospots HAK, 2. Jahrgang
// Fragetypen: "mc" (Multiple Choice), "tf" (Wahr/Falsch), "matching" (Zuordnung), "ordering" (Reihenfolge)
// Jede Frage ist 5 Punkte wert -> 20 Fragen = 100 Punkte gesamt

const QUIZ_DATA = {
  kapitel: "7",
  titel: "Kapitel 7 – Europa im Überblick",
  punkteProFrage: 5,
  fragen: [
    // ===== 7.1 Annäherung an einen Kontinent =====
    {
      type: "mc",
      unterkapitel: "7.1 Annäherung an einen Kontinent",
      frage: "Wer schlug 1730 die heute übliche Grenze zwischen Europa und Asien entlang des Ural vor?",
      optionen: ["Philipp Johann von Strahlenberg", "Roger Brunet", "Peter der Große", "Heinz Fassmann"],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "7.1 Annäherung an einen Kontinent",
      frage: "Welcher Berg gilt als höchster Berg Europas, wenn man den Kaukasus-Hauptkamm als Grenze zu Asien ansieht?",
      optionen: ["Mont Blanc (4 807 m)", "Elbrus (5 642 m)", "Mulhacén (3 479 m)", "Ätna (3 357 m)"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "7.1 Annäherung an einen Kontinent",
      frage: "Die OSZE hat ihren Sitz in Wien.",
      richtig: true
    },
    {
      type: "matching",
      unterkapitel: "7.1 Annäherung an einen Kontinent",
      frage: "Ordne jedem Bündnis sein Hauptziel zu.",
      paare: [
        { links: "EFTA", rechts: "Freihandel zwischen den Mitgliedern, rein wirtschaftliche Zusammenarbeit" },
        { links: "EWR", rechts: "Verbindet EFTA-Staaten mit dem EU-Binnenmarkt" },
        { links: "NATO", rechts: "Gemeinsame Verteidigung und Krisenbewältigung" },
        { links: "OSZE", rechts: "Frieden, Stabilität und Abrüstung in Europa" }
      ]
    },
    {
      type: "ordering",
      unterkapitel: "7.1 Annäherung an einen Kontinent",
      frage: "Bringe diese Ereignisse der politischen Landkarte Europas in die richtige zeitliche Reihenfolge.",
      elemente: [
        "Wiedervereinigung Deutschlands (1990)",
        "Zerfall der Sowjetunion (1991)",
        "Trennung von Tschechischer Republik und Slowakei (1993)",
        "Kosovo erklärt die Unabhängigkeit (2008)",
        "Russland nimmt die Krim auf (2014)"
      ]
    },

    // ===== 7.2 Naturräume Europas =====
    {
      type: "mc",
      unterkapitel: "7.2 Naturräume Europas",
      frage: "Welcher geologische Baustein Europas ist der älteste?",
      optionen: ["Ureuropa", "Paläoeuropa", "Mesoeuropa", "Neoeuropa"],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "7.2 Naturräume Europas",
      frage: "Was versteht man unter Reliefenergie?",
      optionen: [
        "Die absolute Meereshöhe eines Gebiets",
        "Den Höhenunterschied innerhalb eines bestimmten Gebiets",
        "Die Anzahl der Gipfel über 2 000 m",
        "Die Gesamtfläche eines Gebirges"
      ],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "7.2 Naturräume Europas",
      frage: "Die Alpen entstanden durch die alpidische Gebirgsbildung und zählen zum Baustein Neoeuropa.",
      richtig: true
    },
    {
      type: "matching",
      unterkapitel: "7.2 Naturräume Europas",
      frage: "Ordne jeden Fachbegriff der passenden Erklärung zu.",
      paare: [
        { links: "Hochgebirge", rechts: "Über 2 000 m hoch, zerklüftet, mit Höhenstufen der Vegetation" },
        { links: "Tiefebene", rechts: "Weitgehend flaches Gebiet nahe dem Meeresspiegel" },
        { links: "Dammfluss", rechts: "Fluss, dessen Wasserspiegel höher liegt als das Umland" },
        { links: "Schichtstufenlandschaft", rechts: "Stufenförmige Anordnung unterschiedlich harter Sedimentschichten" }
      ]
    },
    {
      type: "ordering",
      unterkapitel: "7.2 Naturräume Europas",
      frage: "Bringe die vier geologischen Bausteine Europas vom ältesten zum jüngsten in die richtige Reihenfolge.",
      elemente: [
        "Ureuropa (über 3 Mrd. Jahre)",
        "Paläoeuropa (rund 500 Mio. Jahre)",
        "Mesoeuropa (rund 400 Mio. Jahre)",
        "Neoeuropa (rund 100 Mio. Jahre)"
      ]
    },

    // ===== 7.3 Europas Bevölkerung =====
    {
      type: "mc",
      unterkapitel: "7.3 Europas Bevölkerung",
      frage: "Wie groß ist die durchschnittliche Bevölkerungsdichte Europas ungefähr?",
      optionen: ["45 EinwohnerInnen/km²", "73 EinwohnerInnen/km²", "105 EinwohnerInnen/km²", "150 EinwohnerInnen/km²"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "7.3 Europas Bevölkerung",
      frage: "Wie hoch liegt die durchschnittliche Fruchtbarkeitsrate in Europa laut Buch?",
      optionen: ["1,2 Kinder pro Frau", "1,6 Kinder pro Frau", "2,1 Kinder pro Frau", "2,5 Kinder pro Frau"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "7.3 Europas Bevölkerung",
      frage: "Um die Bevölkerung stabil zu halten, müsste die Fruchtbarkeitsrate bei rund 2,1 Kindern pro Frau liegen.",
      richtig: true
    },
    {
      type: "mc",
      unterkapitel: "7.3 Europas Bevölkerung",
      frage: "Welche zwei Staaten wachsen laut Bevölkerungsprognose, während Deutschland und Russland schrumpfen?",
      optionen: [
        "Frankreich und das Vereinigte Königreich",
        "Polen und Rumänien",
        "Italien und Spanien",
        "Schweden und Norwegen"
      ],
      richtig: 0
    },
    {
      type: "ordering",
      unterkapitel: "7.3 Europas Bevölkerung",
      frage: "Bringe die Schritte des „Teufelskreises schrumpfender Regionen“ in die richtige Reihenfolge.",
      elemente: [
        "Schrumpfende Bevölkerung",
        "Binnennachfrage sinkt",
        "Einbußen für Wirtschaftstreibende",
        "Arbeitsplätze gehen verloren",
        "Neuerliche Auswanderungswelle"
      ]
    },

    // ===== 7.4 Zuwanderung und Integration =====
    {
      type: "mc",
      unterkapitel: "7.4 Zuwanderung und Integration",
      frage: "Was regelt das Dubliner Übereinkommen?",
      optionen: [
        "Dass der Staat der Ersteinreise für das Asylverfahren zuständig ist",
        "Dass alle EU-Staaten gleich viele Flüchtlinge aufnehmen müssen",
        "Dass Asylanträge nur in Deutschland bearbeitet werden",
        "Dass Wirtschaftsmigrantinnen und Wirtschaftsmigranten kein Asyl bekommen dürfen"
      ],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "7.4 Zuwanderung und Integration",
      frage: "Wodurch unterscheidet sich Asyl von subsidiärem Schutz?",
      optionen: [
        "Subsidiärer Schutz gilt nur für EU-BürgerInnen",
        "Asyl setzt Verfolgung wegen politischer Gesinnung, Religion, Ethnie oder Nationalität voraus, subsidiärer Schutz gilt, wenn der Fluchtgrund dafür nicht ausreicht, eine Rückkehr aber unmöglich ist",
        "Beide Begriffe bedeuten genau dasselbe",
        "Subsidiärer Schutz ist dauerhaft, Asyl gilt nur vorübergehend"
      ],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "7.4 Zuwanderung und Integration",
      frage: "Ceuta und Melilla sind spanische Exklaven an der nordafrikanischen Küste.",
      richtig: true
    },
    {
      type: "mc",
      unterkapitel: "7.4 Zuwanderung und Integration",
      frage: "Wie kurz ist die Distanz von Tarifa (Spanien) zur marokkanischen Küste?",
      optionen: ["14 km", "50 km", "100 km", "300 km"],
      richtig: 0
    },
    {
      type: "matching",
      unterkapitel: "7.4 Zuwanderung und Integration",
      frage: "Ordne jedem Begriff die passende Erklärung zu.",
      paare: [
        { links: "Asyl", rechts: "Zuflucht bei Verfolgung wegen politischer Gesinnung, Religion, Ethnie oder Nationalität" },
        { links: "Exklave", rechts: "Isolierter Teil eines Staates, von fremdem Staatsgebiet umgeben" },
        { links: "Hotspot", rechts: "Erstaufnahmezentrum an der EU-Außengrenze, in dem registriert wird" },
        { links: "Binnenwanderung", rechts: "Wanderung innerhalb eines Staates" }
      ]
    }
  ]
};
