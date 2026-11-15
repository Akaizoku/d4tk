// Homepage overview — per-tracker progress read from localStorage.
// Totals are computed from the JS data files in js/data/.
(async function () {
  'use strict';

  D4TK.renameStoreKey('d4-achievements-ledger-v1', 'd4tk-achievements');
  D4TK.renameStoreKey('d4-cosmetics-ledger-v1', 'd4tk-cosmetics');
  D4TK.renameStoreKey('d4-titles-ledger-v1', 'd4tk-titles');
  D4TK.renameStoreKey('d4-angler-ledger-v1', 'd4tk-fishing');
  D4TK.migrateStoreKeys('d4tk-achievements', {
    'class-': 'classes-',
    'monster-': 'monsters-',
    'quest-': 'quests-'
  });

  var FISHING_DATA = D4TK_DATA.fishing;
  var COSMETICS_DATA = D4TK_DATA.cosmetics;
  var TITLES_DATA = D4TK_DATA.titles;
  var ACHIEVEMENTS_DATA = D4TK_DATA.achievements;

  // Feats of Strength and the seasonal challenge categories are tracked on
  // the Achievements page but excluded from the overview totals/percentages.
  var ACHIEVEMENTS_COUNTED = ACHIEVEMENTS_DATA.filter(function (c) {
    return c.name !== 'Feats of Strength' && !/^Season \d+$/.test(c.name);
  });

  // The overview surfaces the base-game cosmetics collection only: seasonal
  // and shop categories (premium/rotating) and the aggregated Mounts, Pets
  // and Shop sections are excluded, matching the main stats on the
  // Cosmetics page.
  var COSMETICS_COUNTED = COSMETICS_DATA.filter(function (c) {
    return c.group !== 'Season' && c.group !== 'Shop' && c.name !== 'Mounts' && c.name !== 'Pets';
  });

  // Titles moved from per-half checkboxes to one checkbox per title.
  D4TK.migrateTitleHalves('d4tk-titles', TITLES_DATA.game.concat(TITLES_DATA.season, TITLES_DATA.feats));

  function fishingGroups() {
    return FISHING_DATA.regions.map(function (r) {
      var rid = D4TK.slug(r.name);
      return { ids: r.fish.map(function (f) { return rid + ':' + D4TK.slug(f[0]); }) };
    });
  }

  function flatGroups(data) {
    return data.map(function (c) {
      var cs = D4TK.slug(c.name);
      var items = c.subcategories
        ? c.subcategories.reduce(function (acc, s) { return acc.concat(s.items); }, [])
        : c.items;
      return { ids: items.map(function (it) { return cs + '-' + D4TK.slug(it[0]); }) };
    });
  }

  // Feats of Strength and promotional titles are not always obtainable, so
  // they are excluded from the overview percentage (same as titles.js).
  var TITLES_COUNTED = TITLES_DATA.game.filter(function (c) {
    return !/feats of strength|promotional/i.test(c.name);
  });

  function titleGroups(data) {
    return TITLES_COUNTED.map(function (c) {
      var cs = D4TK.slug(c.name);
      return { ids: c.titles.map(function (t, idx) { return cs + '-t-' + idx; }) };
    });
  }

  function subGroups(data) {
    return data.map(function (c) {
      var cs = D4TK.slug(c.name);
      var ids = [];
      if (c.subcategories) {
        c.subcategories.forEach(function (s) {
          s.items.forEach(function (it) { ids.push(cs + '-' + D4TK.slug(it[0])); });
        });
      } else if (c.items) {
        c.items.forEach(function (it) { ids.push(cs + '-' + D4TK.slug(it[0])); });
      }
      return { ids: ids };
    });
  }

  var TRACKERS = [
    { id: 'fishing', storeKey: 'd4tk-fishing', groups: fishingGroups(), itemLabel: 'caught', groupLabel: 'regions complete' },
    { id: 'cosmetics', storeKey: 'd4tk-cosmetics', groups: flatGroups(COSMETICS_COUNTED), itemLabel: 'collected', groupLabel: 'categories complete' },
    { id: 'titles', storeKey: 'd4tk-titles', groups: titleGroups(TITLES_DATA), itemLabel: 'earned', groupLabel: 'categories complete' },
    { id: 'achievements', storeKey: 'd4tk-achievements', groups: subGroups(ACHIEVEMENTS_COUNTED), itemLabel: 'unlocked', groupLabel: 'categories complete' }
  ];

  TRACKERS.forEach(function (tr) {
    var store = D4TK.loadStore(tr.storeKey);
    var total = 0, done = 0, groupsDone = 0;
    tr.groups.forEach(function (g) {
      var n = 0;
      g.ids.forEach(function (id) { if (store[id]) n++; });
      total += g.ids.length;
      done += n;
      if (g.ids.length > 0 && n === g.ids.length) groupsDone++;
    });
    var pct = total ? Math.round(done / total * 100) : 0;
    document.getElementById('pct-' + tr.id).textContent = pct + '%';
    document.getElementById('bar-' + tr.id).style.width = pct + '%';
    document.getElementById('meta-' + tr.id).textContent =
      done + ' / ' + total + ' ' + tr.itemLabel + ' · ' + groupsDone + ' / ' + tr.groups.length + ' ' + tr.groupLabel;
  });
})();
