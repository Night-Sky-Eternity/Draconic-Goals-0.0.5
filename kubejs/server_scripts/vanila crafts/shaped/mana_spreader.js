onEvent("recipes", (event) => {
  event.remove({ output: "botania:mana_spreader" });
  event.shaped("botania:mana_spreader", [
    "AAA", 
    "BC ", 
    "AAA"
  ], {
    A: "botania:livingwood",
    B: "minecraft:gold_ingot",
    C: "astralsorcery:illumination_powder",
  });
});
