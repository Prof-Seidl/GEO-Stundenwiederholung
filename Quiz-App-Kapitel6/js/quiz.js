// Quiz-Engine – wird von allen kapitelX.html-Seiten verwendet.
// Erwartet eine globale Variable QUIZ_DATA mit { kapitel, titel, punkteProFrage, fragen[] }.
// Jede kapitelX.html lädt vorher ihre eigene js/quiz-data-kapitelX.js, die QUIZ_DATA definiert.
//
// Unterstützte Fragetypen in fragen[]:
//   "mc"       – Multiple Choice, eine richtige Antwort (optionen[], richtig: Index)
//   "tf"       – Wahr/Falsch (richtig: true|false)
//   "matching" – Zuordnung (paare: [{links, rechts}, ...]) – Teilpunkte möglich
//   "ordering" – Reihenfolge (elemente: [...] bereits in RICHTIGER Reihenfolge) – Teilpunkte möglich

(function () {
  const QUIZ = QUIZ_DATA;
  const FRAGEN = QUIZ.fragen;
  const MAX_PUNKTE = FRAGEN.length * QUIZ.punkteProFrage;

  const state = {
    name: "",
    index: 0,
    punkte: 0,
    antworten: [] // { frage, typ, gegeben, richtig, korrekt, erreichtePunkte, maxPunkte }
  };

  // ---- Elemente ----
  const screenName = document.getElementById("screen-name");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenResult = document.getElementById("screen-result");
  const screenLeaderboard = document.getElementById("screen-leaderboard");

  const introEl = document.getElementById("quiz-intro");
  if (introEl) {
    introEl.textContent = `Summatives Quiz zur Stundenwiederholung · ${FRAGEN.length} Fragen · ${MAX_PUNKTE} Punkte`;
  }

  const inputName = document.getElementById("input-name");
  const nameError = document.getElementById("name-error");
  const btnStart = document.getElementById("btn-start");

  const progressFill = document.getElementById("progress-fill");
  const qMeta = document.getElementById("q-meta");
  const qText = document.getElementById("q-text");
  const qOptions = document.getElementById("q-options");
  const qFeedback = document.getElementById("q-feedback");
  const btnSubmit = document.getElementById("btn-submit");
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

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---- Frage rendern (Dispatch nach Typ) ----
  function renderQuestion() {
    const f = FRAGEN[state.index];
    progressFill.style.width = (state.index / FRAGEN.length * 100) + "%";
    qMeta.textContent = `Frage ${state.index + 1} von ${FRAGEN.length} · ${f.unterkapitel}`;
    qText.textContent = f.frage;
    qFeedback.classList.add("hidden");
    qFeedback.textContent = "";
    btnNext.classList.add("hidden");
    btnSubmit.classList.add("hidden");
    btnSubmit.onclick = null;
    qOptions.innerHTML = "";

    if (f.type === "tf") {
      renderChoice(["Wahr", "Falsch"], f.richtig === true ? 0 : 1, f);
    } else if (f.type === "matching") {
      renderMatching(f);
    } else if (f.type === "ordering") {
      renderOrdering(f);
    } else {
      renderChoice(f.optionen, f.richtig, f);
    }
  }

  // ---- Typ: Multiple Choice / Wahr-Falsch (Sofort-Feedback per Klick) ----
  function renderChoice(optionLabels, richtigIndex, f) {
    optionLabels.forEach((label, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = label;
      btn.addEventListener("click", () => selectAnswer(i, richtigIndex, label, optionLabels[richtigIndex], f));
      qOptions.appendChild(btn);
    });
  }

  function selectAnswer(chosenIndex, richtigIndex, chosenLabel, richtigLabel, f) {
    const buttons = qOptions.querySelectorAll(".option-btn");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === richtigIndex) b.classList.add("correct");
      if (i === chosenIndex && i !== richtigIndex) b.classList.add("wrong");
      if (i === chosenIndex) b.classList.add("selected");
    });

    const korrekt = chosenIndex === richtigIndex;
    const erreichtePunkte = korrekt ? QUIZ.punkteProFrage : 0;
    state.punkte += erreichtePunkte;

    state.antworten.push({
      frage: f.frage,
      typ: f.type,
      gegeben: chosenLabel,
      richtig: richtigLabel,
      korrekt: korrekt,
      erreichtePunkte: erreichtePunkte,
      maxPunkte: QUIZ.punkteProFrage
    });

    qFeedback.textContent = korrekt ? "Richtig!" : `Leider falsch. Richtige Antwort: ${richtigLabel}`;
    qFeedback.className = "feedback " + (korrekt ? "ok" : "no");
    qFeedback.classList.remove("hidden");

    showNextButton();
  }

  // ---- Typ: Zuordnung (matching) – Dropdown je linkem Begriff, Teilpunkte ----
  function renderMatching(f) {
    const list = document.createElement("div");
    list.className = "matching-list";

    const rechtsOptionen = f.paare.map((p, i) => ({ text: p.rechts, idx: i }));
    const rechtsGemischt = shuffle(rechtsOptionen);

    f.paare.forEach((paar, i) => {
      const row = document.createElement("div");
      row.className = "match-row";

      const left = document.createElement("span");
      left.className = "match-left";
      left.textContent = paar.links;

      const select = document.createElement("select");
      select.className = "match-select";
      select.dataset.leftIndex = i;

      const emptyOpt = document.createElement("option");
      emptyOpt.value = "";
      emptyOpt.textContent = "– wählen –";
      select.appendChild(emptyOpt);

      rechtsGemischt.forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.idx;
        o.textContent = opt.text;
        select.appendChild(o);
      });

      row.appendChild(left);
      row.appendChild(select);
      list.appendChild(row);
    });

    qOptions.appendChild(list);

    btnSubmit.classList.remove("hidden");
    btnSubmit.textContent = "Antwort prüfen";
    btnSubmit.onclick = () => gradeMatching(f, list);
  }

  function gradeMatching(f, list) {
    const rows = list.querySelectorAll(".match-row");
    let correctCount = 0;

    rows.forEach((row, i) => {
      const select = row.querySelector(".match-select");
      select.disabled = true;
      const gewaehlt = select.value;
      const korrekt = gewaehlt !== "" && parseInt(gewaehlt, 10) === i;
      if (korrekt) {
        correctCount++;
        row.classList.add("correct");
      } else {
        row.classList.add("wrong");
        const hinweis = document.createElement("div");
        hinweis.className = "match-hint";
        hinweis.textContent = `Richtig: ${f.paare[i].rechts}`;
        row.appendChild(hinweis);
      }
    });

    finishGradedQuestion(f, correctCount, f.paare.length,
      `${correctCount} von ${f.paare.length} Zuordnungen richtig.`);
  }

  // ---- Typ: Reihenfolge (ordering) – Auf/Ab-Knöpfe, Teilpunkte ----
  function renderOrdering(f) {
    const total = f.elemente.length;
    let order = shuffle(f.elemente.map((_, i) => i));
    while (total > 1 && order.every((v, i) => v === i)) {
      order = shuffle(order);
    }

    const list = document.createElement("div");
    list.className = "ordering-list";
    qOptions.appendChild(list);

    function draw() {
      list.innerHTML = "";
      order.forEach((origIndex, pos) => {
        const item = document.createElement("div");
        item.className = "ordering-item";

        const num = document.createElement("span");
        num.className = "ordering-num";
        num.textContent = (pos + 1) + ".";

        const text = document.createElement("span");
        text.className = "ordering-text";
        text.textContent = f.elemente[origIndex];

        const controls = document.createElement("span");
        controls.className = "ordering-controls";

        const upBtn = document.createElement("button");
        upBtn.type = "button";
        upBtn.className = "order-btn";
        upBtn.textContent = "▲";
        upBtn.setAttribute("aria-label", "Nach oben");
        upBtn.disabled = pos === 0;
        upBtn.addEventListener("click", () => {
          [order[pos - 1], order[pos]] = [order[pos], order[pos - 1]];
          draw();
        });

        const downBtn = document.createElement("button");
        downBtn.type = "button";
        downBtn.className = "order-btn";
        downBtn.textContent = "▼";
        downBtn.setAttribute("aria-label", "Nach unten");
        downBtn.disabled = pos === order.length - 1;
        downBtn.addEventListener("click", () => {
          [order[pos + 1], order[pos]] = [order[pos], order[pos + 1]];
          draw();
        });

        controls.appendChild(upBtn);
        controls.appendChild(downBtn);

        item.appendChild(num);
        item.appendChild(text);
        item.appendChild(controls);
        list.appendChild(item);
      });
    }

    draw();

    btnSubmit.classList.remove("hidden");
    btnSubmit.textContent = "Reihenfolge prüfen";
    btnSubmit.onclick = () => gradeOrdering(f, list, order);
  }

  function gradeOrdering(f, list, order) {
    const items = list.querySelectorAll(".ordering-item");
    let correctCount = 0;

    items.forEach((item, pos) => {
      item.querySelectorAll("button").forEach((b) => (b.disabled = true));
      const korrekt = order[pos] === pos;
      if (korrekt) {
        correctCount++;
        item.classList.add("correct");
      } else {
        item.classList.add("wrong");
      }
    });

    const hinweis = document.createElement("div");
    hinweis.className = "match-hint";
    hinweis.textContent = "Richtige Reihenfolge: " + f.elemente.join(" → ");
    list.appendChild(hinweis);

    finishGradedQuestion(f, correctCount, f.elemente.length,
      `${correctCount} von ${f.elemente.length} an der richtigen Position.`);
  }

  // ---- Gemeinsamer Abschluss für Zuordnung/Reihenfolge (Teilpunkte) ----
  function finishGradedQuestion(f, correctCount, total, hinweisText) {
    const erreichtePunkte = Math.round(QUIZ.punkteProFrage * (correctCount / total));
    state.punkte += erreichtePunkte;

    state.antworten.push({
      frage: f.frage,
      typ: f.type,
      gegeben: hinweisText,
      richtig: "vollständig richtig",
      korrekt: correctCount === total,
      erreichtePunkte: erreichtePunkte,
      maxPunkte: QUIZ.punkteProFrage
    });

    const voll = correctCount === total;
    qFeedback.textContent = `${hinweisText} (${erreichtePunkte} von ${QUIZ.punkteProFrage} Punkten)`;
    qFeedback.className = "feedback " + (voll ? "ok" : (correctCount > 0 ? "teil" : "no"));
    qFeedback.classList.remove("hidden");

    btnSubmit.classList.add("hidden");
    showNextButton();
  }

  function showNextButton() {
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
