# Diablo IV Toolkit

A collection of Diablo-themed trackers for [Diablo IV](https://diablo4.blizzard.com/en-us/).

[![Expansion](https://img.shields.io/badge/expansion-Lord%20of%20Hatred-8a1c1c)](https://diablo4.blizzard.com/en-us/lord-of-hatred)
[![Season](https://img.shields.io/badge/season-15-c9a34a)](https://diablo4.blizzard.com/en-us/season)
[![Patch](https://img.shields.io/badge/patch-3.2.4-1e40af)](https://news.blizzard.com/en-us/article/24295395/diablo-iv-patch-notes)

## Table of Contents <!-- omit in toc -->

- [Trackers](#trackers)
  - [Overview](#overview)
  - [Fishing Tracker](#fishing-tracker)
  - [Cow Kill Tracker](#cow-kill-tracker)
  - [Cosmetics Tracker](#cosmetics-tracker)
  - [Titles Tracker](#titles-tracker)
  - [Achievements Tracker](#achievements-tracker)
  - [Experience](#experience)
  - [Horadric Cube](#horadric-cube)
  - [Runes \& Runewords](#runes--runewords)
  - [References](#references)
- [Use](#use)
- [Project structure](#project-structure)
- [Data files](#data-files)
- [Contributing](#contributing)
- [License](#license)

## Trackers

### [Overview](index.html)

Homepage summarizing progress across all trackers (Fishing, Cosmetics, Titles, Achievements) with a per-tracker completion percentage, an overall progress bar, and cards that link to each tracker. Progress is read live from `localStorage`.

### [Fishing Tracker](fishing.html)

All 123 collectible fish, grouped by region, with checkboxes that persist in your browser.

- Per-region and global progress bars, plus a "regions complete" counter
- Search, "hide caught" filter, collapsible regions, and a reset action
- All fish: 5 Sanctuary-wide, 16 per region × 7 regions, 5 Mythic Uniques, and the Khanduras Red Herring
- Linked to the Achievements tracker: catching a fish ticks the matching Fishing challenge, and Tenacious Angler completes when all 123 fish are caught

### [Cow Kill Tracker](cow.html)

Counter for tracking bovine slaughter across Sanctuary with timer functionality.

- Increment/decrement buttons and number key shortcuts (1-9)
- Start/pause/reset timer
- Undo/redo functionality (Ctrl+Z, Ctrl+Y)
- Progress saved locally in your browser

### [Cosmetics Tracker](cosmetics.html)

Comprehensive cosmetics tracker covering the base-game wardrobe and Seasons 8–15. Categories are grouped into a **Game** section (base game) at the top and a **Season** section (Seasons 8–15, chronological) at the bottom. Seasonal cosmetics are bundled into one section per season, with collapsible subsections by item class (Armor, Weapons, Mounts, Pets, Town Portals, Back, and more). Base-game armor and weapon transmogs are imported from the "Armor" and "Weapons" tabs of the "Cosmetics 3.0.0" spreadsheet (every non-shop/event/seasonal wardrobe cosmetic); each item's description notes where to obtain it, and a link icon on the right opens the source guide.

**Game (base game):**

- Armor — wardrobe armor transmogs by slot: Helm, Tunic, Gloves, Pants, Boots (240)
- Weapons — wardrobe weapon transmogs by type (588)
- Platform & Crossover Rewards (Xbox Game Pass 57 cosmetics, Witcher 3 Geralt skin)
- Dark Citadel — Mounts & Trophies (Longfur Beast mount, Khazra mount armor, banner)
- Achievement & Renown Rewards (Altars of Lilith, renown, Donan's Favor mount)

**Season sections (collapsible subsections by item class):**

- Season 8 — Belial's Return (36)
- Season 9 — Sins of the Horadrim (36)
- Season 10 — Infernal Hordes (41)
- Season 11 — Divine Intervention (37)
- Season 12 — Slaughter (55)
- Season 13 — Reckoning (58)
- Season 14 — Death Awakening (47)
- Season 15 — Hell's Legacy (41)

**Features:**

- Click any cosmetic to mark it collected
- Click the link icon on the right to open the source guide for that item
- Search, hide collected, collapsible categories and subsections, export/import
- Progress saved locally in browser

### [Titles Tracker](titles.html)

Comprehensive titles tracker covering Season 15 exclusive and permanent titles. Each title is tracked with a single checkbox and displayed in one row — prefix, suffix, and description. A link icon on the far right opens the best source guide.

**Categories:**

- Season 15 Exclusive (Deckard's Confidant, Divine Bovine, Fancy Pants)
- Season Rank Rewards (Restless Vessel, Deckard's Confidant capstone)
- Achievements & Feats of Strength (Uber Lilith, Altars, The Pit, Nightmare Dungeons, crafting, collection, combat milestones)
- Previous Seasons 1–14 (Wrathful Heart, Cormond's Friend, Shadow Vampire, Terrible Genius, Reinforced Demonbane, Infernal Antagonist, Zakarum's Hope, Chaotic Warlord, Sanctuary's Hatred, and more)
- Class-Specific — Barbarian, Sorcerer, Druid, Necromancer, Rogue, Spiritborn
- World Boss Titles (Hardcore slaying challenges, all-boss completions)
- General & Exploration (Altars, Renown, herbs, events, Nightmare Dungeons)
- Combat Challenges (speed kills, kill streaks, monster-type slaying)
- PvP Titles (Fields of Hatred, Hardcore PvP)
- Hardcore Titles (level milestones, Headhunts, all-class Hardcore)
- Helltide Titles (Cinder collection thresholds)
- Promotional & Crossover (tattoo promo, KFC, seasonal journey)
- Renown & Altar Rewards (Altar of Lilith, max Renown)

**Features:**

- One checkbox per title, with P/S badges marking the prefix and suffix
- Click any title to mark it earned
- Click the link icon on the right to open the source guide for that title
- Search, hide earned, collapsible categories, export/import
- Progress saved locally in browser

### [Achievements Tracker](achievements.html)

Comprehensive in-game Challenges tracker covering the full leveled.gg challenge list: 1,887 challenges across 30 categories — 15 base-game categories (Game group) at the top and Seasons 1–15 (Season group) below, each season grouped by chapter. The difficulty rating (skulls) shows on hover; a link icon on the right opens the source guide where one is available.

**Categories and subcategories (base game first, then Seasons 1–15):**

- Challenge (45) — flat list
- Citadel (11) — First Khazra Citadel (11)
- Classes (80) — Barbarian (10), Druid (10), Necromancer (10), Paladin (10), Rogue (10), Sorcerer (10), Spiritborn (10), Warlock (10)
- Crafting (29) — General (22), Horadric Cube (5), Jeweler (2)
- Exploration (40) — Dungeons (17), World (8), Helltide (6), The Pit (4), Echoing Hatred (3), Infernal Hordes (2)
- Fishing (118) — Dry Steppes (16), Fractured Peaks (16), Hawezar (16), Kehjistan (16), Nahantu (16), Scosglen (16), Skovos (16), Generic (6)
- Hardcore (31) — General (16), Enemies (8), Progression (7)
- Mercenaries (15) — flat list
- Monsters (72) — 24 monster families (3 each)
- Multiplayer (17) — General (13), PvP (4)
- Open World (45) — Discovery (19), Events (11), General (9), Whispers (6)
- Quests (64) — Side Quests (36), Campaign (28)
- Talisman (6) — flat list
- War Plans (5) — flat list
- Feats of Strength (83) — Feats (51), Legacy (32)
- Season 01 (82) … Season 15 (134) — Chapter 01–07 each (Chapter 01–09 from Season 13)

**Features:**

- Click any achievement to mark it unlocked
- Click the link icon on the right to open the source guide for that achievement
- Search, hide unlocked, collapsible categories and subcategories, export/import
- Progress saved locally in browser

### [Experience](experience.html)

Reference tables and charts for the XP required to reach level 70 and paragon 300, plus a Paragon Calculator that merges an Eternal realm level and a Season level by total XP.

- Paragon Calculator (first section): Eternal + Season merge with progress bar; inputs saved in your browser
- Character XP per level (1-70): log-scale bar chart and full table
- Cumulative paragon XP (1-300): area chart and full table
- Collapsible sections

### [Horadric Cube](cube.html)

Reference page for the Horadric Cube (Season 15, Lord of Hatred): the recipe categories and, first, the full Tuning Prism affix chart — every affix listed individually under the prism that covers it, with a search box to find which prism to use for a given affix. Also covers how the Entropic and Kullean prisms modify Transfigure Item. Sections are collapsible.

### [Runes & Runewords](runes.html)

Merged reference page for the Season 15 rune system. Top: the 15 Diablo II-named runes used in runewords — 12 new in Season 15, 4 existing — as a single list in order of upgrade (low ladder Tir → … → Sol, high ladder Mal → … → Jah), with type (Ritual/Invocation), seasonal/eternal and the gem required for the next upgrade step as columns; every column header sorts the table. Each rune has a checkbox — ticking runes highlights the runewords that become craftable. Bottom: all 19 Horadric Cube runewords (Enigma, Spirit, Infinity, Grief, Call to Arms, …) as a table with name, item piece, required runes and bonuses; a search box filters by name, runes, bases, affixes, or power, a dropdown filters by item piece, every column header sorts the table, and all columns can be resized by dragging the header edge.

### [References](references.html)

Dedicated page listing every external source the toolkit relies on, grouped by page (General, Achievements, Cosmetics, Titles, Experience, Horadric Cube, Runes & Runewords, World boss timer) with a short note on what each site is used for. All links open in a new tab. Sections are collapsible.

## Use

No build step, no dependencies, no backend — plain HTML/CSS/JS. Open `index.html` directly in your browser, or serve the folder over HTTP if you prefer:

```sh
# from the d4tk/ folder
python -m http.server 8000     # or: npx serve .   /   VS Code "Live Server"
```

Then open <http://localhost:8000/>. Progress is stored in `localStorage` on the machine you browse with.

For how the site actually works under the hood — script load order, `localStorage` keys, the world boss timer and its synthesized bell alerts, the chat gem — see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

Or use it hosted: **[GitHub Pages](https://akaizoku.github.io/d4tk/)** once enabled.

## Project structure

Plain HTML/CSS/JS — no build step, no dependencies. Shared code lives in `css/` and `js/`; the data lives in `js/data/` as plain JS (see [Data files](#data-files)). Each HTML page is a thin shell that links the shared theme plus its page CSS, loads its data script, and renders into a `<main>` container.

```text
d4tk/
├── index.html            Overview homepage (shell)
├── fishing.html          Fishing tracker (shell)
├── cow.html              Cow kill tracker (shell)
├── cosmetics.html        Cosmetics tracker (shell)
├── titles.html           Titles tracker (shell)
├── achievements.html     Achievements tracker (shell)
├── experience.html       Experience tables + Paragon Calculator (shell)
├── cube.html             Horadric Cube recipes & Tuning Prisms (shell)
├── runes.html            Runes & Runewords: ladder-ordered rune table with checkboxes + runeword table, searchable (shell)
├── references.html       References — all sources with links (shell)
├── img/
│   ├── favicon.svg              Site icon (linked from every page)
│   ├── chatgem_deactivated.webp Chat-gem sprite, blue state (used by js/nav.js)
│   └── chatgem_activated.webp   Chat-gem sprite, lavender state (used by js/nav.js)
├── docs/
│   └── ARCHITECTURE.md   How the site works: script order, localStorage, timer & sounds
├── css/
│   ├── theme.css         Shared theme: nav, header, summary bar, controls, sections, checkboxes
│   ├── overview.css      Homepage tracker cards
│   ├── fishing.css       Rarity colors, fish grid, collapsible rarity groups
│   ├── titles.css        Title rows (checkbox | prefix | suffix | description | link icon)
│   ├── cow.css           Counter, timer, and buttons
│   ├── experience.css    Charts, XP tables, Paragon Calculator
│   ├── cube.css          Horadric Cube recipe sections and rows
│   ├── runes.css         Rune ladder table + runeword table, checkboxes, search
│   └── references.css    Grouped source lists
└── js/
    ├── tracker.js        Shared engine: D4TK.create (search, hide-collected, collapse,
    │                     export/import, reset) + localStorage helpers and store migrations
    ├── overview.js       Homepage: totals from the js/data/ files, progress from localStorage
    ├── fishing.js        Fishing renderer: reads js/data/fishing-data.js, rarity-grouped fish
    ├── titles.js         Titles renderer: reads js/data/titles-data.js, one checkbox per title
    ├── cow.js            Cow counter: timer, undo/redo, keyboard shortcuts (standalone)
    ├── experience.js     Experience page: SVG charts, XP tables, Paragon Calculator
    ├── cube.js           Horadric Cube page: renders js/data/cube-data.js, collapsible sections
    ├── runes.js          Runes & Runewords page: renders js/data/runes-data.js as a sortable ladder-ordered table with rune checkboxes, plus js/data/runewords-data.js as a sortable runeword table (search + item-piece filter + craftable highlighting)
    ├── references.js     References page: collapsible source groups
    ├── nav.js            Shared menubar: burger menu, search placeholders, tooltips, chat-gem button
    ├── data/             The database — plain JS, one file per tracker (editable)
    │   ├── achievements-data.js  30 categories, 174 subcategories, 1,887 achievements
    │   ├── titles-data.js        81 categories, 636 titles
    │   ├── cosmetics-data.js     15 categories, 1,190 base cosmetics + Mounts/Pets/Shop aggregates
    │   ├── fishing-data.js       10 regions, 123 fish
    │   ├── experience-data.js    Character XP 1-70 + paragon XP 1-300
    │   ├── cube-data.js          Horadric Cube recipes + Tuning Prism affix chart (8 prisms)
    │   ├── runes-data.js         15 runes in upgrade order (type, season, gem, 
upgrade)
    │   └── runewords-data.js     All 19 Season 15 runewords with recipes and affixes 
(loaded by runes.html)
    └── worldboss.js      World boss countdown for the top menubar (all pages)
```

Progress lives in `localStorage` under `d4tk-fishing`, `d4tk-fishing-auto` (Fishing challenges auto-ticked from caught fish), `d4tk-cow`, `d4tk-cosmetics`, `d4tk-titles`, `d4tk-achievements`, and `d4tk-experience` (calculator inputs and collapsed sections); UI preferences live under `d4tk-ui-prefs`.

## Data files

All tracker data lives in `js/data/` as plain JavaScript — one file per tracker, human-readable and editable in any text editor. Each page loads its data file with a `<script>` tag (before its page script), which exposes the data on `window.D4TK_DATA`. No fetch, no build step — the pages work when opened directly from disk.

| File | Exposes | Contents |
| --- | --- | --- |
| `js/data/achievements-data.js` | `D4TK_DATA.achievements` | 30 categories (15 game + 15 seasonal), 174 subcategories, 1,887 achievements |
| `js/data/titles-data.js` | `D4TK_DATA.titles` | 81 categories (64 game + 15 season + 2 feats), 636 titles |
| `js/data/cosmetics-data.js` | `D4TK_DATA.cosmetics` | 15 categories (4 game + 8 seasonal + Mounts/Pets/Shop), 1,190 base cosmetics plus aggregated Mounts (176), Pets (38) & Shop (89) sections excluded from stats |
| `js/data/fishing-data.js` | `D4TK_DATA.fishing` | 10 regions, 123 fish |
| `js/data/experience-data.js` | `D4TK_DATA.experience` | Character XP 1-70 + paragon XP 1-300 |
| `js/data/cube-data.js` | `D4TK_DATA.cube` | Horadric Cube recipes + Tuning Prism affix chart (8 prisms) |
| `js/data/runes-data.js` | `D4TK_DATA.runes` | 15 runes in upgrade order |
| `js/data/runewords-data.js` | `D4TK_DATA.runewords` | All 19 Season 15 runewords with recipes and affixes |

Structures:

- Achievements — `[{ name, tag?, group?, subcategories: [{ name, items: [...] }] }]` or `[{ name, tag?, group?, items: [...] }]` for flat categories. `group` ("Game" or "Season") renders a divider header.
- Cosmetics — `[{ name, tag?, group?, subcategories: [{ name, items: [...] }] }]` for seasonal and grouped base-game sections, or `[{ name, tag?, group?, items: [...] }]` for flat sections. `group` ("Game" or "Season") renders a divider header.
- Titles — `[{ name, tag?, titles: [[prefix, suffix, description, tag, url], ...] }]`.
- Fishing — `{ regions: [{ name, tag?, fish: [[name, rarity, note?], ...] }] }`.
- Experience — `{ character: { maxLevel, xpToNext, xpToReach }, paragon: { maxLevel, xpToNext, xpToReach } }`.
- Horadric Cube — `{ prisms: [{ name, rarity, category, desc, affixes: [...] }], sections: [{ name, note?, items: [[name, description, tag?], ...] }] }`.
- Runes — `{ runes: [{ name, type, season, gem, upgrade }] }` — `runes` is a single list in order of upgrade (low ladder Tir → … → Sol, then high ladder Mal → … → Jah); `gem` is the gem needed to upgrade that rune into the next one ('—' = none / top of ladder).
- Runewords — `{ intro, howto: [...], runewords: [{ name, runes, bases, variants, affixes, power? }] }`.

Item fields (achievements & cosmetics): `[name, description, tag, url]`.

- `name` / `prefix` / `suffix` — the item's display name, and the basis of its id: `<categorySlug>-<slug(name)>` for achievements & cosmetics, `<categorySlug>-t-<index>` for titles, `<regionSlug>:<slug(name)>` for fish. When a category lists two items with the same name, the later one's id gets a `-2`, `-3`, … suffix so each keeps its own progress. **Renaming an item resets its saved progress** — keep names stable.
- `description` — shown next to the name; empty renders nothing.
- `tag` — hover tooltip on the item (achievements, cosmetics, titles).
- `url` — a link icon on the far right opens this source guide; empty = no icon.
- `tag` on a category or region — the note shown on the group header.
- `note` (fishing only) — extra hint in the fish's hover tooltip.

Fishing rarities: `Common`, `Magic`, `Rare`, `Legendary`, `Unique`, `Mythic`. Fish entries are explicit. Legendary fish take the region's base fish name with one trait prepended (`Tiny`, `Giant`, `Glittering`, `Demonic`, `Celestial`, `Spectral`), and Unique fish combine two traits — the 9 pairings of {Tiny, Giant, Glittering} with {Demonic, Celestial, Spectral}. When adding a new region with a base fish, add those 16 entries (1 Rare + 6 Legendary + 9 Unique).

Progress lives in `localStorage` under `d4tk-fishing`, `d4tk-fishing-auto` (Fishing challenges auto-ticked from caught fish), `d4tk-cow`, `d4tk-cosmetics`, `d4tk-titles`, `d4tk-achievements`, and `d4tk-experience` (calculator inputs and collapsed sections); UI preferences live under `d4tk-ui-prefs`.

All data follows the in-game collection as documented by community databases (Season 15, patch 3.2.x). Cosmetic data sourced from the "Cosmetics 3.0.0" spreadsheet (Armor & Weapons tabs for the base-game wardrobe, plus the Seasons 8–14 tabs), AusCraft, Icy Veins, D4Guides, Wowhead, Maxroll, and community databases. Title data sourced from the d4guides.gg achievements database (game client data, Season 15 / patch 3.2.3) cross-referenced with SegmentNext, plus BlizzardWatch, Attack of the Fanboy, Sportskeeda, PCGamesN, Wowhead, and Game8. Achievement data sourced from leveled.gg (full challenge list), with per-achievement guide links from XboxAchievements, GamePressure, Fextralife, diablo4.cc, MythicDrop, and Wowhead.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the project rules — plain HTML/CSS/JS with no build step, data-file conventions, the page-shell pattern, and the new-page checklist. See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how the site works internally (state, timers, sounds). Small, focused pull requests are welcome.

## License

Released under the [MIT License](LICENSE).

Unofficial fan-made tool; not affiliated with Blizzard. Diablo IV and all related names and assets are trademarks of Blizzard Entertainment.
