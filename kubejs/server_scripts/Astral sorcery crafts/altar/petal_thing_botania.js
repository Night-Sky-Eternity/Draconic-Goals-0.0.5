onEvent("recipes", (event) => {
    event.remove({ output: "botania:apothecary_default" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 200,
      starlight: 100,
      pattern: [
        "D___D", 
        "_DCD_", 
        "_BAB_", 
        "_BBB_", 
        "B___B"
      ],
      key: {
        A: {
            item: "astralsorcery:illumination_powder"
        },
        B: {
            tag: "forge:cobblestone"
        },
        C: {
            tag: "botania:petals"
        },
        D: {
          item: "minecraft:cobblestone_slab",
        }
      },
      output: [
        {
          item: "botania:apothecary_default",
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
  