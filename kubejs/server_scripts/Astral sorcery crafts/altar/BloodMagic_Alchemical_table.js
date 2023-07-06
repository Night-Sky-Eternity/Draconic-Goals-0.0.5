onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:alchemytable" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 200,
      starlight: 1000,
      pattern: [
        "F___F", 
        "_EEE_", 
        "_BAB_", 
        "_CDC_", 
        "E___E"
      ],
      key: {
        A: {
          tag: "forge:ingots/copper",
        },
        B: {
          item: "astralsorcery:nocturnal_powder",
        },
        C: {
          item: "botania:manasteel_ingot",
        },
        D: {
          item: "bloodmagic:blankslate",
        },
        E: {
          tag: "forge:stone",
        },
        F: {
          item: "botania:red_petal"
        }
      },
      output: [
        {
          item: "bloodmagic:alchemytable",
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
})