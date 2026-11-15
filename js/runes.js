// Runes & Runewords page — top: the rune ladder table (sortable, with a
// checkbox per rune); bottom: the runewords table (sortable columns, search
// box, item-piece filter). Ticking runes highlights the runewords whose
// required runes are all selected.
// Data: js/data/runes-data.js + js/data/runewords-data.js.
(function () {
  'use strict';

  var RUNE_COLUMNS = [
    { key: 'name', label: 'Rune', cls: 'c-rune' },
    { key: 'type', label: 'Type', cls: 'c-type' },
    { key: 'season', label: 'Season', cls: 'c-season' },
    { key: 'rarity', label: 'Rarity', cls: 'c-rarity' },
    { key: 'effect', label: 'Effect', cls: 'c-effect' },
    { key: 'upgrade', label: 'Upgrade', cls: 'c-upgrade' }
  ];

  var RW_COLUMNS = [
    { key: 'name', label: 'Runeword', cls: 'c-name' },
    { key: 'bases', label: 'Item piece', cls: 'c-bases' },
    { key: 'runes', label: 'Required runes', cls: 'c-runes' },
    { key: 'affixes', label: 'Bonuses', cls: 'c-affixes' }
  ];

  function start() {
    var main = document.getElementById('runes');
    var runeData = (window.D4TK_DATA && window.D4TK_DATA.runes) || { runes: [] };
    var rwData = (window.D4TK_DATA && window.D4TK_DATA.runewords) || { runewords: [] };
    if (!main) return;

    var OWNED_KEY = 'd4tk-runes-owned';
    var selected = (window.D4TK && D4TK.loadStore) ? D4TK.loadStore(OWNED_KEY) : {};   // rune name -> count owned
    function saveOwned() { if (window.D4TK && D4TK.saveStore) D4TK.saveStore(OWNED_KEY, selected); }
    var rwRows = [];     // { tr, rw, tokens, haystack }

    function requiredRunes(rw) {
      var counts = {};
      rw.runes.split('+').forEach(function (part) {
        var n = part.trim();
        if (n) counts[n] = (counts[n] || 0) + 1;
      });
      return counts;
    }

    function craftable(rw) {
      var req = requiredRunes(rw);
      return Object.keys(req).every(function (n) { return selected[n] >= req[n]; });
    }

    // "Axe, Dagger, Flail …" -> ["Axe", "Dagger", "Flail …"]
    function baseTokens(rw) {
      var parts = rw.bases.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      if (parts.length > 1 && parts[parts.length - 1] === '…') {
        parts[parts.length - 2] += ' …';
        parts.pop();
      }
      return parts;
    }

    function refreshHighlights() {
      rwRows.forEach(function (row) {
        row.tr.classList.toggle('craftable', craftable(row.rw));
      });
    }

    var uiPrefs = (window.D4TK && D4TK.loadUiPrefs) ? D4TK.loadUiPrefs('d4tk-runes') : {};
    uiPrefs.collapsed = uiPrefs.collapsed || {};

    function section(title) {
      var el = document.createElement('section');
      el.className = 'rune-sec';
      var head = document.createElement('div');
      head.className = 'rune-head';
      head.innerHTML = '<span class="collapse-arrow">▼</span><span class="rune-name">' + title + '</span>';
      head.addEventListener('click', function () {
        el.classList.toggle('collapsed');
        uiPrefs.collapsed[title] = el.classList.contains('collapsed');
        if (window.D4TK && D4TK.saveUiPrefs) D4TK.saveUiPrefs('d4tk-runes', uiPrefs);
      });
      el.appendChild(head);
      var body = document.createElement('div');
      body.className = 'rune-body';
      el.appendChild(body);
      if (uiPrefs.collapsed[title]) el.classList.add('collapsed');
      main.appendChild(el);
      return body;
    }

    function sortableHeader(col, getState, onSort) {
      var th = document.createElement('th');
      th.className = col.cls + ' sortable';
      th.title = 'Sort by ' + col.label;
      th.innerHTML = col.label + ' <span class="arrow"></span>';
      th.addEventListener('click', function () {
        if (th._resizing) return;   // ignore the click that ends a column drag
        var st = getState();
        if (st.key === col.key) {
          st.dir = -st.dir;
        } else {
          st.key = col.key;
          st.dir = 1;
        }
        onSort();
      });
      var handle = document.createElement('span');
      handle.className = 'col-resize';
      handle.title = 'Drag to resize column';
      th.appendChild(handle);
      handle.addEventListener('mousedown', function (e) {
        e.preventDefault();
        e.stopPropagation();
        th._resizing = true;
        var startX = e.clientX;
        var startW = th.getBoundingClientRect().width;
        function onMove(ev) {
          th.style.width = Math.max(48, startW + ev.clientX - startX) + 'px';
        }
        function onUp() {
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
          setTimeout(function () { th._resizing = false; }, 0);
        }
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      });
      return th;
    }

    // ---------- Top section: runes ----------
    var runeSort = { key: null, dir: 1 };

    function upgradeHtml(r) {
      var v = r.upgrade || '—';
      var gemRe = /(Chipped|Flawless|Grand) (Topaz|Amethyst|Ruby|Emerald|Diamond|Sapphire)/;
      var m = v.match(gemRe);
      if (!m) return v;
      var runes = v.slice(0, m.index).replace(/\s*\+\s*$/, '');
      var gem = '<span class="gem gem-' + m[2].toLowerCase() + '">' + m[0] + '</span>';
      return runes + '<div class="up-gem">' + gem + '</div>';
    }

    function runeSortVal(r, key) {
      var v = String(r[key] || '');
      if (key === 'upgrade' && v === '—') return '￿';
      return v;
    }

    function sortedRunes() {
      var rows = runeData.runes.slice();
      if (runeSort.key) {
        rows.sort(function (a, b) {
          return runeSortVal(a, runeSort.key).localeCompare(runeSortVal(b, runeSort.key)) * runeSort.dir;
        });
      }
      return rows;
    }

    if (runeData.runes && runeData.runes.length) {
      var runesBody = section('Runes');
      var ownedCount = document.createElement('span');
      ownedCount.className = 'rune-count';
      runesBody.parentElement.querySelector('.rune-head').appendChild(ownedCount);
      function updateOwnedCount() {
        ownedCount.textContent = Object.keys(selected).length + ' / ' + runeData.runes.length + ' owned';
      }
      updateOwnedCount();
      var table = document.createElement('table');
      table.className = 'rune-table';
      var thead = document.createElement('thead');
      var headRow = document.createElement('tr');
      RUNE_COLUMNS.forEach(function (col) {
        var th = sortableHeader(col, function () { return runeSort; }, function () {
          headRow.querySelectorAll('th .arrow').forEach(function (a) { a.textContent = ''; });
          headRow.children[RUNE_COLUMNS.indexOf(col)].querySelector('.arrow').textContent = runeSort.dir === 1 ? '▲' : '▼';
          renderRuneRows();
        });
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);
      var tbody = document.createElement('tbody');
      table.appendChild(tbody);
      runesBody.appendChild(table);

      function renderRuneRows() {
        tbody.innerHTML = '';
        sortedRunes().forEach(function (r) {
          var tr = document.createElement('tr');
          tr.className = 'rune-row';
          var cb = document.createElement('input');
          cb.type = 'checkbox';
          cb.title = 'Mark ' + r.name + ' as available';
          cb.checked = !!selected[r.name];
          cb.addEventListener('change', function () {
            if (cb.checked) { selected[r.name] = (selected[r.name] || 0) + 1; }
            else { selected[r.name] = Math.max(0, (selected[r.name] || 0) - 1); if (!selected[r.name]) delete selected[r.name]; }
            saveOwned();
            updateOwnedCount();
            tr.classList.toggle('selected', cb.checked);
            refreshHighlights();
          });
          var nameTd = document.createElement('td');
          nameTd.className = 'c-rune';
          var label = document.createElement('label');
          label.className = 'gcheck';
          label.appendChild(cb);
          var box = document.createElement('span');
          box.className = 'box';
          label.appendChild(box);
          var nameSpan = document.createElement('span');
          nameSpan.className = 'name';
          nameSpan.textContent = r.name;
          label.appendChild(nameSpan);
          nameTd.appendChild(label);
          tr.appendChild(nameTd);
          tr.insertAdjacentHTML('beforeend',
            '<td class="c-type"><span class="type ' + r.type.toLowerCase() + '">' + r.type + '</span></td>' +
            '<td class="c-season"><span class="season ' + r.season.toLowerCase() + '">' + r.season + '</span></td>' +
            '<td class="c-rarity"><span class="rarity r-' + r.rarity.toLowerCase() + '">' + r.rarity + '</span></td>' +
            '<td class="c-effect">' + (r.effect || '') + '</td>' +
            '<td class="c-upgrade">' + upgradeHtml(r) + '</td>');
          if (cb.checked) tr.classList.add('selected');
          tbody.appendChild(tr);
        });
      }
      renderRuneRows();
    }

    // ---------- Bottom section: runewords ----------
    if (rwData.runewords && rwData.runewords.length) {
      var rwSort = { key: 'name', dir: 1 }; // alphabetical by runeword name by default
      var searchQ = '';
      var itemFilter = '';

      function sortedRw() {
        var rows = rwData.runewords.slice();
        if (rwSort.key) {
          rows.sort(function (a, b) {
            return String(a[rwSort.key] || '').localeCompare(String(b[rwSort.key] || '')) * rwSort.dir;
          });
        }
        return rows;
      }

      function matchesFilters(row) {
        if (searchQ && row.haystack.indexOf(searchQ) === -1) return false;
        if (itemFilter && row.tokens.indexOf(itemFilter) === -1) return false;
        return true;
      }

      var rwBody = section('Runewords');
      var rwTable = document.createElement('table');
      rwTable.className = 'rune-table rw-table';
      var rwThead = document.createElement('thead');
      var rwHeadRow = document.createElement('tr');
      RW_COLUMNS.forEach(function (col) {
        var th = sortableHeader(col, function () { return rwSort; }, function () {
          rwHeadRow.querySelectorAll('th .arrow').forEach(function (a) { a.textContent = ''; });
          rwHeadRow.children[RW_COLUMNS.indexOf(col)].querySelector('.arrow').textContent = rwSort.dir === 1 ? '▲' : '▼';
          renderRwRows();
        });
        rwHeadRow.appendChild(th);
      });
      rwHeadRow.children[0].querySelector('.arrow').textContent = '▲';
      rwThead.appendChild(rwHeadRow);
      rwTable.appendChild(rwThead);
      var rwTbody = document.createElement('tbody');
      rwTable.appendChild(rwTbody);
      rwBody.appendChild(rwTable);

      function renderRwRows() {
        rwTbody.innerHTML = '';
        rwRows = [];
        sortedRw().forEach(function (rw) {
          var tokens = baseTokens(rw);
          var tr = document.createElement('tr');
          tr.className = 'rw-row';
          var basesHtml = tokens.map(function (t) { return '<div class="base">' + t + '</div>'; }).join('');
          var runesHtml = rw.runes.split('+').map(function (r) {
            return '<div class="rune">' + r.trim() + '</div>';
          }).join('');
          var bonusesHtml = rw.affixes.split(' · ').map(function (b) {
            return '<div class="bonus">' + b + '</div>';
          }).join('');
          if (rw.power) bonusesHtml += '<div class="bonus power">' + rw.power + '</div>';
          tr.innerHTML =
            '<td class="c-name">' + rw.name + '</td>' +
            '<td class="c-bases">' + basesHtml + '</td>' +
            '<td class="c-runes">' + runesHtml + '</td>' +
            '<td class="c-affixes">' + bonusesHtml + '</td>';
          rwTbody.appendChild(tr);
          rwRows.push({
            tr: tr,
            rw: rw,
            tokens: tokens,
            haystack: (rw.name + ' ' + rw.runes + ' ' + rw.bases + ' ' + rw.affixes + ' ' + (rw.power || '')).toLowerCase()
          });
        });
        applyFilters();
        refreshHighlights();
      }

      var noMatch = document.createElement('p');
      noMatch.className = 'no-match';
      noMatch.style.display = 'none';
      noMatch.textContent = 'No runeword matches your search.';
      rwBody.appendChild(noMatch);

      function applyFilters() {
        var any = false;
        rwRows.forEach(function (row) {
          var match = matchesFilters(row);
          row.tr.style.display = match ? '' : 'none';
          if (match) any = true;
        });
        noMatch.style.display = ((searchQ || itemFilter) && !any) ? '' : 'none';
      }

      // item-piece filter dropdown
      var itemSelect = document.getElementById('rw-item-filter');
      if (itemSelect) {
        var allTokens = {};
        rwData.runewords.forEach(function (rw) {
          baseTokens(rw).forEach(function (t) { allTokens[t] = true; });
        });
        Object.keys(allTokens).sort(function (a, b) { return a.localeCompare(b); }).forEach(function (t) {
          var opt = document.createElement('option');
          opt.value = t;
          opt.textContent = t;
          itemSelect.appendChild(opt);
        });
        itemSelect.addEventListener('change', function () {
          itemFilter = itemSelect.value;
          applyFilters();
        });
      }

      var search = document.getElementById('runeword-search');
      if (search) {
        search.addEventListener('input', function () {
          searchQ = search.value.trim().toLowerCase();
          applyFilters();
        });
      }

      renderRwRows();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
