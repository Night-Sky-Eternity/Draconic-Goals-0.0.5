onEvent("recipes", (event) => {
    event.remove({ output: "botania:spark" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 200,
      starlight: 1000,
      pattern: [
        "CD_DC", 
        "D_B_D", 
        "_BAB_", 
        "D_B_D", 
        "CD_DC"
      ],
      key: {
        A: {
          tag: "forge:gems/aquamarine",
        },
        B: {
          item: "astralsorcery:illumination_powder",
        },
        C: {
            tag: "botania:petals",
        },
        D: {
          item: "minecraft:blaze_powder",
        },
      },
      output: [
        {
          item: "botania:spark",
          count: 2,
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
})