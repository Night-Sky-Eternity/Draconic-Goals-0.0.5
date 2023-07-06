onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:soulgempetty" });
    event.custom({
        type: "bloodmagic:soulforge",
        input0: {
          tag: "forge:dusts/redstone"
        },
        input1: {
          tag: "forge:ingots/gold"
        },
        input2: {
            item: "botania:mana_powder"
        },
        input3: {
          tag: "forge:gems/lapis"
        },
        output: {
          item: "bloodmagic:soulgempetty"
        },
        minimumDrain: 1.0,
        drain: 1.0
      })

      event.remove({ output: "bloodmagic:soulgemlesser" });
      event.custom({
        type: "bloodmagic:soulforge",
        input0: {
          item: "bloodmagic:soulgempetty"
        },
        input1: {
          tag: "forge:gems/diamond"
        },
        input2: {
          tag: "forge:storage_blocks/redstone"
        },
        input3: {
          item: "astralsorcery:starmetal_ingot"
        },
        output: {
          item: "bloodmagic:soulgemlesser"
        },
        minimumDrain: 60.0,
        drain: 20.0
      })

      event.remove({ output: "bloodmagic:soulgemcommon" });
      event.custom({
        type: "bloodmagic:soulforge",
        input0: {
          item: "bloodmagic:soulgemlesser"
        },
        input1: {
          tag: "forge:gems/diamond"
        },
        input2: {
            item: "botania:dragonstone"
        },
        input3: {
          item: "bloodmagic:infusedslate"
        },
        output: {
          item: "bloodmagic:soulgemcommon"
        },
        minimumDrain: 240.0,
        drain: 50.0
      })

})