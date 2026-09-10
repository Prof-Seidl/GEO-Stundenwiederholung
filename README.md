[README.md](https://github.com/user-attachments/files/32066325/README.md)
# Geografie-Quiz – Kapitel 6

Summatives Quiz-Tool für die 2. Jahrgang-HAK-Geografie (Geospots HAK). Diese erste
Version deckt **Kapitel 6 – Zentren der Weltwirtschaft außerhalb Europas** ab und ist
so aufgebaut, dass weitere Kapitel später einfach ergänzt werden können.

## Was die App kann

- Namensabfrage vor Quizbeginn
- 20 Multiple-Choice-/Wahr-Falsch-Fragen zu Kapitel 6 (100 Punkte gesamt)
- Sofortiges Feedback nach jeder Frage
- Speicherung jedes Ergebnisses in einer Online-Datenbank (Firebase Firestore)
- Öffentliche Bestenliste (Top 10) pro Kapitel
- Passwortgeschützter Lehrer-Bereich mit allen Ergebnissen
- Export aller Ergebnisse als Excel-Datei (.xlsx) zum Eintragen in iDoceo

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

1. `js/quiz-data-kapitel6.js` kopieren zu z. B. `js/quiz-data-kapitel7.js` und
   die Variable in `KAPITEL_7_QUIZ` umbenennen, `kapitel: "7"` setzen und die
   Fragen austauschen.
2. `kapitel6.html` kopieren zu `kapitel7.html`, den Skript-Verweis auf
   `quiz-data-kapitel7.js` anpassen und in `js/quiz.js` (bzw. einer Kopie davon
   als `js/quiz-kapitel7.js`) die Variable `window.KAPITEL_6_QUIZ` durch
   `window.KAPITEL_7_QUIZ` ersetzen.
3. In `index.html` einen weiteren Eintrag in der Kapitelliste ergänzen.
4. In `lehrer.js` kann `KAPITEL` austauschbar gemacht werden (z. B. über ein
   Dropdown), falls Sie alle Kapitel an einer Stelle einsehen möchten – bei
   Bedarf gerne melden, das lässt sich leicht ergänzen.

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
index.html                 Startseite / Kapitelauswahl
kapitel6.html               Quiz-Seite Kapitel 6
lehrer.html                 Lehrer-Bereich (Passwort, Ergebnisse, Export)
css/style.css                Gemeinsames Design
js/firebase-config.js        Ihre Firebase-Zugangsdaten (einmalig ausfüllen)
js/quiz-data-kapitel6.js     Fragenkatalog Kapitel 6
js/quiz.js                   Quiz-Ablauflogik
js/lehrer.js                 Lehrer-Dashboard-Logik inkl. Excel-Export
firestore.rules              Sicherheitsregeln für die Firebase-Datenbank
```
