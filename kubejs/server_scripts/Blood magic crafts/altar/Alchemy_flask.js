onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:alchemy_flask" });
    event.custom({
        type: "bloodmagic:altar",
        input: {
          item: "botania:vial"
        },
        output: {
          item: "bloodmagic:alchemy_flask",
          nbt: "{Damage:0}"
        },
        upgradeLevel: 1,
        altarSyphon: 4000,
        consumptionRate: 5,
        drainRate: 5
    })
})