onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:soulforge" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 210,
      starlight: 2000,
      pattern: [
        "F___F", 
        "ED_DE",  
        "_BAB_", 
        "ECBCE", 
        "EE_EE"
      ],
      key: {
        A: {
          item: "bloodmagic:blankslate",
        },
        B: {
          tag: "forge:ingots/iron",
        },
        C: {
          item: "astralsorcery:stardust",
        },
        D: {
          item: "astralsorcery:nocturnal_powder",
        },
        E: {
            tag: "forge:stone",
        },
        F: {
          item: "botania:manasteel_ingot",
        },
      },
      output: [
        {
          item: "bloodmagic:soulforge",
          count: 1,
        },
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:focus_dust_swirl",
        "astralsorcery:focus_edge",
        "astralsorcery:altar_focus_sparkle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle",
      ],
    });
  });
  