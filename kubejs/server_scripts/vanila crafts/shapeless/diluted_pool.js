onEvent("recipes", (event) => {
  event.remove({ output: "botania:diluted_pool" });
  event.shapeless("2x botania:diluted_pool", ["botania:mana_pool"]);
});
