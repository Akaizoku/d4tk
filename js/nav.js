// Burger menu — toggles the dropdown of menubar links on every page.
// The menubar shows only the active page's name; all links live in the dropdown.
(function () {
  'use strict';

  function start() {
    var wrap = document.getElementById('burger');
    var btn = document.getElementById('burger-btn');
    var menu = document.getElementById('burger-menu');
    if (!wrap || !btn || !menu) return;

    function close() {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // One shared placeholder for every search box on every page — the
    // per-page HTML only carries the aria-label, not the visible text.
    document.querySelectorAll('input[type="search"]').forEach(function (el) {
      el.placeholder = 'Search…';
    });

    // One shared hover description (tooltip) per button id, applied on every
    // page. Buttons whose label flips with state (Hide/Show, Collapse/Expand,
    // List/Sections) get a stable title describing the toggle, not the state.
    var TOOLTIPS = {
      'burger-btn': 'Open or close the navigation menu',
      'btn-hide-collected': 'Hide or show entries you already have',
      'btn-hide-caught': 'Hide or show fish you already caught',
      'btn-list': 'Show all entries in one alphabetical list (and back to sections)',
      'btn-alpha': 'Show all entries in one alphabetical list (and back to sections)',
      'btn-expand': 'Collapse or expand all sections at once',
      'btn-reset': 'Clear all progress on this page (asks for confirmation first)',
      'btn-export': 'Download your progress as a JSON backup file',
      'btn-import': 'Load progress from a JSON backup file',
      'tab-game': 'Show the Game tab',
      'tab-feats': 'Show the Feats of Strength tab',
      'tab-season': 'Show the Season tab',
      'tab-shop': 'Show the Shop tab',
      'timerButton': 'Start or pause the kill timer',
      'resetButton': 'Reset the counter and timer (asks for confirmation first)',
      'decButton': 'Remove one kill from the counter',
      'incButton': 'Add one kill to the counter',
      'undoButton': 'Undo the last counter change',
      'redoButton': 'Redo the last undone change'
    };
    document.querySelectorAll('button[id]').forEach(function (btn) {
      var tip = TOOLTIPS[btn.id];
      if (tip) btn.title = tip;
    });

    // Gem divider: the fleur-de-lys is replaced by a clickable gem replicating
    // the official Diablo II Battle.net chat gem — a rounded faceted stone that
    // is blue and turns bright lavender when clicked, playing the gem "ting"
    // (synthesized with WebAudio, as the original gem.wav is not shipped).
    // Sprites extracted from the repo's own screenshots, cursor removed.
    var GEM_SPRITES = ['img/chatgem_deactivated.webp', 'img/chatgem_activated.webp']; // blue -> lavender
    var audioCtx = null;
    function gemSound() {
      try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        var t = audioCtx.currentTime;
        // Inharmonic partials with a fast exponential decay = struck-gem "ting".
        [5230, 7860, 10450].forEach(function (f, i) {
          var o = audioCtx.createOscillator();
          var g = audioCtx.createGain();
          o.type = 'sine';
          o.frequency.value = f;
          g.gain.setValueAtTime(0.06 / (i + 1), t);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
          o.connect(g); g.connect(audioCtx.destination);
          o.start(t); o.stop(t + 0.45);
        });
      } catch (e) { /* audio unavailable — visual toggle still works */ }
    }
    document.querySelectorAll('.divider').forEach(function (div) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gem-btn';
      btn.title = 'Gem — click to activate';
      btn.setAttribute('aria-label', 'Gem, click to activate');
      // The actual D2 chat-gem sprite (blue deactivated / lavender activated).
      var img = document.createElement('img');
      img.src = GEM_SPRITES[0];
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      btn.appendChild(img);
      var gi = 0;
      btn.addEventListener('click', function () {
        gi = (gi + 1) % GEM_SPRITES.length;
        img.src = GEM_SPRITES[gi];
        gemSound();
      });
      div.textContent = '';
      div.appendChild(btn);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
