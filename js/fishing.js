// Fishing tracker — regions with rarity-grouped fish.
// Loads js/data/fishing-data.js (generated from data/fishing.csv) and
// js/data/achievements-data.js (for the Fishing challenge link).
(async function () {
  'use strict';

  var STORE_KEY = 'd4tk-fishing';
  var ACH_STORE_KEY = 'd4tk-achievements';
  var AUTO_STORE_KEY = 'd4tk-fishing-auto';
  var ACH_FISH_AUTO_KEY = 'd4tk-achievements-fish-auto';
  D4TK.renameStoreKey('d4-angler-ledger-v1', STORE_KEY);
  // One-time migration for the "Throughout Sanctuary" -> "Generic" rename and
  // the Mythic Uniques merge: fish ids are <regionSlug>:<fishSlug>, so caught
  // fish keep their progress under the new Generic ids.
  D4TK.migrateStoreIds(STORE_KEY, {
    'throughout-sanctuary:saltfin': 'generic:saltfin',
    'throughout-sanctuary:bluescale': 'generic:bluescale',
    'throughout-sanctuary:glimmer': 'generic:glimmer',
    'throughout-sanctuary:silverbelly': 'generic:silverbelly',
    'throughout-sanctuary:darkling': 'generic:darkling',
    'mythic-uniques:molten-martyr': 'generic:molten-martyr',
    'mythic-uniques:ghoulworm': 'generic:ghoulworm',
    'mythic-uniques:fang-of-tathamet': 'generic:fang-of-tathamet',
    'mythic-uniques:dune-thresher-hatchling': 'generic:dune-thresher-hatchling',
    'mythic-uniques:vivid-whimsy': 'generic:vivid-whimsy'
  });
  var caught = D4TK.loadStore(STORE_KEY);
  var uiPrefs = D4TK.loadUiPrefs(STORE_KEY);
  uiPrefs.collapsed = uiPrefs.collapsed || {};
  var opts = { hideCaught: !!uiPrefs.hide };

  var FISHING_DATA = D4TK_DATA.fishing;

  var REGIONS = FISHING_DATA.regions;
  REGIONS.forEach(function (r) {
    r.id = D4TK.slug(r.name);
  });

  // Link to the achievements tracker: a caught fish ticks the Fishing challenge
  // with the same name, and "Tenacious Angler" ticks once every fish is caught.
  // Auto-ticked challenges are recorded in AUTO_STORE_KEY so unchecking a fish
  // only unticks what this link ticked — manual ticks are preserved.
  var achByFishName = {};
  (D4TK_DATA.achievements || []).forEach(function (c) {
    if (c.name !== 'Fishing') return;
    var used = {};
    (c.subcategories || []).forEach(function (s) {
      s.items.forEach(function (it) {
        var base = 'fishing-' + D4TK.slug(it[0]);
        var id = base;
        var n = 2;
        while (used[id]) { id = base + '-' + n; n++; }
        used[id] = true;
        achByFishName[it[0].toLowerCase()] = id;
      });
    });
  });

  function syncAchievements(silent) {
    var ach = D4TK.loadStore(ACH_STORE_KEY);
    var auto = D4TK.loadStore(AUTO_STORE_KEY);
    var changed = false;
    var notes = [];
    var unnotes = [];
    var total = 0, have = 0;
    REGIONS.forEach(function (r) {
      r.fish.forEach(function (f) {
        var isCaught = !!caught[r.id + ':' + D4TK.slug(f[0])];
        total++;
        if (isCaught) have++;
        var achId = achByFishName[f[0].toLowerCase()];
        if (!achId) return;
        // auto[achId] === false means the user manually unchecked this
        // achievement — the link must not re-tick it while the fish is caught.
        if (isCaught && !ach[achId] && auto[achId] !== false) { ach[achId] = true; auto[achId] = true; changed = true; notes.push(f[0]); }
        else if (!isCaught && auto[achId]) { delete ach[achId]; delete auto[achId]; changed = true; unnotes.push(f[0]); }
      });
    });
    var tenId = achByFishName['tenacious angler'];
    if (tenId) {
      if (have === total && !ach[tenId]) { ach[tenId] = true; auto[tenId] = true; changed = true; notes.push('Tenacious Angler'); }
      else if (have < total && auto[tenId]) { delete ach[tenId]; delete auto[tenId]; changed = true; unnotes.push('Tenacious Angler'); }
    }
    if (changed) {
      D4TK.saveStore(ACH_STORE_KEY, ach);
      D4TK.saveStore(AUTO_STORE_KEY, auto);
      if (!silent) {
        notes.forEach(function (n) { D4TK.toast('Challenge: ' + n + ' has also been marked as completed'); });
        unnotes.forEach(function (n) { D4TK.toast('Challenge: ' + n + ' has also been unmarked'); });
      }
    }
  }

  var regionsEl = document.getElementById('regions');
  var sectionEls = [];
  // Flat A-Z list view (List button): clones of the real fish rows, sharing
  // the same ids/store as the region view.
  var listEl = document.getElementById('list');
  var fishRows = [];

  function save() { D4TK.saveStore(STORE_KEY, caught); syncAchievements(); }

  // Manual uncheck of a fish suppresses re-ticking from the achievements page.
  function suppressAchFish(fishId) {
    var achFishAuto = D4TK.loadStore(ACH_FISH_AUTO_KEY);
    if (achFishAuto[fishId] !== false) {
      achFishAuto[fishId] = false;
      D4TK.saveStore(ACH_FISH_AUTO_KEY, achFishAuto);
    }
  }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function build() {
    REGIONS.forEach(function (r) {
      var sec = document.createElement('section');
      sec.dataset.region = r.id;

      var head = document.createElement('div');
      head.className = 'head';
      head.innerHTML =
        '<span class="chevron">▼</span>' +
        '<label class="gcheck"><input type="checkbox"><span class="box"></span></label>' +
        '<span class="category-name">' + r.name +
        (r.tag ? '<span class="tag">' + r.tag + '</span>' : '') +
        '</span>' +
        '<span class="mini-bar"><div></div></span>' +
        '<span class="category-count"><b>0</b> / ' + r.fish.length + '</span>';
      var headBox = head.querySelector('.gcheck input');
      headBox.addEventListener('change', function () {
        sec.querySelectorAll('.item').forEach(function (el) {
          var id = el.dataset.id;
          if (headBox.checked) caught[id] = true; else { delete caught[id]; suppressAchFish(id); }
        });
        save(); refresh();
      });
      head.addEventListener('click', function (e) {
        if (head.querySelector('.gcheck').contains(e.target)) return;
        sec.classList.toggle('collapsed');
        uiPrefs.collapsed[r.id] = sec.classList.contains('collapsed');
        D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
      });
      sec.appendChild(head);

      var list = document.createElement('div');
      list.className = 'item-list';
      var byRarity = {};
      r.fish.forEach(function (f) {
        (byRarity[f[1]] = byRarity[f[1]] || []).push(f);
      });
      ['Common', 'Magic', 'Rare', 'Legendary', 'Unique', 'Mythic'].forEach(function (rar) {
        if (!byRarity[rar]) return;
        var gkey = r.id + ':' + rar;
        var group = document.createElement('div');
        group.className = 'rarity-group';
        group.dataset.key = gkey;
        group.innerHTML =
          '<span class="collapse-arrow">▼</span>' +
          '<label class="gcheck"><input type="checkbox"><span class="box"></span></label>' +
          '<span class="rarity-name rarity r-' + rar.toLowerCase() + '">' + rar + '</span>' +
          '<span class="rarity-count"></span>';
        group.addEventListener('click', function (e) {
          if (group.querySelector('.gcheck').contains(e.target)) return;
          group.classList.toggle('collapsed');
          uiPrefs.collapsed[gkey] = group.classList.contains('collapsed');
          D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
        });
        var groupBox = group.querySelector('.gcheck input');
        groupBox.addEventListener('change', function () {
          byRarity[rar].forEach(function (f) {
            var id = r.id + ':' + D4TK.slug(f[0]);
            if (groupBox.checked) caught[id] = true; else { delete caught[id]; suppressAchFish(id); }
          });
          save(); refresh();
        });
        var arrow = group.querySelector('.collapse-arrow');
        arrow.addEventListener('click', function (e) {
          e.stopPropagation();
          group.classList.toggle('collapsed');
          uiPrefs.collapsed[gkey] = group.classList.contains('collapsed');
          D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
        });
        list.appendChild(group);
        if (uiPrefs.collapsed[gkey]) group.classList.add('collapsed');

        var grid = document.createElement('div');
        grid.className = 'fish-grid check-grid';
        byRarity[rar].forEach(function (f) {
          var id = r.id + ':' + D4TK.slug(f[0]);
          var note = f[2];
          var label = document.createElement('label');
          label.className = 'item';
          label.dataset.id = id;
          label.dataset.name = f[0].toLowerCase();
          label.title = note ? r.name + ' — ' + note : r.name;
          label.innerHTML =
            '<input type="checkbox"' + (caught[id] ? ' checked' : '') + '>' +
            '<span class="box"></span>' +
            '<span class="name">' + f[0] + '</span>';
          var box = label.querySelector('input');
          box.addEventListener('change', function () {
            if (box.checked) caught[id] = true; else { delete caught[id]; suppressAchFish(id); }
            save(); refresh();
          });
          fishRows.push({ name: f[0], el: label });
          grid.appendChild(label);
        });
        D4TK.layoutCheckGrid(grid, 3);
        list.appendChild(grid);
      });
      sec.appendChild(list);
      regionsEl.appendChild(sec);
      sectionEls.push(sec);
      if (uiPrefs.collapsed[r.id]) sec.classList.add('collapsed');
    });
  }

  // One flat section with every fish A-Z. Clones share dataset.id with the
  // region rows; a delegated change handler keeps both views in sync.
  function buildList() {
    if (!listEl) return;
    listEl.innerHTML = '';
    var sec = document.createElement('section');
    var note = document.createElement('p');
    note.className = 'list-note';
    note.textContent = 'All fish in alphabetical order';
    var list = document.createElement('div');
    list.className = 'item-list';
    fishRows.slice().sort(function (a, b) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }).forEach(function (r) {
      list.appendChild(r.el.cloneNode(true));
    });
    sec.appendChild(note);
    sec.appendChild(list);
    listEl.appendChild(sec);
  }

  if (listEl) {
    listEl.addEventListener('change', function (e) {
      if (e.target.tagName !== 'INPUT') return;
      var row = e.target.closest('.item');
      if (!row) return;
      var id = row.dataset.id;
      if (e.target.checked) caught[id] = true; else delete caught[id];
      save(); refresh();
    });
    document.getElementById('btn-list').addEventListener('click', function () {
      var on = document.body.classList.toggle('list-mode');
      this.textContent = on ? 'Sections' : 'List';
    });
  }

  function refresh() {
    regionsEl.classList.toggle('hide-caught', opts.hideCaught);
    var total = 0, caughtCount = 0, regionsDone = 0;
    REGIONS.forEach(function (r, i) {
      var sec = sectionEls[i];
      var n = 0;
      sec.querySelectorAll('.item').forEach(function (el) {
        var inp = el.querySelector('input');
        inp.checked = !!caught[el.dataset.id];
        var isCaught = inp.checked;
        el.classList.toggle('caught', isCaught);
        el.style.display = (opts.hideCaught && isCaught) ? 'none' : '';
        if (isCaught) n++;
      });
      sec.querySelectorAll('.rarity-group').forEach(function (g) {
        var grid = g.nextElementSibling;
        D4TK.layoutCheckGrid(grid, 3);
        var items = grid.querySelectorAll('.item');
        var gn = grid.querySelectorAll('.item input:checked').length;
        g.querySelector('.gcheck input').checked = gn === items.length && items.length > 0;
        g.querySelector('.rarity-count').textContent = gn + ' / ' + items.length;
      });
      var headBox = sec.querySelector('.head .gcheck input');
      var fishBoxes = sec.querySelectorAll('.item input');
      headBox.checked = n === r.fish.length && fishBoxes.length > 0;
      var done = n === r.fish.length;
      if (done) regionsDone++;
      sec.querySelector('.category-count b').textContent = n;
      sec.querySelector('.mini-bar div').style.width = (n / r.fish.length * 100) + '%';
      sec.querySelector('.category-count').style.color = done ? 'var(--gold)' : '';
      total += r.fish.length; caughtCount += n;
    });
    if (listEl) {
      listEl.querySelectorAll('.item').forEach(function (el) {
        var inp = el.querySelector('input');
        inp.checked = !!caught[el.dataset.id];
        el.classList.toggle('caught', inp.checked);
      });
    }
    setText('stat-primary', caughtCount);
    setText('stat-total', total);
    setText('stat-secondary', regionsDone);
    setText('stat-secondary-total', REGIONS.length);
    var fill = document.getElementById('global-fill');
    if (fill) fill.style.width = (caughtCount / total * 100) + '%';
    applySearch();
  }

  function applySearch() {
    var q = document.getElementById('search').value.trim().toLowerCase();
    sectionEls.forEach(function (sec) {
      var any = false;
      sec.querySelectorAll('.item').forEach(function (el) {
        var match = !q || el.dataset.name.indexOf(q) !== -1 || el.textContent.toLowerCase().indexOf(q) !== -1;
        var hidden = opts.hideCaught && el.classList.contains('caught');
        el.style.display = (match && !hidden) ? '' : 'none';
        if (match && !hidden) any = true;
      });
      sec.querySelectorAll('.rarity-group').forEach(function (g) {
        var grid = g.nextElementSibling;
        D4TK.layoutCheckGrid(grid, 3);
        var anyInGroup = grid.querySelectorAll('.item').length > 0 &&
          Array.prototype.some.call(grid.querySelectorAll('.item'), function (el) { return el.style.display !== 'none'; });
        g.style.display = (q && !anyInGroup) ? 'none' : '';
      });
      sec.style.display = any ? '' : 'none';
    });
    if (listEl) {
      var anyList = false;
      listEl.querySelectorAll('.item').forEach(function (el) {
        var match = !q || el.dataset.name.indexOf(q) !== -1 || el.textContent.toLowerCase().indexOf(q) !== -1;
        var hidden = opts.hideCaught && el.classList.contains('caught');
        el.style.display = (match && !hidden) ? '' : 'none';
        if (match && !hidden) anyList = true;
      });
      listEl.style.display = (!q || anyList) ? '' : 'none';
    }
  }

  document.getElementById('search').addEventListener('input', applySearch);

  document.getElementById('btn-hide-caught').addEventListener('click', function () {
    opts.hideCaught = !opts.hideCaught;
    uiPrefs.hide = opts.hideCaught;
    D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
    this.textContent = opts.hideCaught ? 'Show Caught' : 'Hide Caught';
    refresh();
  });

  // Collapse/Expand All covers both region sections and rarity groups.
  function allCollapsible() {
    var all = sectionEls.slice();
    sectionEls.forEach(function (s) {
      s.querySelectorAll('.rarity-group').forEach(function (g) { all.push(g); });
    });
    return all;
  }

  document.getElementById('btn-expand').addEventListener('click', function () {
    var all = allCollapsible();
    var anyOpen = all.some(function (el) { return !el.classList.contains('collapsed'); });
    all.forEach(function (el) {
      el.classList.toggle('collapsed', anyOpen);
      uiPrefs.collapsed[el.dataset.key || el.dataset.region] = anyOpen;
    });
    D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
    this.textContent = anyOpen ? 'Expand All' : 'Collapse All';
  });

  document.getElementById('btn-export').addEventListener('click', function () {
    var payload = {
      app: 'd4tk-fishing',
      version: 1,
      exported: new Date().toISOString(),
      caught: Object.keys(caught)
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'd4tk-fishing-tracker-' + new Date().toISOString() + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  document.getElementById('btn-import').addEventListener('click', function () {
    document.getElementById('import-file').click();
  });

  document.getElementById('import-file').addEventListener('change', function () {
    var file = this.files[0];
    this.value = '';
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var data;
      try { data = JSON.parse(reader.result); } catch (e) {
        alert('Not a valid backup file.');
        return;
      }
      var ids = (data && Array.isArray(data.caught)) ? data.caught : null;
      if (!ids) {
        alert('Not a valid backup file.');
        return;
      }
      caught = {};
      ids.forEach(function (id) { caught[id] = true; });
      save();
      location.reload();
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!confirm('Cast aside the entire ledger? All progress will be lost.')) return;
    caught = {};
    save();
    sectionEls.forEach(function (s) { s.querySelectorAll('input').forEach(function (i) { i.checked = false; }); });
    refresh();
  });

  build();
  buildList();
  document.getElementById('btn-hide-caught').textContent = opts.hideCaught ? 'Show Caught' : 'Hide Caught';
  document.getElementById('btn-expand').textContent = allCollapsible().some(function (el) { return !el.classList.contains('collapsed'); }) ? 'Collapse All' : 'Expand All';
  refresh();
  syncAchievements(true);
})();
