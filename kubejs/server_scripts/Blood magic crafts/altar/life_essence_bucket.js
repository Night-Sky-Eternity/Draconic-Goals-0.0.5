onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:life_essence_bucket" });
    event.custom({
        type: "bloodmagic:altar",
        input: {
          item: "minecraft:bucket"
        },
        output: {
          item: "bloodmagic:life_essence_bucket"
        },
        upgradeLevel: 3,
        altarSyphon: 1000,
        consumptionRate: 5,
        drainRate: 0
      })
})