onEvent("recipes", (event) => {
    event.remove({ output: "botania:runic_altar" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 200,
      starlight: 800,
      pattern: [
        "_____", 
        "_____", 
        "_BBB_", 
        "_CAC_", 
        "B___B"
      ],
      key: {
        A: [
            {
                item: "botania:mana_pearl"
            },
            {
                item: "botania:mana_diamond"
            }
        ],
        B: {
          item: "botania:livingrock",
        },
        C: {
          item: "bloodmagic:blankslate",
        },
      },
      output: [
        {
          item: "botania:runic_altar",
          count: 1,
        },
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
      ],
    });
  });
  