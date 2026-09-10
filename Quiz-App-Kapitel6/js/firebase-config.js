// =====================================================================
// FIREBASE-KONFIGURATION
// =====================================================================
// Diese Datei müssen Sie EINMALIG mit Ihren eigenen Firebase-Projektdaten
// befüllen. Eine Schritt-für-Schritt-Anleitung dazu steht in der README.md.
//
// So kommen Sie zu diesen Werten:
// 1. https://console.firebase.google.com öffnen, kostenloses Konto/Projekt anlegen
// 2. Projekteinstellungen (Zahnrad) -> "Meine Apps" -> Web-App hinzufügen (</>)
// 3. Den angezeigten "firebaseConfig"-Block hier unten einfügen
// =====================================================================

const firebaseConfig = {
  apiKey: "AIzaSyCO1ddkIfOc4KrcEWw1uDDXBGdT8yD9yKU",
  authDomain: "geo-stundenwiederholungen.firebaseapp.com",
  projectId: "geo-stundenwiederholungen",
  storageBucket: "geo-stundenwiederholungen.firebasestorage.app",
  messagingSenderId: "258593006343",
  appId: "1:258593006343:web:4cc995e06d2aff3b4c9ba2",
  measurementId: "G-D2NSKJX15K"
};

// Firebase initialisieren (wird von quiz.js und lehrer.js verwendet).
// "var" statt "const", damit die Variable auch dann existiert (als undefined),
// wenn das Firebase-SDK nicht laden konnte (z. B. kein Internet, Werte oben
// noch nicht ausgefüllt, oder Schul-WLAN blockiert die Firebase-Adresse) -
// quiz.js und lehrer.js erkennen diesen Fall dann sauber und zeigen einen
// Hinweis statt einfach abzustürzen.
var db;
try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} catch (err) {
  console.error("Firebase konnte nicht initialisiert werden:", err);
}
