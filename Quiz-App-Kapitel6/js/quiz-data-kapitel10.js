// Fragenkatalog Kapitel 10 – Grundlagen und Naturraum Österreichs
// Geospots HAK, 2. Jahrgang
// Fragetypen: "mc" (Multiple Choice), "tf" (Wahr/Falsch), "matching" (Zuordnung), "ordering" (Reihenfolge)
// Jede Frage ist 5 Punkte wert -> 20 Fragen = 100 Punkte gesamt

const QUIZ_DATA = {
  kapitel: "10",
  titel: "Kapitel 10 – Grundlagen und Naturraum Österreichs",
  punkteProFrage: 5,
  fragen: [
    // ===== 10.1 Geopolitische Lage =====
    {
      type: "mc",
      unterkapitel: "10.1 Geopolitische Lage",
      frage: "An wie viele Staaten grenzt Österreich?",
      optionen: ["6", "7", "8", "9"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "10.1 Geopolitische Lage",
      frage: "Seit welchem Jahr verläuft die Staatsgrenze zu Italien am Alpenhauptkamm beiderseits des Brenners?",
      optionen: ["1918", "1919", "1938", "1955"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "10.1 Geopolitische Lage",
      frage: "Wovon leitet sich der Name „Burgenland“ ab?",
      optionen: [
        "Von einer bekannten Burg in Eisenstadt",
        "Von den ungarischen Komitaten, deren Hauptstädte alle auf „-burg“ enden",
        "Vom Vertrag von St. Germain, in dem der Name erstmals verwendet wurde",
        "Von den zahlreichen Burgenruinen entlang der Grenze zu Ungarn"
      ],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "10.1 Geopolitische Lage",
      frage: "Der Vertrag von St. Germain, der die Grenzen Österreichs neu festlegte, wurde 1919 unterzeichnet.",
      richtig: true
    },
    {
      type: "matching",
      unterkapitel: "10.1 Geopolitische Lage",
      frage: "Ordne die Begriffe den passenden Beschreibungen zu.",
      paare: [
        { links: "Vertrag von St. Germain", rechts: "Friedensvertrag von 1919, der die Grenzen Österreichs festlegte" },
        { links: "Neutralitätserklärung", rechts: "wurde am 26. Oktober 1955 beschlossen" },
        { links: "Burgenland", rechts: "neues Bundesland, benannt nach ungarischen Komitaten mit Hauptstädten auf „-burg“" },
        { links: "Ödenburg (Sopron)", rechts: "blieb nach einer Volksabstimmung 1921 bei Ungarn, obwohl als Landeshauptstadt vorgesehen" }
      ]
    },
    {
      type: "ordering",
      unterkapitel: "10.1 Geopolitische Lage",
      frage: "Bringe die folgenden Ereignisse der österreichischen Geschichte in die richtige zeitliche Reihenfolge.",
      elemente: [
        "Gründung der Ersten Republik (1918)",
        "Vertrag von St. Germain (1919)",
        "Anschluss an das Deutsche Reich (1938)",
        "Staatsvertrag und Neutralitätserklärung (1955)"
      ]
    },

    // ===== 10.2 Gliederung und Großlandschaften =====
    {
      type: "mc",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Wie viele Gemeinden gibt es in Österreich laut Skriptum ungefähr?",
      optionen: ["573", "2 093", "4 350", "9 105"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Wie hoch ist der Flächenanteil der Ostalpen an der Gesamtfläche Österreichs?",
      optionen: ["37 %", "52 %", "63 %", "78 %"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Ab welcher Reliefenergie spricht man laut Skriptum von Hochgebirge?",
      optionen: ["500 m", "1 000 m", "1 500 m", "2 000 m"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Woraus bestehen die Nördlichen und Südlichen Kalkalpen laut der Großlandschaften-Matrix überwiegend?",
      optionen: [
        "Granit und Gneis",
        "Kalk und Dolomit (mesozoische Karbonatgesteine)",
        "Vulkanisches Gestein",
        "Löss"
      ],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Die Böhmische Masse ist Teil der Alpen.",
      richtig: false
    },
    {
      type: "matching",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Ordne die Fachbegriffe den passenden Erklärungen zu.",
      paare: [
        { links: "Reliefenergie", rechts: "Höhenunterschied zwischen dem höchsten und dem tiefsten Punkt in einem Gebiet" },
        { links: "Tauernfenster", rechts: "Bereich, in dem tiefer liegende (penninische) Gesteinsdecken an der Oberfläche sichtbar werden" },
        { links: "Löss", rechts: "während der Kaltzeiten abgelagertes Feinmaterial, aus dem fruchtbare Schwarzerdeböden entstehen" },
        { links: "Karst", rechts: "verkarstungsfähiges Gestein, das als Trinkwasserquelle für die Wiener Hochquellenleitung dient" }
      ]
    },
    {
      type: "ordering",
      unterkapitel: "10.2 Gliederung und Großlandschaften",
      frage: "Bringe die folgenden Schritte der Alpenentstehung in die richtige Reihenfolge.",
      elemente: [
        "Granit dringt in die Erdkruste ein",
        "Ablagerung von Kalk und Dolomit am Rand der Tethys (Trias)",
        "Der Penninische Ozean öffnet sich (Jura)",
        "Kollision der Kontinentalplatten nach vollständiger Subduktion (Paläogen)"
      ]
    },

    // ===== 10.3 Klima, Wetter, Naturgefahren =====
    {
      type: "mc",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "In welcher Klimazone liegt Österreich?",
      optionen: ["subtropisch", "kühlgemäßigt", "polar", "arid"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "Welche beiden Druckgebilde erzeugen die typische Westströmung über Mitteleuropa?",
      optionen: [
        "Azorenhoch und Islandtief",
        "Sibirisches Hoch und Golftief",
        "Subtropenhoch und Monsuntief",
        "Alpenhoch und Adriatief"
      ],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "Um wie viel Grad Celsius erwärmt sich absinkende Luft beim Föhn auf der Leeseite trockenadiabatisch je 100 Höhenmeter?",
      optionen: ["0,6 °C", "1 °C", "1,5 °C", "2 °C"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "Auf der Luvseite der Alpen entsteht Steigungsregen, auf der Leeseite entsteht der Föhn.",
      richtig: true
    },
    {
      type: "tf",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "Eine Fließlawine (Schneebrett) ist deutlich schneller als eine Staublawine (Lockerschneelawine).",
      richtig: false
    },
    {
      type: "matching",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "Ordne die Klimastationen ihrer naturräumlichen Zuordnung zu.",
      paare: [
        { links: "Klagenfurt", rechts: "inneralpines Becken" },
        { links: "Sölden", rechts: "Zentralalpen (Hochgebirgsstufe)" },
        { links: "Neusiedl am See", rechts: "pannonischer Osten" },
        { links: "Bad Ischl", rechts: "Nordalpen" }
      ]
    },
    {
      type: "ordering",
      unterkapitel: "10.3 Klima, Wetter, Naturgefahren",
      frage: "Bringe die folgenden Schritte der Föhnentstehung in die richtige Reihenfolge.",
      elemente: [
        "Feuchte Luft strömt gegen die Luvseite der Alpen und steigt auf",
        "Beim Aufsteigen kühlt die Luft ab, es bildet sich Steigungsregen",
        "Über dem Alpenhauptkamm ist die Luft weitgehend entfeuchtet",
        "Auf der Leeseite sinkt die trockene Luft ab und erwärmt sich stark"
      ]
    }
  ]
};
