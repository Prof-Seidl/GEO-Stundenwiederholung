// Fragenkatalog Kapitel 6 – Zentren der Weltwirtschaft außerhalb Europas
// Geospots HAK, 2. Jahrgang, Buch S. 136–162
// Jede Frage: type "mc" (Multiple Choice, eine richtige Antwort) oder "tf" (Wahr/Falsch)
// Jede Frage ist 5 Punkte wert -> 20 Fragen = 100 Punkte gesamt

const QUIZ_DATA = {
  kapitel: "6",
  titel: "Kapitel 6 – Zentren der Weltwirtschaft außerhalb Europas",
  punkteProFrage: 5,
  fragen: [
    // ===== 6.1 USA =====
    {
      type: "mc",
      unterkapitel: "6.1 USA",
      frage: "Ein Staat hat ein sehr hohes Gesamt-BIP, aber ein niedriges BIP pro Kopf. Was sagt das über den Wohlstand der Menschen dort aus?",
      optionen: [
        "Die Wirtschaftsleistung ist groß, verteilt sich aber auf sehr viele Menschen – der durchschnittliche Wohlstand ist gering.",
        "Jede Person im Land ist automatisch sehr wohlhabend.",
        "Das Land hat keine nennenswerte Wirtschaft.",
        "Der Gini-Koeffizient ist dadurch automatisch niedrig."
      ],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "6.1 USA",
      frage: "1867 kauften die USA ein riesiges Gebiet von Russland. Um welches Gebiet handelte es sich?",
      optionen: ["Louisiana", "Alaska", "Hawaii", "Kalifornien"],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "6.1 USA",
      frage: "Der bundesweite gesetzliche Mindestlohn in den USA liegt seit 2009 unverändert bei 7,25 US-Dollar pro Stunde.",
      richtig: true
    },
    {
      type: "mc",
      unterkapitel: "6.1 USA",
      frage: "Wie nennt man eine Weltordnung, in der mehrere etwa gleich starke Machtzentren die Weltpolitik bestimmen?",
      optionen: ["unipolar", "bipolar", "multipolar", "neutral"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "6.1 USA",
      frage: "Welche Kennzahl braucht man zusätzlich zum BIP pro Kopf, um die Verteilung des Wohlstands in einem Land zu beurteilen?",
      optionen: ["Inflationsrate", "Gini-Koeffizient", "Exportquote", "Wechselkurs"],
      richtig: 1
    },

    // ===== 6.2 Brasilien =====
    {
      type: "mc",
      unterkapitel: "6.2 Brasilien",
      frage: "Warum verlegte Brasilien seine Hauptstadt von Rio de Janeiro ins neu erbaute Brasília?",
      optionen: [
        "Um das Landesinnere zu erschließen und die überfüllte Küste zu entlasten.",
        "Weil Rio de Janeiro bei einem Erdbeben zerstört wurde.",
        "Auf Anordnung der Vereinten Nationen.",
        "Weil Brasília näher am Amazonas-Regenwald liegt und der Handel dadurch einfacher wurde."
      ],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "6.2 Brasilien",
      frage: "Warum konzentriert sich die Bevölkerung Brasiliens bis heute vor allem entlang der Atlantikküste?",
      optionen: [
        "Weil das Landesinnere unter Wasser steht.",
        "Das ist ein Erbe der portugiesischen Kolonisierung, die an der Küste begann.",
        "Weil dort das Klima am kältesten ist.",
        "Weil im Landesinneren strenge Einreisebeschränkungen gelten."
      ],
      richtig: 1
    },
    {
      type: "tf",
      unterkapitel: "6.2 Brasilien",
      frage: "Brasilien hat eine höhere Bevölkerungsdichte (EinwohnerInnen pro km²) als Österreich.",
      richtig: false
    },
    {
      type: "mc",
      unterkapitel: "6.2 Brasilien",
      frage: "Wie nennt man eine informelle, oft am Hang gelegene Armensiedlung in einer brasilianischen Großstadt?",
      optionen: ["Township", "Favela", "Homeland", "Sonderwirtschaftszone"],
      richtig: 1
    },

    // ===== 6.3 Republik Südafrika =====
    {
      type: "mc",
      unterkapitel: "6.3 Südafrika",
      frage: "Wie viele Hauptstädte hat die Republik Südafrika?",
      optionen: ["eine", "zwei", "drei", "vier"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "6.3 Südafrika",
      frage: "Welches Gesetz von 1913 gilt als einer der Grundsteine der Apartheid, weil es der schwarzen Bevölkerung den Landerwerb außerhalb zugewiesener Gebiete verbot?",
      optionen: ["Native Land Act", "Group Areas Act", "Bantu Education Act", "Immorality Act"],
      richtig: 0
    },
    {
      type: "tf",
      unterkapitel: "6.3 Südafrika",
      frage: "Nelson Mandela wurde 1990 von Präsident Frederik Willem de Klerk aus der Haft entlassen.",
      richtig: true
    },
    {
      type: "mc",
      unterkapitel: "6.3 Südafrika",
      frage: "Wie nannte man die während der Apartheid geschaffenen, formal 'unabhängigen', aber international nie anerkannten Gebiete für die schwarze Bevölkerung?",
      optionen: ["Homelands", "Townships", "Provinzen", "Kolonien"],
      richtig: 0
    },

    // ===== 6.4 Arabische Halbinsel =====
    {
      type: "mc",
      unterkapitel: "6.4 Arabische Halbinsel",
      frage: "Woher beziehen Städte wie Dubai ihr Trinkwasser, obwohl die Region kaum natürliche Süßwasserquellen hat?",
      optionen: [
        "Aus Meerwasserentsalzungsanlagen",
        "Aus importiertem Flaschenwasser",
        "Aus unterirdischen Gletschern",
        "Aus künstlich angelegten Flüssen"
      ],
      richtig: 0
    },
    {
      type: "tf",
      unterkapitel: "6.4 Arabische Halbinsel",
      frage: "Das hohe BIP pro Kopf der Golfstaaten bedeutet, dass jede dort lebende Person tatsächlich gleich wohlhabend ist.",
      richtig: false
    },
    {
      type: "mc",
      unterkapitel: "6.4 Arabische Halbinsel",
      frage: "Wie nennt man das globale Fördermaximum von Erdöl, nach dessen Überschreiten die weltweiten Fördermengen dauerhaft zurückgehen würden?",
      optionen: ["Peak Oil", "Ölkrise", "Ressourcenfluch", "Fracking-Boom"],
      richtig: 0
    },

    // ===== 6.5 VR China und Indien =====
    {
      type: "mc",
      unterkapitel: "6.5 China und Indien",
      frage: "Welche Reform leitete 1978 den wirtschaftlichen Aufstieg der Volksrepublik China ein?",
      optionen: [
        "Die Reform der Landwirtschaft: Überschüsse durften auf Märkten selbst verkauft werden.",
        "Der Beitritt zur Welthandelsorganisation.",
        "Die vollständige Privatisierung aller Staatsbetriebe.",
        "Die Einführung einer neuen Währung."
      ],
      richtig: 0
    },
    {
      type: "mc",
      unterkapitel: "6.5 China und Indien",
      frage: "Welche indische Stadt trägt wegen ihrer IT-Branche den Beinamen 'Indisches Silicon Valley'?",
      optionen: ["Mumbai", "Neu-Delhi", "Bangalore", "Kalkutta"],
      richtig: 2
    },
    {
      type: "mc",
      unterkapitel: "6.5 China und Indien",
      frage: "Wie nennt man die Wirtschaftsstrategie, mit der Indien ab den 1970er-Jahren den eigenen Markt durch hohe Zölle abschottete – mit wenig Erfolg?",
      optionen: ["Sonderwirtschaftszone", "Importsubstitution", "Freihandelsabkommen", "Rohstoffökonomie"],
      richtig: 1
    },
    {
      type: "mc",
      unterkapitel: "6.5 China und Indien",
      frage: "Wie heißt das chinesische Infrastrukturprojekt, das Handelswege über Land und See bis nach Europa sichern soll?",
      optionen: ["BRICS-Initiative", "Neue Seidenstraße", "Sonderwirtschaftszone Shenzhen", "Belt-Alliance"],
      richtig: 1
    }
  ]
};
