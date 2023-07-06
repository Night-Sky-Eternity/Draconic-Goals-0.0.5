onEvent("recipes", (event) => {
    event.remove({ output: "iceandfire:dragonsteel_fire_ingot" })
    event.remove({ output: "iceandfire:dragonsteel_ice_ingot" })
    event.remove({ output: "iceandfire:dragonsteel_lightning_ingot" })
    event.remove({ output: "botania:gaia_ingot" })

    event.custom({
        type: "astralsorcery:altar",
        altar_type: 3,
        duration: 200,
        starlight: 4000,
        pattern: [
          "E_D_E", 
          "_CBC_", 
          "DBABD", 
          "_CBC_", 
          "E_D_E"
        ],
        key: {
          A: {
            item: "bloodmagic:masterbloodorb",
          },
          B: {
            item: "astralsorcery:illumination_powder"
          },
          C: {
            item: "astralsorcery:starmetal_ingot",
          },
          D: {
            item: "botania:elementium_ingot",
          },
          E: {
            item: "minecraft:netherite_ingot",
          },
        },
        output: [
          {
            item: "botania:gaia_ingot",
            count: 8,
          },
        ],
        focus_constellation: "astralsorcery:aevitas",
        relay_inputs: [
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
          },
          {
            item: "botania:life_essence",
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
          "astralsorcery:built_in_effect_attunement_sparkle",
        ],
      });

    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "fire",
        cook_time: 1000,
        input: {
          item: "botania:gaia_ingot"
        },
        blood: {
          item: "kubejs:dragon_fire_charge"
        },
        result: {
          item: "iceandfire:dragonsteel_fire_ingot"
        }
      })
      event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "ice",
        cook_time: 1000,
        input: {
          item: "botania:gaia_ingot"
        },
        blood: {
          item: "kubejs:dragon_ice_charge"
        },
        result: {
          item: "iceandfire:dragonsteel_ice_ingot"
        }
      })
      event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "lightning",
        cook_time: 1000,
        input: {
          item: "botania:gaia_ingot"
        },
        blood: {
          item: "kubejs:dragon_lightning_charge"
        },
        result: {
          item: "iceandfire:dragonsteel_lightning_ingot"
        }
      })
})