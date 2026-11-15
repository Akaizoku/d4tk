// Experience page — character XP (levels 1-70) and paragon XP (levels 1-300)
// tables and SVG charts, plus an Eternal + Season paragon merge calculator.
// The calculator uses the same math as beaufume.fr/paragon: both realms' paragon
// levels are converted to XP, summed, and converted back to a single level.
(function () {
  'use strict';

  var SVG_NS = 'http://www.w3.org/2000/svg';
  var LS_KEY = 'd4tk-experience';
  try {
    var legacy = localStorage.getItem('d4-experience-v1');
    if (legacy !== null) {
      if (localStorage.getItem(LS_KEY) === null) localStorage.setItem(LS_KEY, legacy);
      localStorage.removeItem('d4-experience-v1');
    }
  } catch (err) {}
  var data = (window.D4TK_DATA && window.D4TK_DATA.experience) || null;
  var CHAR = data ? data.character : null;
  var PARA = data ? data.paragon : null;
  var state = { eternal: 0, season: 0, collapsed: {} };

  // viewBox geometry shared by both charts
  var W = 840, H = 280;
  var ML = 64, MR = 12, MT = 14, MB = 34;
  var PW = W - ML - MR;
  var PH = H - MT - MB;
  var BASE = MT + PH;

  function svgEl(name, attrs, parent) {
    var n = document.createElementNS(SVG_NS, name);
    for (var k in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, k)) n.setAttribute(k, attrs[k]);
    }
    if (parent) parent.appendChild(n);
    return n;
  }

  function fmt(n) {
    return n.toLocaleString('en-US');
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // Tooltip positioned inside the chart-wrap (the tip's parent node).
  function makeTip(tipEl) {
    var wrap = tipEl.parentNode;
    return {
      show: function (html, clientX, clientY) {
        tipEl.innerHTML = html;
        tipEl.classList.add('show');
        var rect = wrap.getBoundingClientRect();
        var x = clientX - rect.left + 14;
        var y = clientY - rect.top + 14;
        if (x + tipEl.offsetWidth > rect.width - 4) x = clientX - rect.left - tipEl.offsetWidth - 14;
        if (y + tipEl.offsetHeight > rect.height - 4) y = clientY - rect.top - tipEl.offsetHeight - 14;
        tipEl.style.left = x + 'px';
        tipEl.style.top = y + 'px';
      },
      hide: function () {
        tipEl.classList.remove('show');
      }
    };
  }

  /* character chart — XP per level-up, log scale (300 … 2,471,159) */
  function drawCharacterChart() {
    var svg = document.getElementById('chart-character');
    if (!svg || !CHAR) return;
    var next = CHAR.xpToNext; // 69 values: level i+1 -> i+2
    var LOG_MIN = 100, LOG_MAX = 3000000;
    var lmin = Math.log(LOG_MIN), lmax = Math.log(LOG_MAX);
    function yOf(v) {
      return BASE - ((Math.log(v) - lmin) / (lmax - lmin)) * PH;
    }

    var ticks = [[1000, '1k'], [10000, '10k'], [100000, '100k'], [1000000, '1M']];
    for (var t = 0; t < ticks.length; t++) {
      var gy = yOf(ticks[t][0]);
      svgEl('line', { 'class': 'grid', x1: ML, x2: W - MR, y1: gy, y2: gy }, svg);
      var yl = svgEl('text', { 'class': 'axis-label', x: ML - 8, y: gy + 4, 'text-anchor': 'end' }, svg);
      yl.textContent = ticks[t][1];
    }
    svgEl('line', { 'class': 'axis', x1: ML, x2: W - MR, y1: BASE, y2: BASE }, svg);

    var slot = PW / next.length;
    var bw = Math.max(1.5, slot * 0.72);
    var tip = makeTip(document.getElementById('tip-character'));
    var wrap = svg.parentNode;

    for (var i = 0; i < next.length; i++) {
      var x = ML + i * slot + (slot - bw) / 2;
      var y = yOf(next[i]);
      var h = Math.max(BASE - y, 1);
      // levels 61-70 reuse the level 60 XP value — shown in gold (see legend)
      var cls = i >= 59 ? 'bar flat' : 'bar';
      var bar = svgEl('rect', {
        'class': cls,
        x: x.toFixed(2), y: y.toFixed(2),
        width: bw.toFixed(2), height: h.toFixed(2)
      }, svg);
      (function (idx, barEl, val) {
        barEl.addEventListener('mousemove', function (e) {
          var rect = wrap.getBoundingClientRect();
          tip.show(
            '<b>Level ' + (idx + 1) + ' → ' + (idx + 2) + '</b><br>' + fmt(val) + ' XP',
            e.clientX, e.clientY
          );
        });
        barEl.addEventListener('mouseleave', function () { tip.hide(); });
      })(i, bar, next[i]);
    }

    var xTicks = [1, 10, 20, 30, 40, 50, 60];
    for (var t = 0; t < xTicks.length; t++) {
      var xl = svgEl('text', {
        'class': 'axis-label',
        x: (ML + (xTicks[t] - 1) * slot + slot / 2).toFixed(2), y: BASE + 18,
        'text-anchor': 'middle'
      }, svg);
      xl.textContent = String(xTicks[t]);
    }
    var last = svgEl('text', {
      'class': 'axis-label',
      x: (ML + (next.length - 1) * slot + slot / 2).toFixed(2), y: BASE + 18,
      'text-anchor': 'middle'
    }, svg);
    last.textContent = String(CHAR.maxLevel);
  }

  /* paragon chart — cumulative XP to reach each paragon level 0-300 */
  function drawParagonChart() {
    var svg = document.getElementById('chart-paragon');
    if (!svg || !PARA) return;
    var reach = PARA.xpToReach; // 301 values: paragon 0..300
    var max = reach[300];
    function xOf(i) { return ML + (i / 300) * PW; }
    function yOf(v) { return BASE - (v / max) * PH; }

    for (var g = 0; g <= 5; g++) {
      var gy = yOf(g * 5e9);
      svgEl('line', { 'class': g === 0 ? 'axis' : 'grid', x1: ML, x2: W - MR, y1: gy, y2: gy }, svg);
      var yl = svgEl('text', { 'class': 'axis-label', x: ML - 8, y: gy + 4, 'text-anchor': 'end' }, svg);
      yl.textContent = g === 0 ? '0' : (g * 5) + ' B';
    }
    for (var t = 0; t <= 300; t += 50) {
      var xl = svgEl('text', { 'class': 'axis-label', x: xOf(t).toFixed(2), y: BASE + 18, 'text-anchor': 'middle' }, svg);
      xl.textContent = String(t);
    }

    var d = '';
    for (var i = 0; i < reach.length; i++) {
      d += (i === 0 ? 'M' : 'L') + xOf(i).toFixed(2) + ' ' + yOf(reach[i]).toFixed(2) + ' ';
    }
    svgEl('path', {
      'class': 'area',
      d: d + 'L' + xOf(300).toFixed(2) + ' ' + BASE + ' L' + xOf(0).toFixed(2) + ' ' + BASE + ' Z'
    }, svg);
    svgEl('path', { 'class': 'line', d: d }, svg);

    var dot = svgEl('circle', { 'class': 'point', r: 4, cx: -10, cy: -10 }, svg);
    var tip = makeTip(document.getElementById('tip-paragon'));
    var wrap = svg.parentNode;

    svg.addEventListener('mousemove', function (e) {
      var r = svg.getBoundingClientRect();
      var vx = ((e.clientX - r.left) / r.width) * W;
      var idx = Math.round(((vx - ML) / PW) * 300);
      idx = Math.max(0, Math.min(300, idx));
      dot.setAttribute('cx', xOf(idx).toFixed(2));
      dot.setAttribute('cy', yOf(reach[idx]).toFixed(2));
      var html = '<b>Paragon ' + idx + '</b><br>' + fmt(reach[idx]) + ' XP total';
      if (idx > 0) html += '<br>' + fmt(PARA.xpToNext[idx - 1]) + ' XP for that level';
      tip.show(html, e.clientX, e.clientY);
    });
    svg.addEventListener('mouseleave', function () {
      tip.hide();
      dot.setAttribute('cx', -10);
      dot.setAttribute('cy', -10);
    });
  }

  /* tables */
  function fillCharacterTable() {
    var tbody = document.querySelector('#table-character tbody');
    if (!tbody || !CHAR) return;
    var html = '';
    for (var lvl = 1; lvl <= CHAR.maxLevel; lvl++) {
      var nextXp = lvl < CHAR.maxLevel ? fmt(CHAR.xpToNext[lvl - 1]) : '—';
      html += '<tr><td class="lvl">' + lvl + '</td><td class="num">' + nextXp +
        '</td><td class="num total">' + fmt(CHAR.xpToReach[lvl - 1]) + '</td></tr>';
    }
    tbody.innerHTML = html;
  }

  function fillParagonTable() {
    var tbody = document.querySelector('#table-paragon tbody');
    if (!tbody || !PARA) return;
    var html = '';
    for (var lvl = 1; lvl <= PARA.maxLevel; lvl++) {
      html += '<tr><td class="lvl">' + lvl + '</td><td class="num">' + fmt(PARA.xpToNext[lvl - 1]) +
        '</td><td class="num total">' + fmt(PARA.xpToReach[lvl]) + '</td></tr>';
    }
    tbody.innerHTML = html;
  }

  /* calculator — Eternal + Season paragon levels merged by total XP */
  function clampLevel(v) {
    v = Math.round(Number(v) || 0);
    return Math.max(0, Math.min(PARA.maxLevel, v));
  }

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(LS_KEY));
      if (saved) {
        state.eternal = clampLevel(saved.eternal);
        state.season = clampLevel(saved.season);
        if (saved.collapsed) state.collapsed = saved.collapsed;
      }
    } catch (err) {}
  }

  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (err) {}
  }

  // Largest L in 0..300 with xpToReach[L] <= xp (xpToReach is strictly increasing).
  function levelFromXp(xp) {
    var L = 0;
    for (var i = 0; i <= PARA.maxLevel; i++) {
      if (PARA.xpToReach[i] <= xp) L = i;
      else break;
    }
    return L;
  }

  function startCalc() {
    var eternalInput = document.getElementById('calc-eternal');
    var seasonInput = document.getElementById('calc-season');
    var levelEl = document.getElementById('calc-level');
    var maxEl = document.getElementById('calc-max');
    var detailEl = document.getElementById('calc-detail');
    var totalEl = document.getElementById('calc-total');
    var fillEl = document.getElementById('calc-fill');
    if (!eternalInput || !seasonInput || !levelEl) return;

    function update() {
      var e = clampLevel(eternalInput.value);
      var s = clampLevel(seasonInput.value);
      state.eternal = e;
      state.season = s;
      var combined = PARA.xpToReach[e] + PARA.xpToReach[s];
      var total = PARA.xpToReach[PARA.maxLevel];
      var L = levelFromXp(combined);

      levelEl.textContent = String(L);
      maxEl.textContent = L >= PARA.maxLevel ? 'MAX' : '';
      if (L >= PARA.maxLevel) {
        detailEl.textContent = e + ' (Eternal) + ' + s + ' (Season) = ' + fmt(combined) +
          ' XP combined — paragon cap reached';
        fillEl.style.width = '100%';
        totalEl.textContent = '100% of total XP to paragon ' + PARA.maxLevel + ' done';
      } else {
        var into = combined - PARA.xpToReach[L];
        var need = PARA.xpToNext[L];
        detailEl.textContent = e + ' (Eternal) + ' + s + ' (Season) = ' + fmt(combined) +
          ' XP combined · ' + fmt(into) + ' / ' + fmt(need) + ' XP to paragon ' + (L + 1);
        fillEl.style.width = (need > 0 ? (into / need) * 100 : 0).toFixed(2) + '%';
        totalEl.textContent = ((combined / total) * 100).toFixed(2) +
          '% of total XP to paragon ' + PARA.maxLevel + ' done';
      }
      saveState();
    }

    eternalInput.value = state.eternal;
    seasonInput.value = state.season;

    eternalInput.addEventListener('input', update);
    seasonInput.addEventListener('input', update);
    update();
  }

  /* collapsible sections — click a section head to fold it away */
  function startCollapse() {
    var heads = document.querySelectorAll('.exp-head');
    Array.prototype.forEach.call(heads, function (head) {
      var sec = head.parentNode;
      if (!sec || !sec.getAttribute) return;
      var key = sec.getAttribute('data-section');
      if (!key) return;
      if (state.collapsed[key]) sec.classList.add('collapsed');
      head.addEventListener('click', function () {
        sec.classList.toggle('collapsed');
        state.collapsed[key] = sec.classList.contains('collapsed');
        saveState();
      });
    });
  }

  function start() {
    if (!data) return;
    loadState();
    setText('stat-char-total', fmt(CHAR.xpToReach[CHAR.maxLevel - 1]));
    setText('stat-para-total', fmt(PARA.xpToReach[PARA.maxLevel]));
    drawCharacterChart();
    drawParagonChart();
    fillCharacterTable();
    fillParagonTable();
    startCalc();
    startCollapse();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
