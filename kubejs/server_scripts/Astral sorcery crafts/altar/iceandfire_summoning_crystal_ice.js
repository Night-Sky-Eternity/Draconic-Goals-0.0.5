onEvent("recipes", (event) => {
  event.remove({ output: "iceandfire:summoning_crystal_ice" });
  event.custom({
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
        item: "botania:dragonstone",
      },
      C: {
        item: "minecraft:ender_pearl",
      },
      D: {
        item: "botania:pixie_dust",
      },
      E: {
        tag: "astralsorcery:stardust",
      },
      F: {
        item: "bloodmagic:teleposerfocus",
      },
    },
    output: [
      {
        item: "iceandfire:summoning_crystal_ice",
        count: 1,
      },
    ],
    relay_inputs: [
      {
        item: "kubejs:dragon_ice_charge",
      },
      {
        item: "kubejs:dragon_ice_charge",
      },
      {
        item: "kubejs:dragon_ice_charge",
      },
      {
        item: "kubejs:dragon_ice_charge",
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
});
