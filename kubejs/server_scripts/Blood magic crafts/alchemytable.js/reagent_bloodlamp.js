onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentbloodlight" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            item: "astralsorcery:illumination_powder"
          },
          {
            item: "minecraft:torch"
          },
          {
            tag: "forge:dusts/redstone"
          },
          {
            tag: "forge:dusts/redstone"
          }
        ],
        output: {
          item: "bloodmagic:reagentbloodlight"
        },
        syphon: 1000,
        ticks: 200,
        upgradeLevel: 3
      })
})