onEvent("recipes", (event) => {
    event.custom({
        type: "create:milling",
        ingredients: [
          {
            item: "astralsorcery:starmetal_ore"
          }
        ],
        results: [
          {
            item: "astralsorcery:stardust"
          }
        ],
        processingTime: 400,
        conditions: [
          {
            value: {
              tag: "forge:ores/starmetal",
              type: "forge:tag_empty"
            },
            "type": "forge:not"
          }
        ]
    })
    event.custom({
        type: "create:milling",
        ingredients: [
          {
            item: "astralsorcery:starmetal_ingot"
          }
        ],
        results: [
          {
            item: "astralsorcery:stardust"
          }
        ],
        processingTime: 400,
        conditions: [
          {
            value: {
              tag: "forge:ingots/starmetal",
              type: "forge:tag_empty"
            },
            "type": "forge:not"
          }
        ]
    })
})