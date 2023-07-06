onEvent("recipes", (event) => {
  event.remove({ output: "botania:natura_pylon" });
  event.custom({
    type: "astralsorcery:altar",
    altar_type: 2,
    duration: 200,
    starlight: 3000,
    pattern: [
      "DE_ED", 
      "E_C_E", 
      "_BAB_", 
      "E_C_E", 
      "DE_ED"
    ],
    key: {
      A: {
        item: "botania:mana_pylon",
      },
      B: {
        item: "minecraft:ender_eye",
      },
      C: {
        tag: "bloodmagic:crystals/demon",
      },
      D: {
        item: "botania:glimmering_livingwood",
      },
      E: {
        item: "botania:terrasteel_nugget",
      },
    },
    output: [
      {
        item: "botania:natura_pylon",
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
