// World boss countdown — rendered into the top menubar on every page.
// Diablo IV world bosses spawn every 3.5 hours on a fixed UTC grid (:00/:30)
// with a 15-minute kill window. Boss names are intentionally not shown: the
// rotation is not a fixed cycle (the same boss can spawn several times in a row).
// Anchor cross-checked against helltides.com, d4guides.gg, diablo4.life and
// timesaver.gg on 2026-10-12 — all agreed the next spawn was 19:00 UTC.
// Timer text turns gold under 1 hour and red under 15 minutes to the spawn.
// A speaker toggle next to the timer enables sound alerts 15, 10, 5, 2 and 1
// minutes before each spawn (persisted in localStorage, off by default).
// Each alert is a synthesized bell (WebAudio, no audio file): inharmonic
// partials with exponential decay. Pitch rises and the ring count grows as
// the spawn gets closer — 1 ring at 15, 2 at 10, 3 at 5, 4 at 2, 5 at 1.
(function () {
  'use strict';

  var CYCLE_MS = 3.5 * 60 * 60 * 1000; // 3.5 hours
  var ANCHOR_MS = Date.UTC(2026, 9, 11, 22, 0, 0); // 2026-10-11 22:00 UTC — on the verified spawn grid

  var SOUND_KEY = 'd4tk-wb-sound';
  var ALERT_MINUTES = [15, 10, 5, 2, 1];
  // Bell base frequency per threshold — rises as the spawn gets closer.
  var BELL_FREQ = { 15: 523, 10: 659, 5: 784, 2: 880, 1: 1047 };
  // Ring count per threshold — more rings = more urgent.
  var BELL_COUNT = { 15: 1, 10: 2, 5: 3, 2: 4, 1: 5 };

  var soundOn = false;
  try { soundOn = localStorage.getItem(SOUND_KEY) === '1'; } catch (e) {}

  var timers = [];
  var scheduledSpawn = 0;
  var audioCtx = null;

  var ICON_ON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
  var ICON_OFF = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';

  function nextSpawnMs(nowMs) {
    return ANCHOR_MS + Math.ceil((nowMs - ANCHOR_MS) / CYCLE_MS) * CYCLE_MS;
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  // Short timezone label for a given moment (e.g. CEST, PST, GMT+2).
  function tzLabel(date) {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(date);
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === 'timeZoneName') return parts[i].value;
      }
    } catch (e) {}
    var off = -date.getTimezoneOffset();
    return 'UTC' + (off >= 0 ? '+' : '-') + Math.abs(off) / 60;
  }

  function render(el, nowMs) {
    var next = nextSpawnMs(nowMs);
    var secs = Math.max(0, Math.floor((next - nowMs) / 1000));
    var h = Math.floor(secs / 3600);
    var m = Math.floor((secs % 3600) / 60);
    var d = new Date(next);
    var countdown = h > 0 ? h + 'h ' + pad(m) + 'm' : pad(m) + 'm';
    el.textContent = 'World boss in ' + countdown + ' · ' +
      pad(d.getHours()) + ':' + pad(d.getMinutes()) + ' ' + tzLabel(d);
    el.classList.remove('wb-soon', 'wb-urgent');
    if (secs < 15 * 60) {
      el.classList.add('wb-urgent');
    } else if (secs < 60 * 60) {
      el.classList.add('wb-soon');
    }
  }

  // --- Sound alerts -------------------------------------------------------

  function ensureAudio() {
    if (!audioCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  // One synthesized bell: inharmonic partials (1, 2.76, 5.4, 8.9) with fast
  // exponential decay, each partial quieter than the last — struck-bell timbre.
  function playBell(ctx, baseFreq, startOffset) {
    var t0 = ctx.currentTime + (startOffset || 0);
    var partials = [1, 2.76, 5.4, 8.9];
    partials.forEach(function (ratio, i) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = baseFreq * ratio;
      gain.gain.setValueAtTime(0.18 / (i + 1), t0);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.1 - i * 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 1.2);
    });
  }

  // Ring the bell for the given threshold, repeating per BELL_COUNT with a
  // short gap so the urgency pattern is clearly audible.
  function bell(minutesBefore) {
    try {
      var ctx = ensureAudio();
      if (!ctx) return;
      var freq = BELL_FREQ[minutesBefore] || BELL_FREQ[15];
      var count = BELL_COUNT[minutesBefore] || 1;
      for (var i = 0; i < count; i++) playBell(ctx, freq, i * 0.45);
    } catch (e) {}
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  // (Re)schedule the 15/10/5/2/1-minute alerts for the upcoming spawn. Only
  // future thresholds are scheduled; pending alerts are cancelled when the
  // sound is toggled off or the spawn target changes.
  function scheduleAlerts(nowMs) {
    clearTimers();
    scheduledSpawn = nextSpawnMs(nowMs);
    if (!soundOn) return;
    var next = scheduledSpawn;
    ALERT_MINUTES.forEach(function (min) {
      var delay = (next - min * 60000) - nowMs;
      if (delay > 0) {
        timers.push(setTimeout(function () { bell(min); }, delay));
      }
    });
  }

  function updateToggle(btn) {
    btn.innerHTML = soundOn ? ICON_ON : ICON_OFF;
    btn.classList.toggle('on', soundOn);
    btn.title = soundOn
      ? 'World boss sound alerts: on — click to mute'
      : 'World boss sound alerts: off — click to enable';
    btn.setAttribute('aria-pressed', soundOn ? 'true' : 'false');
  }

  function injectToggle(el) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'wb-sound';
    btn.id = 'wb-sound';
    btn.setAttribute('aria-label', 'Toggle world boss sound alerts');
    el.parentNode.insertBefore(btn, el.nextSibling);
    updateToggle(btn);
    btn.addEventListener('click', function () {
      soundOn = !soundOn;
      try { localStorage.setItem(SOUND_KEY, soundOn ? '1' : '0'); } catch (e) {}
      updateToggle(btn);
      if (soundOn) {
        ensureAudio(); // create/resume the context within the user gesture
        bell(15); // single bell to confirm the sound works
        scheduleAlerts(Date.now());
      } else {
        clearTimers();
      }
    });
  }

  function start() {
    var el = document.getElementById('wb-timer');
    if (!el) return;
    injectToggle(el);
    render(el, Date.now());
    scheduleAlerts(Date.now());
    setInterval(function () {
      var now = Date.now();
      render(el, now);
      if (nextSpawnMs(now) !== scheduledSpawn) scheduleAlerts(now);
    }, 30000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
