onEvent("recipes", (event) => {
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 200,
      starlight: 2500,
      pattern: [
        "DE_ED",
        "E__BE",
        "__BB_",
        "EAB_E",
        "DE_ED"
      ],
      key: {
        A: {
          tag: "forge:rods/wooden"
        },
        B: {
          item: "iceandfire:dragonbone"
        },
        D: {
          item: "botania:dragonstone"
        },
        E: {
          tag: "astralsorcery:stardust"
        }
      },
      output: [
        {
          item: "iceandfire:dragon_horn",
          count: 1
        }
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:focus_dust_swirl",
        "astralsorcery:focus_edge",
        "astralsorcery:altar_focus_sparkle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  );
  event.remove({output: "iceandfire:dragon_stick"})
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 200,
      starlight: 2500,
      pattern: [
        "DE_ED",
        "E_A_E",
        "_CBC_",
        "E_B_E",
        "DE_ED"
      ],
      key: {
        A: {
          tag: "iceandfire:dragon_skulls"
        },
        B: {
          tag: "forge:rods/wooden"
        },
        C: {
          tag: "forge:gems/aquamarine"
        },
        D: {
          item: "botania:dragonstone"
        },
        E: {
          tag: "astralsorcery:stardust"
        }
      },
      output: [
        {
          item: "iceandfire:dragon_stick",
          count: 1
        }
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:focus_dust_swirl",
        "astralsorcery:focus_edge",
        "astralsorcery:altar_focus_sparkle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  );
  event.remove({output: "iceandfire:summoning_crystal_fire"})
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 3,
      duration: 200,
      starlight: 3200,
      pattern: [
        "DEFED",
        "E_C_E",
        "FCACF",
        "E_C_E",
        "DEFED"
      ],
      key: {
        A: {
          item: "botania:dragonstone"
        },
        C: {
          item: "minecraft:ender_pearl"
        },
        D: {
          item: "botania:pixie_dust"
        },
        E: {
          tag: "astralsorcery:stardust"
        },
        F: {
          item: "bloodmagic:teleposerfocus"
        }
      },
      output: [
        {
          item: "iceandfire:summoning_crystal_fire",
          count: 1
        }
      ],
      relay_inputs: [
        {
          item: "kubejs:dragon_fire_charge"
        },
        {
          item: "kubejs:dragon_fire_charge"
        },
        {
          item: "kubejs:dragon_fire_charge"
        },
        {
          item: "kubejs:dragon_fire_charge"
        },
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:focus_dust_swirl",
        "astralsorcery:focus_edge",
        "astralsorcery:altar_focus_sparkle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  );
  event.remove({output: "iceandfire:summoning_crystal_ice"})
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 3,
      duration: 200,
      starlight: 3200,
      pattern: [
        "DEFED",
        "E_C_E",
        "FCACF",
        "E_C_E",
        "DEFED"
      ],
      key: {
        A: {
          item: "botania:dragonstone"
        },
        C: {
          item: "minecraft:ender_pearl"
        },
        D: {
          item: "botania:pixie_dust"
        },
        E: {
          tag: "astralsorcery:stardust"
        },
        F: {
          item: "bloodmagic:teleposerfocus"
        }
      },
      output: [
        {
          item: "iceandfire:summoning_crystal_ice",
          count: 1
        }
      ],
      relay_inputs: [
        {
          item: "kubejs:dragon_ice_charge"
        },
        {
          item: "kubejs:dragon_ice_charge"
        },
        {
          item: "kubejs:dragon_ice_charge"
        },
        {
          item: "kubejs:dragon_ice_charge"
        },
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:focus_dust_swirl",
        "astralsorcery:focus_edge",
        "astralsorcery:altar_focus_sparkle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  );
  event.remove({output: "iceandfire:summoning_crystal_lightning"})
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 3,
      duration: 200,
      starlight: 3200,
      pattern: [
        "DEFED",
        "E_C_E",
        "FCACF",
        "E_C_E",
        "DEFED"
      ],
      key: {
        A: {
          item: "botania:dragonstone"
        },
        C: {
          item: "minecraft:ender_pearl"
        },
        D: {
          item: "botania:pixie_dust"
        },
        E: {
          tag: "astralsorcery:stardust"
        },
        F: {
          item: "bloodmagic:teleposerfocus"
        }
      },
      output: [
        {
          item: "iceandfire:summoning_crystal_lightning",
          count: 1
        }
      ],
      relay_inputs: [
        {
          item: "kubejs:dragon_lightning_charge"
        },
        {
          item: "kubejs:dragon_lightning_charge"
        },
        {
          item: "kubejs:dragon_lightning_charge"
        },
        {
          item: "kubejs:dragon_lightning_charge"
        },
      ],
      effects: [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:focus_dust_swirl",
        "astralsorcery:focus_edge",
        "astralsorcery:altar_focus_sparkle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  );
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 300,
      starlight: 2500,
      pattern: [
        "DE_ED",
        "ECBCE",
        "_BAB_",
        "ECFCE",
        "DE_ED"
      ],
      key: {
        A: {
          item: "iceandfire:fire_dragon_blood"
        },
        B: {
          item: "iceandfire:fire_lily"
        },
        C: {
          tag: "astralsorcery:stardust"
        },
        D: {
          tag: "forge:gems/emerald"
        },
        E: {
          item: "botania:pixie_dust"
        },
        F: {
          item: "minecraft:dragon_breath"
        }
      },
      output: [
        {
          item: "kubejs:dragon_fire_charge",
          count: 8
        }
      ],
      effects: [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_attunement_sparkle",
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:luminescence_flare",
        "astralsorcery:focus_dust_swirl",
      ]
    }
  );
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 2,
      duration: 300,
      starlight: 2500,
      pattern: [
        "DE_ED",
        "ECBCE",
        "_BAB_",
        "ECFCE",
        "DE_ED"
      ],
      key: {
        A: {
          item: "iceandfire:ice_dragon_blood"
        },
        B: {
          item: "iceandfire:frost_lily"
        },
        C: {
          tag: "astralsorcery:stardust"
        },
        D: {
          tag: "forge:gems/sapphire"
        },
        E: {
          item: "botania:pixie_dust"
        },
        F: {
          item: "minecraft:dragon_breath"
        }
      },
      output: [
        {
          item: "kubejs:dragon_ice_charge",
          count: 8
        }
      ],
      effects: [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_attunement_sparkle",
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:luminescence_flare",
        "astralsorcery:focus_dust_swirl",
      ]
    }
  )
  
  event.custom(
    {
      type: "astralsorcery:altar",
      altar_type: 3,
      duration: 500,
      starlight: 3500,
      pattern: [
        "DE_ED",
        "ECBCE",
        "_BAB_",
        "ECFCE",
        "DE_ED"
      ],
      key: {
        A: {
          item: "iceandfire:lightning_dragon_blood"
        },
        B: {
          item: "iceandfire:frost_lily"
        },
        C: {
          tag: "astralsorcery:stardust"
        },
        D: {
          tag: "forge:gems/amethyst"
        },
        E: {
          item: "botania:pixie_dust"
        },
        F: {
          item: "minecraft:dragon_breath"
        }
      },
      output: [
        {
          item: "kubejs:dragon_lightning_charge",
          count: 8
        }
      ],
      effects: [
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_attunement_sparkle",
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:luminescence_flare",
        "astralsorcery:focus_dust_swirl",
      ]
    }
  )
})