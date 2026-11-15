// Runewords reference data — all 19 Season 15 runewords (Lord of Hatred).
// Source: D4Guides.gg — "Diablo 4 Runewords: All 19 Runewords from Season 15"
// (d4guides.gg/en/news/diablo-4-runewords-all-19-runewords-from-season-15), patch 3.2.1.
// Structure: { intro, howto: [...], runewords: [{ name, runes, bases, variants, affixes, power? }] }
// Values in brackets are roll ranges; "?" marks values not yet known in game.
window.D4TK_DATA = window.D4TK_DATA || {};
window.D4TK_DATA.runewords = {
  "intro": "Season 15 runewords are Diablo II classics crafted in the Horadric Cube: one Common (white) base item plus the runes in a fixed order. The result is a unique with fixed affixes — it cannot be tempered, but its values sit well above regular legendaries. An Ancestral Common base gives higher Item Power. Magic, Rare and Legendary bases are not accepted.",
  "howto": [
    "Get a Common (white) base item of the right type — ideally Ancestral; its affixes don't matter",
    "Add all runes of the recipe to the Horadric Cube in the listed order",
    "Click Transmute — the base and runes turn into the runeword",
    "Finished runewords are not seasonal and move to the Eternal Realm"
  ],
  "runewords": [
    {
      "name": "Prudence",
      "runes": "Mal + Tir",
      "bases": "Chest Armor",
      "variants": 1,
      "affixes": "Inherent: Indestructible · +500 Resistance to All Elements · 10.0% Damage Reduction · 25.0% Impairment Reduction · +[20.0–35.0]% Total Armor · +2 Primary Resource On Kill · 10.0% Dodge Chance"
    },
    {
      "name": "Leaf",
      "runes": "Tir + Ral",
      "bases": "Staff",
      "variants": 1,
      "affixes": "+2 Primary Resource On Kill · +17.5% Cold Resistance · 10.0% Resource Generation"
    },
    {
      "name": "Insight",
      "runes": "Ral + Tir + Tal + Sol",
      "bases": "Two-Handed Scythe, Polearm, Quarterstaff, Glaive, Staff, Bow, Crossbow",
      "variants": 7,
      "affixes": "+17.5% Attack Speed · +[8.0–23.0]% Critical Strike Chance · +[104–173] Weapon Damage · [150–180] All Stats · 100% (mult.) Critical Strike Damage Multiplier"
    },
    {
      "name": "Enigma",
      "runes": "Jah + Ith + Ber",
      "bases": "Chest Armor",
      "variants": 1,
      "affixes": "+2 to All Skills · +45% Movement Speed · 12.0% Damage Reduction · 40.0% Maximum Life · +[981–1,225] Armor",
      "power": "Your Evade is now Sorcerer's Teleport and costs 33 Primary Resource — the best mobility for every class"
    },
    {
      "name": "Spirit",
      "runes": "Tal + Thul + Ort + Amn",
      "bases": "Axe, Dagger, Flail, Mace, Scythe, Sword, Wand, Focus, Totem, Shield",
      "variants": 10,
      "affixes": "+5 to All Skills · +[25.0–35.0]% Attack Speed · 50% (mult.) All Damage Multiplier · +[20–56] Maximum Resource · 50.0% Impairment Reduction",
      "power": "The leveling runeword — +5 to All Skills and a 50% damage multiplier"
    },
    {
      "name": "Holy Thunder",
      "runes": "Eth + Ral + Ort + Tal",
      "bases": "Flail, Mace",
      "variants": 2,
      "affixes": "+35.0% Lightning Resistance · 50% (mult.) All Damage Multiplier · +20.0% Lucky Hit Chance",
      "power": "You emit Crackling Energy. Enemies damaged by Crackling Energy take [20–35]% increased Holy, Fire, Lightning, and Physical damage from you for 3 seconds"
    },
    {
      "name": "King's Grace",
      "runes": "Amn + Ral + Thul",
      "bases": "Flail, Mace, Sword",
      "variants": 3,
      "affixes": "+? Damage to Demons · +? Damage to Undead · +[789–948] Life On Hit · +50.0% Lucky Hit Chance · 75% (mult.) All Damage Multiplier"
    },
    {
      "name": "Phoenix",
      "runes": "Vex + Vex + Jah + Lo",
      "bases": "Axe, Dagger, Flail, Mace, Scythe, Sword, Wand, Focus, Totem, Shield",
      "variants": 10,
      "affixes": "+[526–632] Life On Kill · Lucky Hit: up to a 40% chance to deal +1,500 Fire Damage · +20.0% Deadly Strike Chance · 50% (mult.) All Damage Multiplier",
      "power": "When you level up, unleash a Rank 40 Ring of Fire. Lucky Hit: attacks have up to a [15–30]% chance to unleash a Rank 22 Fire Spear"
    },
    {
      "name": "Pattern",
      "runes": "Tal + Ort + Thul",
      "bases": "Dagger",
      "variants": 1,
      "affixes": "Inherent: 30.0% Block Chance · 50% (mult.) All Damage Multiplier · +10.0% All Stats · Lucky Hit: up to a 40% chance to deal [1,100–1,600] Poisoning Damage over 10 seconds · +[10.0–20.0]% Critical Strike Chance · +[325–400] Resistance to All Elements"
    },
    {
      "name": "Rain",
      "runes": "Ort + Mal + Ith",
      "bases": "Chest Armor",
      "variants": 1,
      "affixes": "+[25–40] Maximum Resource · +5 to Nature Magic Skills · 10.0% Damage Reduction · +35.0% Lightning Resistance · 10.0% Dodge Chance",
      "power": "Lucky Hit: attacks have up to a [15–30]% chance to unleash a Rank 15 Druid Tornado · 50% chance to unleash a Rank 15 Druid Cyclone Armor whenever you Dodge"
    },
    {
      "name": "Call to Arms",
      "runes": "Amn + Ral + Mal + Ohm + Ist",
      "bases": "Axe, Dagger, Flail, Mace, Scythe, Sword, Wand, Focus, Totem",
      "variants": 9,
      "affixes": "+[200–250] Weapon Damage · +1 to All Skills · 40% (mult.) All Damage Multiplier · +5 to Shout Skills · +40.0% Attack Speed",
      "power": "While affected by a Shout Skill you gain: +5 Ranks to all Skills · +15% Maximum Life · +15% Maximum Primary Resource"
    },
    {
      "name": "Edge",
      "runes": "Tir + Tal + Amn",
      "bases": "Two-Handed Axe, Two-Handed Mace, Two-Handed Sword, Two-Handed Scythe, Polearm, Quarterstaff, Glaive, Staff, Bow, Crossbow",
      "variants": 10,
      "affixes": "Inherent: +7.5% chance for an extra item from the Purveyor of Curiosities · +17.5% Attack Speed · +? Damage to Demons · Lucky Hit: up to a 40% chance to deal [1,100–1,600] Poisoning Damage over 10 seconds · [150–180] All Stats · +[0.75–1.0] Thorns · +? Damage to Undead"
    },
    {
      "name": "Ancient's Pledge",
      "runes": "Ral + Ort + Tal",
      "bases": "Focus, Shield, Totem",
      "variants": 3,
      "affixes": "35% (mult.) All Damage Multiplier · +35.0% Cold, Fire, Lightning and Poison Resistance · 35.0% Damage Reduction"
    },
    {
      "name": "Strength",
      "runes": "Amn + Tir",
      "bases": "Axe, Dagger, Flail, Mace, Scythe, Sword, Wand, Focus, Totem",
      "variants": 9,
      "affixes": "Inherent: Lucky Hit: up to a 25.0% chance to deliver a Crushing Blow · 50% (mult.) All Damage Multiplier · +10.0% Strength · +[1,831–2,200] Maximum Life · +[789–948] Life On Hit · +2 Primary Resource On Kill"
    },
    {
      "name": "Grief",
      "runes": "Eth + Tir + Lo + Mal + Ral",
      "bases": "Berserker Axe, Phase Blade",
      "variants": 2,
      "affixes": "Inherent: Indestructible · +[750–1,000] Weapon Damage · +20.0% Deadly Strike Chance · +[30.0–40.0]% Attack Speed · +? Damage to Demons · +2 Primary Resource On Kill",
      "power": "Your direct damage inflicts 40% bonus Poisoning damage over 5 seconds"
    },
    {
      "name": "Lore",
      "runes": "Ort + Sol",
      "bases": "Helm",
      "variants": 1,
      "affixes": "+2 to All Skills · +25 Maximum Resource · 10.0% Damage Reduction · +[2,275–2,800] Lightning Resistance · +2 Primary Resource On Kill · +[1,963–2,500] Armor"
    },
    {
      "name": "Infinity",
      "runes": "Ber + Ber + Mal + Ist",
      "bases": "Two-Handed Axe, Two-Handed Mace, Two-Handed Sword, Two-Handed Scythe, Polearm, Quarterstaff, Glaive, Staff, Bow, Crossbow",
      "variants": 10,
      "affixes": "Inherent: Lucky Hit: up to a 20.0% chance to deliver a Crushing Blow · +17.5% Movement Speed · +[1,831–2,200] Maximum Life · [50–100]% Gold Drop Rate",
      "power": "50% chance to unleash a Rank 10 Sorcerer Chain Lightning when you kill an enemy · you gain the Rank 11 passive of Druid's Cyclone Armor · close enemies are Vulnerable and take 62.5% (mult.) more damage from you"
    },
    {
      "name": "Stealth",
      "runes": "Eth + Tal",
      "bases": "Chest Armor",
      "variants": 1,
      "affixes": "+[1,831–2,200] Maximum Life · +25.0% Attack Speed · 25.0% Impairment Reduction · 15.0% Resource Generation · +25% Movement Speed · 15.0% Damage Reduction"
    },
    {
      "name": "Zephyr",
      "runes": "Ort + Eth",
      "bases": "Bow, Crossbow",
      "variants": 2,
      "affixes": "12.5% Dodge Chance · +12.5% Attack Speed · +12.5% Movement Speed · 62.5% (mult.) All Damage Multiplier · Lucky Hit: up to a 40% chance to deal +1,500 Lightning Damage",
      "power": "Unleash a Dust Devil whenever you Dodge"
    }
  ]
};
