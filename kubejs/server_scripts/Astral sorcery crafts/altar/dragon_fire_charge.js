onEvent("recipes", (event) => {
  event.custom({
    type: "astralsorcery:altar",
    altar_type: 2,
    duration: 300,
    starlight: 2500,
    pattern: [
      "DE_ED", 
      "ECBCE", 
      "_BAB_", 
      "ECFCE", 
      "DE_ED"],
    key: {
      A: {
        item: "iceandfire:fire_dragon_blood",
      },
      B: {
        item: "iceandfire:fire_lily",
      },
      C: {
        tag: "astralsorcery:stardust",
      },
      D: {
        tag: "forge:gems/emerald",
      },
      E: {
        item: "botania:pixie_dust",
      },
      F: {
        item: "minecraft:dragon_breath",
      },
    },
    output: [
      {
        item: "kubejs:dragon_fire_charge",
        count: 8,
      },
    ],
    effects: [
      "astralsorcery:built_in_effect_discovery_central_beam",
      "astralsorcery:built_in_effect_attunement_sparkle",
      "astralsorcery:built_in_effect_constellation_finish",
      "astralsorcery:built_in_effect_trait_relay_highlight",
      "astralsorcery:luminescence_flare",
      "astralsorcery:focus_dust_swirl",
    ],
  });
});
