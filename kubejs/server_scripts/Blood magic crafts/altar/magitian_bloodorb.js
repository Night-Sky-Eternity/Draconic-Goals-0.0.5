onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:magicianbloodorb" });
    event.custom({
        type: "bloodmagic:altar",
        input: {
          item: "botania:dragonstone"
        },
        output: {
          item: "bloodmagic:magicianbloodorb"
        },
        upgradeLevel: 2,
        altarSyphon: 25000,
        consumptionRate: 20,
        drainRate: 20
      })
})