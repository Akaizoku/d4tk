// Horadric Cube page — renders the Tuning Prism affix chart (searchable) and
// the recipe sections from js/data/cube-data.js. Sections are collapsible;
// this is a reference page, no progress tracking.
(function () {
  'use strict';

  function start() {
    var main = document.getElementById('cube');
    var data = (window.D4TK_DATA && window.D4TK_DATA.cube) || { prisms: [], sections: [] };
    if (!main) return;

    // --- Tuning Prisms: one group per prism, one row per affix ---
    var prismSec = document.createElement('section');
    prismSec.className = 'cube-sec';
    var affixTotal = (data.prisms || []).reduce(function (n, p) { return n + (p.affixes || []).length; }, 0);
    var pHead = document.createElement('div');
    pHead.className = 'cube-head';
    pHead.innerHTML =
      '<span class="chevron">▼</span>' +
      '<span class="cube-name">Tuning Prisms' +
      '<span class="tag">Affix chart — which prism covers which affix</span></span>' +
      '<span class="cube-count">' + affixTotal + ' affixes</span>';
    pHead.addEventListener('click', function () {
      prismSec.classList.toggle('collapsed');
    });
    prismSec.appendChild(pHead);

    var groups = [];
    (data.prisms || []).forEach(function (p) {
      var g = document.createElement('div');
      g.className = 'prism-group';
      var gh = document.createElement('div');
      gh.className = 'prism-head';
      if (p.desc) gh.title = p.desc;
      gh.innerHTML =
        '<span class="chevron">▼</span>' +
        '<span class="prism-name">' + p.name + '</span>' +
        '<span class="prism-rarity r-' + String(p.rarity).toLowerCase() + '">' + p.rarity + '</span>' +
        '<span class="prism-cat">' + p.category + '</span>' +
        '<span class="prism-count">' + ((p.affixes || []).length ? (p.affixes || []).length + ' affixes' : 'modifier') + '</span>';
      gh.addEventListener('click', function () { g.classList.toggle('collapsed'); });
      g.appendChild(gh);

      var ul = document.createElement('ul');
      ul.className = 'affix-list';
      var rows = p.affixes && p.affixes.length ? p.affixes : [p.desc || p.category];
      rows.forEach(function (a) {
        var li = document.createElement('li');
        li.className = 'affix-row' + ((p.affixes || []).length ? '' : ' affix-note');
        li.dataset.search = (a + ' ' + p.name + ' ' + p.category + ' ' + p.rarity + ' ' + (p.desc || '')).toLowerCase();
        li.textContent = a;
        ul.appendChild(li);
      });
      g.appendChild(ul);
      prismSec.appendChild(g);
      groups.push({ el: g, rows: ul.querySelectorAll('.affix-row') });
    });
    main.appendChild(prismSec);

    // --- Search: filters affix rows, hides empty prism groups ---
    var noMatch = document.createElement('p');
    noMatch.className = 'cube-intro no-match';
    noMatch.style.display = 'none';
    noMatch.textContent = 'No affix matches your search.';
    main.appendChild(noMatch);

    var search = document.getElementById('cube-search');
    if (search) {
      search.addEventListener('input', function () {
        var q = search.value.trim().toLowerCase();
        var any = false;
        groups.forEach(function (g) {
          var visible = 0;
          g.rows.forEach(function (row) {
            var match = !q || row.dataset.search.indexOf(q) !== -1;
            row.style.display = match ? '' : 'none';
            if (match) visible++;
          });
          g.el.style.display = (q && visible === 0) ? 'none' : '';
          if (visible) any = true;
        });
        noMatch.style.display = (q && !any) ? '' : 'none';
      });
    }

    // --- Remaining sections (recipe categories) ---
    (data.sections || []).forEach(function (sec) {
      var el = document.createElement('section');
      el.className = 'cube-sec';

      var head = document.createElement('div');
      head.className = 'cube-head';
      head.innerHTML =
        '<span class="chevron">▼</span>' +
        '<span class="cube-name">' + sec.name +
        (sec.note ? '<span class="tag">' + sec.note + '</span>' : '') +
        '</span>' +
        '<span class="cube-count">' + (sec.items || []).length + ' entries</span>';
      head.addEventListener('click', function () {
        el.classList.toggle('collapsed');
      });
      el.appendChild(head);

      var list = document.createElement('ul');
      list.className = 'cube-list';
      (sec.items || []).forEach(function (item) {
        var li = document.createElement('li');
        li.className = 'cube-row';
        if (item[2]) li.title = item[2];
        li.innerHTML =
          '<span class="name">' + item[0] + '</span>' +
          '<span class="desc">' + (item[1] || '') + '</span>';
        list.appendChild(li);
      });
      el.appendChild(list);
      main.appendChild(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
