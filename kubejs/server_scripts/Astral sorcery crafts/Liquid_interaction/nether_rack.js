onEvent("recipes", (event) => {
    event.custom({
        type: "astralsorcery:liquid_interaction",
        reactant1: "astralsorcery:liquid_starlight",
        reactant1Amount: 10,
        reactant2: "bloodmagic:life_essence_fluid",
        reactant2Amount: 10,
        chanceConsumeReactant1: 0.15,
        chanceConsumeReactant2: 0.15,
        weight: 99,
        result: {
          id: "astralsorcery:drop_item",
          data: {
            output: {
              item: "minecraft:netherrack",
              count: 1
            }
          }
        }
      })
      event.custom({
        type: "astralsorcery:liquid_interaction",
        reactant1: "astralsorcery:liquid_starlight",
        reactant1Amount: 10,
        reactant2: "bloodmagic:life_essence_fluid",
        reactant2Amount: 10,
        chanceConsumeReactant1: 0.15,
        chanceConsumeReactant2: 0.15,
        weight: 1,
        result: {
          id: "astralsorcery:drop_item",
          data: {
            output: {
              item: "bloodmagic:weakbloodshard",
              count: 1
            }
          }
        }
      })
  });
  