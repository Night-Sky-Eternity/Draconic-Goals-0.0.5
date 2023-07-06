onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentair" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            item: "minecraft:ghast_tear"
          },
          {
            tag: "forge:feathers"
          },
          {
            item: "botania:rune_air"
          }
        ],
        output: {
          item: "bloodmagic:reagentair"
        },
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 2
      })
})