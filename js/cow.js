// Cow kill tracker — counter, timer, and undo/redo. Standalone (no D4TK).
(function () {
  'use strict';
  var LS = 'd4tk-cow';
  try {
    var legacy = localStorage.getItem('d4-cow-tracker-v1');
    if (legacy !== null) {
      if (localStorage.getItem(LS) === null) localStorage.setItem(LS, legacy);
      localStorage.removeItem('d4-cow-tracker-v1');
    }
  } catch (e) {}
  var state = {
    count: 0, elapsedTime: 0, hasStarted: false,
    history: [], historyIndex: -1
  };
  try {
    var saved = JSON.parse(localStorage.getItem(LS));
    if (saved) {
      state.count = saved.count || 0;
      state.elapsedTime = saved.elapsedTime || 0;
      state.hasStarted = !!saved.hasStarted;
      state.history = saved.history || [];
      state.historyIndex = typeof saved.historyIndex === 'number' ? saved.historyIndex : -1;
    }
  } catch (e) {}

  var timerInterval = null, startTime = 0, isTimerRunning = false;
  var counterElement = document.getElementById('counter');
  var timerElement = document.getElementById('timer');
  var timerButton = document.getElementById('timerButton');

  function save() {
    try { localStorage.setItem(LS, JSON.stringify(state)); } catch (e) {}
  }

  function updateCounter() {
    counterElement.textContent = state.count;
    // Counter colour: parchment by default, yellow from 600, red from 666.
    counterElement.style.color =
      state.count >= 666 ? 'var(--blood-hi)' :
      state.count >= 600 ? 'var(--gold)' : '';
    save();
  }

  function saveToHistory() {
    if (state.historyIndex < state.history.length - 1) {
      state.history = state.history.slice(0, state.historyIndex + 1);
    }
    if (state.history[state.historyIndex] === state.count) { save(); return; }
    state.history.push(state.count);
    state.historyIndex = state.history.length - 1;
    save();
  }

  function ensureTimer() {
    if (!isTimerRunning) startTimer();
  }

  function increment() {
    ensureTimer();
    state.count += 1;
    updateCounter();
    saveToHistory();
  }

  function decrement() {
    ensureTimer();
    state.count = Math.max(0, state.count - 1);
    updateCounter();
    saveToHistory();
  }

  function resetCounter() {
    if (!confirm('Slaughter anew? The counter and timer will be reset.')) return;
    state.count = 0;
    updateCounter();
    saveToHistory();
    resetTimer();
  }

  function formatTime(ms) {
    var date = new Date(ms);
    var h = String(date.getUTCHours()).padStart(2, '0');
    var m = String(date.getUTCMinutes()).padStart(2, '0');
    var s = String(date.getUTCSeconds()).padStart(2, '0');
    return h + ':' + m + ':' + s;
  }

  function updateTimer() {
    if (isTimerRunning) {
      state.elapsedTime = Date.now() - startTime;
      timerElement.textContent = formatTime(state.elapsedTime);
      save();
    }
  }

  function startTimer() {
    if (isTimerRunning) return;
    startTime = Date.now() - state.elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    isTimerRunning = true;
    state.hasStarted = true;
    timerButton.textContent = '⏸';
    save();
  }

  function pauseTimer() {
    if (!isTimerRunning) return;
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerButton.textContent = '▶';
  }

  function toggleTimer() {
    if (isTimerRunning) pauseTimer(); else startTimer();
  }

  function resetTimer() {
    pauseTimer();
    state.elapsedTime = 0;
    timerElement.textContent = '00:00:00';
    state.hasStarted = false;
    timerButton.textContent = '▶';
    save();
  }

  function undo() {
    if (state.historyIndex > 0) {
      state.historyIndex--;
      state.count = state.history[state.historyIndex];
      updateCounter();
    }
  }

  function redo() {
    if (state.historyIndex < state.history.length - 1) {
      state.historyIndex++;
      state.count = state.history[state.historyIndex];
      updateCounter();
    }
  }

  document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (!isNaN(key) && key !== ' ' && key !== '') {
      ensureTimer();
      var value = parseInt(key);
      if (value >= 1 && value <= 9) {
        state.count = Math.max(0, state.count + value);
        updateCounter();
        saveToHistory();
      }
    } else if (event.ctrlKey) {
      if (event.key === 'z') undo();
      else if (event.key === 'y') redo();
    }
  });

  updateCounter();
  timerElement.textContent = formatTime(state.elapsedTime);
  if (state.history.length === 0) {
    state.history.push(state.count);
    state.historyIndex = 0;
    save();
  }
  if (state.hasStarted) startTimer();

  document.getElementById('incButton').addEventListener('click', increment);
  document.getElementById('decButton').addEventListener('click', decrement);
  document.getElementById('undoButton').addEventListener('click', undo);
  document.getElementById('redoButton').addEventListener('click', redo);
  timerButton.addEventListener('click', toggleTimer);
  document.getElementById('resetButton').addEventListener('click', resetCounter);
})();
