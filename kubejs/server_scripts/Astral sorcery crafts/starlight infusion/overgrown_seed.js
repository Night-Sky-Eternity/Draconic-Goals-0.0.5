onEvent("recipes", (event) => {
    event.custom({
      type: "astralsorcery:infuser",
      fluidInput: "astralsorcery:liquid_starlight",
      input: {
        item: "botania:grass_seeds"
      },
      output: {
        item: "botania:overgrowth_seed",
        count: 1
      },
      consumptionChance: 1,
      duration: 150,
      consumeMultipleFluids: false,
      acceptChaliceInput: true,
      copyNBTToOutputs: false
    });
  });
  