onEvent("recipes", (event) => {
  event.remove({ output: "botania:glimmering_dreamwood" });
  event.custom({
    type: "botania:elven_trade",
    ingredients: [
      {
        item: "botania:glimmering_livingwood",
      },
    ],
    output: [
      {
        item: "botania:glimmering_dreamwood",
      },
    ],
  });
});
