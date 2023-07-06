onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentlava" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            item: "botania:rune_fire"
          },
          {
            tag: "forge:dusts/redstone"
          },
          {
            tag: "forge:cobblestone"
          },
          {
            tag: "forge:storage_blocks/coal"
          }
        ],
        output: {
          item: "bloodmagic:reagentlava"
        },
        syphon: 1000,
        ticks: 200,
        upgradeLevel: 1
      })
})