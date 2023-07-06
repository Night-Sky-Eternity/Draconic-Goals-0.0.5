onEvent("recipes", (event) => {
  event.remove({ output: "botania:mana_pylon" });
  event.custom({
    type: "astralsorcery:altar",
    altar_type: 1,
    duration: 200,
    starlight: 1000,
    pattern: [
      "D___D", 
      "_BCB_", 
      "_EAE_", 
      "_BCB_", 
      "D___D"
    ],
    key: {
      A: {
        item: "bloodmagic:simplecatalyst",
      },
      B: {
        item: "astralsorcery:illumination_powder",
      },
      C: {
        item: "botania:manasteel_ingot",
      },
      D: {
        item: "botania:mana_powder",
      },
      E: {
        tag: "forge:ingots/gold",
      },
    },
    output: [
      {
        item: "botania:mana_pylon",
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
