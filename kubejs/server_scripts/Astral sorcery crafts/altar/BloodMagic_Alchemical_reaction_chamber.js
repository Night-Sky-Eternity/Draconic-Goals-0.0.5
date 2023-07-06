onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:alchemicalreactionchamber" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 250,
      starlight: 2000,
      pattern: [
        "JJ_JJ", 
        "JEFEJ", 
        "_BAB_", 
        "JCDCJ", 
        "JJ_JJ"
      ],
      key: {
        A: {
            type: "bloodmagic:bloodorb",
            orb_tier: 3
        },
        B: {
          item: "bloodmagic:infusedslate",
        },
        C: {
          item: "botania:terrasteel_nugget",
        },
        D: {
          item: "minecraft:iron_block",
        },
        E: {
          item: "astralsorcery:nocturnal_powder",
        },
        F: {
          item: "astralsorcery:starmetal_ingot"
        },
        J: {
          tag:"forge:stone"
        }
      },
      output: [
        {
          item: "bloodmagic:alchemicalreactionchamber" ,
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
  