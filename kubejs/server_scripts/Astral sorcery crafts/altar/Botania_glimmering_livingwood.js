onEvent("recipes", (event) => {
  event.remove({ output: "botania:glimmering_livingwood" });
  event.custom({
    type: "astralsorcery:altar",
    altar_type: 1,
    duration: 200,
    starlight: 1000,
    pattern: [
        "D___D", 
        "_BCB_", 
        "_CAC_", 
        "_BCB_", 
        "D___D"
    ],
    key: {
      A: {
        item: "astralsorcery:resonating_gem",
      },
      B: {
        item: "botania:terrasteel_nugget",
      },
      C: {
        item: "botania:livingwood",
      },
      D: {
        item: "astralsorcery:illumination_powder",
      },
    },
    output: [
      {
        item: "botania:glimmering_livingwood",
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
});
