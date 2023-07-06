onEvent("recipes", (event) => {
  
    event.custom({
      type: "astralsorcery:infuser",
      fluidInput: "astralsorcery:liquid_starlight",
      input: {
        item: "bloodmagic:weak_tau"
      },
      output: {
        item: "bloodmagic:strong_tau",
        count: 1
      },
      consumptionChance: 1,
      duration: 150,
      consumeMultipleFluids: false,
      acceptChaliceInput: true,
      copyNBTToOutputs: false
    });
  });
  