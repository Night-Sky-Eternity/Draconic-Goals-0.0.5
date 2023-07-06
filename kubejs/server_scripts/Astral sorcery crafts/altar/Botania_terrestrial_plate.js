onEvent("recipes", (event) => {
    event.remove({ output: "botania:terra_plate" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 200,
      starlight: 2000,
      pattern: [
        "_____", 
        "BBBBB", 
        "_DAD_", 
        "1C5C3", 
        "2B_B4"
      ],
      key: {
        A: {
          item: "botania:manasteel_block",
        },
        B: {
          item: "minecraft:lapis_block",
        },
        C: {
          item: "bloodmagic:blankrune",
        },
        D: {
          item: "astralsorcery:starmetal_ingot",
        },
        1: {
          item: "botania:rune_water",
        },
        2: {
          item: "botania:rune_earth",
        },
        3: {
          item: "botania:rune_fire",
        },
        4: {
          item: "botania:rune_air",
        },
        5: {
          item: "botania:rune_mana",
        },
      },
      output: [
        {
          item: "botania:terra_plate",
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
  