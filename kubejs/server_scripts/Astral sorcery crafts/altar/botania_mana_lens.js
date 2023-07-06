onEvent("recipes", (event) => {
    event.remove({ output: "botania:lens_normal" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 200,
      starlight: 1500,
      pattern: [
        "B___B", 
        "__C__", 
        "_CAC_", 
        "__C__", 
        "B___B"
      ],
      key: {
        A: {
            item: "astralsorcery:glass_lens"
        },
        B: {
            item: "astralsorcery:illumination_powder"
        },
        C: {
            item: "botania:manasteel_ingot"
        },
      },
      output: [
        {
          item: "botania:lens_normal",
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
  