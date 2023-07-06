onEvent("recipes", (event) => {
    event.custom({
        type: "create:crushing",
        ingredients: [
          {
            item: "astralsorcery:starmetal_ore"
          }
        ],
        results: [
          {
            item: "astralsorcery:stardust"
          },
          {
            item: "astralsorcery:stardust",
            count: 2,
            chance: 0.3
          },
          {
            item: "minecraft:cobblestone",
            chance: 0.125
          }
        ],
        processingTime: 400,
        conditions: [
          {
            value: {
              tag: "forge:ores/starmetal",
              type: "forge:tag_empty"
            },
            type: "forge:not"
          }
        ]
      })
})