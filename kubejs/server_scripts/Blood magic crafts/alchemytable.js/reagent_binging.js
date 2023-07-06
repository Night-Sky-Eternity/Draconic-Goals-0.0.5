onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:reagentbinding" });
    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
          {
            item: "astralsorcery:illumination_powder"
          },
          {
            tag: "forge:dusts/redstone"
          },
          {
            tag: "forge:gunpowder"
          },
          {
            tag: "forge:nuggets/gold"
          },
          {
            tag: "astralsorcery:stardust",
          },
          {
            item: "botania:pixie_dust",
          }
        ],
        output: {
          item: "bloodmagic:reagentbinding"
        },
        syphon: 1000,
        ticks: 200,
        upgradeLevel: 3
      })
})