onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:soulsnare" });
    event.custom({
        type: "bloodmagic:altar",
        input: {
          item: "botania:mana_string"
        },
        output: {
          item: "bloodmagic:soulsnare"
        },
        upgradeLevel: 0,
        altarSyphon: 500,
        consumptionRate: 5,
        drainRate: 1
      })
})