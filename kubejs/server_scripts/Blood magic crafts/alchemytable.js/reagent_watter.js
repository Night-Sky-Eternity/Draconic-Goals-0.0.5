onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentwater" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            item: "minecraft:sugar"
          },
          {
            item: "botania:rune_water"
          },
        ],
        output: {
          item: "bloodmagic:reagentwater"
        },
        syphon: 300,
        ticks: 200,
        upgradeLevel: 1
      })
})