onEvent("recipes", (event) => {
  event.remove({ output: "botania:mana_pool" });
  event.shaped("botania:mana_pool", [
    "   ", 
    "BAB", 
    "BBB"
  ], {
    A: "astralsorcery:aquamarine",
    B: "botania:livingrock",
  });
});
