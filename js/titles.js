// Titles tracker — Game / Feats / Season tabs. Layout follows the Fishing and
// Achievements pages: a top-level section with a tracker head (group checkbox,
// mini progress bar, count), then collapsible category subsections within.
(async function () {
  'use strict';

  // Escapes a string for use inside a double-quoted HTML attribute.
  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  var STORE_KEY = 'd4tk-titles';
  D4TK.renameStoreKey('d4-titles-ledger-v1', STORE_KEY);

  // One-time migration: old title ids -> new ids after the dedup and
  // alphabetical-sort passes (covers both id generations). migrateStoreIds
  // only moves an entry when the old id exists and the new one is not
  // already collected, so existing progress is never overwritten.
  var TITLES_ID_MIGRATION = {
  "season-15-t-2": "season-15-t-2",
  "season-15-t-3": "season-15-t-5",
  "season-15-t-4": "season-15-t-9",
  "season-15-t-5": "season-15-t-1",
  "season-15-t-6": "season-15-t-8",
  "season-15-t-7": "season-15-t-3",
  "season-15-t-9": "season-15-t-10",
  "season-15-t-10": "season-15-t-4",
  "season-15-t-11": "season-15-t-6",
  "achievements-feats-of-strength-t-20": "achievements-feats-of-strength-t-64",
  "achievements-feats-of-strength-t-21": "achievements-feats-of-strength-t-67",
  "achievements-feats-of-strength-t-22": "achievements-feats-of-strength-t-68",
  "achievements-feats-of-strength-t-23": "achievements-feats-of-strength-t-70",
  "achievements-feats-of-strength-t-24": "achievements-feats-of-strength-t-73",
  "achievements-feats-of-strength-t-25": "achievements-feats-of-strength-t-21",
  "achievements-feats-of-strength-t-26": "achievements-feats-of-strength-t-30",
  "achievements-feats-of-strength-t-27": "achievements-feats-of-strength-t-5",
  "achievements-feats-of-strength-t-28": "achievements-feats-of-strength-t-14",
  "achievements-feats-of-strength-t-29": "achievements-feats-of-strength-t-13",
  "achievements-feats-of-strength-t-30": "achievements-feats-of-strength-t-56",
  "achievements-feats-of-strength-t-31": "achievements-feats-of-strength-t-50",
  "achievements-feats-of-strength-t-32": "achievements-feats-of-strength-t-47",
  "achievements-feats-of-strength-t-33": "achievements-feats-of-strength-t-26",
  "achievements-feats-of-strength-t-34": "achievements-feats-of-strength-t-75",
  "achievements-feats-of-strength-t-35": "achievements-feats-of-strength-t-0",
  "achievements-feats-of-strength-t-36": "achievements-feats-of-strength-t-39",
  "achievements-feats-of-strength-t-37": "achievements-feats-of-strength-t-8",
  "achievements-feats-of-strength-t-38": "achievements-feats-of-strength-t-17",
  "achievements-feats-of-strength-t-39": "achievements-feats-of-strength-t-9",
  "achievements-feats-of-strength-t-40": "achievements-feats-of-strength-t-20",
  "achievements-feats-of-strength-t-41": "achievements-feats-of-strength-t-59",
  "achievements-feats-of-strength-t-42": "achievements-feats-of-strength-t-27",
  "achievements-feats-of-strength-t-43": "achievements-feats-of-strength-t-36",
  "achievements-feats-of-strength-t-44": "achievements-feats-of-strength-t-18",
  "achievements-feats-of-strength-t-45": "achievements-feats-of-strength-t-55",
  "achievements-feats-of-strength-t-46": "achievements-feats-of-strength-t-34",
  "achievements-feats-of-strength-t-47": "achievements-feats-of-strength-t-40",
  "achievements-feats-of-strength-t-48": "achievements-feats-of-strength-t-31",
  "achievements-feats-of-strength-t-49": "achievements-feats-of-strength-t-38",
  "achievements-feats-of-strength-t-50": "achievements-feats-of-strength-t-19",
  "achievements-feats-of-strength-t-51": "achievements-feats-of-strength-t-1",
  "achievements-feats-of-strength-t-52": "achievements-feats-of-strength-t-37",
  "achievements-feats-of-strength-t-53": "achievements-feats-of-strength-t-45",
  "achievements-feats-of-strength-t-54": "achievements-feats-of-strength-t-74",
  "achievements-feats-of-strength-t-55": "achievements-feats-of-strength-t-28",
  "achievements-feats-of-strength-t-56": "achievements-feats-of-strength-t-7",
  "achievements-feats-of-strength-t-57": "achievements-feats-of-strength-t-32",
  "achievements-feats-of-strength-t-58": "achievements-feats-of-strength-t-52",
  "achievements-feats-of-strength-t-59": "achievements-feats-of-strength-t-4",
  "achievements-feats-of-strength-t-60": "achievements-feats-of-strength-t-71",
  "achievements-feats-of-strength-t-61": "achievements-feats-of-strength-t-65",
  "achievements-feats-of-strength-t-62": "achievements-feats-of-strength-t-66",
  "achievements-feats-of-strength-t-63": "achievements-feats-of-strength-t-43",
  "achievements-feats-of-strength-t-64": "achievements-feats-of-strength-t-72",
  "achievements-feats-of-strength-t-65": "achievements-feats-of-strength-t-46",
  "achievements-feats-of-strength-t-66": "achievements-feats-of-strength-t-61",
  "achievements-feats-of-strength-t-67": "achievements-feats-of-strength-t-33",
  "achievements-feats-of-strength-t-68": "achievements-feats-of-strength-t-35",
  "achievements-feats-of-strength-t-69": "achievements-feats-of-strength-t-11",
  "achievements-feats-of-strength-t-70": "achievements-feats-of-strength-t-6",
  "achievements-feats-of-strength-t-71": "achievements-feats-of-strength-t-16",
  "achievements-feats-of-strength-t-72": "achievements-feats-of-strength-t-22",
  "achievements-feats-of-strength-t-73": "achievements-feats-of-strength-t-51",
  "achievements-feats-of-strength-t-74": "achievements-feats-of-strength-t-23",
  "achievements-feats-of-strength-t-75": "achievements-feats-of-strength-t-62",
  "achievements-feats-of-strength-t-76": "achievements-feats-of-strength-t-69",
  "barbarian-titles-t-2": "barbarian-titles-t-3",
  "barbarian-titles-t-3": "barbarian-titles-t-5",
  "barbarian-titles-t-4": "barbarian-titles-t-9",
  "barbarian-titles-t-5": "barbarian-titles-t-8",
  "barbarian-titles-t-6": "barbarian-titles-t-11",
  "barbarian-titles-t-8": "barbarian-titles-t-6",
  "barbarian-titles-t-9": "barbarian-titles-t-2",
  "barbarian-titles-t-10": "barbarian-titles-t-4",
  "barbarian-titles-t-11": "barbarian-titles-t-10",
  "sorcerer-titles-t-0": "sorcerer-titles-t-1",
  "sorcerer-titles-t-1": "sorcerer-titles-t-2",
  "sorcerer-titles-t-2": "sorcerer-titles-t-4",
  "sorcerer-titles-t-3": "sorcerer-titles-t-8",
  "sorcerer-titles-t-4": "sorcerer-titles-t-10",
  "sorcerer-titles-t-5": "sorcerer-titles-t-12",
  "sorcerer-titles-t-6": "sorcerer-titles-t-13",
  "sorcerer-titles-t-7": "sorcerer-titles-t-0",
  "sorcerer-titles-t-8": "sorcerer-titles-t-11",
  "sorcerer-titles-t-9": "sorcerer-titles-t-7",
  "sorcerer-titles-t-10": "sorcerer-titles-t-3",
  "sorcerer-titles-t-11": "sorcerer-titles-t-5",
  "sorcerer-titles-t-12": "sorcerer-titles-t-9",
  "sorcerer-titles-t-13": "sorcerer-titles-t-14",
  "sorcerer-titles-t-14": "sorcerer-titles-t-6",
  "druid-titles-t-0": "druid-titles-t-2",
  "druid-titles-t-1": "druid-titles-t-4",
  "druid-titles-t-2": "druid-titles-t-11",
  "druid-titles-t-3": "druid-titles-t-12",
  "druid-titles-t-4": "druid-titles-t-8",
  "druid-titles-t-5": "druid-titles-t-0",
  "druid-titles-t-6": "druid-titles-t-10",
  "druid-titles-t-7": "druid-titles-t-13",
  "druid-titles-t-8": "druid-titles-t-7",
  "druid-titles-t-9": "druid-titles-t-6",
  "druid-titles-t-10": "druid-titles-t-5",
  "druid-titles-t-11": "druid-titles-t-1",
  "druid-titles-t-12": "druid-titles-t-3",
  "druid-titles-t-13": "druid-titles-t-9",
  "necromancer-titles-t-0": "necromancer-titles-t-4",
  "necromancer-titles-t-1": "necromancer-titles-t-5",
  "necromancer-titles-t-2": "necromancer-titles-t-7",
  "necromancer-titles-t-3": "necromancer-titles-t-8",
  "necromancer-titles-t-4": "necromancer-titles-t-9",
  "necromancer-titles-t-5": "necromancer-titles-t-11",
  "necromancer-titles-t-6": "necromancer-titles-t-12",
  "necromancer-titles-t-7": "necromancer-titles-t-1",
  "necromancer-titles-t-8": "necromancer-titles-t-0",
  "necromancer-titles-t-9": "necromancer-titles-t-14",
  "necromancer-titles-t-10": "necromancer-titles-t-2",
  "necromancer-titles-t-11": "necromancer-titles-t-13",
  "necromancer-titles-t-12": "necromancer-titles-t-16",
  "necromancer-titles-t-13": "necromancer-titles-t-10",
  "necromancer-titles-t-14": "necromancer-titles-t-6",
  "necromancer-titles-t-16": "necromancer-titles-t-3",
  "rogue-titles-t-0": "rogue-titles-t-3",
  "rogue-titles-t-1": "rogue-titles-t-4",
  "rogue-titles-t-2": "rogue-titles-t-5",
  "rogue-titles-t-3": "rogue-titles-t-12",
  "rogue-titles-t-4": "rogue-titles-t-13",
  "rogue-titles-t-5": "rogue-titles-t-14",
  "rogue-titles-t-6": "rogue-titles-t-10",
  "rogue-titles-t-7": "rogue-titles-t-0",
  "rogue-titles-t-8": "rogue-titles-t-11",
  "rogue-titles-t-9": "rogue-titles-t-2",
  "rogue-titles-t-10": "rogue-titles-t-8",
  "rogue-titles-t-11": "rogue-titles-t-9",
  "rogue-titles-t-12": "rogue-titles-t-7",
  "rogue-titles-t-13": "rogue-titles-t-15",
  "rogue-titles-t-14": "rogue-titles-t-1",
  "rogue-titles-t-15": "rogue-titles-t-6",
  "spiritborn-titles-t-0": "spiritborn-titles-t-8",
  "spiritborn-titles-t-1": "spiritborn-titles-t-9",
  "spiritborn-titles-t-2": "spiritborn-titles-t-6",
  "spiritborn-titles-t-3": "spiritborn-titles-t-0",
  "spiritborn-titles-t-4": "spiritborn-titles-t-7",
  "spiritborn-titles-t-5": "spiritborn-titles-t-2",
  "spiritborn-titles-t-6": "spiritborn-titles-t-1",
  "spiritborn-titles-t-7": "spiritborn-titles-t-3",
  "spiritborn-titles-t-8": "spiritborn-titles-t-11",
  "spiritborn-titles-t-9": "spiritborn-titles-t-5",
  "spiritborn-titles-t-10": "spiritborn-titles-t-4",
  "spiritborn-titles-t-11": "spiritborn-titles-t-10",
  "challenge-t-0": "challenge-t-5",
  "challenge-t-1": "challenge-t-20",
  "challenge-t-2": "challenge-t-24",
  "challenge-t-3": "challenge-t-2",
  "challenge-t-4": "challenge-t-13",
  "challenge-t-5": "challenge-t-15",
  "challenge-t-6": "challenge-t-11",
  "challenge-t-7": "challenge-t-23",
  "challenge-t-8": "challenge-t-3",
  "challenge-t-9": "challenge-t-22",
  "challenge-t-11": "challenge-t-27",
  "challenge-t-12": "challenge-t-1",
  "challenge-t-13": "challenge-t-6",
  "challenge-t-14": "challenge-t-36",
  "challenge-t-15": "challenge-t-29",
  "challenge-t-16": "challenge-t-19",
  "challenge-t-17": "challenge-t-9",
  "challenge-t-18": "challenge-t-4",
  "challenge-t-19": "challenge-t-34",
  "challenge-t-20": "challenge-t-17",
  "challenge-t-21": "challenge-t-31",
  "challenge-t-22": "challenge-t-8",
  "challenge-t-23": "challenge-t-12",
  "challenge-t-24": "challenge-t-35",
  "challenge-t-25": "challenge-t-7",
  "challenge-t-26": "challenge-t-18",
  "challenge-t-27": "challenge-t-26",
  "challenge-t-28": "challenge-t-25",
  "challenge-t-29": "challenge-t-28",
  "challenge-t-30": "challenge-t-32",
  "challenge-t-31": "challenge-t-16",
  "challenge-t-32": "challenge-t-0",
  "challenge-t-33": "challenge-t-21",
  "challenge-t-34": "challenge-t-14",
  "challenge-t-35": "challenge-t-30",
  "challenge-t-36": "challenge-t-33",
  "first-khazra-citadel-t-0": "first-khazra-citadel-t-3",
  "first-khazra-citadel-t-1": "first-khazra-citadel-t-9",
  "first-khazra-citadel-t-2": "first-khazra-citadel-t-1",
  "first-khazra-citadel-t-3": "first-khazra-citadel-t-6",
  "first-khazra-citadel-t-4": "first-khazra-citadel-t-5",
  "first-khazra-citadel-t-5": "first-khazra-citadel-t-8",
  "first-khazra-citadel-t-6": "first-khazra-citadel-t-2",
  "first-khazra-citadel-t-7": "first-khazra-citadel-t-0",
  "first-khazra-citadel-t-8": "first-khazra-citadel-t-4",
  "first-khazra-citadel-t-9": "first-khazra-citadel-t-10",
  "first-khazra-citadel-t-10": "first-khazra-citadel-t-7",
  "paladin-titles-t-0": "paladin-titles-t-6",
  "paladin-titles-t-1": "paladin-titles-t-0",
  "paladin-titles-t-2": "paladin-titles-t-7",
  "paladin-titles-t-3": "paladin-titles-t-9",
  "paladin-titles-t-4": "paladin-titles-t-2",
  "paladin-titles-t-6": "paladin-titles-t-3",
  "paladin-titles-t-7": "paladin-titles-t-4",
  "paladin-titles-t-9": "paladin-titles-t-1",
  "warlock-titles-t-0": "warlock-titles-t-9",
  "warlock-titles-t-1": "warlock-titles-t-0",
  "warlock-titles-t-2": "warlock-titles-t-8",
  "warlock-titles-t-3": "warlock-titles-t-1",
  "warlock-titles-t-4": "warlock-titles-t-7",
  "warlock-titles-t-5": "warlock-titles-t-4",
  "warlock-titles-t-6": "warlock-titles-t-2",
  "warlock-titles-t-7": "warlock-titles-t-5",
  "warlock-titles-t-8": "warlock-titles-t-3",
  "warlock-titles-t-9": "warlock-titles-t-6",
  "general-t-0": "general-t-12",
  "general-t-1": "general-t-9",
  "general-t-2": "general-t-38",
  "general-t-3": "general-t-2",
  "general-t-4": "general-t-33",
  "general-t-6": "general-t-29",
  "general-t-7": "general-t-8",
  "general-t-8": "general-t-16",
  "general-t-9": "general-t-41",
  "general-t-10": "general-t-18",
  "general-t-12": "general-t-34",
  "general-t-13": "general-t-19",
  "general-t-14": "general-t-3",
  "general-t-15": "general-t-43",
  "general-t-16": "general-t-35",
  "general-t-17": "general-t-21",
  "general-t-18": "general-t-0",
  "general-t-19": "general-t-13",
  "general-t-20": "general-t-47",
  "general-t-21": "general-t-22",
  "general-t-22": "general-t-6",
  "general-t-23": "general-t-32",
  "general-t-24": "general-t-30",
  "general-t-25": "general-t-44",
  "general-t-26": "general-t-10",
  "general-t-27": "general-t-20",
  "general-t-28": "general-t-42",
  "general-t-29": "general-t-51",
  "general-t-30": "general-t-26",
  "general-t-31": "general-t-49",
  "general-t-32": "general-t-27",
  "general-t-33": "general-t-55",
  "general-t-34": "general-t-45",
  "general-t-35": "general-t-1",
  "general-t-36": "general-t-52",
  "general-t-37": "general-t-54",
  "general-t-38": "general-t-48",
  "general-t-39": "general-t-17",
  "general-t-40": "general-t-25",
  "general-t-41": "general-t-4",
  "general-t-42": "general-t-40",
  "general-t-43": "general-t-39",
  "general-t-44": "general-t-23",
  "general-t-45": "general-t-36",
  "general-t-46": "general-t-37",
  "general-t-47": "general-t-28",
  "general-t-48": "general-t-14",
  "general-t-49": "general-t-15",
  "general-t-50": "general-t-7",
  "general-t-51": "general-t-46",
  "general-t-52": "general-t-50",
  "general-t-53": "general-t-24",
  "general-t-54": "general-t-31",
  "general-t-55": "general-t-53",
  "horadric-cube-t-0": "horadric-cube-t-1",
  "horadric-cube-t-1": "horadric-cube-t-3",
  "horadric-cube-t-2": "horadric-cube-t-0",
  "horadric-cube-t-3": "horadric-cube-t-4",
  "horadric-cube-t-4": "horadric-cube-t-2",
  "dungeons-t-0": "dungeons-t-8",
  "dungeons-t-1": "dungeons-t-9",
  "dungeons-t-2": "dungeons-t-6",
  "dungeons-t-3": "dungeons-t-5",
  "dungeons-t-4": "dungeons-t-11",
  "dungeons-t-5": "dungeons-t-0",
  "dungeons-t-6": "dungeons-t-12",
  "dungeons-t-7": "dungeons-t-10",
  "dungeons-t-8": "dungeons-t-7",
  "dungeons-t-9": "dungeons-t-15",
  "dungeons-t-10": "dungeons-t-13",
  "dungeons-t-11": "dungeons-t-3",
  "dungeons-t-12": "dungeons-t-1",
  "dungeons-t-13": "dungeons-t-16",
  "dungeons-t-14": "dungeons-t-2",
  "dungeons-t-15": "dungeons-t-4",
  "dungeons-t-16": "dungeons-t-14",
  "helltide-t-0": "helltide-t-1",
  "helltide-t-1": "helltide-t-2",
  "helltide-t-2": "helltide-t-3",
  "helltide-t-3": "helltide-t-4",
  "helltide-t-4": "helltide-t-0",
  "the-pit-t-0": "the-pit-t-1",
  "the-pit-t-1": "the-pit-t-3",
  "the-pit-t-2": "the-pit-t-0",
  "the-pit-t-3": "the-pit-t-2",
  "echoing-hatred-t-0": "echoing-hatred-t-1",
  "echoing-hatred-t-1": "echoing-hatred-t-2",
  "echoing-hatred-t-2": "echoing-hatred-t-0",
  "enemies-t-0": "enemies-t-4",
  "enemies-t-1": "enemies-t-2",
  "enemies-t-2": "enemies-t-3",
  "enemies-t-3": "enemies-t-5",
  "enemies-t-4": "enemies-t-1",
  "enemies-t-5": "enemies-t-0",
  "progression-t-0": "progression-t-1",
  "progression-t-1": "progression-t-4",
  "progression-t-3": "progression-t-0",
  "progression-t-4": "progression-t-5",
  "progression-t-5": "progression-t-3",
  "mercenaries-t-0": "mercenaries-t-10",
  "mercenaries-t-1": "mercenaries-t-7",
  "mercenaries-t-2": "mercenaries-t-0",
  "mercenaries-t-3": "mercenaries-t-2",
  "mercenaries-t-5": "mercenaries-t-1",
  "mercenaries-t-6": "mercenaries-t-9",
  "mercenaries-t-7": "mercenaries-t-6",
  "mercenaries-t-8": "mercenaries-t-12",
  "mercenaries-t-9": "mercenaries-t-5",
  "mercenaries-t-10": "mercenaries-t-14",
  "mercenaries-t-11": "mercenaries-t-13",
  "mercenaries-t-12": "mercenaries-t-3",
  "mercenaries-t-13": "mercenaries-t-11",
  "mercenaries-t-14": "mercenaries-t-8",
  "bandits-t-0": "bandits-t-1",
  "bandits-t-1": "bandits-t-2",
  "bandits-t-2": "bandits-t-0",
  "cannibals-t-1": "cannibals-t-2",
  "cannibals-t-2": "cannibals-t-1",
  "corrupt-amazons-t-1": "corrupt-amazons-t-2",
  "corrupt-amazons-t-2": "corrupt-amazons-t-1",
  "cultists-t-0": "cultists-t-1",
  "cultists-t-1": "cultists-t-0",
  "dregs-t-0": "dregs-t-2",
  "dregs-t-1": "dregs-t-0",
  "dregs-t-2": "dregs-t-1",
  "fallen-t-0": "fallen-t-1",
  "fallen-t-1": "fallen-t-2",
  "fallen-t-2": "fallen-t-0",
  "demons-t-0": "demons-t-2",
  "demons-t-1": "demons-t-0",
  "demons-t-2": "demons-t-1",
  "drowned-t-0": "drowned-t-1",
  "drowned-t-1": "drowned-t-2",
  "drowned-t-2": "drowned-t-0",
  "ghosts-t-1": "ghosts-t-2",
  "ghosts-t-2": "ghosts-t-1",
  "goatmen-t-1": "goatmen-t-2",
  "goatmen-t-2": "goatmen-t-1",
  "golems-t-0": "golems-t-1",
  "golems-t-1": "golems-t-0",
  "merfolk-t-0": "merfolk-t-2",
  "merfolk-t-2": "merfolk-t-0",
  "morlu-t-0": "morlu-t-1",
  "morlu-t-1": "morlu-t-0",
  "pirates-t-0": "pirates-t-2",
  "pirates-t-1": "pirates-t-0",
  "pirates-t-2": "pirates-t-1",
  "snakes-t-0": "snakes-t-1",
  "snakes-t-1": "snakes-t-2",
  "snakes-t-2": "snakes-t-0",
  "spiders-t-0": "spiders-t-1",
  "spiders-t-1": "spiders-t-0",
  "vampires-t-0": "vampires-t-2",
  "vampires-t-1": "vampires-t-0",
  "vampires-t-2": "vampires-t-1",
  "werewolves-t-1": "werewolves-t-2",
  "werewolves-t-2": "werewolves-t-1",
  "zombies-t-0": "zombies-t-1",
  "zombies-t-1": "zombies-t-2",
  "zombies-t-2": "zombies-t-0",
  "rats-t-0": "rats-t-2",
  "rats-t-1": "rats-t-0",
  "rats-t-2": "rats-t-1",
  "pvp-t-0": "pvp-t-2",
  "pvp-t-2": "pvp-t-3",
  "pvp-t-3": "pvp-t-0",
  "whispers-t-1": "whispers-t-2",
  "whispers-t-2": "whispers-t-3",
  "whispers-t-3": "whispers-t-4",
  "whispers-t-4": "whispers-t-5",
  "whispers-t-5": "whispers-t-1",
  "discovery-t-0": "discovery-t-6",
  "discovery-t-1": "discovery-t-13",
  "discovery-t-2": "discovery-t-12",
  "discovery-t-3": "discovery-t-11",
  "discovery-t-4": "discovery-t-2",
  "discovery-t-5": "discovery-t-9",
  "discovery-t-6": "discovery-t-10",
  "discovery-t-7": "discovery-t-0",
  "discovery-t-8": "discovery-t-5",
  "discovery-t-9": "discovery-t-3",
  "discovery-t-10": "discovery-t-7",
  "discovery-t-11": "discovery-t-4",
  "discovery-t-12": "discovery-t-1",
  "discovery-t-13": "discovery-t-8",
  "events-t-0": "events-t-4",
  "events-t-1": "events-t-8",
  "events-t-2": "events-t-5",
  "events-t-3": "events-t-10",
  "events-t-4": "events-t-9",
  "events-t-5": "events-t-2",
  "events-t-6": "events-t-3",
  "events-t-8": "events-t-0",
  "events-t-9": "events-t-6",
  "events-t-10": "events-t-1",
  "campaign-t-0": "campaign-t-5",
  "campaign-t-2": "campaign-t-3",
  "campaign-t-3": "campaign-t-14",
  "campaign-t-4": "campaign-t-9",
  "campaign-t-5": "campaign-t-17",
  "campaign-t-6": "campaign-t-10",
  "campaign-t-7": "campaign-t-13",
  "campaign-t-8": "campaign-t-18",
  "campaign-t-9": "campaign-t-7",
  "campaign-t-10": "campaign-t-6",
  "campaign-t-11": "campaign-t-0",
  "campaign-t-12": "campaign-t-4",
  "campaign-t-13": "campaign-t-16",
  "campaign-t-14": "campaign-t-15",
  "campaign-t-15": "campaign-t-2",
  "campaign-t-16": "campaign-t-8",
  "campaign-t-17": "campaign-t-12",
  "campaign-t-18": "campaign-t-19",
  "campaign-t-19": "campaign-t-11",
  "side-quests-t-0": "side-quests-t-13",
  "side-quests-t-1": "side-quests-t-9",
  "side-quests-t-2": "side-quests-t-6",
  "side-quests-t-3": "side-quests-t-2",
  "side-quests-t-4": "side-quests-t-14",
  "side-quests-t-5": "side-quests-t-4",
  "side-quests-t-6": "side-quests-t-11",
  "side-quests-t-7": "side-quests-t-1",
  "side-quests-t-8": "side-quests-t-12",
  "side-quests-t-9": "side-quests-t-5",
  "side-quests-t-10": "side-quests-t-0",
  "side-quests-t-11": "side-quests-t-7",
  "side-quests-t-12": "side-quests-t-3",
  "side-quests-t-13": "side-quests-t-10",
  "side-quests-t-14": "side-quests-t-8",
  "talisman-t-0": "talisman-t-3",
  "talisman-t-1": "talisman-t-4",
  "talisman-t-2": "talisman-t-1",
  "talisman-t-3": "talisman-t-2",
  "talisman-t-4": "talisman-t-5",
  "talisman-t-5": "talisman-t-0",
  "war-plans-t-0": "war-plans-t-4",
  "war-plans-t-1": "war-plans-t-2",
  "war-plans-t-2": "war-plans-t-1",
  "war-plans-t-4": "war-plans-t-0",
  "hidden-t-0": "hidden-t-1",
  "hidden-t-1": "hidden-t-2",
  "hidden-t-2": "hidden-t-0",
  "hidden-t-3": "hidden-t-4",
  "hidden-t-4": "hidden-t-5",
  "hidden-t-5": "hidden-t-3",
  "the-tower-t-0": "the-tower-t-2",
  "the-tower-t-1": "the-tower-t-5",
  "the-tower-t-2": "the-tower-t-7",
  "the-tower-t-3": "the-tower-t-1",
  "the-tower-t-5": "the-tower-t-9",
  "the-tower-t-6": "the-tower-t-10",
  "the-tower-t-7": "the-tower-t-8",
  "the-tower-t-8": "the-tower-t-6",
  "the-tower-t-9": "the-tower-t-3",
  "the-tower-t-10": "the-tower-t-0",
  "season-6-t-1": "season-6-t-2",
  "season-6-t-2": "season-6-t-1",
  "season-7-t-0": "season-7-t-1",
  "season-7-t-1": "season-7-t-0",
  "season-8-t-0": "season-8-t-2",
  "season-8-t-1": "season-8-t-0",
  "season-8-t-2": "season-8-t-1",
  "season-9-t-0": "season-9-t-2",
  "season-9-t-1": "season-9-t-0",
  "season-9-t-2": "season-9-t-1",
  "season-11-t-0": "season-11-t-1",
  "season-11-t-1": "season-11-t-0",
  "season-12-t-0": "season-12-t-1",
  "season-12-t-1": "season-12-t-0",
  "season-13-t-1": "season-13-t-3",
  "season-13-t-2": "season-13-t-4",
  "season-13-t-3": "season-13-t-1",
  "season-13-t-4": "season-13-t-2",
  "season-14-t-0": "season-14-t-6",
  "season-14-t-1": "season-14-t-7",
  "season-14-t-4": "season-14-t-8",
  "season-14-t-5": "season-14-t-9",
  "season-14-t-6": "season-14-t-4",
  "season-14-t-7": "season-14-t-0",
  "season-14-t-8": "season-14-t-1",
  "season-14-t-9": "season-14-t-5",
  "season-15-t-1": "season-15-t-2",
  "season-15-t-8": "season-15-t-10",
  "achievements-feats-of-strength-t-0": "achievements-feats-of-strength-t-2",
  "achievements-feats-of-strength-t-1": "achievements-feats-of-strength-t-3",
  "achievements-feats-of-strength-t-2": "achievements-feats-of-strength-t-10",
  "achievements-feats-of-strength-t-3": "achievements-feats-of-strength-t-12",
  "achievements-feats-of-strength-t-4": "achievements-feats-of-strength-t-15",
  "achievements-feats-of-strength-t-5": "achievements-feats-of-strength-t-24",
  "achievements-feats-of-strength-t-6": "achievements-feats-of-strength-t-25",
  "achievements-feats-of-strength-t-7": "achievements-feats-of-strength-t-29",
  "achievements-feats-of-strength-t-8": "achievements-feats-of-strength-t-41",
  "achievements-feats-of-strength-t-9": "achievements-feats-of-strength-t-42",
  "achievements-feats-of-strength-t-10": "achievements-feats-of-strength-t-44",
  "achievements-feats-of-strength-t-11": "achievements-feats-of-strength-t-48",
  "achievements-feats-of-strength-t-12": "achievements-feats-of-strength-t-49",
  "achievements-feats-of-strength-t-13": "achievements-feats-of-strength-t-53",
  "achievements-feats-of-strength-t-14": "achievements-feats-of-strength-t-54",
  "achievements-feats-of-strength-t-15": "achievements-feats-of-strength-t-57",
  "achievements-feats-of-strength-t-16": "achievements-feats-of-strength-t-58",
  "achievements-feats-of-strength-t-17": "achievements-feats-of-strength-t-60",
  "achievements-feats-of-strength-t-18": "achievements-feats-of-strength-t-63",
  "achievements-feats-of-strength-t-19": "achievements-feats-of-strength-t-64",
  // Removing the duplicate prefix-only "Acquisitive" from General & Exploration
  // shifted every later title in that category down one index. The removed
  // entry maps to an orphan id so its old key cannot collide with the shift.
  "general-exploration-t-1": "general-exploration-t-removed",
  "general-exploration-t-2": "general-exploration-t-1",
  "general-exploration-t-3": "general-exploration-t-2",
  "general-exploration-t-4": "general-exploration-t-3",
  "general-exploration-t-5": "general-exploration-t-4",
  "general-exploration-t-6": "general-exploration-t-5",
  "general-exploration-t-7": "general-exploration-t-6",
  "general-exploration-t-8": "general-exploration-t-7",
  "general-exploration-t-9": "general-exploration-t-8",
  "general-exploration-t-10": "general-exploration-t-9",
  "general-exploration-t-11": "general-exploration-t-10",
  "general-exploration-t-12": "general-exploration-t-11",
  "general-exploration-t-13": "general-exploration-t-12",
  "general-exploration-t-14": "general-exploration-t-13",
  // Removing the two "Laurel" entries (Season Rank / Tower laurel display a
  // temporary laurel in-game, not a permanent title) from Season 14 shifted
  // the three later titles down by two indices. Removed entries map to
  // orphan ids so their old keys cannot collide with the shift.
  "season-14-t-6": "season-14-removed-laurel-1",
  "season-14-t-7": "season-14-removed-laurel-2",
  "season-14-t-8": "season-14-t-6",
  "season-14-t-9": "season-14-t-7",
  "season-14-t-10": "season-14-t-8",
  // Removing "Dungeon Champion" from Achievements & Feats of Strength (idx 24)
  // and "Champion of the Tower" from Season 14 (idx 0) shifted later titles down.
  // Removed entries map to orphan ids so their old keys cannot collide with the shift.
  // (Later duplicate keys win, so these override the laurel-era season-14 mappings.)
  "achievements-feats-of-strength-t-24": "achievements-feats-of-strength-removed-dungeon-champion",
  "achievements-feats-of-strength-t-25": "achievements-feats-of-strength-t-24",
  "achievements-feats-of-strength-t-26": "achievements-feats-of-strength-t-25",
  "achievements-feats-of-strength-t-27": "achievements-feats-of-strength-t-26",
  "achievements-feats-of-strength-t-28": "achievements-feats-of-strength-t-27",
  "achievements-feats-of-strength-t-29": "achievements-feats-of-strength-t-28",
  "achievements-feats-of-strength-t-30": "achievements-feats-of-strength-t-29",
  "achievements-feats-of-strength-t-31": "achievements-feats-of-strength-t-30",
  "achievements-feats-of-strength-t-32": "achievements-feats-of-strength-t-31",
  "achievements-feats-of-strength-t-33": "achievements-feats-of-strength-t-32",
  "achievements-feats-of-strength-t-34": "achievements-feats-of-strength-t-33",
  "achievements-feats-of-strength-t-35": "achievements-feats-of-strength-t-34",
  "achievements-feats-of-strength-t-36": "achievements-feats-of-strength-t-35",
  "achievements-feats-of-strength-t-37": "achievements-feats-of-strength-t-36",
  "achievements-feats-of-strength-t-38": "achievements-feats-of-strength-t-37",
  "achievements-feats-of-strength-t-39": "achievements-feats-of-strength-t-38",
  "achievements-feats-of-strength-t-40": "achievements-feats-of-strength-t-39",
  "achievements-feats-of-strength-t-41": "achievements-feats-of-strength-t-40",
  "achievements-feats-of-strength-t-42": "achievements-feats-of-strength-t-41",
  "achievements-feats-of-strength-t-43": "achievements-feats-of-strength-t-42",
  "achievements-feats-of-strength-t-44": "achievements-feats-of-strength-t-43",
  "achievements-feats-of-strength-t-45": "achievements-feats-of-strength-t-44",
  "achievements-feats-of-strength-t-46": "achievements-feats-of-strength-t-45",
  "achievements-feats-of-strength-t-47": "achievements-feats-of-strength-t-46",
  "achievements-feats-of-strength-t-48": "achievements-feats-of-strength-t-47",
  "achievements-feats-of-strength-t-49": "achievements-feats-of-strength-t-48",
  "achievements-feats-of-strength-t-50": "achievements-feats-of-strength-t-49",
  "achievements-feats-of-strength-t-51": "achievements-feats-of-strength-t-50",
  "achievements-feats-of-strength-t-52": "achievements-feats-of-strength-t-51",
  "achievements-feats-of-strength-t-53": "achievements-feats-of-strength-t-52",
  "achievements-feats-of-strength-t-54": "achievements-feats-of-strength-t-53",
  "achievements-feats-of-strength-t-55": "achievements-feats-of-strength-t-54",
  "achievements-feats-of-strength-t-56": "achievements-feats-of-strength-t-55",
  "achievements-feats-of-strength-t-57": "achievements-feats-of-strength-t-56",
  "achievements-feats-of-strength-t-58": "achievements-feats-of-strength-t-57",
  "achievements-feats-of-strength-t-59": "achievements-feats-of-strength-t-58",
  "achievements-feats-of-strength-t-60": "achievements-feats-of-strength-t-59",
  "achievements-feats-of-strength-t-61": "achievements-feats-of-strength-t-60",
  "achievements-feats-of-strength-t-62": "achievements-feats-of-strength-t-61",
  "achievements-feats-of-strength-t-63": "achievements-feats-of-strength-t-62",
  "achievements-feats-of-strength-t-64": "achievements-feats-of-strength-t-63",
  "achievements-feats-of-strength-t-65": "achievements-feats-of-strength-t-64",
  "achievements-feats-of-strength-t-66": "achievements-feats-of-strength-t-65",
  "achievements-feats-of-strength-t-67": "achievements-feats-of-strength-t-66",
  "achievements-feats-of-strength-t-68": "achievements-feats-of-strength-t-67",
  "achievements-feats-of-strength-t-69": "achievements-feats-of-strength-t-68",
  "achievements-feats-of-strength-t-70": "achievements-feats-of-strength-t-69",
  "achievements-feats-of-strength-t-71": "achievements-feats-of-strength-t-70",
  "achievements-feats-of-strength-t-72": "achievements-feats-of-strength-t-71",
  "achievements-feats-of-strength-t-73": "achievements-feats-of-strength-t-72",
  "achievements-feats-of-strength-t-74": "achievements-feats-of-strength-t-73",
  "achievements-feats-of-strength-t-75": "achievements-feats-of-strength-t-74",
  "season-14-t-0": "season-14-removed-champion-of-the-tower",
  "season-14-t-1": "season-14-t-0",
  "season-14-t-2": "season-14-t-1",
  "season-14-t-3": "season-14-t-2",
  "season-14-t-4": "season-14-t-3",
  "season-14-t-5": "season-14-t-4",
  "season-14-t-6": "season-14-t-5",
  "season-14-t-7": "season-14-t-6",
  "season-14-t-8": "season-14-t-7",
  // Removing "Collector Cinder" (Helltide Titles idx 0) and "Altar Collector"
  // (Renown & Altar Rewards idx 0) shifted the later titles in those
  // categories down one index; removed entries map to orphan ids.
  "helltide-titles-t-0": "helltide-titles-removed-collector-cinder",
  "helltide-titles-t-1": "helltide-titles-t-0",
  "renown-altar-rewards-t-0": "renown-altar-rewards-removed-altar-collector",
  "renown-altar-rewards-t-1": "renown-altar-rewards-t-0",
  "renown-altar-rewards-t-2": "renown-altar-rewards-t-1"
};
  D4TK.migrateStoreIds(STORE_KEY, TITLES_ID_MIGRATION);
  var collected = D4TK.loadStore(STORE_KEY);
  var uiPrefs = D4TK.loadUiPrefs(STORE_KEY);
  uiPrefs.collapsed = uiPrefs.collapsed || {};
  var opts = { hideCollected: !!uiPrefs.hide };

  var TITLES_DATA = D4TK_DATA.titles;

  // Ensure TITLES_DATA is structured correctly.
  if (!TITLES_DATA || !TITLES_DATA.game || !TITLES_DATA.season || !TITLES_DATA.feats) {
    console.error("Titles data is not structured correctly. Expected 'game', 'season' and 'feats' properties.");
    TITLES_DATA = { game: [], season: [], feats: [] };
  }

  var gameEl = document.getElementById('game');
  var seasonEl = document.getElementById('season');
  var featsEl = document.getElementById('feats');
  var alphaEl = document.getElementById('list');
  var alphaMode = false;

  // Per tab: top-level sections (with tracker) and one DOM handle per category.
  var tabState = {
    game: { tops: [], cats: [] },
    season: { tops: [], cats: [] },
    feats: { tops: [], cats: [] }
  };

  function allTops() {
    return tabState.game.tops.concat(tabState.season.tops, tabState.feats.tops);
  }

  // Widest prefix/suffix across ALL tabs, measured in px (every value, not
  // just the longest by character count — wide glyphs can beat longer strings)
  // and applied as fixed column widths (CSS vars --title-prefix-w /
  // --title-suffix-w) so every row in every tab has identical column widths
  // and nothing truncates; the description gets the remaining width.
  function fitTitleColumns() {
    var cats = TITLES_DATA.game.concat(TITLES_DATA.season, TITLES_DATA.feats);
    var probe = document.querySelector('.title-row .t-name');
    var cs = probe ? getComputedStyle(probe) : getComputedStyle(document.body);
    var font = cs.font || (cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily);
    var ls = parseFloat(cs.letterSpacing) || 0;
    var ctx = document.createElement('canvas').getContext('2d');
    ctx.font = font;
    var maxW = { p: 0, s: 0 };
    cats.forEach(function (c) {
      c.titles.forEach(function (t) {
        if (t[0]) maxW.p = Math.max(maxW.p, ctx.measureText(t[0]).width + t[0].length * ls);
        if (t[1]) maxW.s = Math.max(maxW.s, ctx.measureText(t[1]).width + t[1].length * ls);
      });
    });
    // Each prefix/suffix cell also contains the P/S badge and the cell gap —
    // include them so the text itself never truncates.
    var badge = document.querySelector('.title-row .type-badge');
    var badgeW = badge ? badge.getBoundingClientRect().width : 16;
    var part = document.querySelector('.title-row .title-part');
    var gap = part ? (parseFloat(getComputedStyle(part).columnGap) || 8) : 8;
    var extra = badgeW + gap + 8;
    document.documentElement.style.setProperty('--title-prefix-w', Math.ceil(maxW.p + extra) + 'px');
    document.documentElement.style.setProperty('--title-suffix-w', Math.ceil(maxW.s + extra) + 'px');
  }

  // Cross-link with the achievements tracker: titles whose description is
  // "Challenge: <name>" are obtained through the achievement of that name, so
  // ticking the title ticks the achievement and vice versa. Auto-ticked
  // entries are recorded in TITLES_AUTO_KEY so unchecking only removes what
  // this link set — manual ticks are preserved (same pattern as fishing.js).
  var ACH_STORE_KEY = 'd4tk-achievements';
  var TITLES_AUTO_KEY = 'd4tk-titles-auto';
  var ACH_AUTO_KEY = 'd4tk-achievements-auto';

  // Challenge name -> achievement ids, mirroring buildItem's id scheme
  // (<catSlug>-<slug(name)>, numeric suffix on duplicate names).
  var achIdsByChallenge = {};
  (D4TK_DATA.achievements || []).forEach(function (c) {
    var catSlug = D4TK.slug(c.name);
    var used = {};
    var subs = c.subcategories || [{ name: '', items: c.items || [] }];
    subs.forEach(function (s) {
      (s.items || []).forEach(function (it) {
        var base = catSlug + '-' + D4TK.slug(it[0]);
        var id = base;
        var n = 2;
        while (used[id]) { id = base + '-' + n; n++; }
        used[id] = true;
        var key = String(it[0]).toLowerCase();
        (achIdsByChallenge[key] = achIdsByChallenge[key] || []).push(id);
      });
    });
  });

  // Title id -> challenge name, from "Challenge: <name>" descriptions.
  var challengeByTitle = {};
  ['game', 'season', 'feats'].forEach(function (tab) {
    (TITLES_DATA[tab] || []).forEach(function (c) {
      var catSlug = D4TK.slug(c.name);
      c.titles.forEach(function (t, idx) {
        var m = /^Challenge:\s*(.+?)(?:\s*—.*)?$/.exec(t[2] || '');
        if (m) challengeByTitle[catSlug + '-t-' + idx] = m[1].trim();
      });
    });
  });

  function syncAchievements(silent) {
    var ach = D4TK.loadStore(ACH_STORE_KEY);
    var auto = D4TK.loadStore(TITLES_AUTO_KEY);
    var changed = false;
    var notes = [];
    var unnotes = [];
    Object.keys(challengeByTitle).forEach(function (titleId) {
      var challenge = challengeByTitle[titleId];
      var ids = achIdsByChallenge[challenge.toLowerCase()] || [];
      var earned = !!collected[titleId];
      ids.forEach(function (achId) {
        // auto[achId] === false means the user manually unchecked this
        // achievement — the link must not re-tick it while the title is earned.
        if (earned && !ach[achId] && auto[achId] !== false) { ach[achId] = true; auto[achId] = true; changed = true; notes.push(challenge); }
        else if (!earned && auto[achId] === true) { delete ach[achId]; delete auto[achId]; changed = true; unnotes.push(challenge); }
      });
    });
    if (changed) {
      D4TK.saveStore(ACH_STORE_KEY, ach);
      D4TK.saveStore(TITLES_AUTO_KEY, auto);
      if (!silent) {
        notes.forEach(function (n) { D4TK.toast('Challenge: ' + n + ' has also been marked as completed'); });
        unnotes.forEach(function (n) { D4TK.toast('Challenge: ' + n + ' has also been unmarked'); });
      }
    }
  }

  // Manual uncheck of a title suppresses re-ticking from the achievements page.
  function suppressAchAuto(titleId) {
    var achAuto = D4TK.loadStore(ACH_AUTO_KEY);
    if (achAuto[titleId] !== false) {
      achAuto[titleId] = false;
      D4TK.saveStore(ACH_AUTO_KEY, achAuto);
    }
  }

  function save() { D4TK.saveStore(STORE_KEY, collected); syncAchievements(); }

  function setText(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // One trackable checkbox per title
  function buildRow(catSlug, t, idx) {
    var prefix = t[0];
    var suffix = t[1];
    var desc = t[2];
    var id = catSlug + '-t-' + idx;

    // Same row pattern as the other trackers: checkbox | prefix | suffix |
    // description (see titles.css).
    var row = document.createElement('label');
    row.className = 'title-row';
    row.dataset.id = id;
    row.dataset.name = ((prefix || '') + ' ' + (suffix || '') + ' ' + (desc || '')).toLowerCase();
    row.title = t[3] ? t[3] : '';

    // The description truncates with an ellipsis when it reaches the end of
    // the cell (.t-desc in titles.css); the full text is revealed on hover
    // via the title attribute. "(No longer obtainable)" is highlighted inline,
    // same as the Achievements rows.
    var descText = desc || (prefix + ' ' + suffix);
    var descTitle = descText ? ' title="' + escapeAttr(descText) + '"' : '';
    var descBody = String(descText).replace(/\(No longer obtainable\)/g,
      '<span class="unobtainable-hit">(No longer obtainable)</span>');
    var descHtml = '<span class="info"' + descTitle + '>' + descBody + '</span>';

    var partsHtml = '';
    [['prefix', prefix], ['suffix', suffix]].forEach(function (p) {
      partsHtml += '<span class="title-part ' + p[0] + '">' +
        (p[1]
          ? '<span class="type-badge ' + p[0] + '">' + (p[0] === 'prefix' ? 'P' : 'S') + '</span>' +
            '<span class="t-name" title="' + escapeAttr(p[1]) + '">' + p[1] + '</span>'
          : '') +
        '</span>';
    });

    row.innerHTML =
      '<input type="checkbox"' + (collected[id] ? ' checked' : '') + '>' +
      '<span class="box"></span>' +
      partsHtml +
      '<span class="t-desc">' + descHtml + '</span>';

    var box = row.querySelector('input');
    box.addEventListener('change', function () {
      if (box.checked) collected[id] = true; else { delete collected[id]; suppressAchAuto(id); }
      save(); refresh();
    });

    return row;
  }

  // Top-level section with tracker head — same .head markup as the Fishing
  // regions and Achievements categories (theme.css).
  function buildTopSection(container, state, key, name, tag) {
    var sec = document.createElement('section');
    sec.dataset.key = key;

    var head = document.createElement('div');
    head.className = 'head';
    head.innerHTML =
      '<span class="chevron">▼</span>' +
      '<label class="gcheck"><input type="checkbox"><span class="box"></span></label>' +
      '<span class="category-name">' + name +
      (tag ? '<span class="tag">' + tag.replace(/no longer available/g,
        '<span class="unobtainable-hit">no longer available</span>') + '</span>' : '') +
      '</span>' +
      '<span class="mini-bar"><div></div></span>' +
      '<span class="category-count"><b>0</b> / 0</span>';
    var headBox = head.querySelector('.gcheck input');
    headBox.addEventListener('change', function () {
      sec.querySelectorAll('.title-row').forEach(function (el) {
        var id = el.dataset.id;
        if (headBox.checked) collected[id] = true; else { delete collected[id]; suppressAchAuto(id); }
      });
      save(); refresh();
    });
    head.addEventListener('click', function (e) {
      if (head.querySelector('.gcheck').contains(e.target)) return;
      sec.classList.toggle('collapsed');
      uiPrefs.collapsed[key] = sec.classList.contains('collapsed');
      D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
    });
    sec.appendChild(head);

    var list = document.createElement('div');
    list.className = 'item-list';
    sec.appendChild(list);
    container.appendChild(sec);

    var top = { el: sec, list: list, key: key, n: 0, total: 0 };
    state.tops.push(top);
    if (uiPrefs.collapsed[key]) sec.classList.add('collapsed');
    return top;
  }

  // Category within a top-level section. Grouped categories become a
  // collapsible .subcat-group subsection (same markup as Achievements
  // subcategories); standalone categories put their rows directly in the
  // section list (flat, like a category without subcategories).
  function buildCategory(top, c, catSlug, flat) {
    var entry = { top: top, sub: null, list: null };
    var list;

    if (flat) {
      list = top.list;
    } else {
      var gkey = top.key + ':' + catSlug;
      var sub = document.createElement('div');
      sub.className = 'subcat-group';
      sub.dataset.key = gkey;
      sub.innerHTML =
        '<span class="collapse-arrow">▼</span>' +
        '<label class="gcheck"><input type="checkbox"><span class="box"></span></label>' +
        '<span class="subcat-name">' + c.name + '</span>' +
        '<span class="subcat-count"></span>';
      sub.addEventListener('click', function (e) {
        if (sub.querySelector('.gcheck').contains(e.target)) return;
        sub.classList.toggle('collapsed');
        uiPrefs.collapsed[gkey] = sub.classList.contains('collapsed');
        D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
      });
      var arrow = sub.querySelector('.collapse-arrow');
      arrow.addEventListener('click', function (e) {
        e.stopPropagation();
        sub.classList.toggle('collapsed');
        uiPrefs.collapsed[gkey] = sub.classList.contains('collapsed');
        D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
      });
      top.list.appendChild(sub);
      if (uiPrefs.collapsed[gkey]) sub.classList.add('collapsed');

      list = document.createElement('div');
      list.className = 'item-list title-list subcat-items';
      top.list.appendChild(list);

      var subBox = sub.querySelector('.gcheck input');
      subBox.addEventListener('change', function () {
        list.querySelectorAll('.title-row').forEach(function (el) {
          var id = el.dataset.id;
          if (subBox.checked) collected[id] = true; else { delete collected[id]; suppressAchAuto(id); }
        });
        save(); refresh();
      });
      entry.sub = sub;
    }

    c.titles.forEach(function (t, idx) {
      list.appendChild(buildRow(catSlug, t, idx));
    });

    entry.list = list;
    return entry;
  }

  function buildTab(container, state, categories, useGroups) {
    var lastGroup = null;
    var top = null;
    categories.forEach(function (c) {
      var catSlug = D4TK.slug(c.name);
      var grouped = useGroups && !!c.group;
      if (grouped && c.group !== lastGroup) {
        top = buildTopSection(container, state, 'group:' + D4TK.slug(c.group), c.group, null);
        lastGroup = c.group;
      } else if (!grouped) {
        top = buildTopSection(container, state, 'cat:' + catSlug, c.name, c.tag);
        lastGroup = null;
      }
      state.cats.push(buildCategory(top, c, catSlug, !grouped));
    });
  }

  // Flat list of every title across all tabs, matching the in-game (solely
  // alphabetical) view. Rows reuse buildRow with the same ids as the
  // sectioned view, so earned state stays in sync between both layouts.
  // The header offers a sort control: by prefix (default) or suffix, and
  // ascending (default) or descending.
  var alphaItems = [];
  var alphaSortBy = 'prefix';
  var alphaAsc = true;

  function alphaSortKeys(it) {
    var p = (it.t[0] || '').trim().toLowerCase();
    var s = (it.t[1] || '').trim().toLowerCase();
    // Sort by the selected half; fall back to the other half when it is
    // empty (suffix-only / prefix-only titles).
    return alphaSortBy === 'suffix' ? [s || p, p] : [p || s, s];
  }

  function renderAlpha() {
    var list = alphaEl.querySelector('.title-list');
    if (!list) return;
    var sorted = alphaItems.slice().sort(function (a, b) {
      var ka = alphaSortKeys(a), kb = alphaSortKeys(b);
      var c = ka[0].localeCompare(kb[0]) || ka[1].localeCompare(kb[1]);
      return alphaAsc ? c : -c;
    });
    sorted.forEach(function (it) { list.appendChild(it.row); });
  }

  function buildAlpha() {
    alphaEl.innerHTML = '';
    alphaItems = [];
    var sec = document.createElement('section');
    var note = document.createElement('div');
    note.className = 'list-note';
    note.appendChild(document.createTextNode('All titles in alphabetical order \u2014 sort by '));
    var sel = document.createElement('select');
    sel.id = 'alpha-sort-by';
    sel.setAttribute('aria-label', 'Sort titles by');
    sel.innerHTML = '<option value="prefix">prefix</option><option value="suffix">suffix</option>';
    var orderBtn = document.createElement('button');
    orderBtn.type = 'button';
    orderBtn.id = 'alpha-sort-order';
    orderBtn.textContent = 'A\u2013Z';
    note.appendChild(sel);
    note.appendChild(orderBtn);
    var list = document.createElement('div');
    list.className = 'item-list title-list';
    ['game', 'season', 'feats'].forEach(function (tab) {
      TITLES_DATA[tab].forEach(function (c) {
        var catSlug = D4TK.slug(c.name);
        c.titles.forEach(function (t, idx) {
          alphaItems.push({ t: t, row: buildRow(catSlug, t, idx) });
        });
      });
    });
    sel.addEventListener('change', function () {
      alphaSortBy = sel.value === 'suffix' ? 'suffix' : 'prefix';
      renderAlpha();
    });
    orderBtn.addEventListener('click', function () {
      alphaAsc = !alphaAsc;
      orderBtn.textContent = alphaAsc ? 'A\u2013Z' : 'Z\u2013A';
      renderAlpha();
    });
    sec.appendChild(note);
    sec.appendChild(list);
    alphaEl.appendChild(sec);
    renderAlpha();
  }

  function build() {
    gameEl.innerHTML = '';
    seasonEl.innerHTML = '';
    featsEl.innerHTML = '';
    tabState = {
      game: { tops: [], cats: [] },
      season: { tops: [], cats: [] },
      feats: { tops: [], cats: [] }
    };
    buildTab(gameEl, tabState.game, TITLES_DATA.game, true);
    buildTab(seasonEl, tabState.season, TITLES_DATA.season, false);
    buildTab(featsEl, tabState.feats, TITLES_DATA.feats, false);
    buildAlpha();
  }

  function refreshTab(state, categories, onCat) {
    state.tops.forEach(function (t) { t.n = 0; t.total = 0; });
    categories.forEach(function (c, i) {
      var entry = state.cats[i];
      if (!entry) return;
      var totalItems = c.titles.length;
      var n = 0;
      entry.list.querySelectorAll('.title-row').forEach(function (el) {
        var inp = el.querySelector('input');
        var id = el.dataset.id;
        inp.checked = !!collected[id];
        el.classList.toggle('collected', inp.checked);
        if (inp.checked) n++;
      });
      if (entry.sub) {
        entry.sub.querySelector('.subcat-count').textContent = n + ' / ' + totalItems;
        var subBoxes = entry.list.querySelectorAll('.title-row input');
        entry.sub.querySelector('.gcheck input').checked = n === totalItems && subBoxes.length > 0;
      }
      entry.top.n += n;
      entry.top.total += totalItems;
      onCat(n, totalItems);
    });
    state.tops.forEach(function (t) {
      var headBox = t.el.querySelector('.head .gcheck input');
      var itemBoxes = t.el.querySelectorAll('.title-row input');
      headBox.checked = t.total > 0 && t.n === t.total && itemBoxes.length > 0;
      var done = t.total > 0 && t.n === t.total;
      t.el.querySelector('.category-count').innerHTML = '<b>' + t.n + '</b> / ' + t.total;
      t.el.querySelector('.mini-bar div').style.width = (t.total ? t.n / t.total * 100 : 0) + '%';
      t.el.querySelector('.category-count').style.color = done ? 'var(--gold)' : '';
    });
  }

  function refresh() {
    var gameTotal = 0, gameCollectedCount = 0;
    var seasonalCollectedCount = 0;
    var featsCollectedCount = 0, featsTotal = 0;

    // Reset UI elements.
    setText('stat-primary', '0');
    setText('stat-total', '0');
    setText('stat-feats', '0');
    setText('stat-feats-total', '0');
    setText('stat-seasonal', '0');
    var fill = document.getElementById('global-fill');
    if (fill) fill.style.width = '0%';

    refreshTab(tabState.game, TITLES_DATA.game, function (n, total) {
      gameTotal += total; gameCollectedCount += n;
    });
    refreshTab(tabState.season, TITLES_DATA.season, function (n) {
      seasonalCollectedCount += n;
    });
    refreshTab(tabState.feats, TITLES_DATA.feats, function (n, total) {
      featsCollectedCount += n; featsTotal += total;
    });

    // Keep the flat alphabetical list in sync with the same store.
    alphaEl.querySelectorAll('.title-row').forEach(function (el) {
      var inp = el.querySelector('input');
      inp.checked = !!collected[el.dataset.id];
      el.classList.toggle('collected', inp.checked);
    });

    // Update Game stats.
    setText('stat-primary', gameCollectedCount);
    setText('stat-total', gameTotal);
    if (fill) fill.style.width = (gameTotal ? gameCollectedCount / gameTotal * 100 : 0) + '%';

    // Update Feats of Strength and Seasonal stats.
    setText('stat-feats', featsCollectedCount);
    setText('stat-feats-total', featsTotal);
    setText('stat-seasonal', seasonalCollectedCount);

    applySearch();
  }

  function applySearch() {
    var q = document.getElementById('search').value.trim().toLowerCase();
    ['game', 'season', 'feats'].forEach(function (tab) {
      tabState[tab].tops.forEach(function (t) {
        var any = false;
        t.el.querySelectorAll('.title-row').forEach(function (el) {
          var match = !q || el.dataset.name.indexOf(q) !== -1 || el.textContent.toLowerCase().indexOf(q) !== -1;
          var hidden = opts.hideCollected && el.classList.contains('collected');
          el.style.display = (match && !hidden) ? '' : 'none';
          if (match && !hidden) any = true;
        });
        t.el.querySelectorAll('.subcat-group').forEach(function (g) {
          var list = g.nextElementSibling;
          var anyInGroup = list && Array.prototype.some.call(
            list.querySelectorAll('.title-row'),
            function (el) { return el.style.display !== 'none'; }
          );
          g.style.display = (q && !anyInGroup) ? 'none' : '';
        });
        t.el.style.display = any ? '' : 'none';
      });
    });
    var alphaAny = false;
    alphaEl.querySelectorAll('.title-row').forEach(function (el) {
      var match = !q || el.dataset.name.indexOf(q) !== -1 || el.textContent.toLowerCase().indexOf(q) !== -1;
      var hidden = opts.hideCollected && el.classList.contains('collected');
      el.style.display = (match && !hidden) ? '' : 'none';
      if (match && !hidden) alphaAny = true;
    });
    alphaEl.style.display = (!q || alphaAny) ? '' : 'none';
  }

  document.getElementById('search').addEventListener('input', applySearch);

  document.getElementById('btn-hide-collected').addEventListener('click', function () {
    opts.hideCollected = !opts.hideCollected;
    uiPrefs.hide = opts.hideCollected;
    D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
    this.textContent = opts.hideCollected ? 'Show Earned' : 'Hide Earned';
    refresh();
  });

  // Collapse/Expand All covers both top-level sections and category subsections.
  function allCollapsible() {
    var all = allTops().map(function (t) { return t.el; });
    allTops().forEach(function (t) {
      t.el.querySelectorAll('.subcat-group').forEach(function (g) { all.push(g); });
    });
    return all;
  }

  // One-time flat A-Z view; toggling back restores the tabbed layout as-is.
  document.getElementById('btn-alpha').addEventListener('click', function () {
    alphaMode = !alphaMode;
    document.body.classList.toggle('list-mode', alphaMode);
    this.textContent = alphaMode ? 'Sections' : 'List';
  });

  document.getElementById('btn-expand').addEventListener('click', function () {
    var all = allCollapsible();
    var anyOpen = all.some(function (el) { return !el.classList.contains('collapsed'); });
    all.forEach(function (el) {
      el.classList.toggle('collapsed', anyOpen);
      uiPrefs.collapsed[el.dataset.key] = anyOpen;
    });
    D4TK.saveUiPrefs(STORE_KEY, uiPrefs);
    this.textContent = anyOpen ? 'Expand All' : 'Collapse All';
  });

  document.getElementById('btn-export').addEventListener('click', function () {
    D4TK.exportBackup('d4tk-titles', 'titles-tracker', collected);
  });

  document.getElementById('btn-import').addEventListener('click', function () {
    document.getElementById('import-file').click();
  });

  document.getElementById('import-file').addEventListener('change', function () {
    D4TK.importBackup(this, 'collected', function (ids) {
      collected = ids;
      save();
      location.reload();
    });
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!confirm('Reset all title progress? All earned titles will be lost.')) return;
    collected = {};
    save();
    allTops().forEach(function (t) {
      t.el.querySelectorAll('input').forEach(function (i) { i.checked = false; });
    });
    refresh();
  });

  build();
  fitTitleColumns();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitleColumns);
  document.getElementById('btn-hide-collected').textContent = opts.hideCollected ? 'Show Earned' : 'Hide Earned';
  document.getElementById('btn-expand').textContent = allCollapsible().some(function (el) { return !el.classList.contains('collapsed'); }) ? 'Collapse All' : 'Expand All';
  refresh();
  syncAchievements(true);
})();
