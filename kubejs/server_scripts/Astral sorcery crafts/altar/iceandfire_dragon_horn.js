onEvent("recipes", (event) => {
  event.remove({ output: "iceandfire:dragon_horn" });
  event.custom({
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
        tag: "forge:rods/wooden",
      },
      B: {
        item: "iceandfire:dragonbone",
      },
      D: {
        item: "botania:dragonstone",
      },
      E: {
        tag: "astralsorcery:stardust",
      },
    },
    output: [
      {
        item: "iceandfire:dragon_horn",
        count: 1,
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
