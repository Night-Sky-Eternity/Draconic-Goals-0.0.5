onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:apprenticebloodorb" });
    event.custom({
        type: "bloodmagic:altar",
        input: {
          item: "astralsorcery:stardust"
        },
        output: {
          item: "bloodmagic:apprenticebloodorb"
        },
        upgradeLevel: 1,
        altarSyphon: 5000,
        consumptionRate: 5,
        drainRate: 5
      })
})