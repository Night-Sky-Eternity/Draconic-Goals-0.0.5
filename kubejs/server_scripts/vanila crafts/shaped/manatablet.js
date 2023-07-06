onEvent("recipes", (event) => {
    event.remove({ output: "botania:mana_tablet" });
    event.shaped("botania:mana_tablet", [
      "BBB", 
      "BAB", 
      "BBB"
    ], {
      A: "astralsorcery:aquamarine",
      B: "botania:livingrock",
    });
  });
  