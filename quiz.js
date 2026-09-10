// Quiz-Engine – wird von kapitel6.html (und künftigen kapitelX.html) verwendet.
// Erwartet eine globale Variable KAPITEL_X_QUIZ mit { kapitel, titel, punkteProFrage, fragen[] }.
// Für Kapitel 6 heißt diese Variable KAPITEL_6_QUIZ (siehe quiz-data-kapitel6.js).

(function () {
  const QUIZ = KAPITEL_6_QUIZ; // <- bei neuem Kapitel hier anpassen
  const FRAGEN = QUIZ.fragen;
  const MAX_PUNKTE = FRAGEN.length * QUIZ.punkteProFrage;

  const state = {
    name: "",
    index: 0,
    punkte: 0,
    antworten: [] // { frage, richtigeAntwort, gegebeneAntwort, korrekt }
  };

  // ---- Elemente ----
  const screenName = document.getElementById("screen-name");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenResult = document.getElementById("screen-result");
  const screenLeaderboard = document.getElementById("screen-leaderboard");

  const inputName = document.getElementById("input-name");
  const nameError = document.getElementById("name-error");
  const btnStart = document.getElementById("btn-start");

  const progressFill = document.getElementById("progress-fill");
  const qMeta = document.getElementById("q-meta");
  const qText = document.getElementById("q-text");
  const qOptions = document.getElementById("q-options");
  const qFeedback = document.getElementById("q-feedback");
  const btnNext = document.getElementById("btn-next");

  const resultPoints = document.getElementById("result-points");
  const resultPercent = document.getElementById("result-percent");
  const resultSaving = document.getElementById("result-saving");
  const resultSavedError = document.getElementById("result-saved-error");

  const leaderboardBody = document.getElementById("leaderboard-body");

  // ---- Schritt 1: Start ----
  btnStart.addEventListener("click", () => {
    const name = inputName.value.trim();
    if (!name) {
      nameError.classList.remove("hidden");
      return;
    }
    nameError.classList.add("hidden");
    state.name = name;
    screenName.classList.add("hidden");
    screenQuiz.classList.remove("hidden");
    renderQuestion();
  });

  inputName.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnStart.click();
  });

  // ---- Frage rendern ----
  function renderQuestion() {
    const f = FRAGEN[state.index];
    progressFill.style.width = ((state.index) / FRAGEN.length * 100) + "%";
    qMeta.textContent = `Frage ${state.index + 1} von ${FRAGEN.length} · ${f.unterkapitel}`;
    qText.textContent = f.frage;
    qFeedback.classList.add("hidden");
    btnNext.classList.add("hidden");
    qOptions.innerHTML = "";

    let optionLabels, richtigIndex;
    if (f.type === "tf") {
      optionLabels = ["Wahr", "Falsch"];
      richtigIndex = f.richtig === true ? 0 : 1;
    } else {
      optionLabels = f.optionen;
      richtigIndex = f.richtig;
    }

    optionLabels.forEach((label, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = label;
      btn.addEventListener("click", () => selectAnswer(i, richtigIndex, label, optionLabels[richtigIndex]));
      qOptions.appendChild(btn);
    });
  }

  function selectAnswer(chosenIndex, richtigIndex, chosenLabel, richtigLabel) {
    const buttons = qOptions.querySelectorAll(".option-btn");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === richtigIndex) b.classList.add("correct");
      if (i === chosenIndex && i !== richtigIndex) b.classList.add("wrong");
      if (i === chosenIndex) b.classList.add("selected");
    });

    const korrekt = chosenIndex === richtigIndex;
    if (korrekt) state.punkte += QUIZ.punkteProFrage;

    state.antworten.push({
      frage: FRAGEN[state.index].frage,
      gegeben: chosenLabel,
      richtig: richtigLabel,
      korrekt: korrekt
    });

    qFeedback.textContent = korrekt ? "Richtig!" : `Leider falsch. Richtige Antwort: ${richtigLabel}`;
    qFeedback.className = "feedback " + (korrekt ? "ok" : "no");
    qFeedback.classList.remove("hidden");

    btnNext.textContent = (state.index === FRAGEN.length - 1) ? "Ergebnis anzeigen" : "Nächste Frage";
    btnNext.classList.remove("hidden");
  }

  btnNext.addEventListener("click", () => {
    state.index++;
    if (state.index < FRAGEN.length) {
      renderQuestion();
    } else {
      progressFill.style.width = "100%";
      finishQuiz();
    }
  });

  // ---- Abschluss ----
  function finishQuiz() {
    screenQuiz.classList.add("hidden");
    screenResult.classList.remove("hidden");

    const prozent = Math.round((state.punkte / MAX_PUNKTE) * 100);
    resultPoints.textContent = `${state.punkte} / ${MAX_PUNKTE} Punkten`;
    resultPercent.textContent = `${prozent} %`;

    saveResult(prozent);
  }

  function saveResult(prozent) {
    if (typeof db === "undefined") {
      resultSaving.classList.add("hidden");
      resultSavedError.classList.remove("hidden");
      showLeaderboardFallback();
      return;
    }

    db.collection("ergebnisse").add({
      kapitel: QUIZ.kapitel,
      name: state.name,
      punkte: state.punkte,
      maxPunkte: MAX_PUNKTE,
      prozent: prozent,
      antworten: state.antworten,
      zeitstempel: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      resultSaving.textContent = "Ergebnis wurde gespeichert.";
      loadLeaderboard();
    }).catch((err) => {
      console.error("Fehler beim Speichern:", err);
      resultSaving.classList.add("hidden");
      resultSavedError.classList.remove("hidden");
      showLeaderboardFallback();
    });
  }

  function loadLeaderboard() {
    db.collection("ergebnisse")
      .where("kapitel", "==", QUIZ.kapitel)
      .orderBy("punkte", "desc")
      .limit(10)
      .get()
      .then((snapshot) => {
        leaderboardBody.innerHTML = "";
        let rank = 1;
        snapshot.forEach((doc) => {
          const d = doc.data();
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${rank}</td><td>${escapeHtml(d.name)}</td><td>${d.punkte}</td><td>${d.prozent}%</td>`;
          leaderboardBody.appendChild(tr);
          rank++;
        });
        screenLeaderboard.classList.remove("hidden");
      })
      .catch((err) => {
        console.error("Bestenliste konnte nicht geladen werden:", err);
      });
  }

  function showLeaderboardFallback() {
    leaderboardBody.innerHTML = "<tr><td colspan='4'>Bestenliste momentan nicht verfügbar.</td></tr>";
    screenLeaderboard.classList.remove("hidden");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
