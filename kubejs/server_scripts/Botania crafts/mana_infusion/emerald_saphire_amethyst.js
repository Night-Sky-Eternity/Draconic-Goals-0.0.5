onEvent("recipes", (event) => {
    event.custom({
        type: "botania:mana_infusion",
        input: {
            item: "iceandfire:sapphire_gem"
        },
        output: {
          item: "minecraft:emerald"
        },
        mana: 1200,
        catalyst: {
          type: "block",
          block: "botania:alchemy_catalyst"
        }
      })
      event.custom({
        type: "botania:mana_infusion",
        input: {
            item: "minecraft:emerald"
        },
        output: {
          item: "iceandfire:amythest_gem"
        },
        mana: 1200,
        catalyst: {
          type: "block",
          block: "botania:alchemy_catalyst"
        }
      })
      event.custom({
        type: "botania:mana_infusion",
        input: {
            item: "iceandfire:amythest_gem"
        },
        output: {
          item: "iceandfire:sapphire_gem"
        },
        mana: 1200,
        catalyst: {
          type: "block",
          block: "botania:alchemy_catalyst"
        }
      })
})