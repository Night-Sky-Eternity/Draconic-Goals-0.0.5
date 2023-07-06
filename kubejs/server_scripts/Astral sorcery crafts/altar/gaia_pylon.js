onEvent("recipes", (event) => {
  event.remove({ output: "botania:gaia_pylon" });
  event.custom({
    type: "astralsorcery:altar",
    altar_type: 2,
    duration: 200,
    starlight: 3000,
    pattern: [
      "FD_DF", 
      "EDCDE", 
      "_BAB_", 
      "EDCDE", 
      "FD_DF"
    ],
    key: {
      A: {
        item: "botania:mana_pylon",
      },
      B: {
        item: "botania:pixie_dust",
      },
      C: {
        tag: "bloodmagic:crystals/demon",
      },
      D: {
        item: "botania:elementium_ingot",
      },
      E: {
        item: "astralsorcery:resonating_gem",
      },
      F: {
        item: "astralsorcery:illumination_powder",
      },
    },
    output: [
      {
        item: "botania:gaia_pylon",
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
