onEvent("recipes", (event) => {
    event.remove({ output: "botania:gaia_spreader" });
    event.custom({
        type: "astralsorcery:altar",
        altar_type: 3,
        duration: 300,
        starlight: 3200,
        pattern: [
          "__A__", 
          "_CBC_", 
          "ABDBA", 
          "_CBC_", 
          "__A__"
        ],
        key: {
          A: {
            item: "botania:bifrost_perm",
          },
          B: {
            item: "astralsorcery:stardust"
          },
          C: {
            item: "botania:elven_spreader",
          },
          D: {
            item: "botania:life_essence",
          },
        },
        output: [
          {
            item: "botania:gaia_spreader",
            count: 4,
          },
        ],
        focus_constellation: "astralsorcery:aevitas",
        relay_inputs: [
          {
            item: "botania:pixie_dust",
          },
          {
            item: "botania:pixie_dust",
          },
          {
            item: "botania:pixie_dust",
          },
          {
            item: "botania:pixie_dust",
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
  