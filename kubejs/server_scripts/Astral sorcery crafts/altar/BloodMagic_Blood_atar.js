onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:altar" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 180,
      starlight: 800,
      pattern: [
        "D___D", 
        "_B_B_", 
        "_B_B_", 
        "_AAA_", 
        "C___C"
      ],
      key: {
        A: {
          tag: "forge:ingots/iron",
        },
        B: {
          tag: "forge:stone",
        },
        C: {
          item: "astralsorcery:nocturnal_powder",
        },
        D: {
          tag: "botania:petals/red",
        },
      },
      output: [
        {
          item: "bloodmagic:altar",
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
  