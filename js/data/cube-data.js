// Horadric Cube reference data — recipes and the Tuning Prism affix chart (Season 15, Lord of Hatred).
// Sources: Game8 — Tuning Prisms guide (game8.co/games/Diablo-4/archives/599262) and
// Horadric Cube Recipes (archives/571320), cross-checked with D4Guides, Maxroll and Icy Veins.
// Structure: { intro, prisms: [{ name, rarity, category, desc, affixes: [...] }],
//              sections: [{ name, note?, items: [[name, description, tag?], ...] }] }
window.D4TK_DATA = window.D4TK_DATA || {};
window.D4TK_DATA.cube = {
  "prisms": [
    {
      "name": "Aggressive Tuning Prism",
      "rarity": "Magic",
      "category": "Offensive",
      "desc": "Everything that directly or indirectly increases your damage.",
      "affixes": [
        "Weapon Damage",
        "Damage",
        "Critical Strike Chance",
        "Critical Strike Damage",
        "Attack Speed",
        "Damage Over Time"
      ]
    },
    {
      "name": "Protector's Tuning Prism",
      "rarity": "Magic",
      "category": "Defensive",
      "desc": "Life, Armor, Resistances, Damage Reduction.",
      "affixes": [
        "Maximum Life",
        "Life Regeneration",
        "Armor",
        "Resistance to All Elements",
        "Damage Reduction",
        "Fortify Generation",
        "Barrier Generation",
        "Impairment Reduction"
      ]
    },
    {
      "name": "Chromatic Tuning Prism",
      "rarity": "Rare",
      "category": "Individual resistances",
      "desc": "Pair with a Royal gem to pick the element.",
      "affixes": [
        "Fire Resistance (Royal Ruby)",
        "Cold Resistance (Royal Sapphire)",
        "Lightning Resistance (Royal Topaz)",
        "Poison Resistance (Royal Emerald)",
        "Shadow Resistance (Royal Amethyst)",
        "Physical Resistance (Royal Skull)"
      ]
    },
    {
      "name": "Resourceful Tuning Prism",
      "rarity": "Magic",
      "category": "Resource",
      "desc": "Resource and cost affixes.",
      "affixes": [
        "Maximum Resource",
        "Resource Generation",
        "Resource Cost Reduction",
        "Resource on Kill",
        "Lucky Hit: Restore Primary Resource",
        "Resource Regeneration"
      ]
    },
    {
      "name": "Pragmatic Tuning Prism",
      "rarity": "Magic",
      "category": "Utility & Mobility",
      "desc": "Movement, evade, cooldowns, lucky hit.",
      "affixes": [
        "Movement Speed",
        "Evade Cooldown Reduction",
        "Cooldown Reduction",
        "Lucky Hit Chance",
        "Potion Capacity"
      ]
    },
    {
      "name": "Adept's Tuning Prism",
      "rarity": "Rare",
      "category": "Skill ranks & main attributes",
      "desc": "Skill ranks (hundreds of skill-specific affixes, per class) and core stats.",
      "affixes": [
        "Ranks to Skills",
        "Strength",
        "Dexterity",
        "Intelligence",
        "Willpower"
      ]
    },
    {
      "name": "Entropic Tuning Prism",
      "rarity": "Legendary",
      "category": "Transfigure Item modifier",
      "desc": "Removes the chance of rolling the worst possible affixes — but also eliminates the most rewarding ones. Makes Transfiguration safer at the cost of top-end outcomes.",
      "affixes": []
    },
    {
      "name": "Kullean Tuning Prism",
      "rarity": "Unique",
      "category": "Transfigure Item modifier (Amulets only)",
      "desc": "Imprints a random Utility Aspect onto the amulet. The amulet stays modifiable — reroll the added aspect as many times as you want.",
      "affixes": []
    }
  ],
  "sections": [
    {
      "name": "Recipe categories",
      "note": "The main Horadric Cube recipe groups",
      "items": [
        [
          "Gear Modification",
          "Add Affix, Remove Affix, Reroll Affix (Chaotic / Focused), and reroll affix values on equipment and Talismans — Tuning Prisms narrow the affix category so the result is deterministic",
          "This is where the six category prisms are used"
        ],
        [
          "Transfigure Item",
          "Reroll an item into a new item with Transfiguration affixes — ancestral bases guarantee ancestral quality and can roll Greater Affixes",
          "Entropic and Kullean Tuning Prisms modify the possible outcomes"
        ],
        [
          "Item Transmutation",
          "Upgrade rarity or tier, and convert items into new ones of the same type (e.g. a Unique into a new item). Amalgamation: 5 of the same Boss Trophy → a random Unique from that boss",
          "Boss Trophies are tied to Boss Hoard and boss-related transmutations"
        ],
        [
          "Charms & Talismans",
          "Craft and reroll Charms and Talismans — uses Infused Horadric Resin",
          "Reroll Set Charm can roll Greater Affixes on set Charms"
        ],
        [
          "Materials",
          "Primordial Dust (main crafting material), Infused Horadric Resin, Resplendent Sparks, Boss Trophies",
          "Wallet materials are deducted per craft; items and Tuning Prisms go into the grid"
        ]
      ]
    }
  ]
};
