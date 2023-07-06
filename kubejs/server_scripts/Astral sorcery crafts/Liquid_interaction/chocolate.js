onEvent("recipes", (event) => {
    event.custom({
      type: "astralsorcery:liquid_interaction",
      reactant1: "astralsorcery:liquid_starlight",
      reactant1Amount: 10,
      reactant2: "create:chocolate",
      reactant2Amount: 10,
      chanceConsumeReactant1: 0.15,
      chanceConsumeReactant2: 0.15,
      weight: 1,
      result: {
        id: "astralsorcery:drop_item",
        data: {
          output: {
            item: "create:bar_of_chocolate",
            count: 1
          }
        }
      }
    })
});