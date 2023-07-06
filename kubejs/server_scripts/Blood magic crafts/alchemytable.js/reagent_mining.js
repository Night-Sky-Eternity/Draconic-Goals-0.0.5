onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentfastminer" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            item: "minecraft:iron_pickaxe"
          },
          {
            item: "minecraft:iron_axe"
          },
          {
            item: "botania:rune_earth"
          },
          {
            tag: "forge:gunpowder"
          }
        ],
        output: {
          item: "bloodmagic:reagentfastminer"
        },
        syphon: 2000,
        ticks: 200,
        upgradeLevel: 2
      })
})