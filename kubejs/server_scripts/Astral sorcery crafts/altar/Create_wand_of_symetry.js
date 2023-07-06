onEvent("recipes", (event) => {
    event.remove({ output: "create:wand_of_symmetry" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 200,
      starlight: 500,
      pattern: [
        "F__DE", 
        "__DED", 
        "_DAD_", 
        "ACD__", 
        "BA__F"
      ],
      key: {
        A: {
            tag: "forge:ingots/brass"
        },
        B: {
            item: "iceandfire:witherbone"
        },
        C: {
            item: "minecraft:obsidian"
        },
        D: {
            tag: "forge:rods/wooden"
        },
        E: {
            item: "astralsorcery:glass_lens"
        },
        F: {
            item: "astralsorcery:illumination_powder"
        }
      },
      output: [
        {
          item: "create:wand_of_symmetry",
          count: 1,
        },
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle",
      ],
    });
  });
  