// Fragenkatalog Kapitel 11+12 – Österreichs Bevölkerung & Wirtschaftsstandort Österreich
// Geospots HAK, 2. Jahrgang
// Fragetypen: "mc" (Multiple Choice), "tf" (Wahr/Falsch), "matching" (Zuordnung), "ordering" (Reihenfolge)
// Jede Frage ist 5 Punkte wert -> 20 Fragen = 100 Punkte gesamt

const QUIZ_DATA = {
  kapitel: "11_12",
  titel: "Kapitel 11+12 – Österreichs Bevölkerung & Wirtschaftsstandort Österreich",
  punkteProFrage: 5,
  fragen: [
    // ===== 11.1 Österreichs Bevölkerung heute =====
    {
      type: "mc",
      unterkapitel: "11.1 Österreichs Bevölkerung heute",
      frage: "Warum wächst Österreichs Bevölkerung, obwohl die Geburtenbilanz negativ ist (mehr Sterbefälle als Geburten)?",
      optionen: [
        "Weil die Zuwanderung größer ist als die Abwanderung.",
        "Weil die Statistik jährlich korrigiert wird.",
        "Weil die Lebenserwartung sinkt.",
        "Tatsächlich schrumpft die Bevölkerung, das ist eine falsche Annahme."
      ],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "11.1 Österreichs Bevölkerung heute",
      frage: "Worin unterscheidet sich der Begriff „Migrationshintergrund\" von „ausländischer Staatsangehörigkeit\"?",
      optionen: [
        "Migrationshintergrund bezieht sich auf den Pass, Staatsangehörigkeit auf die Eltern.",
        "Migrationshintergrund bedeutet, dass beide Elternteile im Ausland geboren wurden – unabhängig vom Pass; Staatsangehörigkeit bezieht sich nur darauf, ob ein österreichischer Pass vorliegt.",
        "Beide Begriffe bezeichnen genau dieselbe Personengruppe.",
        "Migrationshintergrund gilt nur für EU-BürgerInnen, Staatsangehörigkeit für alle."
      ],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "11.1 Österreichs Bevölkerung heute",
      frage: "Wenn eine Person eingebürgert wird, sinkt dadurch automatisch der Ausländeranteil in der Statistik, während der Anteil mit Migrationshintergrund gleich bleibt.",
      richtig: true
    },

    // ===== 11.2 Alterung und Generationenvertrag =====
    {
      type: "mc",
      unterkapitel: "11.2 Alterung und Generationenvertrag",
      frage: "Was besagt der Generationenvertrag im österreichischen Pensionssystem?",
      optionen: [
        "Jede Person spart selbst für die eigene Pension an.",
        "Die Pensionen der Ruhestehenden werden aus den Beiträgen der aktuell Erwerbstätigen bezahlt.",
        "Der Staat zahlt Pensionen ausschließlich aus Steuern auf Erbschaften.",
        "Pensionen werden von privaten Versicherungen finanziert."
      ],
      richtig: 1
    },
    {
      type: "ordering",
      unterkapitel: "11.2 Alterung und Generationenvertrag",
      frage: "Bringe die Wirkungskette der Alterung in die richtige Reihenfolge.",
      elemente: [
        "Niedrige Fertilitätsrate über Jahrzehnte",
        "Immer weniger junge Menschen rücken nach",
        "Zahl der Beitragszahlenden sinkt",
        "Druck auf das Pensionssystem steigt"
      ]
    },

    // ===== 11.3 Zuwanderungsland Österreich =====
    {
      type: "mc",
      unterkapitel: "11.3 Zuwanderungsland Österreich",
      frage: "Welche Voraussetzung gilt in Österreich in der Regel für eine Einbürgerung?",
      optionen: [
        "Ein rechtmäßiger und ununterbrochener Aufenthalt von mindestens zehn Jahren sowie ein Einbürgerungstest.",
        "Ein Aufenthalt von mindestens zwei Jahren ohne weitere Bedingungen.",
        "Ausschließlich der Nachweis eines unbefristeten Arbeitsplatzes.",
        "Die Geburt eines Kindes in Österreich."
      ],
      richtig: 0
    },
    {
      type: "matching",
      unterkapitel: "11.3 Zuwanderungsland Österreich",
      frage: "Ordne jede Zuwanderungsphase dem passenden Ereignis zu.",
      paare: [
        { links: "Anwerbung von Arbeitskräften ab den 1960er-Jahren", rechts: "Die Bundeswirtschaftskammer wirbt Arbeitskräfte in Spanien und Italien an" },
        { links: "Flüchtlingsbewegung nach 1956", rechts: "Nach der Niederschlagung eines Aufstands gegen die kommunistische Diktatur kommen Flüchtlinge" },
        { links: "Zuwanderung nach dem Fall des Eisernen Vorhangs", rechts: "Die ausländische Wohnbevölkerung wächst sprunghaft um über 700 000 Personen" },
        { links: "Asylzuwanderung ab 2015", rechts: "Die Zahl der Asylsuchenden steigt vor allem wegen des Bürgerkriegs in Syrien stark an" }
      ]
    },

    // ===== 11.4 Zentralräume, Speckgürtel und Abwanderung =====
    {
      type: "mc",
      unterkapitel: "11.4 Zentralräume, Speckgürtel und Abwanderung",
      frage: "Welches Bundesland verfügt laut Buch als einziges über keinen eigenen Zentralraum?",
      optionen: ["Kärnten", "Burgenland", "Vorarlberg", "Salzburg"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "11.4 Zentralräume, Speckgürtel und Abwanderung",
      frage: "Zu den Hauptursachen der Abwanderung aus ländlichen Gebieten zählen laut Buch der Mangel an Arbeits- und Ausbildungsmöglichkeiten sowie zu große Pendeldistanzen in die Zentralräume.",
      richtig: true
    },

    // ===== 11.5 Wien – von der Weltstadt zur wachsenden Metropole =====
    {
      type: "mc",
      unterkapitel: "11.5 Wien – von der Weltstadt zur wachsenden Metropole",
      frage: "Was war das Glacis, das nach dem Abriss der Wiener Stadtmauer 1858 bebaut wurde?",
      optionen: [
        "Eine rund 600 m breite Grünfläche außerhalb der Stadtmauer, die aus militärstrategischen Gründen unverbaut bleiben musste.",
        "Ein Stadtteil außerhalb der heutigen Stadtgrenzen.",
        "Der historische Name der Wiener Innenstadt.",
        "Ein früherer Name der Donau in Wien."
      ],
      richtig: 0
    },

    // ===== 12.1 Wirtschaft im Überblick und Besonderheiten =====
    {
      type: "ordering",
      unterkapitel: "12.1 Wirtschaft im Überblick",
      frage: "Bringe die Ereignisse der österreichischen Wirtschaftsgeschichte nach 1945 in die richtige zeitliche Reihenfolge.",
      elemente: [
        "„Wirtschaftswunder\": enormer wirtschaftlicher Aufschwung setzt ein",
        "Erdölkrise trifft auch Österreich",
        "Wandel zur Dienstleistungsgesellschaft, Privatisierungen nehmen zu",
        "Beitritt Österreichs zur Europäischen Union",
        "EU-Osterweiterung um zehn Staaten"
      ]
    },
    {
      type: "matching",
      unterkapitel: "12.1 Wirtschaft im Überblick",
      frage: "Ordne jede Besonderheit der österreichischen Wirtschaft der passenden Beschreibung zu.",
      paare: [
        { links: "Sozialpartnerschaft", rechts: "Wirtschafts- und Arbeitnehmervertretungen suchen im Vorhinein Konsens, etwa bei Lohnfragen" },
        { links: "Ökosoziale Marktwirtschaft", rechts: "Balance im Dreieck Wirtschaft – sozialer Friede – Ökologie" },
        { links: "KMU", rechts: "Weniger als 250 Beschäftigte und höchstens 50 Mio. Euro Jahresumsatz" },
        { links: "Verstaatlichte Betriebe", rechts: "Unternehmen mit Staatsanteil, nach 1945 prägend, heute weitgehend privatisiert" }
      ]
    },

    // ===== 12.2 Landwirtschaft im Wandel =====
    {
      type: "mc",
      unterkapitel: "12.2 Landwirtschaft im Wandel",
      frage: "Wodurch wurde die Entagrarisierung (starker Rückgang der Beschäftigten in der Landwirtschaft) trotz gleichbleibender bzw. steigender Produktion überhaupt möglich?",
      optionen: [
        "Durch die rasche Mechanisierung der Landwirtschaft.",
        "Durch den vollständigen Import aller Lebensmittel.",
        "Durch die Aufgabe der meisten landwirtschaftlichen Flächen.",
        "Durch ein EU-weites Verbot von Kleinbetrieben."
      ],
      richtig: 0
    },
    {
      type: "tf",
      unterkapitel: "12.2 Landwirtschaft im Wandel",
      frage: "Ein Haupterwerbsbetrieb liegt vor, wenn mehr als 50 % des Einkommens aus der Landwirtschaft stammen; bei einem Nebenerwerbsbetrieb sind es weniger als 50 %.",
      richtig: true
    },

    // ===== 12.3 Industriestandort und Standortfaktoren =====
    {
      type: "mc",
      unterkapitel: "12.3 Industriestandort und Standortfaktoren",
      frage: "Was versteht man unter einer wirtschaftlichen Monostruktur?",
      optionen: [
        "Eine sehr einseitige Wirtschaftsstruktur, bei der ein Standort oder eine Region von einem einzigen Wirtschaftsbereich dominiert wird.",
        "Eine Region mit besonders vielen unterschiedlichen Branchen.",
        "Ein Zusammenschluss mehrerer Unternehmen einer Branche zur gemeinsamen Forschung.",
        "Die Konzentration der gesamten Industrie eines Landes in der Hauptstadt."
      ],
      richtig: 0
    },

    // ===== 12.4 Tourismus =====
    {
      type: "ordering",
      unterkapitel: "12.4 Tourismus",
      frage: "Bringe die vier Phasen der Tourismusgeschichte Österreichs in die richtige chronologische Reihenfolge.",
      elemente: [
        "Neubewertung der Natur, Reisen der britischen Oberschicht (1780–1870)",
        "Schlüsselinnovation Eisenbahn, Sommerfrische von Adel und Bürgertum (1870–1914)",
        "Weltkriege beenden die Sommerfrische, kurzes Zwischenhoch in den 1920er-Jahren (1914–1950)",
        "Siegeszug des Automobils, Beginn des Wintermassentourismus (ab 1950)"
      ]
    },
    {
      type: "mc",
      unterkapitel: "12.4 Tourismus",
      frage: "Warum war die Eisenbahn die entscheidende Schlüsselinnovation für den Alpentourismus?",
      optionen: [
        "Weil sie erstmals eine rasche, bequeme und leistbare Anreise in die Alpen für breitere Bevölkerungsschichten ermöglichte.",
        "Weil sie ausschließlich für den Gütertransport genutzt wurde.",
        "Weil sie den Bau von Schutzhütten überflüssig machte.",
        "Weil sie nur für Reisen ins Ausland genutzt werden konnte."
      ],
      richtig: 0
    },

    // ===== 12.5 Energiewirtschaft =====
    {
      type: "mc",
      unterkapitel: "12.5 Energiewirtschaft",
      frage: "Wie nennt man ein Kraftwerk, das in Zeiten von Stromüberschuss Wasser in einen höher gelegenen Speicher pumpt und es bei Bedarf wieder ablässt?",
      optionen: ["Laufkraftwerk", "Pumpspeicherkraftwerk", "Gezeitenkraftwerk", "Windkraftwerk"],
      richtig: 1
    },

    // ===== 12.6 Raumplanung und Infrastruktur =====
    {
      type: "matching",
      unterkapitel: "12.6 Raumplanung und Infrastruktur",
      frage: "Ordne jede Ebene der Raumordnung ihrer Zuständigkeit bzw. Bedeutung zu.",
      paare: [
        { links: "Raumordnung (konzeptionelle Ebene)", rechts: "Zuständigkeit der Bundesländer über Landesraumordnungsprogramme" },
        { links: "Örtliche Raumordnung", rechts: "Gemeinden erlassen den Flächenwidmungsplan samt Entwicklungskonzept" },
        { links: "Rote Gefahrenzone", rechts: "Siedlungs- und Verkehrsnutzung ist faktisch nicht möglich – Bauverbot" },
        { links: "Gelbe Gefahrenzone", rechts: "Beschädigung von Objekten möglich, aber unter Auflagen beherrschbar" }
      ]
    },
    {
      type: "tf",
      unterkapitel: "12.6 Raumplanung und Infrastruktur",
      frage: "Bauland erzielt im Verkauf typischerweise einen deutlich höheren Wert als Grünland – das ist ein wichtiger wirtschaftlicher Grund für Interessenskonflikte bei Umwidmungen.",
      richtig: true
    }
  ]
};
