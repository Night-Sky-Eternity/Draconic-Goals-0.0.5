onEvent("recipes", (event) => {
    event.remove({ output: "botania:alchemy_catalyst" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 200,
      starlight: 1000,
      pattern: [
        "D___D", 
        "_CBC_", 
        "_BAB_", 
        "_CBC_", 
        "D___D"
      ],
      key: {
        A: {
          item: "bloodmagic:reinforcedslate"
        },
        B: {
          item: "astralsorcery:nocturnal_powder",
        },
        C: {
          item: "astralsorcery:illumination_powder",
        },
        D: {
          item: "botania:livingrock",
        },
      },
      output: [
        {
          item:  "botania:alchemy_catalyst",
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