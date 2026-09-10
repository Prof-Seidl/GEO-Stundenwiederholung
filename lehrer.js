// Lehrer-Dashboard: Passwortschutz (clientseitig), Ergebnisliste, Excel-Export.
//
// WICHTIG zur Sicherheit: Das Passwort hier schützt nur die Ansicht in dieser App.
// Es ist KEINE Datenbank-Zugriffskontrolle (siehe README, Abschnitt "Sicherheit").
// Für ein Schulprojekt mit Quiz-Punkten ist das ein angemessener, einfacher Kompromiss.

(function () {
  // SHA-256-Hash des Lehrer-Passworts (nicht das Klartext-Passwort selbst).
  // Das aktuelle Passwort wurde automatisch generiert und steht in der README.
  const PASSWORT_HASH = "e8118667c054d812837fa04b175b573f45e9a6b968d23020b3275d59273e8901";
  const KAPITEL = "6";

  const screenLogin = document.getElementById("screen-login");
  const screenDashboard = document.getElementById("screen-dashboard");
  const screenTable = document.getElementById("screen-table");

  const inputPassword = document.getElementById("input-password");
  const loginError = document.getElementById("login-error");
  const btnLogin = document.getElementById("btn-login");
  const btnRefresh = document.getElementById("btn-refresh");
  const btnExport = document.getElementById("btn-export");

  const statCount = document.getElementById("stat-count");
  const statAvg = document.getElementById("stat-avg");
  const statBest = document.getElementById("stat-best");
  const resultsBody = document.getElementById("results-body");

  let currentResults = [];

  async function sha256(text) {
    const enc = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", enc);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  btnLogin.addEventListener("click", async () => {
    const pw = inputPassword.value;
    const hash = await sha256(pw);
    if (hash === PASSWORT_HASH) {
      loginError.classList.add("hidden");
      screenLogin.classList.add("hidden");
      screenDashboard.classList.remove("hidden");
      screenTable.classList.remove("hidden");
      loadResults();
    } else {
      loginError.classList.remove("hidden");
    }
  });

  inputPassword.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnLogin.click();
  });

  btnRefresh.addEventListener("click", loadResults);

  function loadResults() {
    if (typeof db === "undefined") {
      resultsBody.innerHTML = "<tr><td colspan='5'>Firebase ist noch nicht eingerichtet (siehe README).</td></tr>";
      return;
    }
    db.collection("ergebnisse")
      .where("kapitel", "==", KAPITEL)
      .orderBy("punkte", "desc")
      .get()
      .then((snapshot) => {
        currentResults = [];
        snapshot.forEach((doc) => currentResults.push(doc.data()));
        renderResults();
      })
      .catch((err) => {
        console.error(err);
        resultsBody.innerHTML = "<tr><td colspan='5'>Fehler beim Laden der Ergebnisse.</td></tr>";
      });
  }

  function renderResults() {
    resultsBody.innerHTML = "";
    if (currentResults.length === 0) {
      resultsBody.innerHTML = "<tr><td colspan='5'>Noch keine Ergebnisse vorhanden.</td></tr>";
    }
    let sum = 0;
    let best = 0;
    currentResults.forEach((d) => {
      sum += d.prozent || 0;
      if ((d.prozent || 0) > best) best = d.prozent;
      const datum = d.zeitstempel && d.zeitstempel.toDate ? d.zeitstempel.toDate().toLocaleString("de-AT") : "–";
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${escapeHtml(d.name)}</td><td>${d.punkte}</td><td>${d.maxPunkte}</td><td>${d.prozent}%</td><td>${datum}</td>`;
      resultsBody.appendChild(tr);
    });
    statCount.textContent = currentResults.length;
    statAvg.textContent = currentResults.length ? Math.round(sum / currentResults.length) + "%" : "–";
    statBest.textContent = currentResults.length ? best + "%" : "–";
  }

  btnExport.addEventListener("click", () => {
    if (!currentResults.length) {
      alert("Keine Ergebnisse zum Exportieren vorhanden.");
      return;
    }
    const rows = currentResults.map((d) => ({
      Name: d.name,
      Kapitel: d.kapitel,
      Punkte: d.punkte,
      "Max. Punkte": d.maxPunkte,
      "Prozent": d.prozent,
      Datum: d.zeitstempel && d.zeitstempel.toDate ? d.zeitstempel.toDate().toLocaleString("de-AT") : ""
    }));
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Kapitel 6");
    const heute = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(workbook, `Ergebnisse_Kapitel6_${heute}.xlsx`);
  });

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
