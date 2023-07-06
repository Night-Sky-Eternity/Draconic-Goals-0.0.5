onEvent("recipes", (event) => {
    event.remove({ output: "botania:brewery" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 200,
      starlight: 800,
      pattern: [
        "D___D", 
        "_EBE_", 
        "_FAF_", 
        "_ECE_", 
        "D___D"
      ],
      key: {
        A: {
            item: "minecraft:blaze_rod"
        },
        B: {
            item: "botania:rune_mana",
        },
        C: {
            item: "bloodmagic:reinforcedslate"
        },
        D: {
          item: "botania:livingrock_slab",
        },
        E: {
            item: "botania:livingrock"
        }, 
        F: {
            item: "botania:mana_diamond"
        }
      },
      output: [
        {
          item:  "botania:brewery",
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