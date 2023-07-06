onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:slate_vial" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 200,
      starlight: 1000,
      pattern: [
        "____A", 
        "___B_", 
        "__B__", 
        "_B___", 
        "C____"
      ],
      key: {
        A: {
          item: "bloodmagic:blankslate"
        },
        B: {
          tag: "forge:glass",
        },
        C: {
          item: "astralsorcery:illumination_powder",
        },
      },
      output: [
        {
          item:  "bloodmagic:slate_vial",
          count: 8,
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