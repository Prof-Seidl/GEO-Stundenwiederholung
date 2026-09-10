// Fragenkatalog Kapitel 8 – Die Europäische Union
// Geospots HAK, 2. Jahrgang
// Fragetypen: "mc" (Multiple Choice), "tf" (Wahr/Falsch), "matching" (Zuordnung), "ordering" (Reihenfolge)
// Jede Frage ist 5 Punkte wert -> 20 Fragen = 100 Punkte gesamt

const QUIZ_DATA = {
  kapitel: "8",
  titel: "Kapitel 8 – Die Europäische Union",
  punkteProFrage: 5,
  fragen: [
    // ===== 8.1 Entstehung der EU – ein Friedensprojekt =====
    {
      type: "mc",
      unterkapitel: "8.1 Entstehung der EU – ein Friedensprojekt",
      frage: "Welche zwei Rohstoffe standen 1951 im Zentrum der Europäischen Gemeinschaft für Kohle und Stahl (EGKS)?",
      optionen: ["Kohle und Stahl", "Erdöl und Erdgas", "Getreide und Fleisch", "Gold und Silber"],
      richtig: 0
    },
    {
      type: "tf",
      unterkapitel: "8.1 Entstehung der EU – ein Friedensprojekt",
      frage: "Die EGKS wurde gegründet, um Kohle und Stahl gemeinsam zu verwalten und damit ein erneutes heimliches Aufrüsten zwischen Deutschland und Frankreich unmöglich zu machen.",
      richtig: true
    },
    {
      type: "ordering",
      unterkapitel: "8.1 Entstehung der EU – ein Friedensprojekt",
      frage: "Bringe die folgenden EU-Verträge in die richtige chronologische Reihenfolge.",
      elemente: [
        "Vertrag von Paris (EGKS)",
        "Vertrag von Lissabon (2009)"
        "Römische Verträge (EWG und Euratom)",
        "Vertrag von Maastricht (1993)",
        
      ]
    },

    // ===== 8.2 Die Erweiterung der EU =====
    {
      type: "mc",
      unterkapitel: "8.2 Die Erweiterung der EU",
      frage: "Wie viele Staaten traten im Rahmen der Osterweiterung 2004 auf einmal der EU bei?",
      optionen: ["6", "10", "12", "15"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "8.2 Die Erweiterung der EU",
      frage: "Welches Ereignis gilt bis heute als einziger Austritt eines Mitgliedstaates aus der EU?",
      optionen: ["Grönlands Austritt 1985", "Brexit 2020", "Norwegens Ablehnung 1994", "Beitritt der DDR 1990"],
      richtig: 1
    },
    {
      type: "matching",
      unterkapitel: "8.2 Die Erweiterung der EU",
      frage: "Ordne jedes Kopenhagener Kriterium (1993) der passenden Beschreibung zu.",
      paare: [
        { links: "Politisches Kriterium", rechts: "Stabile Institutionen, Demokratie, Rechtsstaatlichkeit, Menschenrechte und Minderheitenschutz" },
        { links: "Wirtschaftliches Kriterium", rechts: "Eine funktionierende Marktwirtschaft, die dem Wettbewerb im Binnenmarkt standhält" },
        { links: "Rechtliches Kriterium", rechts: "Fähigkeit, den gesamten EU-Rechtsbestand (Acquis communautaire) zu übernehmen" }
      ]
    },
    {
      type: "ordering",
      unterkapitel: "8.2 Die Erweiterung der EU",
      frage: "Bringe die Schritte eines EU-Beitrittsverfahrens in die richtige Reihenfolge.",
      elemente: [
        "Beitrittsgesuch und Verleihung des Kandidatenstatus",
        "Beitrittsverhandlungen – Erfüllung der Kopenhagener Kriterien",
        "Beitritt – Zustimmung aller Mitgliedstaaten und des Europäischen Parlaments"
      ]
    },

    // ===== 8.3 Wie die EU funktioniert =====
    {
      type: "mc",
      unterkapitel: "8.3 Wie die EU funktioniert",
      frage: "Welches EU-Organ besitzt als einziges das Initiativrecht für Gesetzesvorschläge?",
      optionen: ["Europäischer Rat", "Rat der EU (Ministerrat)", "Europäische Kommission", "Europäisches Parlament"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "8.3 Wie die EU funktioniert",
      frage: "Seit welchem Jahr wird das Europäische Parlament direkt von den Bürgerinnen und Bürgern gewählt?",
      optionen: ["1957", "1979", "1993", "2009"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "8.3 Wie die EU funktioniert",
      frage: "Der Europarat ist eine Institution der Europäischen Union.",
      richtig: false
    },
    {
      type: "matching",
      unterkapitel: "8.3 Wie die EU funktioniert",
      frage: "Ordne jedes EU-Organ seiner passenden Funktion zu.",
      paare: [
        { links: "Europäisches Parlament", rechts: "Direkt gewählt, teilt sich die Gesetzgebung mit dem Rat der EU" },
        { links: "Rat der EU (Ministerrat)", rechts: "Fachminister:innen der Mitgliedstaaten, Vorsitz wechselt halbjährlich" },
        { links: "Europäische Kommission", rechts: "Hat als einzige das Initiativrecht für Gesetzesvorschläge" },
        { links: "Europäischer Rat", rechts: "Staats- und Regierungschefs, legt langfristige Leitlinien fest" },
        { links: "Europäischer Gerichtshof", rechts: "Höchste rechtliche Instanz der EU" }
      ]
    },

    // ===== 8.4 Binnenmarkt, Budget und Euro =====
    {
      type: "mc",
      unterkapitel: "8.4 Binnenmarkt, Budget und Euro",
      frage: "Welche der folgenden Optionen ist KEINE der vier Grundfreiheiten des EU-Binnenmarktes?",
      optionen: ["Freier Warenverkehr", "Freier Kapitalverkehr", "Freizügigkeit der Steuerpolitik", "Freier Dienstleistungsverkehr"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "8.4 Binnenmarkt, Budget und Euro",
      frage: "In welchem Jahr wurde der Euro als Bargeld eingeführt?",
      optionen: ["1993", "1999", "2002", "2007"],
      richtig: 2
    },
    {
      type: "matching",
      unterkapitel: "8.4 Binnenmarkt, Budget und Euro",
      frage: "Ordne die Begriffe rund um den Euro den passenden Erklärungen zu.",
      paare: [
        { links: "EZB", rechts: "Steuert die Geldpolitik der Eurozone, Sitz in Frankfurt am Main" },
        { links: "ECU", rechts: "Vorläufer-Währungseinheit, 1999 im Verhältnis 1:1 durch den Euro ersetzt" },
        { links: "Konvergenzkriterien", rechts: "Bedingungen (u. a. Budgetdefizit, Staatsverschuldung, Inflation), die ein Staat für die Euro-Einführung erfüllen muss" },
        { links: "Leitzins", rechts: "Wichtigstes Instrument der EZB zur Steuerung der Inflation" }
      ]
    },

    // ===== 8.5 Regional- und Kohäsionspolitik =====
    {
      type: "mc",
      unterkapitel: "8.5 Regional- und Kohäsionspolitik",
      frage: "Wie viele NUTS-2-Regionen (Bundesländer) gibt es in Österreich?",
      optionen: ["3", "9", "27", "35"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "8.5 Regional- und Kohäsionspolitik",
      frage: "Bei der Kofinanzierung übernimmt die EU stets die gesamten Kosten eines geförderten Projekts allein.",
      richtig: false
    },
    {
      type: "mc",
      unterkapitel: "8.5 Regional- und Kohäsionspolitik",
      frage: "Welcher Fonds unterstützt seit den 1970er-Jahren vor allem die wirtschaftliche Entwicklung strukturschwacher Regionen?",
      optionen: ["Europäischer Sozialfonds (ESF)", "Europäischer Fonds für regionale Entwicklung (EFRE)", "Kohäsionsfonds", "Europäischer Garantiefonds für Landwirtschaft"],
      richtig: 1
    },

    // ===== 8.6/8.7 Verkehr, Energie und der Green Deal =====
    {
      type: "mc",
      unterkapitel: "8.6/8.7 Verkehr, Energie und der Green Deal",
      frage: "Bis zu welchem Jahr will die EU im Rahmen des European Green Deal der erste klimaneutrale Kontinent werden?",
      optionen: ["2030", "2040", "2050", "2100"],
      richtig: 2
    },
    {
      type: "tf",
      unterkapitel: "8.6/8.7 Verkehr, Energie und der Green Deal",
      frage: "Die Transeuropäischen Netze (TEN-V) wurden ursprünglich vor allem entwickelt, um den freien Waren- und Personenverkehr im Binnenmarkt durch Verkehrsinfrastruktur zu ermöglichen.",
      richtig: true
    },
    {
      type: "ordering",
      unterkapitel: "8.6/8.7 Verkehr, Energie und der Green Deal",
      frage: "Bringe die Ereignisse der Energiekrise ab 2022 in die richtige Reihenfolge.",
      elemente: [
        "Russland überfällt am 24. Februar 2022 die Ukraine",
        "Die EU verhängt Sanktionen und liefert Waffen",
        "Russland setzt Erdöl- und Erdgaslieferungen als Druckmittel ein",
        "Die Weltmarktpreise steigen stark, die Inflationsrate klettert"
      ]
    }
  ]
};
