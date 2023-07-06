onEvent("recipes", (event) => {
    event.custom({
      type: "botania:elven_trade",
      ingredients: [
        {
          tag: "forge:ingots/gold",
        },
      ],
      output: [
        {
          item: "create:brass_ingot",
        },
      ],
    });
    event.custom({
        type: "botania:elven_trade",
        ingredients: [
          {
            tag: "forge:storage_blocks/gold",
          },
        ],
        output: [
          {
            item: "create:brass_block",
          },
        ],
      });
  });