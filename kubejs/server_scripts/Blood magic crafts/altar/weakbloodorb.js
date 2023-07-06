onEvent("recipes", (event) => {
  event.remove({ output: "bloodmagic:weakbloodorb" });
  event.custom({
    type: "bloodmagic:altar",
    input: {
      item: "botania:mana_diamond",
    },
    output: {
      item: "bloodmagic:weakbloodorb",
    },
    upgradeLevel: 0,
    altarSyphon: 2000,
    consumptionRate: 5,
    drainRate: 1,
  });
});
