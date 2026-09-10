# Geografie-Quiz – mehrere Kapitel

Summatives Quiz-Tool für die 2. Jahrgang-HAK-Geografie (Geospots HAK). Die App deckt
aktuell fünf Kapitel ab und ist so aufgebaut, dass weitere Kapitel jederzeit einfach
ergänzt werden können:

- Kapitel 6 – Zentren der Weltwirtschaft außerhalb Europas
- Kapitel 7 – Europa im Überblick
- Kapitel 8 – Die Europäische Union
- Kapitel 10 – Grundlagen und Naturraum Österreichs
- Kapitel 11+12 – Österreichs Bevölkerung & Wirtschaftsstandort Österreich

Auf der Startseite (`index.html`) wählen die Schüler:innen einfach das gewünschte
Kapitel aus und starten direkt mit der Wiederholung.

## Nur EIN Firebase-Projekt für alle Kapitel

Sie brauchen **kein eigenes Firebase-Projekt pro Kapitel**. Es gibt genau ein
gemeinsames Firebase/Firestore-Setup für die gesamte App (einmalig einrichten, siehe
unten). Jedes gespeicherte Ergebnis trägt intern ein `kapitel`-Feld (z. B. `"7"` oder
`"11_12"`); Bestenliste und Lehrer-Dashboard filtern automatisch danach. Neue Kapitel
später hinzuzufügen erfordert daher **keine** neue Firebase-Konfiguration – nur eine
neue Fragenkatalog-Datei und eine neue `kapitelX.html`-Seite (siehe Abschnitt
"Weitere Kapitel ergänzen").

## Was die App kann

- Namensabfrage vor Quizbeginn
- Kapitelauswahl auf der Startseite
- Pro Kapitel 20 Fragen (100 Punkte gesamt), in vier Fragetypen für mehr Abwechslung:
  - **Multiple Choice** (4 Antwortmöglichkeiten)
  - **Wahr/Falsch**
  - **Zuordnung** – Begriffe werden per Dropdown den passenden Beschreibungen zugeordnet
  - **Reihenfolge** – durchmischte Elemente werden per Auf/Ab-Knöpfen in die richtige
    Reihenfolge gebracht (z. B. chronologische Ereignisse, Ablaufschritte)
  - Bei Zuordnung und Reihenfolge gibt es **Teilpunkte** (z. B. 3 von 4 Zuordnungen
    richtig = 75 % der Punkte dieser Frage); bei Multiple Choice und Wahr/Falsch gibt
    es sofortiges Feedback nach jedem Klick, bei Zuordnung/Reihenfolge über den Button
    "Antwort prüfen"
- Speicherung jedes Ergebnisses in einer Online-Datenbank (Firebase Firestore)
- Öffentliche Bestenliste (Top 10) pro Kapitel
- Passwortgeschützter Lehrer-Bereich mit Kapitelauswahl (auch "Alle Kapitel" auf
  einen Blick), allen Ergebnissen und Statistiken
- Export der Ergebnisse als Excel-Datei (.xlsx) zum Eintragen in iDoceo – wahlweise
  pro Kapitel oder als Gesamtexport aller Kapitel

## Ihr Lehrer-Passwort

```
qG3ScDcoYQ_6
```

Bewahren Sie es gut auf. Sie können es jederzeit ändern (siehe Abschnitt
"Passwort ändern" weiter unten).

---

## Einmaliges Setup (ca. 15 Minuten)

Die App selbst ist eine reine "statische" Website (nur HTML/CSS/JavaScript), die
GitHub Pages kostenlos hosten kann. Damit Ergebnisse, Bestenliste und
Lehrer-Export aber **über alle Schüler-Geräte hinweg** funktionieren, braucht es
zusätzlich einen kleinen kostenlosen Online-Speicher – dafür wird hier
**Firebase** (ein Google-Produkt) verwendet. GitHub Pages allein kann keine
Daten speichern.

### Schritt 1 – Firebase-Projekt anlegen

1. Gehen Sie auf https://console.firebase.google.com und melden Sie sich mit
   einem Google-Konto an (ein privates oder das Schul-Konto funktioniert).
2. Klicken Sie auf **"Projekt hinzufügen"**, vergeben Sie einen Namen (z. B.
   `geo-quiz-hak-feldbach`) und folgen Sie dem Assistenten (Google Analytics
   können Sie deaktivieren, wird nicht benötigt).
3. Im Projekt links im Menü **Build → Firestore Database** öffnen →
   **"Datenbank erstellen"** → Standort z. B. `eur3 (Europa)` wählen →
   **Produktionsmodus** auswählen (die Sicherheitsregeln liefern wir gleich mit).
4. Im Reiter **"Regeln"** der Firestore-Datenbank den gesamten Inhalt löschen
   und durch den Inhalt der mitgelieferten Datei `firestore.rules` ersetzen,
   dann auf **"Veröffentlichen"** klicken.

### Schritt 2 – Web-App verbinden

1. Zurück auf der Projekt-Übersicht (Zahnrad-Symbol oben links →
   **Projekteinstellungen**).
2. Unter "Meine Apps" auf das Symbol **`</>`** (Web) klicken.
3. Einen Spitznamen vergeben (z. B. "Geo-Quiz"), **nicht** "Firebase Hosting"
   ankreuzen, auf "App registrieren" klicken.
4. Es erscheint ein Codeblock mit `const firebaseConfig = { ... }`. Diesen
   kompletten Block kopieren.
5. Öffnen Sie die Datei `js/firebase-config.js` in diesem Projekt und ersetzen
   Sie den Platzhalter-Block durch den kopierten `firebaseConfig`-Block
   (die Zeile `firebase.initializeApp(...)` darunter bleibt unverändert stehen).

### Schritt 3 – Auf GitHub veröffentlichen

1. Erstellen Sie auf https://github.com ein neues, öffentliches Repository
   (z. B. `geo-quiz`).
2. Laden Sie alle Dateien aus diesem Ordner in das Repository hoch (per
   GitHub-Weboberfläche "Add file → Upload files", oder per `git push`, wenn
   Ihnen das vertrauter ist).
3. Im Repository unter **Settings → Pages**: bei "Source" den Branch `main`
   und Ordner `/ (root)` auswählen, speichern.
4. Nach ein bis zwei Minuten ist die App unter
   `https://IHR-GITHUB-NAME.github.io/geo-quiz/` erreichbar.

### Schritt 4 – Testen

1. Öffnen Sie den Link, klicken Sie auf Kapitel 6, geben Sie einen Testnamen
   ein und schließen Sie das Quiz ab.
2. Öffnen Sie `lehrer.html`, melden Sie sich mit dem Passwort oben an – Ihr
   Testergebnis sollte in der Tabelle erscheinen.
3. Testen Sie den Excel-Export.

Danach können Sie den Link mit Ihrer Klasse teilen (z. B. per QR-Code oder in
Ihrem Lernmanagementsystem).

---

## Weitere Kapitel ergänzen

Dank des gemeinsamen `js/quiz.js` (das für alle Kapitel unverändert bleibt) ist ein
neues Kapitel in drei Schritten ergänzt:

1. Eine neue Datei `js/quiz-data-kapitelX.js` anlegen (siehe z. B.
   `js/quiz-data-kapitel7.js` als Vorlage). Sie muss eine globale Variable
   `QUIZ_DATA` definieren:
   ```js
   const QUIZ_DATA = {
     kapitel: "X",              // eindeutige Kennung, z. B. "9" oder "13_14"
     titel: "Kapitel X – ...",
     punkteProFrage: 5,
     fragen: [ /* siehe unten: vier mögliche Fragetypen */ ]
   };
   ```
   Mögliche Fragetypen in `fragen[]`:
   - `{ type: "mc", unterkapitel, frage, optionen: [4 Strings], richtig: Index }`
   - `{ type: "tf", unterkapitel, frage, richtig: true|false }`
   - `{ type: "matching", unterkapitel, frage, paare: [{links, rechts}, ...] }`
     (3–5 Paare, jedes `rechts` muss eindeutig zu genau einem `links` passen)
   - `{ type: "ordering", unterkapitel, frage, elemente: [...] }`
     (3–5 Elemente, **bereits in der richtigen Reihenfolge** im Array – die App
     mischt sie für die Anzeige selbst; nur für Inhalte mit eindeutiger Reihenfolge
     geeignet, z. B. Chronologien oder Ablaufschritte)
2. `kapitel6.html` kopieren zu `kapitelX.html` und nur anpassen: den Titel-Tag,
   den Badge- und Überschriftentext, die Bestenlisten-Überschrift sowie den
   Skript-Verweis auf `js/quiz-data-kapitelX.js`. **`js/quiz.js` bleibt
   unverändert** – die Engine erkennt Fragetypen und Punktestand automatisch.
3. In `index.html` einen weiteren `<a class="chapter-item">`-Eintrag ergänzen und
   in `js/lehrer.js` im `CHAPTERS`-Array eine Zeile mit `{ id: "X", label: "..." }`
   hinzufügen, damit das Kapitel im Lehrer-Dashboard auswählbar ist.

Ein neues Firebase-Projekt ist dafür **nicht** nötig (siehe oben).

## Passwort ändern

1. Neues Passwort ausdenken (z. B. ein Passwortgenerator).
2. Den SHA-256-Hash davon erzeugen, z. B. in der Browser-Konsole (F12) auf
   irgendeiner Seite:
   ```js
   crypto.subtle.digest("SHA-256", new TextEncoder().encode("IHR_NEUES_PASSWORT"))
     .then(buf => console.log(Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("")));
   ```
3. Den ausgegebenen Wert in `js/lehrer.js` in die Zeile `PASSWORT_HASH = "..."`
   eintragen und die Datei auf GitHub aktualisieren.

## Sicherheit – bitte lesen

Diese App ist für den Schulgebrauch gebaut (Quiz-Punkte, keine sensiblen
Daten). Zwei bewusste Vereinfachungen:

- **Bestenliste ist öffentlich lesbar**, damit sie ohne Anmeldung angezeigt
  werden kann. Gespeichert werden nur Name, Kapitel, Punkte und Zeitpunkt.
- **Das Lehrer-Passwort schützt nur die Ansicht** in `lehrer.html`, nicht den
  Datenbankzugriff selbst – wer technisch versiert genug ist, könnte die
  Ergebnisliste auch ohne Passwort direkt aus der Datenbank auslesen. Für
  Klassenquiz-Punkte ist das ein akzeptables Risiko. Sollten Sie eine
  strengere Absicherung wollen (z. B. echte Firebase-Anmeldung nur für Sie
  als Lehrperson), sagen Sie einfach Bescheid – das lässt sich nachrüsten.
- Ergebnisse können nach dem Speichern von niemandem mehr verändert oder
  gelöscht werden (siehe `firestore.rules`), das verhindert nachträgliches
  Frisieren von Punkten.

## Dateiübersicht

```
index.html                       Startseite / Kapitelauswahl
kapitel6.html                    Quiz-Seite Kapitel 6
kapitel7.html                    Quiz-Seite Kapitel 7
kapitel8.html                    Quiz-Seite Kapitel 8
kapitel10.html                   Quiz-Seite Kapitel 10
kapitel11_12.html                Quiz-Seite Kapitel 11+12
lehrer.html                      Lehrer-Bereich (Passwort, Kapitelauswahl, Ergebnisse, Export)
css/style.css                    Gemeinsames Design
js/firebase-config.js            Ihre Firebase-Zugangsdaten (einmalig ausfüllen, gilt für alle Kapitel)
js/quiz-data-kapitel6.js         Fragenkatalog Kapitel 6
js/quiz-data-kapitel7.js         Fragenkatalog Kapitel 7
js/quiz-data-kapitel8.js         Fragenkatalog Kapitel 8
js/quiz-data-kapitel10.js        Fragenkatalog Kapitel 10
js/quiz-data-kapitel11_12.js     Fragenkatalog Kapitel 11+12
js/quiz.js                       Gemeinsame Quiz-Ablauflogik (für alle Kapitel, inkl. aller 4 Fragetypen)
js/lehrer.js                     Lehrer-Dashboard-Logik inkl. Kapitelauswahl und Excel-Export
firestore.rules                  Sicherheitsregeln für die Firebase-Datenbank (gilt für alle Kapitel)
```
