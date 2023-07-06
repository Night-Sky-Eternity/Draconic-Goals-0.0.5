onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentgrowth" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            tag: "minecraft:saplings"
          },
          {
            item: "botania:rune_spring"
          },
          {
            item: "minecraft:sugar_cane"
          },
          {
            item: "minecraft:sugar"
          }
        ],
        output: {
          item: "bloodmagic:reagentgrowth"
        },
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 2
      })
})