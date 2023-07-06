onEvent("recipes", (event) => {
    event.remove({ output: "botania:elven_spreader" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 230,
      starlight: 2200,
      pattern: [
        "DD_DD", 
        "DDCDD", 
        "_BA__", 
        "DDCDD", 
        "DD_DD"
      ],
      key: {
        A: {
          item: "astralsorcery:resonating_gem",
        },
        B: {
          item: "botania:elementium_ingot",
        },
        C: {
          item: "botania:glimmering_dreamwood",
        },
        D: {
          item: "botania:dreamwood",
        },
      },
      output: [
        {
          item: "botania:elven_spreader",
          count: 3,
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