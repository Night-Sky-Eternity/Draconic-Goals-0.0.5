onEvent("recipes", (event) => {
    event.custom({
      type: "astralsorcery:liquid_interaction",
      reactant1: "astralsorcery:liquid_starlight",
      reactant1Amount: 10,
      reactant2: "create:honey",
      reactant2Amount: 10,
      chanceConsumeReactant1: 0.15,
      chanceConsumeReactant2: 0.15,
      weight: 32,
      result: {
        id: "astralsorcery:drop_item",
        data: {
          output: {
            item: "minecraft:honey_block",
            count: 1
          }
        }
      }
    })
    event.custom({
        type: "astralsorcery:liquid_interaction",
        reactant1: "astralsorcery:liquid_starlight",
        reactant1Amount: 10,
        reactant2: "create:honey",
        reactant2Amount: 10,
        chanceConsumeReactant1: 0.15,
        chanceConsumeReactant2: 0.15,
        weight: 1,
        result: {
          id: "astralsorcery:drop_item",
          data: {
            output: {
              item: "minecraft:honeycomb",
              count: 1
            }
          }
        }
      })
});