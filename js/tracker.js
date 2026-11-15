var D4TK = (function () {
  'use strict';

  function slug(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  // Escapes a string for use inside a double-quoted HTML attribute.
  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Splits an acquisition tag into the two badge columns shown on the
  // cosmetics page: a coarse TYPE (Drop/Quest/Campaign/Vendor/Challenge/
  // Shop/Reliquary/Secret/Missing — one colour each in theme.css) and a
  // DETAIL value (region, Free/Paid for seasonal reliquaries, boss or
  // quest kind, …) whose colour is derived per value so identical values
  // always share a colour and different values are easy to tell apart.
  function typeOf(tag) {
    var t = String(tag).toLowerCase();
    if (/missing|removed/.test(t)) return 'Missing';
    if (/campaign/.test(t)) return 'Campaign';
    if (/reliquary|azeroth/.test(t)) return 'Reliquary';
    if (/shop|deluxe|xbox|witcher/.test(t)) return 'Shop';
    if (/vendor/.test(t)) return 'Vendor';
    if (/twitch|community|in-game|altar|renown|journey|season rank/.test(t)) return 'Challenge';
    if (/drop|boss|lair|rare|unique|mefishto|cow king|fishing|\bwd\b/.test(t)) return 'Drop';
    if (/quest/.test(t)) return 'Quest';
    if (/secret|unknown|moo|echo|citadel/.test(t)) return 'Secret';
    return 'Other';
  }

  var REGIONS = ['Fractured Peaks', 'Scosglen', 'Dry Steppes', 'Kehjistan', 'Hawezar', 'Nahantu', 'Skovos'];

  function detailOf(tag, ty) {
    var t = String(tag);
    var tl = t.toLowerCase();
    if (/^free /.test(tl)) return 'Free';
    if (/^paid /.test(tl) || /^premium /.test(tl) || /^deluxe/.test(tl)) return 'Premium';
    // shop items: don't repeat "Shop" in the detail column — show whether
    // the store item is paid (platinum) or free (promo)
    if (ty === 'Shop') return /free/i.test(tl) ? 'Free' : 'Premium';
    for (var i = 0; i < REGIONS.length; i++) {
      if (tl.indexOf(REGIONS[i].toLowerCase()) !== -1) return REGIONS[i];
    }
    if (/^world drop/.test(tl)) return 'World';
    return t;
  }

  // Assigns each distinct detail value its own hue: values are handed out
  // in golden-angle order, so different values never share a colour.
  var detailHues = {};
  var detailHueNext = 0;
  function detailHue(value) {
    if (!Object.prototype.hasOwnProperty.call(detailHues, value)) {
      detailHues[value] = Math.round(detailHueNext * 137.508) % 360;
      detailHueNext++;
    }
    return detailHues[value];
  }

  // Matches "<Class> only" mentions — the only class that can use the
  // cosmetic. "All classes except …" notes are not a class lock.
  var CLASS_ONLY_RE = /\b(Barbarian|Druid|Necromancer|Paladin|Rogue|Sorcerer|Spiritborn|Warlock) only\b/;

  // The single class a cosmetic is restricted to ("Rogue only"), or '' when
  // it is not class-locked. (Named lockedClass because create() already uses
  // `itemClass` for the item CSS class name.)
  function lockedClass(text) {
    var m = CLASS_ONLY_RE.exec(String(text || ''));
    return m ? m[1] : '';
  }

  function loadStore(key) {
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; }
  }

  function saveStore(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
  }

  // Small transient toast notification (bottom center, stacked), e.g. for
  // cross-tracker links.
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    t.style.bottom = (1.2 + document.querySelectorAll('.toast').length * 3) + 'rem';
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 10);
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 300);
    }, 2600);
  }

  // UI preferences (collapsed sections, hide-collected) — stored per tracker
  // page so a refresh restores the user's configuration instead of resetting it.
  var UI_PREFS_KEY = 'd4tk-ui-prefs';
  var LEGACY_UI_PREFS_KEY = 'd4tk-ui-prefs-v1';

  function loadUiPrefs(pageKey) {
    try {
      var all = JSON.parse(localStorage.getItem(UI_PREFS_KEY)) || {};
      var prefs = all[pageKey];
      return (prefs && typeof prefs === 'object') ? prefs : {};
    } catch (e) { return {}; }
  }

  function saveUiPrefs(pageKey, prefs) {
    try {
      var all = JSON.parse(localStorage.getItem(UI_PREFS_KEY)) || {};
      all[pageKey] = prefs;
      localStorage.setItem(UI_PREFS_KEY, JSON.stringify(all));
    } catch (e) {}
  }

  // One-time migration for renamed store keys: move saved progress and the
  // per-page UI prefs namespace from the old key to the new one. No-op once
  // the old key is gone; never overwrites data already saved under the new key.
  function renameStoreKey(oldKey, newKey) {
    if (!oldKey || !newKey || oldKey === newKey) return false;
    var changed = false;
    try {
      var raw = localStorage.getItem(oldKey);
      if (raw !== null) {
        if (localStorage.getItem(newKey) === null) localStorage.setItem(newKey, raw);
        localStorage.removeItem(oldKey);
        changed = true;
      }
      var prefsRaw = localStorage.getItem(UI_PREFS_KEY) || localStorage.getItem(LEGACY_UI_PREFS_KEY);
      if (prefsRaw) {
        var all = JSON.parse(prefsRaw) || {};
        if (all[oldKey] && !all[newKey]) {
          all[newKey] = all[oldKey];
          delete all[oldKey];
          localStorage.setItem(UI_PREFS_KEY, JSON.stringify(all));
          changed = true;
        }
      }
    } catch (e) {}
    return changed;
  }

  // Migrate the UI prefs key itself (d4tk-ui-prefs-v1 -> d4tk-ui-prefs).
  renameStoreKey(LEGACY_UI_PREFS_KEY, UI_PREFS_KEY);

  function migrateStoreKeys(storeKey, prefixMap) {
    var store = loadStore(storeKey);
    var prefixes = Object.keys(prefixMap);
    var next = {};
    var changed = false;
    Object.keys(store).forEach(function (id) {
      var newId = id;
      prefixes.forEach(function (oldPrefix) {
        if (newId.indexOf(oldPrefix) === 0) {
          newId = prefixMap[oldPrefix] + newId.slice(oldPrefix.length);
        }
      });
      if (newId !== id) changed = true;
      next[newId] = store[id];
    });
    if (changed) saveStore(storeKey, next);
    return changed;
  }

  // Exact id-to-id migration (unlike migrateStoreKeys, which matches by
  // prefix). An entry is moved only when the old id exists and the new id
  // is not already collected, so existing progress is never overwritten.
  function migrateStoreIds(storeKey, idMap) {
    var store = loadStore(storeKey);
    var next = {};
    var changed = false;
    Object.keys(store).forEach(function (id) {
      var newId = Object.prototype.hasOwnProperty.call(idMap, id) ? idMap[id] : id;
      if (newId !== id) changed = true;
      if (!Object.prototype.hasOwnProperty.call(next, newId)) next[newId] = store[id];
    });
    if (changed) saveStore(storeKey, next);
    return changed;
  }

  // One-time migration for the titles tracker: prefix/suffix half ids
  // (<catSlug>-p-<idx>-<slug> / <catSlug>-s-<idx>-<slug>) become one id per
  // title (<catSlug>-t-<idx>). A title counts as earned when every half it
  // has was collected.
  function migrateTitleHalves(storeKey, titlesData) {
    var store = loadStore(storeKey);
    var hasHalfIds = Object.keys(store).some(function (id) { return /-[ps]-\d+-/.test(id); });
    if (!hasHalfIds) return false;
    var next = {};
    Object.keys(store).forEach(function (id) {
      if (!/-[ps]-\d+-/.test(id)) next[id] = store[id];
    });
    titlesData.forEach(function (c) {
      var cs = slug(c.name);
      c.titles.forEach(function (t, idx) {
        var halves = [];
        if (t[0]) halves.push(cs + '-p-' + idx + '-' + slug(t[0]));
        if (t[1]) halves.push(cs + '-s-' + idx + '-' + slug(t[1]));
        if (halves.length && halves.every(function (h) { return !!store[h]; })) {
          next[cs + '-t-' + idx] = true;
        }
      });
    });
    saveStore(storeKey, next);
    return true;
  }

  function exportBackup(appName, filePrefix, ids) {
    var payload = {
      app: appName,
      version: 1,
      exported: new Date().toISOString(),
      collected: Object.keys(ids)
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'd4tk-' + filePrefix + '-' + new Date().toISOString() + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function importBackup(fileInput, keyName, onImport) {
    var file = fileInput.files[0];
    fileInput.value = '';
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var data;
      try { data = JSON.parse(reader.result); } catch (e) {
        alert('Not a valid backup file.');
        return;
      }
      var ids = (data && Array.isArray(data[keyName])) ? data[keyName] : null;
      if (!ids) {
        alert('Not a valid backup file.');
        return;
      }
      var result = {};
      ids.forEach(function (id) { result[id] = true; });
      onImport(result);
    };
    reader.readAsText(file);
  }

  function countItems(category) {
    if (category.subcategories) {
      var n = 0;
      category.subcategories.forEach(function (s) { n += s.items.length; });
      return n;
    }
    return (category.items || []).length;
  }

  // Lays out a grid of checkable items with `cols` columns: when the last row
  // is partial, the last visible item is expanded over the unused cells. With
  // two visible items that means the first sits in column 1 and the second
  // spans the remaining columns (e.g. 3:1 and 3:2+3:3 in a three-column grid).
  // Hidden items (display:none) are skipped so the span tracks what the user
  // actually sees after hiding caught/collected entries.
  function layoutCheckGrid(grid, cols) {
    cols = cols || 3;
    var all = grid.children;
    var items = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].style.display !== 'none') items.push(all[i]);
    }
    var k = items.length;
    for (var j = 0; j < all.length; j++) all[j].style.gridColumn = '';
    var r = k % cols;
    if (k > 0 && r !== 0) items[k - 1].style.gridColumn = 'span ' + (cols - r + 1);
  }

  function create(config) {
    var storeKey = config.storeKey;
    var data = config.data;
    var containerEl = document.getElementById(config.containerId);
    var itemClass = config.itemClass || 'item';
    var listClass = config.listClass || 'item-list';
    var collectedClass = config.collectedClass || 'collected';
    var hasSubcategories = config.hasSubcategories || false;
    var collapsibleSubcategories = config.collapsibleSubcategories || false;
    // Optional predicate: categories with statExclude(cat) === true are still
    // listed and tracked, but left out of the summary stats and progress bar.
    var statExclude = config.statExclude || null;
    // Optional: render the item's acquisition tag as a colour-coded badge
    // next to its name, plus a class column with the class the cosmetic is
    // locked to ("X only"), colour-coded per class.
    var showItemTags = config.itemTags || false;
    var showClassColumn = config.classColumn || false;
    // Optional extra counters: [{ id, match }] — for each, the number of
    // collected items across all categories with match(cat) === true is shown
    // in the element with that id (no maximum, just the obtained count).
    var statExtras = config.statExtras || null;

    var collected = loadStore(storeKey);
    var uiPrefs = loadUiPrefs(storeKey);
    uiPrefs.collapsed = uiPrefs.collapsed || {};
    var opts = { hideCollected: !!uiPrefs.hide };
    var sectionEls = [];
    var groupEls = [];
    // Flat A-Z list view (List button): populated with clones of the real
    // item rows, so ids and the store stay shared with the sectioned view.
    var listEl = config.listView ? document.getElementById('list') : null;
    var listRows = [];
    var itemById = {};

    function save() { saveStore(storeKey, collected); }

    function buildItem(item, catSlug, usedIds) {
      // Ids are <catSlug>-<slug(name)>; when a category lists two items with
      // the same name, later ones get a numeric suffix so each keeps its own
      // checkbox and progress entry.
      var base = catSlug + '-' + slug(item[0]);
      var id = base;
      var n = 2;
      while (usedIds[id]) {
        id = base + '-' + n;
        n++;
      }
      itemById[id] = item;
      usedIds[id] = true;
      var label = document.createElement('label');
      label.className = itemClass;
      label.dataset.id = id;
      label.dataset.name = item[0].toLowerCase();
      label.title = item[2] ? item[2] : '';

      // The description flows directly after the name (see theme.css):
      // truncated with an ellipsis when too long, revealed in full on hover.
      // Source guides are not linked per item — they are listed on the
      // References page (seasonal ones under its Seasonal section).
      var infoText = item[1] || '';
      var infoTitle = item[1] ? ' title="' + escapeAttr(item[1]) + '"' : '';
      var infoHtml = '<span class="info"' + infoTitle + '>' + infoText + '</span>';
      // Type + detail badge columns, derived from the acquisition tag.
      var typeHtml = '', detailHtml = '';
      if (showItemTags && item[2]) {
        var ty = typeOf(item[2]);
        var det = detailOf(item[2], ty);
        typeHtml = '<span class="item-type type-' + slug(ty.toLowerCase()) + '" title="' + escapeAttr(ty) + '">' + ty + '</span>';
        detailHtml = (det === 'Free' || det === 'Premium')
          ? '<span class="item-detail detail-' + det.toLowerCase() + '" title="' + escapeAttr(det) + '">' + det + '</span>'
          : '<span class="item-detail" style="color:hsl(' + detailHue(det) + ',70%,65%)" title="' + escapeAttr(det) + '">' + det + '</span>';
      }
      // Class column (after the type/detail badges): the single class the
      // cosmetic is locked to, colour-coded per class (see theme.css);
      // "All" when it is not specific to one class.
      var cls = showClassColumn ? lockedClass(item[1]) : '';
      var classHtml = !showClassColumn ? '' : (cls
        ? '<span class="item-class class-' + slug(cls.toLowerCase()) + '" title="' + escapeAttr(cls) + '">' + cls + '</span>'
        : '<span class="item-class class-all" title="All">All</span>');

      // Right-aligned flag at the end of the row for items that are missing
      // or no longer obtainable (tag or description) — same highlight
      // colours as the other pages.
      var flagSrc = String(item[2] || '') + ' ' + String(item[1] || '');
      var flagHtml = '';
      if (/missing/i.test(flagSrc)) flagHtml = '<span class="item-flag missing-hit">Missing</span>';
      else if (/no longer obtainable/i.test(flagSrc)) flagHtml = '<span class="item-flag unobtainable-hit">Unobtainable</span>';

      label.innerHTML =
        '<input type="checkbox"' + (collected[id] ? ' checked' : '') + '>' +
        '<span class="box"></span>' +
        '<span class="name" title="' + escapeAttr(item[0]) + '">' + item[0] + '</span>' +
        typeHtml +
        detailHtml +
        classHtml +
        infoHtml +
        flagHtml;

      var box = label.querySelector('input');
      box.addEventListener('change', function () {
        if (box.checked) collected[id] = true; else delete collected[id];
        save(); refresh();
        // Optional cross-tracker hook (achievements <-> titles): lets the
        // page react to a single item being ticked/unticked.
        if (config.onItemToggle) config.onItemToggle(id, box.checked, item);
      });
      listRows.push({ name: item[0], el: label });
      return label;
    }

    // One flat section with every item A-Z. Clones share dataset.id with
    // the sectioned rows; a delegated change handler keeps both in sync.
    function buildList() {
      if (!listEl) return;
      listEl.innerHTML = '';
      var sec = document.createElement('section');
      var note = document.createElement('p');
      note.className = 'list-note';
      note.textContent = 'All ' + (config.listItemType || 'entries') + ' in alphabetical order';
      var list = document.createElement('div');
      list.className = listClass;
      listRows.slice().sort(function (a, b) {
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
        var row = e.target.closest('.' + itemClass);
        if (!row) return;
        var id = row.dataset.id;
        if (e.target.checked) collected[id] = true; else delete collected[id];
        save(); refresh();
        if (config.onItemToggle) config.onItemToggle(id, e.target.checked, itemById[id]);
      });
      var listBtn = document.getElementById('btn-list');
      if (listBtn) listBtn.addEventListener('click', function () {
        var on = document.body.classList.toggle('list-mode');
        this.textContent = on ? 'Sections' : 'List';
      });
    }

    function build() {
      var lastGroup = null;
      var currentGroup = null;
      data.forEach(function (cat) {
        if (cat.group && cat.group !== lastGroup) {
          var gh = document.createElement('div');
          gh.className = 'group-header';
          gh.textContent = cat.group;
          containerEl.appendChild(gh);
          lastGroup = cat.group;
          currentGroup = { header: gh, sections: [] };
          groupEls.push(currentGroup);
        }
        var total = countItems(cat);
        var sec = document.createElement('section');
        sec.dataset.category = slug(cat.name);

        var head = document.createElement('div');
        head.className = 'head';
        head.innerHTML =
          '<span class="chevron">▼</span>' +
          '<label class="gcheck"><input type="checkbox"><span class="box"></span></label>' +
          '<span class="category-name">' + cat.name +
          (cat.tag ? '<span class="tag">' + cat.tag + '</span>' : '') +
          '</span>' +
          '<span class="mini-bar"><div></div></span>' +
          '<span class="category-count"><b>0</b> / ' + total + '</span>';

        var headBox = head.querySelector('.gcheck input');
        headBox.addEventListener('change', function () {
          sec.querySelectorAll('.' + itemClass).forEach(function (el) {
            var id = el.dataset.id;
            if (headBox.checked) collected[id] = true; else delete collected[id];
            if (config.onItemToggle) config.onItemToggle(id, headBox.checked, itemById[id]);
          });
          save(); refresh();
        });
        head.addEventListener('click', function (e) {
          if (head.querySelector('.gcheck').contains(e.target)) return;
          sec.classList.toggle('collapsed');
          uiPrefs.collapsed[sec.dataset.category] = sec.classList.contains('collapsed');
          saveUiPrefs(storeKey, uiPrefs);
        });
        sec.appendChild(head);

        var list = document.createElement('div');
        list.className = listClass;
        var catSlug = slug(cat.name);
        var usedIds = {};

        if (hasSubcategories && cat.subcategories) {
          cat.subcategories.forEach(function (sub) {
            if (collapsibleSubcategories && sub.name) {
              var subKey = catSlug + ':' + slug(sub.name);
              var group = document.createElement('div');
              group.className = 'subcat-group';
              group.dataset.key = subKey;
              group.innerHTML =
                '<span class="collapse-arrow">▼</span>' +
                '<label class="gcheck"><input type="checkbox"><span class="box"></span></label>' +
                '<span class="subcat-name">' + sub.name + '</span>' +
                '<span class="subcat-count"></span>';
              var itemsBox = document.createElement('div');
              itemsBox.className = 'subcat-items';
              group.addEventListener('click', function (e) {
                if (group.querySelector('.gcheck').contains(e.target)) return;
                group.classList.toggle('collapsed');
                uiPrefs.collapsed[subKey] = group.classList.contains('collapsed');
                saveUiPrefs(storeKey, uiPrefs);
              });
              var groupBox = group.querySelector('.gcheck input');
              groupBox.addEventListener('change', function () {
                itemsBox.querySelectorAll('.' + itemClass).forEach(function (el) {
                  var id = el.dataset.id;
                  if (groupBox.checked) collected[id] = true; else delete collected[id];
                  if (config.onItemToggle) config.onItemToggle(id, groupBox.checked, itemById[id]);
                });
                save(); refresh();
              });
              var arrow = group.querySelector('.collapse-arrow');
              arrow.addEventListener('click', function (e) {
                e.stopPropagation();
                group.classList.toggle('collapsed');
                uiPrefs.collapsed[subKey] = group.classList.contains('collapsed');
                saveUiPrefs(storeKey, uiPrefs);
              });
              list.appendChild(group);
              if (uiPrefs.collapsed[subKey]) group.classList.add('collapsed');
              sub.items.forEach(function (item) {
                itemsBox.appendChild(buildItem(item, catSlug, usedIds));
              });
              list.appendChild(itemsBox);
            } else {
              if (sub.name) {
                var subHeader = document.createElement('div');
                subHeader.className = 'subcat';
                subHeader.textContent = sub.name;
                list.appendChild(subHeader);
              }
              sub.items.forEach(function (item) {
                list.appendChild(buildItem(item, catSlug, usedIds));
              });
            }
          });
        } else if (cat.items) {
          cat.items.forEach(function (item) {
            list.appendChild(buildItem(item, catSlug, usedIds));
          });
        }

        sec.appendChild(list);
        containerEl.appendChild(sec);
        sectionEls.push(sec);
        if (currentGroup) currentGroup.sections.push(sec);
        if (uiPrefs.collapsed[sec.dataset.category]) sec.classList.add('collapsed');
      });
    }

    function refresh() {
      var total = 0, collectedCount = 0, categoriesDone = 0, categoriesTotal = 0;
      var extraDone = {};
      data.forEach(function (cat, i) {
        var sec = sectionEls[i];
        var catTotal = countItems(cat);
        var n = 0;
        sec.querySelectorAll('.' + itemClass).forEach(function (el) {
          var inp = el.querySelector('input');
          inp.checked = !!collected[el.dataset.id];
          var isCollected = inp.checked;
          el.classList.toggle(collectedClass, isCollected);
          el.style.display = (opts.hideCollected && isCollected) ? 'none' : '';
          if (isCollected) n++;
        });
        sec.querySelectorAll('.subcat-group').forEach(function (g) {
          var box = g.nextElementSibling;
          var items = box.querySelectorAll('.' + itemClass);
          var gn = box.querySelectorAll('.' + itemClass + ' input:checked').length;
          g.querySelector('.gcheck input').checked = gn === items.length && items.length > 0;
          g.querySelector('.subcat-count').textContent = gn + ' / ' + items.length;
        });
        var headBox = sec.querySelector('.head .gcheck input');
        var itemBoxes = sec.querySelectorAll('.' + itemClass + ' input');
        headBox.checked = n === catTotal && itemBoxes.length > 0;
        var done = n === catTotal;
        sec.querySelector('.category-count b').textContent = n;
        sec.querySelector('.mini-bar div').style.width = (n / catTotal * 100) + '%';
        sec.querySelector('.category-count').style.color = done ? 'var(--gold)' : '';
        if (!statExclude || !statExclude(cat)) {
          if (done) categoriesDone++;
          categoriesTotal++;
          total += catTotal; collectedCount += n;
        }
        if (statExtras) {
          statExtras.forEach(function (ex) {
            if (ex.match(cat)) extraDone[ex.id] = (extraDone[ex.id] || 0) + n;
          });
        }
      });
      if (listEl) {
        listEl.querySelectorAll('.' + itemClass).forEach(function (el) {
          var inp = el.querySelector('input');
          inp.checked = !!collected[el.dataset.id];
          el.classList.toggle(collectedClass, inp.checked);
        });
      }
      setText('stat-primary', collectedCount);
      setText('stat-total', total);
      setText('stat-secondary', categoriesDone);
      setText('stat-secondary-total', categoriesTotal);
      if (statExtras) {
        statExtras.forEach(function (ex) { setText(ex.id, extraDone[ex.id] || 0); });
      }
      var fill = document.getElementById('global-fill');
      if (fill) fill.style.width = (collectedCount / total * 100) + '%';
      applySearch();
    }

    function setText(id, val) {
      var el = document.getElementById(id);
      if (el) el.textContent = val;
    }

    function applySearch() {
      var q = document.getElementById('search').value.trim().toLowerCase();
      sectionEls.forEach(function (sec) {
        var any = false;
        sec.querySelectorAll('.' + itemClass).forEach(function (el) {
          var match = !q || el.dataset.name.indexOf(q) !== -1 || el.textContent.toLowerCase().indexOf(q) !== -1;
          var hidden = opts.hideCollected && el.classList.contains(collectedClass);
          el.style.display = (match && !hidden) ? '' : 'none';
          if (match && !hidden) any = true;
        });
        sec.querySelectorAll('.subcat').forEach(function (el) {
          el.style.display = any ? '' : 'none';
        });
        sec.querySelectorAll('.subcat-group').forEach(function (g) {
          var box = g.nextElementSibling;
          var anyInGroup = Array.prototype.some.call(box.querySelectorAll('.' + itemClass), function (el) {
            return el.style.display !== 'none';
          });
          g.style.display = (q && !anyInGroup) ? 'none' : '';
        });
        sec.style.display = any ? '' : 'none';
      });
      groupEls.forEach(function (g) {
        var anyVisible = g.sections.some(function (s) { return s.style.display !== 'none'; });
        g.header.style.display = anyVisible ? '' : 'none';
      });
      if (listEl) {
        var anyList = false;
        listEl.querySelectorAll('.' + itemClass).forEach(function (el) {
          var match = !q || el.dataset.name.indexOf(q) !== -1 || el.textContent.toLowerCase().indexOf(q) !== -1;
          var hidden = opts.hideCollected && el.classList.contains(collectedClass);
          el.style.display = (match && !hidden) ? '' : 'none';
          if (match && !hidden) anyList = true;
        });
        listEl.style.display = (!q || anyList) ? '' : 'none';
      }
    }

    // Wire up controls
    document.getElementById('search').addEventListener('input', applySearch);

    var hideBtn = document.getElementById('btn-hide-collected');
    hideBtn.addEventListener('click', function () {
      opts.hideCollected = !opts.hideCollected;
      uiPrefs.hide = opts.hideCollected;
      saveUiPrefs(storeKey, uiPrefs);
      this.textContent = opts.hideCollected ? (config.showLabel || 'Show Collected') : (config.hideLabel || 'Hide Collected');
      refresh();
    });

    var expandBtn = document.getElementById('btn-expand');
    // Collapse/Expand All covers both top-level sections and subcategory groups.
    function allCollapsible() {
      var all = sectionEls.slice();
      sectionEls.forEach(function (s) {
        s.querySelectorAll('.subcat-group').forEach(function (g) { all.push(g); });
      });
      return all;
    }
    expandBtn.addEventListener('click', function () {
      var all = allCollapsible();
      var anyOpen = all.some(function (el) { return !el.classList.contains('collapsed'); });
      all.forEach(function (el) {
        el.classList.toggle('collapsed', anyOpen);
        uiPrefs.collapsed[el.dataset.key || el.dataset.category] = anyOpen;
      });
      saveUiPrefs(storeKey, uiPrefs);
      this.textContent = anyOpen ? 'Expand All' : 'Collapse All';
    });

    document.getElementById('btn-export').addEventListener('click', function () {
      exportBackup(config.exportAppName, config.exportFilePrefix, collected);
    });

    document.getElementById('btn-import').addEventListener('click', function () {
      document.getElementById('import-file').click();
    });

    document.getElementById('import-file').addEventListener('change', function () {
      importBackup(this, 'collected', function (ids) {
        collected = ids;
        save();
        location.reload();
      });
    });

    document.getElementById('btn-reset').addEventListener('click', function () {
      if (!confirm(config.resetConfirm || 'Reset all progress?')) return;
      collected = {};
      save();
      sectionEls.forEach(function (s) {
        s.querySelectorAll('input').forEach(function (i) { i.checked = false; });
      });
      refresh();
      if (config.onReset) config.onReset();
    });

    // Fit every column except the description to the widest item value, so
    // all rows line up. A single outlier (e.g. one very long shop item name)
    // is ignored — it truncates with an ellipsis and shows in full on hover.
    function fitItemColumns() {
      var ctx = document.createElement('canvas').getContext('2d');
      // keepPct: fit to this percentile of item widths — the widest tail
      // (e.g. one very long shop item name) truncates with an ellipsis and
      // shows in full on hover, instead of stretching the column for every
      // row. A small buffer is added so measured values never truncate.
      function colWidth(selector, upper, keepPct) {
        var els = containerEl.querySelectorAll('.item ' + selector);
        var widths = [];
        for (var i = 0; i < els.length; i++) {
          var cs = getComputedStyle(els[i]);
          ctx.font = cs.font || (cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily);
          var txt = els[i].textContent || '';
          if (upper) txt = txt.toUpperCase();
          // canvas measureText ignores letter-spacing — add it explicitly
          var ls = parseFloat(cs.letterSpacing) || 0;
          widths.push(ctx.measureText(txt).width + txt.length * ls);
        }
        if (!widths.length) return 0;
        widths.sort(function (a, b) { return b - a; });
        var cut = Math.max(1, Math.ceil(widths.length * (1 - keepPct)));
        return Math.ceil((widths.length > cut ? widths[cut] : widths[0]) + 10);
      }
      var set = function (name, w) { if (w > 0) document.documentElement.style.setProperty(name, w + 'px'); };
      set('--cos-name-w', colWidth('.name', false, 0.995));
      set('--cos-type-w', colWidth('.item-type', true, 0.995));
      set('--cos-detail-w', colWidth('.item-detail', true, 0.995));
      set('--cos-class-w', colWidth('.item-class', true, 0.995));
    }

    build();
    buildList();
    fitItemColumns();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitItemColumns);
    hideBtn.textContent = opts.hideCollected ? (config.showLabel || 'Show Collected') : (config.hideLabel || 'Hide Collected');
    expandBtn.textContent = allCollapsible().some(function (el) { return !el.classList.contains('collapsed'); }) ? 'Collapse All' : 'Expand All';
    refresh();
  }

  // --- CSV data loading ---------------------------------------------------
  // The trackers' data lives in data/*.csv (schemas in README.md). The CSVs
  // are fetched over HTTP and parsed with a small RFC 4180 parser: quoted
  // fields, "" escapes, embedded commas/newlines, CRLF or LF separators.

  function parseCsv(text) {
    if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
    var rows = [];
    var row = [];
    var field = '';
    var inQuotes = false;
    var i = 0;
    var n = text.length;
    function endField() { row.push(field); field = ''; }
    function endRow() {
      endField();
      if (!(row.length === 1 && row[0] === '')) rows.push(row); // skip blank lines
      row = [];
    }
    while (i < n) {
      var c = text.charAt(i);
      if (inQuotes) {
        if (c === '"') {
          if (text.charAt(i + 1) === '"') { field += '"'; i += 2; continue; }
          inQuotes = false; i++; continue;
        }
        field += c; i++; continue;
      }
      if (c === '"' && field === '') { inQuotes = true; i++; continue; }
      if (c === ',') { endField(); i++; continue; }
      if (c === '\r') { endRow(); i++; if (text.charAt(i) === '\n') i++; continue; }
      if (c === '\n') { endRow(); i++; continue; }
      field += c; i++;
    }
    if (field !== '' || row.length > 0) endRow();
    return rows;
  }

  function loadCsv(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error('Could not load ' + url + ' (HTTP ' + res.status + ')');
      return res.text();
    }).then(parseCsv);
  }

  // Shown when a CSV cannot be fetched — e.g. when the page is opened
  // directly from disk (file://), where browsers block fetch().
  function showLoadError(containerId, err) {
    var el = document.getElementById(containerId);
    if (el) {
      el.innerHTML =
        '<p class="load-error">Could not load the tracker data from <code>data/*.csv</code>. ' +
        'Serve this site over HTTP (any static server, or GitHub Pages) — opening the HTML ' +
        'files directly from disk blocks the data request.</p>';
    }
    if (window.console && window.console.error) window.console.error(err);
  }

  // --- CSV -> tracker structures ------------------------------------------
  // Grouping rule for all builders: categories/subcategories/regions appear in
  // first-seen order and rows are appended to their group wherever they occur,
  // so new entries can simply be appended at the end of the file. The
  // categoryTag/regionTag is read from the first row of each group. Columns
  // are matched by header name, so columns may be reordered freely.

  function csvColumns(header, required) {
    var cols = {};
    (header || []).forEach(function (h, idx) { cols[String(h).trim()] = idx; });
    (required || []).forEach(function (name) {
      if (cols[name] === undefined) {
        throw new Error('CSV is missing the required column "' + name + '"');
      }
    });
    return cols;
  }

  function field(row, idx) {
    return idx === undefined || row[idx] === undefined ? '' : row[idx];
  }

  function isBlankRow(row) {
    return row.every(function (v) { return v === ''; });
  }

  // data/achievements.csv: category,categoryTag,subcategory,name,description,tag,url
  // An empty subcategory = items directly under the category (no subcat header).
  function buildAchievements(rows) {
    var cols = csvColumns(rows[0], ['category', 'subcategory', 'name']);
    var cats = [];
    var catByName = {};
    var subByKey = {};
    rows.slice(1).forEach(function (r) {
      if (isBlankRow(r)) return;
      var catName = field(r, cols.category);
      var subName = field(r, cols.subcategory);
      var cat = catByName[catName];
      if (!cat) {
        cat = { name: catName, subcategories: [] };
        var catTag = field(r, cols.categoryTag);
        if (catTag) cat.tag = catTag;
        catByName[catName] = cat;
        cats.push(cat);
      }
      var key = catName + '\u0000' + subName;
      var sub = subByKey[key];
      if (!sub) {
        sub = { name: subName, items: [] };
        subByKey[key] = sub;
        cat.subcategories.push(sub);
      }
      sub.items.push([
        field(r, cols.name),
        field(r, cols.description),
        field(r, cols.tag),
        field(r, cols.url)
      ]);
    });
    return cats;
  }

  // data/titles.csv: category,categoryTag,prefix,suffix,description,tag,url
  function buildTitles(rows) {
    var cols = csvColumns(rows[0], ['category']);
    var cats = [];
    var catByName = {};
    rows.slice(1).forEach(function (r) {
      if (isBlankRow(r)) return;
      var catName = field(r, cols.category);
      var cat = catByName[catName];
      if (!cat) {
        cat = { name: catName, titles: [] };
        var catTag = field(r, cols.categoryTag);
        if (catTag) cat.tag = catTag;
        catByName[catName] = cat;
        cats.push(cat);
      }
      cat.titles.push([
        field(r, cols.prefix),
        field(r, cols.suffix),
        field(r, cols.description),
        field(r, cols.tag),
        field(r, cols.url)
      ]);
    });
    return cats;
  }

  // data/cosmetics.csv: category,categoryTag,name,description,tag,url
  function buildCosmetics(rows) {
    var cols = csvColumns(rows[0], ['category', 'name']);
    var cats = [];
    var catByName = {};
    rows.slice(1).forEach(function (r) {
      if (isBlankRow(r)) return;
      var catName = field(r, cols.category);
      var cat = catByName[catName];
      if (!cat) {
        cat = { name: catName, items: [] };
        var catTag = field(r, cols.categoryTag);
        if (catTag) cat.tag = catTag;
        catByName[catName] = cat;
        cats.push(cat);
      }
      cat.items.push([
        field(r, cols.name),
        field(r, cols.description),
        field(r, cols.tag),
        field(r, cols.url)
      ]);
    });
    return cats;
  }

  // data/fishing.csv: region,regionTag,name,rarity,note
  function buildFishing(rows) {
    var cols = csvColumns(rows[0], ['region', 'name', 'rarity']);
    var regions = [];
    var regionByName = {};
    rows.slice(1).forEach(function (r) {
      if (isBlankRow(r)) return;
      var regionName = field(r, cols.region);
      var region = regionByName[regionName];
      if (!region) {
        region = { name: regionName, fish: [] };
        var regionTag = field(r, cols.regionTag);
        if (regionTag) region.tag = regionTag;
        regionByName[regionName] = region;
        regions.push(region);
      }
      var note = field(r, cols.note);
      if (note) {
        region.fish.push([field(r, cols.name), field(r, cols.rarity), note]);
      } else {
        region.fish.push([field(r, cols.name), field(r, cols.rarity)]);
      }
    });
    return { regions: regions };
  }

  return {
    create: create,
    layoutCheckGrid: layoutCheckGrid,
    slug: slug,
    loadStore: loadStore,
    saveStore: saveStore,
    toast: toast,
    loadUiPrefs: loadUiPrefs,
    saveUiPrefs: saveUiPrefs,
    renameStoreKey: renameStoreKey,
    migrateStoreKeys: migrateStoreKeys,
    migrateStoreIds: migrateStoreIds,
    migrateTitleHalves: migrateTitleHalves,
    exportBackup: exportBackup,
    importBackup: importBackup,
    parseCsv: parseCsv,
    loadCsv: loadCsv,
    showLoadError: showLoadError,
    buildAchievements: buildAchievements,
    buildTitles: buildTitles,
    buildCosmetics: buildCosmetics,
    buildFishing: buildFishing
  };
})();
