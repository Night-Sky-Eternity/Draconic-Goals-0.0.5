onEvent("recipes", (event) => {
    event.remove({ output: "botania:rune_water" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "botania:rune_water",
          count: 2
        },
        mana: 5200,
        ingredients: [
          {
            tag: "forge:dusts/mana"
          },
          {
            tag: "forge:ingots/manasteel"
          },
          {
            item: "minecraft:bone_meal"
          },
          {
            item: "minecraft:sugar_cane"
          },
          {
            item: "astralsorcery:aquamarine"
          }
        ]
      })
})