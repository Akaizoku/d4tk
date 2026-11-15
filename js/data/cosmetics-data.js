// Cosmetics tracker data.
// Base-game armor and weapon transmogs are imported from the "Armor" and "Weapons" tabs
// of the "Cosmetics 3.0.0" spreadsheet (every non-shop/event/seasonal wardrobe cosmetic).
// Seasons 8-15 and the permanent reward sections are curated by hand. Categories carry a
// "group" ("Game" or "Season") rendered as a divider; seasonal sections are grouped into
// subcategories by item class. Structure matches D4TK.create() in js/tracker.js -
// item: [name, description, tag, url].
window.D4TK_DATA = window.D4TK_DATA || {};
window.D4TK_DATA.cosmetics = [
    {
        "name":  "Armor",
        "tag":  "Base game — armor transmogs from the wardrobe",
        "group":  "Game",
        "subcategories":  [
                              {
                                  "name":  "Helm",
                                  "items":  [
                                                [
                                                    "Adventurer\u0027s Helm",
                                                    "Missing from wardrobe — Removed from wardrobe in 3.0.1/LOH",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Amazon Training Helm",
                                                    "Missing from wardrobe — Moo — Moo",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Archon Helm",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boneweave Helm",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Coven\u0027s Cowl",
                                                    "Can not be gambled or found in anywhere else. The boat ride from Hawezar to Skovos is part of Hawezar.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crown of Baleful Intent",
                                                    "Complete campaign quest Deeds of a Champion",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Crown of Lucion",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Deathmask of Nirmitruq",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Diadem of the Ancient",
                                                    "Dropped by Lord Zir",
                                                    "Lair Boss",
                                                    ""
                                                ],
                                                [
                                                    "Doom Casque",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Drifter\u0027s Helm",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Enclawed Crown",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Etched Helm",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Exceptional Helm",
                                                    "Unlock World Drop status by completing the campaign quest A Chorus of Voice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fur-Lined Hood",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gathlen\u0027s Birthright",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glorious Hood",
                                                    "Requires character level 65 to drop",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Helm of the Khazra",
                                                    "Looted on T4 from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Hail of Verglas",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Harlequin Crest",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2%",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Harmony of Ebewaka",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hatred\u0027s Gaze",
                                                    "Complete campaign quest Catharsis",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Helm",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heir of Perdition",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2%",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Helm",
                                                    "Gamble between T1 and T10 — all classes except Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Helm of Askarra",
                                                    "Dropped by Adreona during The Fools Campaign Quest",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Helm of the Khazra",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Highland Circlet",
                                                    "Can not be gambled or found in anywhere else. The Pit is part of Scosglen even if opened from Temis.",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Judicant\u0027s Glaivehelm",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Killer\u0027s Guise",
                                                    "Purchase from the Odds and Ends PVP vendor",
                                                    "Vendor PVP",
                                                    ""
                                                ],
                                                [
                                                    "Nails of the Gore-Crowned",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Primal Bascinet",
                                                    "Changed to World drop - may require a character level above 60 to drop. — all classes except Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Runic Skullcap",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sand-Worn Cover",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sovereign Helm",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spectacle\u0027s Cowl",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Strider’s Crown",
                                                    "Available as both a magic and common item with the strider name. Gamble between T1 and T10 or available as a Normal item @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sturdy Helm",
                                                    "Renamed Sturdy Helm to Hood cosmetic only. Season 14 patch switched it back.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Cow King\u0027s Crown",
                                                    "Moo",
                                                    "Moo",
                                                    ""
                                                ],
                                                [
                                                    "The Undercrown",
                                                    "Missing from wardrobe — Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Unmaker",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Theater Mask",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tooth-and-Nail Helm",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ugly Bastard Helm",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Urivar\u0027s Shattered Face",
                                                    "Complete campaign quest Burning Crusade",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Wanderer\u0027s Cap",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warlord Greathelm",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Cover",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Tunic",
                                  "items":  [
                                                [
                                                    "Adventurer\u0027s Tunic",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Amazon Training Tunic",
                                                    "Missing from wardrobe — Moo — Moo",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Archon Armor",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boneweave Armor",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chestguard",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chestplate of the Khazra",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Coven\u0027s Raiment",
                                                    "Can not be gambled or found in anywhere else. The boat ride from Hawezar to Skovos is part of Hawezar. — all classes except Warlock",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doom Armor",
                                                    "Gamble in T12 — all classes except Warlock · World Drop — Farm - Bartuc · World Drop — Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Drifter\u0027s Tunic",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Exceptional Armor",
                                                    "Unlock World Drop status by completing the campaign quest What Lies Ahead",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fleshwrit Carapace",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fur-Lined Robe",
                                                    "Can not be gambled or found in anywhere else. — all classes except Warlock",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glorious Tunic",
                                                    "Requires character level 65 to drop",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Chestplate of the Khazra",
                                                    "Looted on T4 from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Hatred\u0027s Heart",
                                                    "Complete campaign quest Fragile Blessings",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Heart of Azgar",
                                                    "Missing from wardrobe — Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heart\u0027s Garrison",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Chestplate",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hide Tunic",
                                                    "Starting Armor Set for all Classes - Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Highland Vestment",
                                                    "Can not be gambled or found in anywhere else. The Pit is part of Scosglen even if opened from Temis.",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jacinth Shell",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Killer\u0027s Vest",
                                                    "Purchase from the Odds and Ends PVP vendor",
                                                    "Vendor PVP",
                                                    ""
                                                ],
                                                [
                                                    "Leather Doublet",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mantle of Mountain\u0027s Fury",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mantle of the Grey",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Musculata",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Plackart of Hefaetrus",
                                                    "Reward for completing Smothered Flame Campaign Quest",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Primal Breastplate",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Runic Mail",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sand-Worn Vestment",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Shroud of False Death",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2%",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Shroud of Khanduras",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Soul\u0027s Bulwark",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sovereign Mail",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Strider’s Tunic",
                                                    "Only armor set with available as both a magic and common item with the strider name. Gamble between T1 and T10 or available as a Normal item @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sturdy Chest Armor",
                                                    "Renamed Sturdy Tunic",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Thalassic Cuirass",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Relentless Heart",
                                                    "Missing from wardrobe — Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tunic",
                                                    "Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tyrael\u0027s Might",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2%",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Vestment of Baleful Intent",
                                                    "Complete campaign quest Deeds of a Champion — all classes except Warlock",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Wanderer\u0027s Tunic",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warlord Plate",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Tunic",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Gloves",
                                  "items":  [
                                                [
                                                    "Adventurer\u0027s Gloves",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Amazon Training Gloves",
                                                    "Missing from wardrobe — Moo — Moo",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Archon Gauntlets",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Askari Greaves",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bands of Ichorous Rose",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bane of Ahjad-Den",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boneweave Gauntlets",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bracers of Athulua",
                                                    "Rewarded as rare unique item for completing the Campaign quest Glint of Light",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Coven\u0027s Gloves",
                                                    "Can not be gambled or found in anywhere else. The boat ride from Hawezar to Skovos is part of Hawezar.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Craze of the Dead God",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cruor\u0027s Embrace",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dark Howl",
                                                    "Missing from wardrobe — Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dawnfire",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Deathgrip",
                                                    "Missing from wardrobe — Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doom Gauntlets",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Drifter\u0027s Gloves",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Endurant Faith",
                                                    "General",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Exceptional Gloves",
                                                    "Unlock World Drop status by completing the campaign quest As the World Burns",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Flameweaver",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fur-Lined Mitts",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gauntlets",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gauntlets of Baleful Intent",
                                                    "Complete campaign quest Deeds of a Champion",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Gauntlets of Sheol",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gladiator\u0027s Triumph",
                                                    "Missing from wardrobe — Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glorious Gloves",
                                                    "Requires character level 65 to drop",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gloves",
                                                    "Gamble between T1 and T10 @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gloves of the Khazra",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Gravewalker\u0027s Hand",
                                                    "Missing from wardrobe — Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Gloves of the Khazra",
                                                    "Looted on T4 from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Hatred\u0027s Grasp",
                                                    "Complete campaign quest Enmity Rising",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Gloves",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hesha E Kesungi",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hide Gloves",
                                                    "Starting Armor Set for all Classes or Gamble between T1 and T10 @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Highland Handwraps",
                                                    "Can not be gambled or found in anywhere else. The Pit is part of Scosglen even if opened from Temis.",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jadebite Gauntlets",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jadeclaw Grip",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Killer\u0027s Hands",
                                                    "Purchase from the Odds and Ends PVP vendor",
                                                    "Vendor PVP",
                                                    ""
                                                ],
                                                [
                                                    "Lemellar",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Levin Grasp",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Might of Qual-Kehk",
                                                    "Missing from wardrobe — Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Primal Gauntlets",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Runic Gloves",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sand-Worn Handwraps",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Seafarer\u0027s Grips",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sidhe Bindings",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sovereign Vambraces",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Strider’s Handwraps",
                                                    "Only armor set with available as both a magic and common item with the strider name. Gamble between T1 and T10 or available as a Normal item @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sturdy Gloves",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Hand of Naz",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Twin Strikes",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Unsung Ascetic\u0027s Wraps",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wanderer\u0027s Gloves",
                                                    "Gamble between T1 and T10 — all classes except Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warlord Gauntlets",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Gloves",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wyrdskin",
                                                    "General",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pants",
                                  "items":  [
                                                [
                                                    "Adventurer\u0027s Pants",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Amazon Training Pants",
                                                    "Missing from wardrobe — Moo — Moo",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Arcadia",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Archon Faulds",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Arreat\u0027s Bearing",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Axial Conduit",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Balazan\u0027s Maxtlatl",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boneweave Faulds",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Breeches of Baleful Intent",
                                                    "Complete campaign quest Deeds of a Champion",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Chainscourged Mail",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Coven\u0027s Trunks",
                                                    "Can not be gambled or found in anywhere else. The boat ride from Hawezar to Skovos is part of Hawezar.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Death’s Pavane",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doom Cuisses",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Drifter\u0027s Pants",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Exceptional Leggings",
                                                    "Unlock World Drop status by completing the campaign quest Exhumed Relics",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fur-Lined Pants",
                                                    "Can not be gambled or found in anywhere else. — all classes except Warlock",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glorious Pants",
                                                    "Requires character level 65 to drop",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Leggings of the Khazra",
                                                    "Looted on T4 from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Hatred\u0027s Seat",
                                                    "Complete campaign quest The Heart of All Rot",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Pants",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hide Pants",
                                                    "Starting Armor Set for all Classes - Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Highland Trousers",
                                                    "Can not be gambled or found in anywhere else. The Pit is part of Scosglen even if opened from Temis.",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Indira\u0027s Memory",
                                                    "Farm Lair Boss - Andariel (Kessime\u0027s Legacy) - Indira\u0027s Memory no longer drops (removed by LOH)",
                                                    "Removed",
                                                    ""
                                                ],
                                                [
                                                    "Isle Chausses",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Kabraxis\u0027 Will",
                                                    "Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Killer\u0027s Leggings",
                                                    "Purchase from the Odds and Ends PVP vendor",
                                                    "Vendor PVP",
                                                    ""
                                                ],
                                                [
                                                    "Kilt of Blackwing",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Leggings of Karcheus",
                                                    "Dropped by Boss during Campaign Quest The Soil, The Seed, The Fruit.",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Leggings of the Khazra",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Moonpath Cinch",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Noble Chiton",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Pants",
                                                    "World Drop — Unlocked by default on a brand new account · Fractured Peaks Drop — Currently drops as rare only in Fractured Peaks",
                                                    "World Drop / Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Primal Chausses",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Protection of the Prime",
                                                    "Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Reinforced Greaves",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Runic Leggings",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sand-Worn Breeches",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Shrouded Gift",
                                                    "Missing from wardrobe — Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sovereign Tassets",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Strider’s Leggings",
                                                    "Only armor set with available as both a magic and common item with the strider name. Gamble between T1 and T10 or available as a Normal item @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sturdy Pants",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sunscar Girdle",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wanderer\u0027s Pants",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warlord Leg Plates",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Breeches",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Boots",
                                  "items":  [
                                                [
                                                    "Adventurer\u0027s Boots",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Amazon Training Boots",
                                                    "Missing from wardrobe — Moo — Moo",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Archon Greaves",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Assassin\u0027s Stride",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Beastfall Boots",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boneweave Treads",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boots",
                                                    "Renamed Treads — all classes except Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boots of Baleful Intent",
                                                    "Complete campaign quest Deeds of a Champion",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Boots of the Khazra",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Calvary Treads",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Coven\u0027s Slippers",
                                                    "Can not be gambled or found in anywhere else. The boat ride from Hawezar to Skovos is part of Hawezar.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doom Treads",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Drifter\u0027s Boots",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Exceptional Boots",
                                                    "Unlock World Drop status by completing the campaign quest Missing Pieces",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Footfalls of the Waning World",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fur-Lined Boots",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gift of Frost",
                                                    "Missing from wardrobe — Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glorious Boots",
                                                    "Requires character level 65 to drop",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Boots of the Khazra",
                                                    "Looted on T4 from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Greenwalker\u0027s Oath",
                                                    "Missing from wardrobe — Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hatred\u0027s March",
                                                    "Complete campaign quest Across the Threshold",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Boots (1)",
                                                    "Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Boots (2)",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hide Boots",
                                                    "Starting Armor Set for all Classes - Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Highland Boots",
                                                    "Can not be gambled or found in anywhere else. The Pit is part of Scosglen even if opened from Temis.",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hooves of the Mountain God",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Khamsin Steppewalkers",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Killer\u0027s Boots",
                                                    "Purchase from the Odds and Ends PVP vendor",
                                                    "Vendor PVP",
                                                    ""
                                                ],
                                                [
                                                    "March of the Stalwart Soul",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Marching Sandals",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Path of the Emissary",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Path of Trag\u0027Oul",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Primal Sabatons",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rakanoth\u0027s Wake",
                                                    "General",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ritewalk Huaraches",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Runic Cleats",
                                                    "Changed to World drop - may require a character level above 60 to drop.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sabatons of Philios",
                                                    "Rewarded as rare unique item for completing the Campaign quest Mother\u0027s Guidance",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Sand-Worn Shoes",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Scorn of the Earth",
                                                    "Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skovosain Buskin",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sovereign Greaves",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Strider’s Shoes",
                                                    "Only armor set with available as both a magic and common item with the strider name. Gamble between T1 and T10 or available as a Normal item @ Level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sturdy Boots",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wanderer\u0027s Boots",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wardance Greaves",
                                                    "Can not be gambled or found in anywhere else. The Under City is part of Nahantu even if opened from Temis.",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warlord Boots",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Boots",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Yen\u0027s Blessing",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Weapons",
        "tag":  "Base game — weapon transmogs from the wardrobe",
        "group":  "Game",
        "subcategories":  [
                              {
                                  "name":  "2H Axe",
                                  "items":  [
                                                [
                                                    "Ancients\u0027 Oath",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Battle Halberd",
                                                    "Renamed Double Axe (2) - Dry Steppes only drop — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Battleworn Crescent",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bloodsweep",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cannibal\u0027s Chopper",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Maul",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dark Elder Axe",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dirge of Odium",
                                                    "Missing from wardrobe — Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Double Axe",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Broadaxe",
                                                    "Renamed Sagaris - Gamble in T12 — all classes except Sorcerer, Druid, Rogue, Necromancer and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Falconer Axe",
                                                    "Renamed Sagaris — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "First Khazra Devastator",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Forester\u0027s Axe",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Goregaze Axe",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "GraveKeeper\u0027s Axe",
                                                    "Renamed Sargaris - Hawezar only drop — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Great Axe",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heretic\u0027s Executioner",
                                                    "Complete Nahnatu side quest The Witness — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Iron Axe",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jungle Cleaver",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "King Maker",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Lumber Axe",
                                                    "Gamble in Normal at character level 1 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Meschief Maker",
                                                    "Reward for completing Lion Among Lambs Side Quest (Bleating of Lambs quest chain) — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "OIKOS-Hewer",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Owlseys Maul",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Parashu",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serrated Cleaver",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sundered Night",
                                                    "Farm Lair Boss - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tyrant Labrys",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "2H Mace",
                                  "items":  [
                                                [
                                                    "Bonebreaker",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Deathshead",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Demolisher",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dire Mace",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doorknocker",
                                                    "Reward for completing Smothered Flame Campaign Quest — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Dread Mace",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Mace",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gorger\u0027s Cudgel",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Great Hammer",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Great Maul",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Maul",
                                                    "Buy from Fayira(Pale Marks) or Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hellhammer",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Horned Cudgel",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Iron Mauler",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Laden War Club",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Nettle Mace",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Overkill",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Penitent Hammer",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Purified Lightbringer",
                                                    "Farm Lair Boss - The Butcher - Renamed Rotting Lightbringer - cosmetic starts locked",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rendskull Mace",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sharpened Mace",
                                                    "includes the UC - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Silver Maul",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skull Crusher",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sledge Hammer",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spinalonga",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Two-Handed Hammer (1)",
                                                    "Former missing cosmetic - Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Two-Handed Hammer (2)",
                                                    "Barb starting equipment or Gamble in Normal at character level 1 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Hammer",
                                                    "Kehjistan only drop - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Mallet",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "2H Scythe",
                                  "items":  [
                                                [
                                                    "Bloodless Scream",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Burnished Harpe",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Compassion",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crook of the Grinning Shaman",
                                                    "Complete Nahnatu side quest Bloom Where You Are Planted",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Dragon Spine",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Foreign Fang",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Forgotten Scythe",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Furious Thresher",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Grave Striker",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gravegoods",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Scythe",
                                                    "Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Hook",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Proudshear",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Reaping Scythe",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Scythe",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sharpened Scythe",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Silver Gouger",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skull Reaper",
                                                    "Renamed Scapel - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sparr",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spirit Scythe",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Steel Scythe",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The End",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Toothed Reaper",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Scythe",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "2H Sword",
                                  "items":  [
                                                [
                                                    "Anathema of the Primes",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Anointing Edge",
                                                    "Dropped by the Boss as a rare unqiue item during the campaign quest The Hellborn Grove. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Askari Razor",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bastard Sword",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Beleth\u0027s Bane",
                                                    "Complete Nahnatu side quest New Again — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Claymore",
                                                    "Unlocked by default on a brand new account — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crystal Greatsword",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Demonblade",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fields of Crimson",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "First Born GreatSword",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Flamberge",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gargoyle Greatsword",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Giant Sword",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gothic Blade",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Grand Sword",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Great Sword",
                                                    "Scosglen only drop, includes the Pit - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Grimstone Sword",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Macuahuitl",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Keen Kopis",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Kingslayer",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Malefic Gaze",
                                                    "Reward for completing Port in a Storm Side Quest (The Night Voyagers quest chain) — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Red Sermon",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ritual Impaler",
                                                    "Purchased for 20,000 coins from the Dark Citadel vendor — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Sanguivor, Blade of Zir",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sawtooth Blade",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sepulcher Executor",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spathion",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spinal",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Grandfather",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2% — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Stillblade",
                                                    "Reward for completing Of Void and Vessel Side Quest (Of Wolves and Lambs quest chain) — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Two-Handed Sword",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1 — all classes except Sorcerer, Druid, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Yataghan",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Rogue and Spiritborn",
                                                    "Kehjistan Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Axe",
                                  "items":  [
                                                [
                                                    "Antistrophic Axe",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Battle Axe",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bearded Axe",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bullova",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ceder Wood Axe",
                                                    "includes the Pit - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ceremonial Cleaver",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Cutter",
                                                    "Renamed Axe(2) - Nahantu only drop, includes the UC — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Forked Axe",
                                                    "Renamed Broad Axe (1) - Dry Steppes only drop — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gorgon\u0027s Labrys",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hand Axe",
                                                    "Barb starting equipment or Gamble in Normal at character level 1 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hunter\u0027s Edge",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Marauder Axe",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Noble Slice",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Octopian Edge",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ripper Axe",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sagaris",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serrated Axe",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Studded Axe",
                                                    "Renamed Great Axe - Unlocked by default on a brand new account — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Temitian Labrys",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Butcher\u0027s Cleaver",
                                                    "Farm Lair Boss - The Butcher — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Thousand-Eye Reaver",
                                                    "General Drop — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Axe",
                                                    "Fractured Peaks only drop - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Waxing Gibbous",
                                                    "Missing from wardrobe — Removed from wardrobe in 3.0.1/LOH - Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Bow",
                                  "items":  [
                                                [
                                                    "Ascendant Bow",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Battle Bow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Brawler\u0027s Draw",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Bow",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cassia\u0027s Grace",
                                                    "Missing from wardrobe — Uses same cosmetic as Silver Filigree Bow - Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Common Bow",
                                                    "Unlocked by default on a brand new account",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Demotic Longbow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Eaglehorn",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Echoing Whisper",
                                                    "Complete Nahnatu side quest Final Rite",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Flatbow",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Forgotten Bow",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hunter\u0027s Bow",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Iron Recurve",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Longshot",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Makeshift Bow",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Malaphic Curve",
                                                    "LOH messed up the .itm file - currently only available as rare item given as a reward for compelting the Glint of Light Campaign Quest as a Rogue",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mammalbane Bow",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mastercraft Bow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Philosopher\u0027s Recurve",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Razorwind",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Revenant Bow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serpent\u0027s Bone Bow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Siege Bow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Silver Warp-Bow",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Simple Bow",
                                                    "Rogue starting equipment or Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skyhunter",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Bow",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Windforce",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Crossbow",
                                  "items":  [
                                                [
                                                    "Arbalest",
                                                    "Former missing cosmetic - Hawezar only drop",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bo\u0027a Crossbow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Buriza-Do Kyanon",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Crossbow",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cranequin",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cross Axe",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crossbow",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Spirit Crossbow",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gastraphetes",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hand Ballista",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Crossbow",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Khazra Bolt Thrower",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Military Crossbow",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Orphan Maker",
                                                    "Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Pellet Bow",
                                                    "World Drop — Gamble between T1 and T10 · Scosglen Drop — Scosglen only drop, includes the Pit - Can not be gambled or found in anywhere else.",
                                                    "World Drop / Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Phantom Maker",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Piercing Wind",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Reinforced Crossbow",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Scorpion",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Siege Crossbow",
                                                    "Former missing cosmetic - Kehjistan only drop",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Silentstring",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Simple Crossbow",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Swiftwind",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Crossbow",
                                                    "Former missing cosmetic - Dry Steppes only drop",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warcaster",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Windlass",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Dagger",
                                  "items":  [
                                                [
                                                    "Aged Rondel",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Anlace",
                                                    "Item does not drop - cosmetic must be obtained from another item",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Asheara\u0027s Khanjar",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Assassin\u0027s Blade",
                                                    "Item does not drop - cosmetic must be obtained from another item",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Athame of the Eye",
                                                    "In General drop pool - Reward for completing Sweet to the Tasste, Bitter to the Young Side Quest — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Bone Blade",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Broodmother\u0027s Stinger",
                                                    "Farm Nine-Eyes in Normal Difficulty - Kehjistan\\Ragged Coastline\\Scorched Gulch — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Rare Monster",
                                                    ""
                                                ],
                                                [
                                                    "Ceremonial Kopis",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Claw of Nyamoyo",
                                                    "Complete Nahnatu side quest The Bestial Soul of Teganze — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Condemnation",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dirk",
                                                    "Can not be gambled or found in anywhere else. — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Shiv",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Etna\u0027s Lost Dagger",
                                                    "Missing from wardrobe — Uses same cosmetic as Rebirth Edge - Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fang of the Vipermagi",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Goat-Footed Dagger",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hooked Piercer",
                                                    "Purchased for 15,000 coins from the Dark Citadel vendor — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Hunter\u0027s Knife",
                                                    "World Drop for Rogue only magic item Hunter\u0027s Knife - Scosglen Drop for rare item Hunter\u0027s Knife — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Class Dependent",
                                                    ""
                                                ],
                                                [
                                                    "Jambiya",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Kard",
                                                    "Item does not drop - cosmetic must be obtained from another item",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Khanjali",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Litany of Sable",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Malachite Dagger",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Nature\u0027s Teeth",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Neyrelle\u0027s Defiance",
                                                    "Found during Solace Beyond Sight. Picked up from stack of books, not reward. — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Pugio",
                                                    "Unlocked by default on a brand new account — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rat King\u0027s Claw",
                                                    "Missing from wardrobe — Uses the same cosmetic as Thief\u0027s Shank - Dropped by Pariah found in the Mount Karcheus area in Philios. — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Rare Monster",
                                                    ""
                                                ],
                                                [
                                                    "Ritual Dagger",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rustbitten Dirk",
                                                    "General Drop — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Shadowclaw Slicer",
                                                    "Complete Nahnatu side quest The Scales of History — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Shiv",
                                                    "Can not be gambled or found in anywhere else. — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sica",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Simple Dagger",
                                                    "Rogue starting equipment or Gamble in Normal at character level 1 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Soul Taker",
                                                    "Reward for completing Coward\u0027s Redemption Side Quest (To Set Things Right quest chain) — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Stiletto",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Stone Blade",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Barbarian, Spiritborn and Paladin",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Mortacrux / The Umbracrux",
                                                    "Farm Lair Boss - Grigoire (Necro Only) or Farm Lair Boss - Lord Zir (Rogue Only) — all classes except Sorcerer, Druid, Barbarian, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Twin-blade",
                                                    "Gamble in T12 — all classes except Barbarian, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Flail",
                                  "items":  [
                                                [
                                                    "Agitator",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Beastbreaker",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bronzed Victor",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Browbeater",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Censer",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chain Hammer",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chain Mace",
                                                    "Gamble in Normal at character level 1 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chainflange",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dread Flail",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fourblade",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Light\u0027s Rebuke",
                                                    "Farm Lair Boss - The Beast in the Ice",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Meatgrinder",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rotted Effigy",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Scourge of Duriel",
                                                    "Missing from wardrobe — Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skinripper",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skullcracker",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spiked Flail",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Star Flail",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Stone Flail",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sunbrand",
                                                    "Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Towerfell",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Two-Section Flail",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Vile Censer",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Focus",
                                  "items":  [
                                                [
                                                    "Augur",
                                                    "Gamble between T1 and T10 - Available as either a Rare or Magic item. — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "Multiple Item Quality WD",
                                                    ""
                                                ],
                                                [
                                                    "Balance Icon",
                                                    "Item does not drop - cosmetic must be obtained from another item — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Bound Eye",
                                                    "Can not be gambled or found in anywhere else. — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crow Fetish",
                                                    "Can not be gambled or found in anywhere else. — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dawnbreaker",
                                                    "Reward for completing A Tapestry of Heroes and Legends Side Quest — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Decorated Skull",
                                                    "Salvage the matching unique focus with a Necromancer — cannot be unlocked any other way — Necromancer only",
                                                    "Unique",
                                                    ""
                                                ],
                                                [
                                                    "Demon\u0027s Eye",
                                                    "Item does not drop - cosmetic must be obtained from another item — all classes except Druid, Barbarian, Rogue, Necromancer, Spiritborn and Paladin",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Dream Catcher",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Emperor\u0027s End",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Enigma Cube",
                                                    "Was not able to gamble likely RNG - Have received plenty as random drops (pits, monsters, ect..) — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Eye of Baal",
                                                    "Farm - Bartuc",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Focus of the Avenged",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fortunate Bell",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gospel of the Devotee",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Infernal Homunculus",
                                                    "Missing from wardrobe — Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Relic",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Keepsake",
                                                    "Gamble between T1 and T10 - Available as either a Rare or Magic item. — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Multiple Item Quality WD",
                                                    ""
                                                ],
                                                [
                                                    "Molten Lotus",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Oblivion Skull",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Orichalcum Effigy",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Relic Focus",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Relic Skull (1)",
                                                    "Former missing cosmetic - Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Relic Skull (2)",
                                                    "Sorc starting equipment or Gamble in Normal at character level 1 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Runic Orb",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Seahag\u0027s Reproach",
                                                    "Wrong inventory/wardrobe icon — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serpent Stone",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spellbook",
                                                    "Item does not drop - cosmetic must be obtained from another item — all classes except Druid, Barbarian, Rogue, Necromancer, Spiritborn and Paladin",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Strike of Stormhorn",
                                                    "Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Timeworn Conduit",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn and Paladin",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Trophy Tusk",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Vajra",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Witness to Woe",
                                                    "Complete Nahnatu side quest Tenets of Depravity: Scion of Blasphemies — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Side Quest",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Glaive",
                                  "items":  [
                                                [
                                                    "Armored Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Basic Glaive",
                                                    "Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elegant Glaive",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Faussart",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Flame Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Furrowed Glaive",
                                                    "Buy from Fayira(Pale Marks) or Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glaive of the Chosen",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Golden Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hooked Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ironfeather Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Kallos Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Keen Glaive",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Lizardkiller Glaive",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Nesekem, the Herald",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2%",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Onyx Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Realmwarden\u0027s Scepter",
                                                    "Complete the class quest Spritborn: The Sacred Hunt",
                                                    "Class Quest",
                                                    ""
                                                ],
                                                [
                                                    "Sawtooth Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serrated Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sharpened Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tuned Glaive",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wushe Nak Pa",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mace",
                                  "items":  [
                                                [
                                                    "Askari Mace",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Blackwood Club",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bloodsucker",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Club(1)",
                                                    "Former missing cosmetic - Gamble between T1 and T10 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Club(2)",
                                                    "Item does not drop - cosmetic must be obtained from another item — all classes except Rogue, Spiritborn and Paladin",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Club(3)",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crag Hammer",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cudgel",
                                                    "Fractured Peaks only drop - Can not be gambled or found in anywhere else. — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Death Mace",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doom Mace",
                                                    "Purchased for 15,000 coins from the Dark Citadel vendor — all classes except Rogue and Spiritborn",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Fleshrender",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Herald\u0027s Morningstar",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Impact Hammer",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ironwood Club",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Rogue and Spiritborn",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Knockhand Club",
                                                    "Gamble in T12 — all classes except Sorcerer, Barbarian, Rogue, Necromancer and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mace",
                                                    "Can not be gambled or found in anywhere else. — all classes except Rogue, Spiritborn and Warlock",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mace of Blazing Furor",
                                                    "Farm Wrathful Osgar Reede in Normal Difficulty - Fractured Peaks\\The Pallid Glade — all classes except Rogue, Spiritborn and Warlock",
                                                    "Rare Monster",
                                                    ""
                                                ],
                                                [
                                                    "Mace of King Leoric",
                                                    "Farm Lair Boss - The Butcher - Renamed Gravebloom cosmetic (was unlocked for me)",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Morningstar",
                                                    "Item does not drop - cosmetic must be obtained from another item — all classes except Rogue, Spiritborn, Paladin and Warlock",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Orsivane",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rook\u0027s Dirge",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rootfist",
                                                    "Gamble in T12 — all classes except Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skullsplitter",
                                                    "Gamble in T12 — all classes except Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spiked Baton",
                                                    "Scosglen only drop, includes the Pit - Can not be gambled or found in anywhere else. — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spiked Mace",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Rogue and Spiritborn",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spinamikra",
                                                    "Gamble in T12 — all classes except Rogue and Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spine of Tathamet",
                                                    "Missing from wardrobe — Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Truncheon",
                                                    "Item does not drop - cosmetic must be obtained from another item — all classes except Rogue, Spiritborn and Warlock",
                                                    "Rare",
                                                    ""
                                                ],
                                                [
                                                    "Ward-Hammer",
                                                    "Dropped by Horadrice Gaurdian Keeper of the Cube durin Horadrim Campaign Quest — all classes except Rogue and Spiritborn",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Wolf\u0027s Bite",
                                                    "Gamble in T12 — all classes except Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Polearm",
                                  "items":  [
                                                [
                                                    "Bardiche",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Boar Spear",
                                                    "Gamble in Normal at character level 1 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Polearm",
                                                    "Buy from Fayira(Pale Marks) or Gamble between T1 and T10 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Charming Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cryptic Partizan",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Devil\u0027s Polearm",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elegant Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fauchard",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Feathered Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gilded Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Golden Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gryphalanx",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hache",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Halberd",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Impaler",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Inlaid Halberd",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Khazra Champion\u0027s Poleaxe",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Kleos, Spear of Athulua",
                                                    "Dropped by Adreona during The Fools Campaign Quest — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Pike",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Fractured Peaks Drop",
                                                    ""
                                                ],
                                                [
                                                    "Poleaxe",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rusted Bardiche",
                                                    "Missing from wardrobe — Cow Level — Part of the Cow Level quest — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Quest",
                                                    ""
                                                ],
                                                [
                                                    "Scepter of Queen Tharra I",
                                                    "Reward for completing First of Her Name Side Quest — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Sharpened Polearm",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Shattered Vow",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2% — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "South Sea Trident",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sword-Staff",
                                                    "Scosglen only drop, includes the Pit - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Trident",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Crest",
                                                    "Gamble in T12 — all classes except Sorcerer, Rogue, Necromancer, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Javelin",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Quarterstaff",
                                  "items":  [
                                                [
                                                    "Ascendant Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Basic Quaterstaff",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Blanced Quarterstaff",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Quarterstaff",
                                                    "Buy from Fayira(Pale Marks) or Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Quarterstaff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fancy Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Quaterstaff",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Golden Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heavy Quarterstaff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Honed Quarterstaff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hooked Quaterstaff",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Lotus-Eater Quaterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Porphetic Quaterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ritual Quarterstaff",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rod of Kepeleke",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sculpted Quarterstaff",
                                                    "Purchased for 20,000 coins from the Dark Citadel vendor",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Sepazontec",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Smashing Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "South Sea Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spirit Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sunstained War-Crozier",
                                                    "Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Thorned Quarterstaff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Woven Quarterstaff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Scythe",
                                  "items":  [
                                                [
                                                    "Billhook",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bone Scythe (2)",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Despoiler\u0027s Reaper",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Scythe",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Flesh Sever",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Foreign Claw",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Greater Scythe",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hand Sickle",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Hooked Scythe",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Iron Scythe",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Kama",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Khazra Soul Harvester",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Khopesh",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Reaper",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sacrificial Sickle",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sawtooth Sickle",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serrated Reaper",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Simple Scythe",
                                                    "Nerco starting equipment or Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Stone Scythe",
                                                    "Rmoved by LOH? · World Drop — Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Sickle",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Hawezar Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Shield",
                                  "items":  [
                                                [
                                                    "Aegis",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Basic Shield",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bastion of Sir Matthias",
                                                    "Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bone Shield",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bonescale Shield",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Buckler",
                                                    "Nerco starting equipment or Gamble in Normal at character level 1 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cathedral\u0027s Song",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Combat Shield",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cosmohoplon",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Death\u0027s Defense",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dread Shield",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Aegis",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Funerary Mask",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gate of the Red Dawn",
                                                    "Farm Lair Boss - Harbinger",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gothic Shield",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Grave Bulwark",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Guard",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Guard of the Immortal",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Herald of Zakarum",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Iron Shield",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Shell",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Kite Shield",
                                                    "Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Lidless Wall",
                                                    "Farm Lair Boss - Andariel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Paladin Lord\u0027s Bulwark",
                                                    "Complete Hawezar side quest Remembering the Fallen — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Peerless Pelte",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Pelte",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Protector Shield",
                                                    "Fractured Peaks only drop - Can not be gambled or found in anywhere else. — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Stormshield",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Targe",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tower",
                                                    "Gamble between T1 and T10 — all classes except Sorcerer, Druid, Barbarian, Rogue, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ward of the White Dove",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Staff",
                                  "items":  [
                                                [
                                                    "Ahavarion, Spear of Lycander",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2% — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Apothecary\u0027s Staff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Archon Staff",
                                                    "Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Battle Staff",
                                                    "There are two items with this name and cosmetic",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bo\u0027a Thyrsus",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Brilliance",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Briny-Eye Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Staff",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cedar Staff",
                                                    "Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cragstaff",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dragon Staff",
                                                    "Scosglen only drop, includes the Pit - Can not be gambled or found in anywhere else.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Earth Staff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder Staff",
                                                    "Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Energy Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Engraved Caduceus",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Etsecheke\u0027s Walking Stick",
                                                    "Complete Nahnatu side quest Blood in the Grove",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Forestgem Halberd",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fulmination",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Glorious Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gothic Staff",
                                                    "Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Great Shaman\u0027s Stave",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Greatstaff of the Crone",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Harpydory",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Heartwood Staff",
                                                    "Renamed Rune Staff (1) - Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Horn Staff",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Iron Walking Stick",
                                                    "Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jo Staff",
                                                    "Gamble between T1 and T10 — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Manifold Cane",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Medicine Staff",
                                                    "Kehjistan only drop - Can not be gambled or found in anywhere else.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Monkey Staff",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Moonlight",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Nimble Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Oblivion",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Pilgrim\u0027s Staff",
                                                    "Reward for completing The Garden of Akarat Side Quest (Neophyte\u0027s Odyssey quest chain)",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Reptilian Staff",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ritual Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rod of Divination",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Rough Staff",
                                                    "World Drop — Gamble between T1 and T10 · Side Quest — Complete Scosglen side quest Left in Ashes — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop / Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Rune Staff",
                                                    "Hawezar only drop - Can not be gambled or found in anywhere else.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Seer\u0027s Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Soulburst Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spellstone Staff",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Staff (D)",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Staff (S)",
                                                    "Former missing cosmetic - Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Staff of Endless Rage",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Staff of Lam Esen",
                                                    "Farm Lair Boss - Lord Zir or Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Torment Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Totemic Staff",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Tribal Staff",
                                                    "Scosglen only drop, includes the Pit - Can not be gambled or found in anywhere else.",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Vox Omnium / The Basilisk",
                                                    "Farm Lair Boss - Grigoire (Druid Only) or Farm Lair Boss - The Beast in the Ice (Sorc Only) — all classes except Barbarian, Rogue, Necromancer, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "War Staff",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Weathered Staff",
                                                    "Can not be gambled or found in anywhere else.",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Witching Phalange",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wyrmcurse Stave",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Sword",
                                  "items":  [
                                                [
                                                    "Akarat\u0027s Song",
                                                    "Dropped by The Harbinger of Hatred during the VOH campaign quest All Good Things — all classes except Spiritborn and Warlock",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "Azurewrath",
                                                    "Farm - Bartuc — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Barbed Sword",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Black Rail",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Broad Sword",
                                                    "Gamble between T1 and T10 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Carved Sword",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Spiritborn and Warlock",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Demon-Eye Sword",
                                                    "Cosmetic must be obtained from another item. No known source for this item and not part of the general drop pool — all classes except Sorcerer, Druid, Barbarian, Rogue, Necromancer and Spiritborn",
                                                    "Unique",
                                                    ""
                                                ],
                                                [
                                                    "Doomblade",
                                                    "Gamble between T1 and T10 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Doombringer",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2% — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "El\u0027Druin, Sword of Justice",
                                                    "Craft at Jeweler/Blacksmith or Farm Lair Bosses - extremely low drop rate, Belial has highest rate around 2% — all classes except Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elegy",
                                                    "Farm Lair Boss - Lord Zir",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Falchion",
                                                    "includes the Pit - Can not be gambled or found in anywhere else. — all classes except Spiritborn and Warlock",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Falkata",
                                                    "Wrong inventory/wardrobe icon — all classes except Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fatecarver",
                                                    "Reward for completing Fate\u0027s Reckoning Side Quest (Theft of Fate quest chain) — all classes except Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Flammard",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Forgotten Sword",
                                                    "Former missing cosmetic - Hawezar only drop — all classes except Spiritborn",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ghoul King\u0027s Blade",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Gladius",
                                                    "Gamble between T1 and T10 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Griswold\u0027s Opus",
                                                    "Farm - Astaroth",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jaguar\u0027s Razor",
                                                    "Gamble in T12 — all classes except Sorcerer, Druid, Barbarian, Necromancer, Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Justicar\u0027s Brand",
                                                    "Reward for completing Blood for Justice Side Quest (Blood for Truth quest chain) — all classes except Spiritborn",
                                                    "Side Quest",
                                                    ""
                                                ],
                                                [
                                                    "Lich Blade",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mangler",
                                                    "Gamble between T1 and T10 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Obsidian Blade",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ouruboric Spatha",
                                                    "Gamble in T12 — all classes except Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ramaladni\u0027s Magnum Opus",
                                                    "Farm Lair Boss - The Butcher",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Royal Boneblade",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rune Blade",
                                                    "Gamble between T1 and T10 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sabre of Tsasgal",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Scimitar",
                                                    "Can not be gambled or found in anywhere else. — all classes except Spiritborn and Warlock",
                                                    "Kehjistan Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serpent\u0027s Bite",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Shadow Slicer",
                                                    "Looted from middle chests and bosses in the Dark Citadel — all classes except Spiritborn and Warlock",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Shard of Verathiel / The Third Blade",
                                                    "Farm Lair Boss - Varshan or Farm - Astaroth (Barb Only) — all classes except Spiritborn and Warlock",
                                                    "Transmog",
                                                    ""
                                                ],
                                                [
                                                    "Short Sword (1)",
                                                    "Former missing cosmetic - Gamble between T1 and T10 — all classes except Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Short Sword (2)",
                                                    "Gamble in Normal at character level 1 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skull and Steel",
                                                    "Gamble in T12 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Supplication",
                                                    "Farm Lair Boss -Duriel",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Urivar\u0027s Charred Sword",
                                                    "Complete campaign quest Burning Crusade — all classes except Spiritborn and Warlock",
                                                    "Campaign Quest",
                                                    ""
                                                ],
                                                [
                                                    "War Sword",
                                                    "Gamble between T1 and T10 — all classes except Spiritborn and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warbrand",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Spiritborn",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Xiphos",
                                                    "Gamble in T12 — all classes except Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Zeta Khopesh",
                                                    "Gamble in T12 — all classes except Spiritborn",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Totem",
                                  "items":  [
                                                [
                                                    "Ancient Effigy",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Askarra\u0027s Tribute",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bestial Totem",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Cairnstone",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Caput Totem",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos.",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Crude Totem",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dreamwhisper Totem",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Earthshaper",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Elder\u0027s Sandal",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Feral Effigy",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Giant\u0027s Finger",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Honored Relic",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Horned Effigy",
                                                    "Looted from middle chests and bosses in the Dark Citadel",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Imbued Totem",
                                                    "Renamed Totem (1) - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Lupine Totem",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Marblegild Totem",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Primitive Totem",
                                                    "Former missing cosmetic - Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Primordial Fetish",
                                                    "Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Relic Totem",
                                                    "includes the UC - Buy from Fayira(Pale Marks)",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Skycaller",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Stone of Vehemen",
                                                    "Farm Lair Boss - Varshan",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Totem",
                                                    "Druid starting equipment or Gamble in Normal at character level 1",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Ursine Totem",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Warmuster Totem",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Wildcaller Totem",
                                                    "Gamble between T1 and T10",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Wand",
                                  "items":  [
                                                [
                                                    "Apprentice\u0027s Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Basic Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Battle Wand",
                                                    "Can not be gambled or found in anywhere else. — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Dry Steppes Drop",
                                                    ""
                                                ],
                                                [
                                                    "Bone Wand",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Conjuration Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Devil Tooth Wand",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Duelist Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dylithos Rod",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Enchanter Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Fecund Wand",
                                                    "Renamed Iron Wand (1) - Hawezar only drop — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Hawezar Drop",
                                                    ""
                                                ],
                                                [
                                                    "Flamescar",
                                                    "Farm Lair Boss -Urivar",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Grave Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Iron Wand",
                                                    "includes the UC - Buy from Fayira(Pale Marks) — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Nahantu Drop",
                                                    ""
                                                ],
                                                [
                                                    "Jade Wand",
                                                    "Buy from Fayira(Pale Marks) or Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Mentor Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Noblewoman\u0027s Dowel",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Oak Wand",
                                                    "includes the Pit - Can not be gambled or found in anywhere else. — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Scosglen Drop",
                                                    ""
                                                ],
                                                [
                                                    "Oracle\u0027s Wand",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Petrified Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rattling Bones",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Rudimentary Wand",
                                                    "Sorc starting equipment as Aprentice Wand or Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Sabre Wand",
                                                    "Can not be gambled or found in anywhere else. The Cube is part of Skovos. — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Skovos Drop",
                                                    ""
                                                ],
                                                [
                                                    "Serpentine Wand",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spellbinder",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Spinal Wand",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Steel Wand",
                                                    "Gamble between T1 and T10 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "The Oculus",
                                                    "Farm Lair Boss - Grigoire",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Twisted Spirit Wand",
                                                    "Purchased for 15,000 coins from the Dark Citadel vendor — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "Dark Citadel",
                                                    ""
                                                ],
                                                [
                                                    "Wizard\u0027s Touch",
                                                    "Gamble in T12 — all classes except Druid, Barbarian, Rogue, Spiritborn, Paladin and Warlock",
                                                    "World Drop",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Achievement \u0026 Renown Rewards",
        "tag":  "Permanent — mounts and cosmetics from achievements and renown",
        "group":  "Game",
        "items":  [
                      [
                          "Altar of Lilith Rewards",
                          "Collect all Altars — mount, titles, cosmetics",
                          "Altars",
                          "https://www.pcgamesn.com/diablo-4/title-unlock"
                      ],
                      [
                          "Mount: Donan\u0027s Favor",
                          "Complete priority quest — permanent mount unlock",
                          "Quest",
                          "https://www.bigwritehook.co.uk/blog/general-knowledge-24/diablo-4-what-carries-over-to-season-6250"
                      ],
                      [
                          "Renown Rewards",
                          "Max renown in each region — mounts, pets, titles",
                          "Renown",
                          "https://www.pcgamesn.com/diablo-4/title-unlock"
                      ]
                  ]
    },
    {
        "name":  "Mounts",
        "tag":  "All mounts â€” base game and promotions",
        "group":  "Game",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Blood Bay Mount",
                                                    "Drop from monsters and chests in Kehjistan",
                                                    "Kehjistan Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Bloody Liquid",
                                                    "Defeat the Echo of Lilith (World Tier 4)",
                                                    "Lair Boss",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Bloody Mount",
                                                    "Unconventional Mount vendor in the Fields of Hatred — 100,000 Red Dust",
                                                    "Vendor PVP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Brigand’s Mount",
                                                    "Random world drop — monsters and chests",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Buckskin Bay Mount",
                                                    "Drop from monsters and chests in Kehjistan",
                                                    "Kehjistan Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Caldeum Mount",
                                                    "Random world drop — monsters and chests",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Cavalier’s Mount",
                                                    "Random world drop — monsters and chests",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Dark Citadel Panther",
                                                    "Dark Citadel vendor with Citadel coins after a Torment clear",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Dark Leopard",
                                                    "Mount vendor (gold) — Vessel of Hatred cat mounts",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Decaying Mount",
                                                    "World drop — reported from Treasure Goblins",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Dustback Mount",
                                                    "Drop from monsters and chests in Dry Steppes",
                                                    "Dry Steppes Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Executioner’s Mount",
                                                    "Random world drop — monsters and chests",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Ghost of the Conquered",
                                                    "Twitch promotion for Vessel of Hatred, Oct 8 - Nov 5, 2024 — purchase/gift 2 subs",
                                                    "Twitch Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Granite-Coat Mount",
                                                    "Drop from monsters and chests in Scosglen",
                                                    "Scosglen Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Grey Steed",
                                                    "Stable Master in any major city — 20,000 Gold",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Grisly Calico Mount",
                                                    "World drop — exact location unknown",
                                                    "Unknown",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Leucistic Lion",
                                                    "Mount vendor (gold) — Vessel of Hatred cat mounts",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Leucistic Panther",
                                                    "Mount vendor (gold) — Vessel of Hatred cat mounts",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Longfur Beast",
                                                    "Mount vendor (gold) — also a Dark Citadel reward",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Longfur Beast Mount",
                                                    "Complete all 3 Citadel wings — first clear",
                                                    "Citadel Mount",
                                                    "https://www.icy-veins.com/d4/guides/dark-citadel-guide/"
                                                ],
                                                [
                                                    "Marsh Roan Mount",
                                                    "Drop from monsters and chests in Hawezar",
                                                    "Hawezar Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Marshback Mount",
                                                    "Drop from monsters and chests in Hawezar",
                                                    "Hawezar Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Mottled Steed",
                                                    "Stable Master in any major city — 20,000 Gold",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Nahantu Leopard",
                                                    "Mount vendor (gold) — Vessel of Hatred cat mounts",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Nahantu Lioness",
                                                    "Mount vendor (gold) — Vessel of Hatred cat mounts",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Nahantu Puma",
                                                    "Mount vendor (gold) — Vessel of Hatred cat mounts",
                                                    "Vendor",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Old Nell Steed",
                                                    "Default mount — complete the Mount: Donan\u0027s Favor priority quest (Act IV, Kyovashad)",
                                                    "Quest",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Orichalcum Speckled Mare",
                                                    "Twitch promotion Jan 23 - Feb 26, 2024 — gift 2 subs",
                                                    "Twitch Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Pale Mount",
                                                    "Drop from monsters and chests in Fractured Peaks",
                                                    "Fractured Peaks Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Plains Yearling Mount",
                                                    "World drop — exact location unknown",
                                                    "Unknown",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Primal Instinct Mount",
                                                    "Twitch promotion — gift 2 subs to a D4 streamer during the event",
                                                    "Twitch Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Seal Brown Mount",
                                                    "Random world drop — monsters and chests",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Smoldering Brimstone",
                                                    "Rare drop from Uber Duriel / Uber Andariel",
                                                    "Lair Boss",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Spectral Charger",
                                                    "Chest drop from Gathering Legions world events",
                                                    "In-Game Reward",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Spotted Shale-Coat Mount",
                                                    "Drop from monsters and chests in Scosglen",
                                                    "Scosglen Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Striped Steppe Mount",
                                                    "Drop from monsters and chests in Dry Steppes",
                                                    "Dry Steppes Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Taiga Roan Mount",
                                                    "Drop from monsters and chests in Fractured Peaks",
                                                    "Fractured Peaks Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "The Nightmare",
                                                    "Free claim during Diablo IV\u0027s 1st Anniversary event",
                                                    "Community",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Trapper’s Mount",
                                                    "Random world drop — monsters and chests",
                                                    "World Drop",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Mount Armor",
        "group":  "Game",
        "tag":  "Barding and armor for your mount",
        "items":  [
                      [
                          "Ashava Barding",
                          "Drop from world boss Ashava the Pestilent",
                          "World Boss",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Bloody Warlord’s Barding",
                          "Fields of Hatred vendor, 85,000 Red Dust",
                          "Vendor PVP",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Bone-Caged Barding",
                          "Drop from world boss Wandering Death",
                          "World Boss",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Demonic Warlord’s Barding",
                          "Fields of Hatred vendor, 85,000 Red Dust",
                          "Vendor PVP",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Fresh Meaty Barding",
                          "Drop from The Butcher",
                          "Boss Drop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Khazra Mount Armor",
                          "Dark Citadel — random drop",
                          "Citadel Mount",
                          "https://www.icy-veins.com/d4/guides/dark-citadel-guide/"
                      ],
                      [
                          "Trade Consortium Tack",
                          "Complete the Estuar Wanderer achievement (explore all of Estuar)",
                          "In-Game Reward",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Treasure Beast Barding",
                          "Drop from world boss Avarice the Gold-Cursed",
                          "World Boss",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ]
                  ]
    },
    {
        "name":  "Mount Trophy",
        "group":  "Game",
        "tag":  "Banners and trophies for your mount",
        "items":  [
                      [
                          "Khazra Banner",
                          "Dark Citadel drop",
                          "Citadel Trophy",
                          "https://www.icy-veins.com/d4/guides/dark-citadel-guide/"
                      ]
                  ]
    },
    {
        "name":  "Pets",
        "tag":  "All pets — aggregated across the game and every season",
        "group":  "Game",
        "subcategories":  [
                              {
                                  "name":  "Base game",
                                  "items":  [
                                                [
                                                    "Asheara the Canine",
                                                    "Complete the Faithful Companion quest in Kyovashad — pet the Well-Behaved Dog",
                                                    "Quest",
                                                    "https://www.icy-veins.com/d4/guides/pet-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Bundles",
        "group":  "Shop",
        "tag":  "Armor-set / mount / weapon packages and add-ons",
        "items":  [
                      [
                          "Among the Stars set",
                          "Bundle — armor set, Polaris mount — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Ancient Power set",
                          "Bundle — armor set, Primeval mount — 1,700 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Ancients Ceremonial set",
                          "Bundle — armor set, Aeon mount — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Ash’adar",
                          "Ash\u0027adar, Harbinger of the Dawn — WoW promo package, 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Beast of Primstone package",
                          "Package — Hellcat mount — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Beckoning Thunder add-on",
                          "Add-on — The Storm Courser set incl. Fulgur’s Courser mount — $39.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Bioluminescence set",
                          "Bundle — armor set, Luciferin mount — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Bought with Blood set",
                          "Bundle — armor set, Conscience mount — 1,400 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Demon of the Angry Sky package",
                          "Package — Whitefire mount — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Elysian Beast",
                          "Pride of the Acolytes package — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Father\u0027s Judgment set",
                          "Bundle — armor set, Lux mount — $64.99 package (not Platinum)",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Fleshrot Overgrowth set",
                          "Bundle — armor set, Festering Palfry mount — 1,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Flowers for the Crown set",
                          "Bundle — armor set, Royal Companion mount — 1,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Flowers of the Dead set",
                          "Bundle — armor set, Calacas mount — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Hellcat",
                          "Beast of Primstone package — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Hiemal Offerings set",
                          "Bundle — armor set, Fimbulvetr mount — $49.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Invincible Aspect set",
                          "Bundle — armor set + Invincible Aspect mount — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Kehjistan Merchant set",
                          "Bundle — armor set, Kehjistan Sirocco mount — 1,400 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Liege\u0027s Conceit set",
                          "Bundle — armor set, Hubris mount — 1,700 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Penitent Dragoon set",
                          "Prestige bundle — armor set, Endurance mount, weapon transmogs — 1,600 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Pride of the Acolytes package",
                          "Package — Elysian Beast mount — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Red Mare of Midwinter set",
                          "Bundle — armor set, Patchwerk mount — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Shadow Kinesis bundle",
                          "Shadowmane mount — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Shadowmane",
                          "Shadow Kinesis bundle — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Automaton",
                          "The Hunted Automaton set — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Delights of Agony set",
                          "Bundle — armor set, Agony Incarnate mount — 7,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Duskwalker",
                          "The Dustwalker package — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Dustwalker package",
                          "Package — The Duskwalker mount — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Hunted Automaton set",
                          "Bundle — armor set, The Automaton mount — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Resplendent Palfrey set",
                          "Bundle — armor set, Moya mount — 1,600 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The White Wildcat package",
                          "Package — White Wildcat mount — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Three-Fold Nightmare set",
                          "Prestige bundle — armor set, Triune Charger mount — 1,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Transcendent Hunter",
                          "Wild Transcendence bundle — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Vitreous Scourge add-on",
                          "Add-on — Crystal and Bone set incl. Crystal-Clad mount — $64.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Weight of Gold set",
                          "Prestige bundle — armor set, Ingot mount — 1,600 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "White Wildcat",
                          "The White Wildcat package — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Whitefire",
                          "Demon of the Angry Sky package — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Wild Transcendence bundle",
                          "Bundle — Transcendent Hunter mount — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Xiansai Herald set",
                          "Bundle — armor set, Xiansai Stallion mount — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ]
                  ]
    },
    {
        "name":  "Mounts",
        "group":  "Shop",
        "tag":  "Mounts and mount barding from the premium shop",
        "items":  [
                      [
                          "Aeon Mount",
                          "Ancients Ceremonial set — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Agony Incarnate Mount",
                          "The Delights of Agony set — 7,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Calacas Mount",
                          "Flowers of the Dead set — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Conscience Mount",
                          "Bought with Blood set — 1,400 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Crystal-Clad Mount",
                          "Crystal and Bone set (Vitreous Scourge add-on) — $64.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Endurance Mount",
                          "Penitent Dragoon prestige set — 1,600 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Festering Palfry Mount",
                          "Fleshrot Overgrowth set — 1,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Fimbulvetr Mount",
                          "Hiemal Offerings set — $49.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Fulgur\u0027s Courser Mount",
                          "The Storm Courser set (Beckoning Thunder add-on) — $39.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Hubris Mount",
                          "Liege\u0027s Conceit set — 1,700 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Hunters of the Haunt, Spectral Sentinel",
                          "In-game shop — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Ingot Mount",
                          "Weight of Gold prestige set — 1,600 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Invincible Aspect Mount",
                          "Invincible Aspect set — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Kehjistan Sirocco Mount",
                          "Kehjistan Merchant set — 1,400 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Liath Icehowl",
                          "Standalone shop purchase — mount + weapon transmog + 800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Liath Icehowl Mount",
                          "Standalone shop purchase — includes a weapon transmog and 800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Luciferin Mount",
                          "Bioluminescence set — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Lux Mount",
                          "Father\u0027s Judgment set — $64.99 package",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Moya Mount",
                          "The Resplendent Palfrey set — 1,600 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Murrain",
                          "In-game shop (Platinum) — inventory rotates",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Patchwerk Mount",
                          "Red Mare of Midwinter set — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Polaris Mount",
                          "Among the Stars set — 2,000 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Primeval Mount",
                          "Ancient Power set — 1,700 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Royal Companion Mount",
                          "Flowers for the Crown set — 1,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Sha’lawai, the Nether Lion",
                          "In-game shop — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Tears of Nocturne",
                          "In-game shop (Platinum) — inventory rotates",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Triune Charger Mount",
                          "Three-Fold Nightmare prestige set — 1,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Winter Elemental",
                          "In-game shop (Platinum) — inventory rotates",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Xiansai Stallion Mount",
                          "Xiansai Herald set — 1,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ]
                  ]
    },
    {
        "name":  "Pets",
        "group":  "Shop",
        "tag":  "Pets from the premium shop",
        "items":  [
                      [
                          "Azul",
                          "In-game shop — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Death\u0027s Messenger Platinum Pack",
                          "Pack — Niccolo, Omen of Death pet — 19.00 EUR",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Lily, the Cat",
                          "In-game shop (Platinum)",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Niccolo, Omen of Death",
                          "Death\u0027s Messenger Platinum Pack",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Pale Berry",
                          "Prestige pet — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Quillgem Scamp",
                          "Prestige pet — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ]
                  ]
    },
    {
        "name":  "Promotions",
        "group":  "Shop",
        "tag":  "Pre-order, edition, collaboration and platform promotions",
        "items":  [
                      [
                          "Alkor the Snow Leopard",
                          "Vessel of Hatred pre-purchase — Standard edition (also included in Deluxe/Ultimate)",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Ash\u0027adar, Harbinger of the Dawn",
                          "WoW cross-promo package — Ash’adar mount — 2,800 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Berserk collaboration",
                          "Collab — The Schnoz pet — in-game shop",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Celestial Firmament",
                          "WoW cross-promo — Celestial Firmament mount — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Celestial Firmament",
                          "World of Warcraft cross-promotion — 2,500 Platinum",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Geralt Skin (Barbarian)",
                          "Pre-purchase Witcher 3: Songs of the Past",
                          "Witcher 3",
                          "https://d4guides.gg/en/season15"
                      ],
                      [
                          "Hellborn Carapace",
                          "Bonus loot with the Deluxe/Ultimate editions",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Hratli the Canine",
                          "Vessel of Hatred pre-purchase — Deluxe edition",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Light-Bearer Mount",
                          "Pre-order bonus for any edition of the base game",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Nahantu War-cat",
                          "Pre-order Deluxe or Ultimate edition of Vessel of Hatred",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "Natalya the Tiger",
                          "Vessel of Hatred pre-purchase — Ultimate edition",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Temptation Mount",
                          "Deluxe or Ultimate edition of the base game",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/mount-guide/"
                      ],
                      [
                          "The Schnoz",
                          "Berserk collaboration — in-game shop",
                          "Shop",
                          "https://www.icy-veins.com/d4/guides/pet-guide/"
                      ],
                      [
                          "Xbox Game Pass Cosmetics",
                          "57 items — link Game Pass to Battle.net",
                          "Xbox GP",
                          "https://www.diabloz.net/2026/09/diablo-4-game-pass-50-cosmetics.html"
                      ]
                  ]
    },
    {
        "name":  "Season 1",
        "group":  "Season",
        "tag":  "Season of the Malignant",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Awoken Warded Mustang",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Warded Mustang",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Awoken Coldiron Barding",
                                                    "Premium Battle Pass Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Coldiron Barding",
                                                    "Premium Battle Pass Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Trophy",
                                  "items":  [
                                                [
                                                    "Heartglow Lantern",
                                                    "Premium Battle Pass Tier 4",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 2",
        "group":  "Season",
        "tag":  "Season of Blood",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Awoken Famished Thoroughbred",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Famished Thoroughbred",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Salmagundi",
                                                    "Season Journey — Chapter 5 reward",
                                                    "Season Journey",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Awoken Marrow Plating",
                                                    "Premium Battle Pass Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Marrow Plating",
                                                    "Premium Battle Pass Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 3",
        "group":  "Season",
        "tag":  "Season of the Construct",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Awoken Clockwork Equid",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Clockwork Equid",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 4",
        "group":  "Season",
        "tag":  "Season of Loot Reborn",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Demigod Thoroughbred",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Purified Demigod Thoroughbred",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 5",
        "group":  "Season",
        "tag":  "Season of the Infernal Hordes",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Aetheric Steed",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Awoken Aetheric Steed",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 6",
        "group":  "Season",
        "tag":  "Season of Hatred Rising",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Viz-Jun Past Steed",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Viz-Jun Present Steed",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 7",
        "group":  "Season",
        "tag":  "Season of Witchcraft",
        "subcategories":  [
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Nightwinder",
                                                    "Premium Battle Pass — Tier 90",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ],
                                                [
                                                    "Wightscale",
                                                    "Premium Battle Pass — Tier 1",
                                                    "Deluxe BP",
                                                    "https://www.icy-veins.com/d4/guides/mount-guide/"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Dorian the Raven",
                                                    "Complete the Season 7 Season Journey — Chapter VII reward",
                                                    "Season Journey",
                                                    "https://www.icy-veins.com/d4/guides/pet-guide/"
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 8",
        "tag":  "Belial\u0027s Return",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Deceiver\u0027s Cruel Talons",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Prying Claws",
                                                    "Belial\u0027s Return Reliquary — free — all classes except Paladin and Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Three Tails",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s True Face",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Wicked Core",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Faulds",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Gauntlets",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Greaves",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Helm",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Livery",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Deceiver\u0027s Bastard Sword",
                                                    "Belial\u0027s Return Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Bow",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Greatsword",
                                                    "Belial\u0027s Return Reliquary — paid — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Pitchfork",
                                                    "Belial\u0027s Return Reliquary — paid — Druid, Barbarian, Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Scythe",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deceiver\u0027s Will",
                                                    "Belial\u0027s Return Reliquary — paid — Sorcerer, Necromancer",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Aegis",
                                                    "Belial\u0027s Return Reliquary — free — Necromancer, Paladin",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Cleaver",
                                                    "Belial\u0027s Return Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Glaive",
                                                    "Belial\u0027s Return Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Hammer",
                                                    "Belial\u0027s Return Reliquary — free — all classes except Rogue and Spiritborn",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Polaris",
                                                    "Belial\u0027s Return Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Recurve",
                                                    "Belial\u0027s Return Reliquary — free — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Celestian",
                                                    "Belial\u0027s Return Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hearth of Lies",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Mendax, Beast of the Deceiver",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Pennant of Lies",
                                                    "Slayer",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Pride of Perdition",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Scales of Mendax",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Bloodhawk Barding",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Barding",
                                                    "Belial\u0027s Return Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Anadea",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Iris",
                                                    "Champion",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Orinocta",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Deceiver\u0027s Way",
                                                    "Belial\u0027s Return Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Starcrossed Path",
                                                    "Belial\u0027s Return Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Deceiver\u0027s Final Form",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 9",
        "tag":  "Sins of the Horadrim",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Bonds of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Cage of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Claws of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — free — all classes except Paladin and Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Crest of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Fetters of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Coattails",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Duster",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Gloves",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Riding Boots",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Widebrim",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Axe of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Rogue and Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brand of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Fork of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — Druid, Barbarian, Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Greataxe of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Greatsword of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Bomb",
                                                    "Sins of the Horadrim Reliquary — free — Sorcerer, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Crossbow",
                                                    "Sins of the Horadrim Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Dualaxe",
                                                    "Sins of the Horadrim Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Mace",
                                                    "Sins of the Horadrim Reliquary — free — all classes except Rogue and Spiritborn",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Scyther",
                                                    "Sins of the Horadrim Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nightslayer\u0027s Stiletto",
                                                    "Sins of the Horadrim Reliquary — free — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Torch of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Bridle of Scars",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Eventine",
                                                    "Sins of the Horadrim Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Ferrukal, Thrall of Iron",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Ferrukal\u0027s Saddle",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Legacy of the Order",
                                                    "Slayer",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "The Iron Flame",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "The Scarred Mare",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "NightSlayer\u0027s Barding",
                                                    "Sins of the Horadrim Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Dante",
                                                    "Champion",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Little William",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Scapegoat",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Door of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Gates of the Iron Demon",
                                                    "Sins of the Horadrim Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Chains of the Iron Demon",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 10",
        "tag":  "Infernal Hordes",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Chaos Boots",
                                                    "Salvaged from dropped items — farm Bartuc in Infernal Hordes or seasonal caches",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chaos Gloves",
                                                    "Salvaged from dropped items — farm Bartuc in Infernal Hordes or seasonal caches",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chaos Helm",
                                                    "Salvaged from dropped items — farm Bartuc in Infernal Hordes or seasonal caches",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chaos Pants",
                                                    "Salvaged from dropped items — farm Bartuc in Infernal Hordes or seasonal caches",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Chaos Tunic",
                                                    "Salvaged from dropped items — farm Bartuc in Infernal Hordes or seasonal caches",
                                                    "World Drop",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman Bracers",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman Cuirass",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman Greaves",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman Helmet",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman Robes",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Breast",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Crest",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Forelegs",
                                                    "Infernal Chaos Reliquary — free — all classes except Paladin and Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Hind Legs",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Tailcoat",
                                                    "Infernal Chaos Reliquary — paid — all classes except Paladin and Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Dark Horseman\u0027s Bow",
                                                    "Infernal Chaos Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman\u0027s Crop",
                                                    "Infernal Chaos Reliquary — free — Sorcerer, Necromancer",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman\u0027s Dagger",
                                                    "Infernal Chaos Reliquary — free — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman\u0027s Malleus",
                                                    "Infernal Chaos Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman\u0027s Sabre",
                                                    "Infernal Chaos Reliquary — free — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Dark Horseman\u0027s Staff",
                                                    "Infernal Chaos Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Aegis",
                                                    "Infernal Chaos Reliquary — paid — Necromancer, Paladin",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Bolter",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Broadsword",
                                                    "Infernal Chaos Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Egg",
                                                    "Infernal Chaos Reliquary — paid — Sorcerer, Necromancer, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Lance",
                                                    "Infernal Chaos Reliquary — paid — Druid, Barbarian, Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Maul",
                                                    "Infernal Chaos Reliquary — paid — all classes except Rogue and Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Beast of the Red Griffin",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Body of Chaos",
                                                    "Slayer",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Feathermane",
                                                    "Infernal Chaos Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Gravehorn",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Gaze",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Cosmetic Horse Armor",
                                                    "Infernal Chaos Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Gravehorn\u0027s Barding",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin Barding",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Angiris the Brave",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ],
                                                [
                                                    "Lady Petal",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Pandora",
                                                    "Champion",
                                                    "Season Journey",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Dark Horseman\u0027s Door",
                                                    "Infernal Chaos Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Red Griffin\u0027s Gate",
                                                    "Infernal Chaos Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Wings of the Red Griffin",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 11",
        "tag":  "Divine Intervention",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Brimstone Crusader (Boots)",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Crusader (Gloves)",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Crusader (Helm)",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Crusader (Pants)",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Crusader (Tunic)",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Templar Boots",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Templar Chest",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Templar Gloves",
                                                    "Divine Intervention Reliquary — free — all classes except Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Templar Helm",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Templar Pants",
                                                    "Divine Intervention Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Brimstone Arbalest",
                                                    "Divine Intervention Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Bauble",
                                                    "Divine Intervention Reliquary — free — Sorcerer, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Bludgeon",
                                                    "Divine Intervention Reliquary — free — all classes except Rogue and Spiritborn",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Glaive",
                                                    "Divine Intervention Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Penalty",
                                                    "Divine Intervention Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Brimstone Penance",
                                                    "Divine Intervention Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Aegis",
                                                    "Divine Intervention Reliquary — paid — Necromancer, Paladin",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Cleaver",
                                                    "Divine Intervention Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Greatsword",
                                                    "Divine Intervention Reliquary — paid — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Javelin",
                                                    "Divine Intervention Reliquary — paid — Druid, Barbarian, Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Maul",
                                                    "Divine Intervention Reliquary — paid — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Celestine Staff",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Celestine Overseer",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Empyrean Lion",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Empyrean Warmare",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Fang and Bone",
                                                    "Rank IV",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Gildenvein",
                                                    "Divine Intervention Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Shield Crest of Exile",
                                                    "defeat all four lesser Evils in the Purified Essences portal",
                                                    "In-Game Reward",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Brimstone Crusader Barding",
                                                    "Divine Intervention Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Empyrean Barding",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Empyrean Lion\u0027s Armor",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Alefta",
                                                    "Rank V",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Ashentail",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nimbus",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Celestial Iris",
                                                    "Divine Intervention Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Eye of Celestine",
                                                    "Divine Intervention Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Wings of the Celestine Templar",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 12",
        "tag":  "Slaughter",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Blinding Sun Boots",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Grips",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Mantle",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Mitre",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Robes",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Cuirass",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Faulds",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Gauntlets",
                                                    "Season of Slaughter Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Greaves",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Helm",
                                                    "Season of Slaughter Reliquary — paid — all classes except Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Apostle\u0027s Morning Star",
                                                    "Season of Slaughter Reliquary — paid — all classes except Rogue and Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Ballistic Force Crossbow",
                                                    "Doom: The Dark Ages Reliquary",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Claymore",
                                                    "Season of Slaughter Reliquary — free — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Glaive",
                                                    "Season of Slaughter Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Mace",
                                                    "Season of Slaughter Reliquary — free — all classes except Rogue and Spiritborn",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Maul",
                                                    "Season of Slaughter Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Poniard",
                                                    "Season of Slaughter Reliquary — free — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blinding Sun Staff",
                                                    "Season of Slaughter Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Chainshot Staff",
                                                    "Doom: The Dark Ages Reliquary",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Cluckeye",
                                                    "Dropped by Chi\u0027Khan, The Fowl Beast — April Fool\u0027s event 2026",
                                                    "World Boss",
                                                    ""
                                                ],
                                                [
                                                    "Cluckonomicon",
                                                    "Dropped by Chi\u0027Khan, The Fowl Beast — April Fool\u0027s event 2026 — Sorcerer, Druid",
                                                    "World Boss",
                                                    ""
                                                ],
                                                [
                                                    "Coop De Grâce",
                                                    "Dropped by Chi\u0027Khan, The Fowl Beast — April Fool\u0027s event 2026 — Druid, Barbarian, Spiritborn",
                                                    "World Boss",
                                                    ""
                                                ],
                                                [
                                                    "Crucible Axe",
                                                    "drop from Lair Bosses — replaces the unlock on a random legendary, unique or mythic item — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Doom Chest",
                                                    ""
                                                ],
                                                [
                                                    "Crucible Blade",
                                                    "drop from Lair Bosses — replaces the unlock on a random legendary, unique or mythic item — all classes except Spiritborn",
                                                    "Doom Chest",
                                                    ""
                                                ],
                                                [
                                                    "Crucible Dagger",
                                                    "drop from Lair Bosses — replaces the unlock on a random legendary, unique or mythic item — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Doom Chest",
                                                    ""
                                                ],
                                                [
                                                    "Crucible Polearm",
                                                    "drop from Lair Bosses — replaces the unlock on a random legendary, unique or mythic item — Druid, Barbarian, Necromancer, Spiritborn",
                                                    "Doom Chest",
                                                    ""
                                                ],
                                                [
                                                    "Crucible Sword",
                                                    "drop from Lair Bosses — replaces the unlock on a random legendary, unique or mythic item — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Doom Chest",
                                                    ""
                                                ],
                                                [
                                                    "Dreadmace",
                                                    "Doom: The Dark Ages Reliquary — all classes except Rogue and Spiritborn",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Eggecutioner",
                                                    "Dropped by Chi\u0027Khan, The Fowl Beast — April Fool\u0027s event 2026",
                                                    "World Boss",
                                                    ""
                                                ],
                                                [
                                                    "Eggis",
                                                    "Dropped by Chi\u0027Khan, The Fowl Beast — April Fool\u0027s event 2026 — Necromancer, Paladin",
                                                    "World Boss",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Aegis",
                                                    "Season of Slaughter Reliquary — paid — Necromancer, Paladin",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Lance",
                                                    "Season of Slaughter Reliquary — paid — Druid, Barbarian, Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Longbow",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Staff",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Sword",
                                                    "Season of Slaughter Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Impaler",
                                                    "Doom: The Dark Ages Reliquary",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Pulverizer",
                                                    "Doom: The Dark Ages Reliquary — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Shield Saw",
                                                    "Doom: The Dark Ages Reliquary — Necromancer, Paladin",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Banner of Slaughter",
                                                    "Rank IV",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Beast of Twilight",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Banner",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Raiment",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Helio the Gilded",
                                                    "Season of Slaughter Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Mare of Twilight",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Blinding Sun Barding",
                                                    "Season of Slaughter Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Guiding Stars Barding",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Alkaid",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ],
                                                [
                                                    "Bloody Billy",
                                                    "Rank V",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Nanuq",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Gates of the Guiding Stars",
                                                    "Season of Slaughter Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "The Forsaken Gates",
                                                    "Doom: The Dark Ages Reliquary",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Way of the Guiding Stars",
                                                    "Season of Slaughter Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Head of the Cyberdemon",
                                                    "Doom: The Dark Ages Reliquary",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Wings of the Firmament",
                                                    "Deluxe Battle Pass reliquary bundle — all classes except Warlock",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Headstones",
                                  "items":  [
                                                [
                                                    "Font of the Slayer",
                                                    "Doom: The Dark Ages Reliquary",
                                                    "Paid Doom Reliquary",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 13",
        "tag":  "Reckoning",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Firstborn Glory Breastplate",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Glory Crest-Helm",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Glory Faulds",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Glory Gauntlets",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Glory Greaves",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Hands",
                                                    "Season of Reckoning Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Mantle",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Robes",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Steps",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Visage",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Ashbringer",
                                                    "Relics of Azeroth Reliquary — paid — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Atiesh, Greatstaff of the Guardian",
                                                    "Relics of Azeroth Reliquary — paid",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Blood Raven\u0027s Talon",
                                                    "Anniversary Arms theme — all classes except Spiritborn",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "Corrupted Ashbringer",
                                                    "Relics of Azeroth Reliquary — paid — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Arbalest",
                                                    "Season of Reckoning Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Broadspear",
                                                    "Season of Reckoning Reliquary — free — Druid, Barbarian, Spiritborn",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Greatsword",
                                                    "Season of Reckoning Reliquary — free — Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Tower Shield",
                                                    "Season of Reckoning Reliquary — free — Necromancer, Paladin",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Firstborn Xiphos",
                                                    "Season of Reckoning Reliquary — free — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Fistborn Great Axe",
                                                    "Season of Reckoning Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Flamefinger\u0027s Claws",
                                                    "Anniversary Arms theme",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Axe",
                                                    "Season of Reckoning Reliquary — paid — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Crystal",
                                                    "Season of Reckoning Reliquary — paid — Sorcerer, Necromancer, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Dualstaff",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Greatstaff",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Morningstar",
                                                    "Season of Reckoning Reliquary — paid — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hallowed Ancient Sword",
                                                    "Season of Reckoning Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "King Kanai\u0027s Last Stand",
                                                    "Anniversary Arms theme — Necromancer, Paladin",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "Nangari Wounder",
                                                    "Anniversary Arms theme — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "OverLord\u0027s Odium",
                                                    "Anniversary Arms theme — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "Sulfuras, Hand of Ragnaros",
                                                    "Relics of Azeroth Reliquary — paid — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "The Hungering Cold",
                                                    "Relics of Azeroth Reliquary — free — all classes except Spiritborn",
                                                    "Free Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Thunderfury, Blessed Blade of the Windseeker",
                                                    "Relics of Azeroth Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Zin\u0027rokh, Destroyer of Worlds",
                                                    "Relics of Azeroth Reliquary — free — Druid, Barbarian, Spiritborn",
                                                    "Free Relics of Azeroth",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Alliance Flag",
                                                    "Relics of Azeroth Reliquary — free",
                                                    "Free Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Axiom",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Hatefull Heraldry",
                                                    "Rank IV",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Head of Onyxia",
                                                    "Relics of Azeroth Reliquary — paid",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Horde Flag",
                                                    "Relics of Azeroth Reliquary — free",
                                                    "Free Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Kynigos",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Progenitor\u0027s Crystal",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Skovosi",
                                                    "Season of Reckoning Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Armor of Kynigos",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Barding of Axiom",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Barding of Skovosi",
                                                    "Season of Reckoning Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Hakkar the Soulflayer",
                                                    "Relics of Azeroth Reliquary — paid",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "LoathRoot",
                                                    "Rank V",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Luster",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ],
                                                [
                                                    "Tickles",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Arch of Antiquity",
                                                    "Season of Reckoning Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Path of Antiquity",
                                                    "Season of Reckoning Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "The Dark Protat",
                                                    "Relics of Azeroth Reliquary — paid",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Eye of C\u0027Thun",
                                                    "Relics of Azeroth Reliquary — paid",
                                                    "Paid Relics of Azeroth",
                                                    ""
                                                ],
                                                [
                                                    "Progenitor\u0027s Grace",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Headstones",
                                  "items":  [
                                                [
                                                    "Spirit Healer",
                                                    "Relics of Azeroth Reliquary — free",
                                                    "Free Relics of Azeroth",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Emblems",
                                  "items":  [
                                                [
                                                    "Crest of the Alliance",
                                                    "Heroes of Azeroth theme",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "Symbol of the Horde",
                                                    "Heroes of Azeroth theme",
                                                    "Shop",
                                                    ""
                                                ],
                                                [
                                                    "The Mark of Azeroth",
                                                    "Relics of Azeroth Reliquary — free",
                                                    "Free Relics of Azeroth",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 14",
        "tag":  "Death Awakening",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Winged Redeemer Chest",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Winged Redeemer Helm",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Tyrant\u0027s Crown",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Tyrant\u0027s Grasp",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Tyrant\u0027s Majesty",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Tyrant\u0027s Shroud",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Tyrant\u0027s Steps",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Winged Redeemer\u0027s Robes",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Winged Redeemer\u0027s Talons",
                                                    "Death Awakening Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Winged Redeemer\u0027s Treads",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Arbalest of the Redeemer",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Axe of the Redeemer",
                                                    "Death Awakening Reliquary — paid — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Blade of the Deathless",
                                                    "Death Awakening Reliquary — free — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Crown Jewel",
                                                    "Death Awakening Reliquary — free — Sorcerer, Necromancer, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Deathless Tyrant\u0027s Flail",
                                                    "Death Awakening Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Maul of the Deathless",
                                                    "Death Awakening Reliquary — free — Druid, Barbarian, Necromancer, Paladin, Warlock",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Morningstar of the Deathless",
                                                    "Death Awakening Reliquary — free — all classes except Rogue and Spiritborn",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Scrap Shooter",
                                                    "Overwatch Reliquary",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Scythe of the Redeemer",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Shiled of the Redeemer",
                                                    "Death Awakening Reliquary — paid — Necromancer, Paladin",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Spear of the Redeemer",
                                                    "Death Awakening Reliquary — paid — Druid, Barbarian, Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Sword of the Redeemer",
                                                    "Death Awakening Reliquary — paid — all classes except Spiritborn",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Wakizashi",
                                                    "Overwatch Reliquary — Sorcerer, Druid, Rogue, Necromancer, Warlock",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Wand of the Deathless",
                                                    "Death Awakening Reliquary — free — Sorcerer, Necromancer",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Wraith\u0027s Orbs",
                                                    "Overwatch Reliquary — Sorcerer, Necromancer, Warlock",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Gloamstrider",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Grimscale",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Healing Ofuda",
                                                    "Overwatch Reliquary",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Nangaria",
                                                    "Death Awakening Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Remains of the Reaper",
                                                    "Rank IV",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Torch of the Redeemer",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Visage of Seraziel",
                                                    "Drops from the seasonal boss Corrupted Reaper during the Season 14 quest",
                                                    "Boss Drop",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Barding of the Deathless",
                                                    "Death Awakening Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Gloamstrider\u0027s Barding",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Grimscale Battle Armor",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Fox Spirit",
                                                    "Overwatch Reliquary",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Geistwing",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Greystone",
                                                    "Rank VI",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Netherean",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Eye of Redemption",
                                                    "Death Awakening Reliquary — paid",
                                                    "Paid Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Eye of Tyranny",
                                                    "Death Awakening Reliquary — free",
                                                    "Free Reliquary",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Wings of the Redeemer",
                                                    "Deluxe Battle Pass reliquary bundle",
                                                    "Deluxe BP",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Emblems",
                                  "items":  [
                                                [
                                                    "Chunky Buddy",
                                                    "Rank V",
                                                    "Season Journey",
                                                    ""
                                                ],
                                                [
                                                    "Crest of a New Dawn",
                                                    "Overwatch Reliquary",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "Emphemeral Ally",
                                                    "Overwatch Reliquary",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ],
                                                [
                                                    "It Comes for us All",
                                                    "Rank II",
                                                    "Season Journey",
                                                    ""
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Dyes",
                                  "items":  [
                                                [
                                                    "Amber Exemplar",
                                                    "Overwatch Reliquary",
                                                    "Free Overwatch Reliquary",
                                                    ""
                                                ]
                                            ]
                              }
                          ]
    },
    {
        "name":  "Season 15",
        "tag":  "Hell\u0027s Legacy",
        "group":  "Season",
        "subcategories":  [
                              {
                                  "name":  "Armor",
                                  "items":  [
                                                [
                                                    "Archangel of Justice Armor Set",
                                                    "Deluxe — instant unlock for all 8 classes",
                                                    "Deluxe BP",
                                                    "https://www.theclick.gg/diablo-4-season-15-battle-pass/"
                                                ],
                                                [
                                                    "Brisket of the Bovine",
                                                    "Chest — drops from Moophisto, the Divine Bovine",
                                                    "Moophisto",
                                                    "https://timesaver.gg/blog/diablo-4-moophisto-season-15"
                                                ],
                                                [
                                                    "Demon Hunter Armor Set",
                                                    "Armor Reliquary — Spiritborn tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Foreshanks of the Bovine",
                                                    "Gloves — pet the cow behind the Cathedral in Old Tristram (added in patch 3.2.3)",
                                                    "Secret",
                                                    "https://www.icy-veins.com/d4/news/the-foreshanks-of-the-bovine-have-been-discovered-in-diablo-4-season-15/"
                                                ],
                                                [
                                                    "Godly Plate of the Whale",
                                                    "Chest armor transmog — drops from Mefishto (fishing boss)",
                                                    "Mefishto",
                                                    "https://www.icy-veins.com/d4/news/fish-up-mefishto-and-get-the-godly-plate-of-the-whale-in-diablo-4-season-15/"
                                                ],
                                                [
                                                    "Harrogath Armor Set",
                                                    "Armor Reliquary — Barbarian tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Head of the Bovine",
                                                    "Helm — Complete Nut in Tristram Outskirts Waking Nightmare",
                                                    "Secret",
                                                    "https://www.icy-veins.com/d4/news/every-bovine-cosmetic-discovered-in-diablo-4-season-15/"
                                                ],
                                                [
                                                    "Hooves of the Bovine",
                                                    "Boots — fished from Cow Island",
                                                    "Fishing",
                                                    "https://mobalytics.gg/diablo-4/guides/how-to-get-secret-cow-armor-diablo-4"
                                                ],
                                                [
                                                    "Isendra Armor Set",
                                                    "Armor Reliquary — Sorceress tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Ivgorod Armor Set",
                                                    "Armor Reliquary — Rogue tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Leoric\u0027s Crown",
                                                    "Helm — Legacy Unique; salvage for the transmog appearance (unlock fixed in patch 3.2.1) — general Unique pool, can be gambled",
                                                    "Unique",
                                                    "https://urgametips.com/diablo-4/leorics-crown/"
                                                ],
                                                [
                                                    "Nemesis Bracers",
                                                    "Gloves — Legacy Unique gloves; salvage for the transmog appearance — general Unique pool, can be gambled",
                                                    "Unique",
                                                    "https://urgametips.com/diablo-4/nemesis-bracers/"
                                                ],
                                                [
                                                    "Sirloin of the Bovine",
                                                    "Pants — dropped by the Cow King in Secret Cow Level",
                                                    "Cow King",
                                                    "https://mobalytics.gg/diablo-4/guides/how-to-get-secret-cow-armor-diablo-4"
                                                ],
                                                [
                                                    "Squirt\u0027s Blouse",
                                                    "Chest — Legacy Unique chest armor; salvage for the transmog appearance — general Unique pool, can be gambled",
                                                    "Unique",
                                                    "https://urgametips.com/diablo-4/squirts-blouse/"
                                                ],
                                                [
                                                    "The Dúlra Armor Set",
                                                    "Armor Reliquary — Druid tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Warpaint of Harrogath",
                                                    "Body marking — Armor Reliquary bonus",
                                                    "Paid Armor Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Witch Doctor Armor Set",
                                                    "Armor Reliquary — tribute set",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Xul Armor Set",
                                                    "Armor Reliquary — Necromancer tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ],
                                                [
                                                    "Zakarum Armor Set",
                                                    "Armor Reliquary — Paladin tribute",
                                                    "Paid Armor Reliquary",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-battle-pass-worth-it"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Weapons",
                                  "items":  [
                                                [
                                                    "Crusader Shield of Zakarum",
                                                    "Weapons Reliquary — claimable without unlocking",
                                                    "Paid Weapons Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Deforestation",
                                                    "Two-handed axe — watch 2 hours of D4 streams",
                                                    "Twitch Drop",
                                                    "https://d4guides.gg/en/season15"
                                                ],
                                                [
                                                    "Demon Hunter\u0027s Crossbow",
                                                    "Weapons Reliquary — claimable without unlocking",
                                                    "Paid Weapons Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Monarch",
                                                    "Shield — Runeword Unique crafted in the Horadric Cube from a common shield base + runes; salvage to unlock the transmog",
                                                    "Unique",
                                                    "https://d4guides.gg/en/guides/crafting-items/runewords-in-diablo-4-all-recipes-rune-ladder"
                                                ],
                                                [
                                                    "Weapon Skin (Axe)",
                                                    "3 weapon appearances included",
                                                    "Free Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Weapon Skin (Mace)",
                                                    "3 weapon appearances included",
                                                    "Free Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Weapon Skin (Sword)",
                                                    "3 weapon appearances included",
                                                    "Free Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Weapon Skin Set (10 more)",
                                                    "Weapons Reliquary — full set of 12 weapon cosmetics",
                                                    "Paid Weapons Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mounts",
                                  "items":  [
                                                [
                                                    "Beasts Reliquary Mount",
                                                    "Premium Reliquary reward",
                                                    "Paid Beasts Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Eidolon Mount",
                                                    "reward",
                                                    "Free Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Armor",
                                  "items":  [
                                                [
                                                    "Beasts Reliquary Mount Armor",
                                                    "Premium Reliquary reward",
                                                    "Paid Beasts Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Eidolon\u0027s Barding",
                                                    "The Free Reliquary",
                                                    "Free Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Mount Trophy",
                                  "items":  [
                                                [
                                                    "Banner of the Three",
                                                    "Season Rank reward",
                                                    "Season Rank",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-season-journey-guide"
                                                ],
                                                [
                                                    "Figment of Imoogination",
                                                    "Guaranteed first Moophisto kill",
                                                    "Moophisto",
                                                    "https://www.icy-veins.com/d4/news/every-bovine-cosmetic-discovered-in-diablo-4-season-15/"
                                                ],
                                                [
                                                    "Moomento Mori",
                                                    "Community challenge (300k kills)",
                                                    "Community",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-cow-secrets-and-where-to-find-them"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Pets",
                                  "items":  [
                                                [
                                                    "Beasts Reliquary Pet",
                                                    "Premium Reliquary reward",
                                                    "Paid Beasts Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Dark Wanderbear",
                                                    "Complete Season Rank objectives",
                                                    "Season Rank",
                                                    "https://timesaver.gg/blog/diablo-4-season-15-season-journey-guide"
                                                ],
                                                [
                                                    "Lordling of Terror",
                                                    "Deluxe-exclusive pet",
                                                    "Deluxe BP",
                                                    "https://www.theclick.gg/diablo-4-season-15-battle-pass/"
                                                ],
                                                [
                                                    "Marquis Milky",
                                                    "Rare drop from Moophisto",
                                                    "Moophisto",
                                                    "https://vulkk.com/2026/09/17/secrets-of-diablo-4-bovine-sanctum-and-moophisto-the-divine-bovine/"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Town Portals",
                                  "items":  [
                                                [
                                                    "Ancient Town Portal",
                                                    "reward",
                                                    "Free Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Beasts Reliquary Town Portal",
                                                    "Premium Reliquary reward",
                                                    "Paid Beasts Reliquary",
                                                    "https://d4guides.gg/en/news/diablo-4-season-15-all-109-new-cosmetics-explained"
                                                ],
                                                [
                                                    "Cuddly Conduit",
                                                    "Town portal — rainbow skin from The Perfect Cupcake, a rare drop from Neigh\u0027relle in Whimsyshire (patch 3.2.3)",
                                                    "Secret",
                                                    "https://www.icy-veins.com/d4/news/unlock-a-town-portal-cosmetic-skin-from-whimsyshire-in-diablo-4-season-15/"
                                                ],
                                                [
                                                    "Howling Mouth of Madness",
                                                    "Town portal — Echoing Hatred shrine sequence (S13)",
                                                    "Echo Shrine",
                                                    "https://d4.auscraft.games/s15/s15-secrets.html"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Back",
                                  "items":  [
                                                [
                                                    "Standard of Heroes",
                                                    "Quest item reward from Echo of Tristram",
                                                    "Echo Tristram",
                                                    "https://mobalytics.gg/diablo-4/guides/diablo-4-hellfire-torch-guide"
                                                ],
                                                [
                                                    "Wings of Justice",
                                                    "Deluxe-exclusive back trophy",
                                                    "Deluxe BP",
                                                    "https://www.theclick.gg/diablo-4-season-15-battle-pass/"
                                                ]
                                            ]
                              },
                              {
                                  "name":  "Emblems",
                                  "items":  [
                                                [
                                                    "Roar of the Dark Wanderbear",
                                                    "Emblem — capstone reward",
                                                    "Season Rank",
                                                    "https://progametalk.com/diablo-4/season-15-season-rank-challenges-rewards/"
                                                ],
                                                [
                                                    "Terrors of the Past",
                                                    "Emblem — capstone reward",
                                                    "Season Rank",
                                                    "https://progametalk.com/diablo-4/season-15-season-rank-challenges-rewards/"
                                                ]
                                            ]
                              }
                          ]
    }
];
