onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:incensealtar" });
    event.custom({
      type: "astralsorcery:altar",
      altar_type: 1,
      duration: 170,
      starlight: 900,
      pattern: [
        "E___E", 
        "_D_D_", 
        "_DAD_", 
        "_CBC_", 
        "F___F"
      ],
      key: {
        A: {
            tag: "minecraft:coals"
        },
        B: {
            type: "bloodmagic:bloodorb",
            orb_tier: 0
        },
        C: {
            tag: "forge:cobblestone"
        },
        D: {
            item: "botania:livingrock",
        },
        E: {
            tag: "botania:petals/yellow"
        },
        F: {
            item: "botania:mana_powder"
        }
      },
      output: [
        {
          item:  "bloodmagic:incensealtar",
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