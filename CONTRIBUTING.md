# Contributing to D4TK

D4TK is a collection of plain HTML/CSS/JS trackers and reference pages for Diablo IV. This file describes the rules every contribution must follow. When in doubt, match the existing code — the patterns below are all taken from the current pages.

## Running locally

No build step, no dependencies, no install:

```sh
# from the d4tk/ folder
python -m http.server 8000     # or: npx serve .   /   VS Code "Live Server"
```

Then open <http://localhost:8000/>. Every page must also work when opened directly from disk (`file://`) — never rely on `fetch`, modules, or a server.

## Core rules

1. **Plain HTML/CSS/JS only.** No frameworks, no bundler, no npm packages, no TypeScript, no `fetch`/XHR. Pages are static files that work from `file://`.
2. **Data lives in `js/data/*.js` as plain JavaScript** and is exposed on `window.D4TK_DATA.<name>` (e.g. `D4TK_DATA.fishing`). Each HTML page loads its data file with a `<script>` tag *before* its page script. Data files are human-readable and editable in any text editor. Exception: files marked "generated from CSV — do not edit by hand" (e.g. `fishing-data.js`); edit the CSV and regenerate instead.
3. **Shared code goes in `js/tracker.js`**, which exposes the global `D4TK` namespace (store helpers, migrations, slug, export/import). Page scripts are IIFEs with `'use strict'`; trackers use `async function` IIFEs.
4. **ES5-style JavaScript**: `var`, function declarations, string-concatenated `innerHTML`. Escape dynamic values in HTML attributes with `escapeAttr`.
5. **Progress lives in `localStorage`** under `d4tk-<page>`; UI preferences (collapsed sections, hide-collected) live under the shared `d4tk-ui-prefs` key, namespaced per page via `D4TK.loadUiPrefs(pageKey)` / `D4TK.saveUiPrefs(pageKey, prefs)`.
6. **Migrations must never destroy saved progress.** When renaming store keys or item ids, use `D4TK.renameStoreKey` / `D4TK.migrateStoreKeys` / `D4TK.migrateStoreIds` and only move data when the new key/id does not already exist.
7. **Item ids derive from names** (`<categorySlug>-<slug(name)>`, `<regionSlug>:<slug(name)>`, `<catSlug>-t-<index>` for titles). **Renaming an item resets its saved progress** — keep names stable. Duplicate names in one category get `-2`, `-3`, … suffixes automatically.
8. **Every page shares the same burger menu.** When adding, removing, or renaming a page, update the `<div class="burger-menu">` block in *all* HTML files and mark exactly one link `class="tool active"` per page.
9. **Page shell pattern**: `<head>` with the Cinzel font links, `css/theme.css` plus the page's own CSS; the standard `topnav`; `<div class="wrap">` with `header` (h1 + subtitle + divider), a `<main>` container, and the standard shared `footer` — identical on every page: the "unofficial fan-made / not affiliated with Blizzard" disclaimer with the season/patch note, a link to `references.html` (omitted on `references.html` itself), and the GitHub icon linking to <https://github.com/Akaizoku/d4tk>. Keep the footer block byte-identical across pages when editing. Scripts at the end of `<body>`: data file, page script, `js/nav.js`, `js/worldboss.js`.
10. **CSS uses the theme variables** from `css/theme.css` (`--panel`, `--panel-2`, `--border`, `--border-hi`, `--blood`, `--blood-hi`, `--gold`, `--text`, `--text-dim`, …). Page-specific styles go in that page's own `css/<page>.css`. Include a `@media (max-width: 640px)` adjustment where the layout needs it.
11. **Sources are credited.** Any external data or guide a page relies on must be listed in the matching group on `references.html` (links open in a new tab, with a one-line description of what the site is used for).
12. **Keep `README.md` in sync**: the page list, the project-structure tree, the data-files table, and the data-structure notes must reflect any new page, data file, or structure change. When the season or patch changes, also bump the Season/Patch badges at the top of the README.

## Adding a new page — checklist

- [ ] Create `<page>.html` following the shell pattern (rule 9), with the burger menu updated in **all** pages (rule 8).
- [ ] Create `css/<page>.css` and `js/<page>.js`; load them from the new page.
- [ ] If the page is data-driven, create `js/data/<page>-data.js` exposing `D4TK_DATA.<page>` and document its structure in the README.
- [ ] If it is a tracker, use `D4TK.create` from `js/tracker.js` (or follow `js/fishing.js` / `js/titles.js` for custom renderers), with a `d4tk-<page>` store key and any needed one-time migration (rule 6).
- [ ] Add the page's sources to `references.html` (rule 11).
- [ ] Update `README.md` (rule 12).
- [ ] Test by opening the page directly from disk: rendering, search, hide-collected, collapse/expand, export/import, reset, and a reload to confirm `localStorage` persistence. Check the browser console for errors.

## Editing tracker data

- Follow the structures documented in the README (achievements, cosmetics, titles, fishing, experience, cube). Item fields are positional arrays: `[name, description, tag, url]` — `description` renders next to the name, `tag` is the hover tooltip, `url` shows a link icon.
- Keep item names stable (rule 7). Add new items at the end of their category where order matters.
- Fishing rarities are exactly: `Common`, `Magic`, `Rare`, `Legendary`, `Unique`, `Mythic`.

## Commits

Small, focused commits — one change per commit. Describe what changed and why in the commit message; do not mix unrelated edits. Do not commit generated backups, browser profiles, or local test files.
