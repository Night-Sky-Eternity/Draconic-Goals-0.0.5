onEvent("recipes", (event) => {
    event.remove({ output: "botania:conjuration_catalyst" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 210,
      starlight: 3000,
      pattern: [
        "FG_GF", 
        "EDCDE", 
        "_BAB_", 
        "EDCDE", 
        "FG_GF"
      ],
      key: {
        A: {
          item: "botania:alchemy_catalyst",
        },
        B: {
          item: "bloodmagic:infusedslate",
        },
        C: {
          item: "astralsorcery:starmetal_ingot",
        },
        D: {
          item: "astralsorcery:nocturnal_powder",
        },
        E: {
          item: "botania:pixie_dust",
        },
        F: {
          item: "botania:livingrock",
        },
        G: {
          item: "botania:elementium_ingot"
        }
      },
      output: [
        {
          item: "botania:conjuration_catalyst",
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
  