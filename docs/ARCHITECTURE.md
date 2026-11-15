# How D4TK works

D4TK has **no backend and no build step**. It is a static site: plain HTML pages served as-is (GitHub Pages, `python -m http.server`, or opened directly from disk via `file://`). Everything that looks like "backend" behavior — timers, sounds, saved progress — happens in the browser, in vanilla JS.

## Request lifecycle of a page

1. The browser loads `<page>.html`.
2. `<head>` pulls the Cinzel font (Google Fonts), `css/theme.css`, and the page's own `css/<page>.css`.
3. At the end of `<body>`, scripts load in a fixed order: `js/data/<page>-data.js` → `js/<page>.js` → `js/nav.js` → `js/worldboss.js`.
4. The data file assigns to `window.D4TK_DATA.<page>`; the page script renders into `<main>`; `nav.js` and `worldboss.js` enhance the shared menubar.

Because there is no `fetch` anywhere, every page also works from `file://` (this is a hard rule in CONTRIBUTING.md).

## State and persistence

All state lives in `localStorage` on the visitor's machine:

| Key | Used by | Contents |
| --- | --- | --- |
| `d4tk-fishing`, `d4tk-fishing-auto` | fishing.html | Caught fish; auto-ticked Fishing achievements |
| `d4tk-cow` | cow.html | Kill count, timer, undo/redo stack |
| `d4tk-cosmetics`, `d4tk-titles`, `d4tk-achievements` | trackers | Collected item ids (`<categorySlug>-<slug(name)>`, …) |
| `d4tk-experience` | experience.html | Paragon Calculator inputs, collapsed sections |
| `d4tk-ui-prefs` | all pages | Shared UI prefs, namespaced per page |
| `d4tk-wb-sound` | worldboss.js | World boss sound toggle (`'1'`/`'0'`) |

The shared engine `js/tracker.js` (global `D4TK`) owns the store helpers: `load`/`save`, one-time migrations (`renameStoreKey`, `migrateStoreKeys`, `migrateStoreIds` — never overwrite an existing key), slugging, and the tracker UI factory `D4TK.create` (search, hide-collected, collapse/expand, export/import as a JSON download, reset). Export/import is just a `Blob` + `URL.createObjectURL` download/upload — no server involved.

Item ids derive from names, so **renaming a data item resets its saved progress**; migrations move data only when the new key doesn't exist yet.

## World boss timer and sound alerts (`js/worldboss.js`)

- World bosses spawn every **3.5 h on a fixed UTC grid** (`:00`/`:30`). The next spawn is computed as `ANCHOR_MS + ceil((now - ANCHOR_MS) / CYCLE_MS) * CYCLE_MS`, with `ANCHOR_MS = 2026-10-11 22:00 UTC` (verified against community trackers). No network calls — the schedule is pure arithmetic on the clock.
- The menubar timer re-renders every 30 s, and re-schedules alerts whenever the computed next spawn changes.
- **Sound alerts** fire at 15, 10, 5, 2 and 1 minutes before the spawn, but only if the speaker toggle is on (`d4tk-wb-sound === '1'`; off by default). Each alert is scheduled with `setTimeout` for `spawn - minutes*60000 - now`; pending timers are cancelled on toggle-off or spawn change.
- Each alert is a **synthesized bell** (Web Audio API, no audio file): four sine partials at inharmonic ratios 1 / 2.76 / 5.4 / 8.9 with exponential decay (~1.1 s), giving a struck-bell timbre. Pitch rises and the ring count grows with urgency:

  | Minutes before | Rings | Base freq |
  | --- | --- | --- |
  | 15 | 1 | 523 Hz |
  | 10 | 2 | 659 Hz |
  | 5 | 3 | 784 Hz |
  | 2 | 4 | 880 Hz |
  | 1 | 5 | 1047 Hz |

Rings within one alert are spaced 0.45 s apart. Toggling the sound **on** plays a single 15-minute bell immediately as a validation sound; the `AudioContext` is created/resumed inside that click handler to satisfy browser autoplay policies.

## Chat gem (`js/nav.js`)

The fleur-de-lys divider in the menubar is replaced by a clickable gem button that toggles between `img/chatgem_deactivated.webp` (blue) and `img/chatgem_activated.webp` (lavender) and plays a synthesized "ting" (three sine partials at 5230/7860/10450 Hz, fast decay) via WebAudio. `nav.js` also owns the burger menu, the shared search-box placeholder, and per-button tooltips.

## Where to change what

- New tracker page → follow the checklist in CONTRIBUTING.md (shell + css + js + data file + burger menu in all pages + README).
- Alert thresholds, pitch, or ring pattern → `ALERT_MINUTES`, `BELL_FREQ`, `BELL_COUNT` at the top of `js/worldboss.js`.
- Spawn cadence/anchor → `CYCLE_MS` / `ANCHOR_MS` in `js/worldboss.js`.
- Persistence keys / migrations → `js/tracker.js`.
- Shared look & feel → `css/theme.css` (CSS variables) + per-page css files.
