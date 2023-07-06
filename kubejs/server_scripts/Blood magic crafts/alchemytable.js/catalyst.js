onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:simplecatalyst" });
    event.custom({
        "type": "bloodmagic:alchemytable",
        "input": [
          {
            item: "minecraft:sugar"
          },
          {
            tag: "forge:dusts/redstone"
          },
          {
            tag: "forge:dusts/glowstone"
          },
          {
            tag: "forge:gunpowder"
          },
          {
            tag: "forge:crops/nether_wart"
          },
          {
            item: "astralsorcercy:stardust"
          }
        ],
        output: {
          item: "bloodmagic:simplecatalyst",
          count: 2
        },
        syphon: 200,
        ticks: 100,
        upgradeLevel: 2
    })

})