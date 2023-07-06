onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:divinationsigil" });
    event.custom({
        type: "bloodmagic:array",
        texture: "bloodmagic:textures/models/alchemyarrays/divinationsigil.png",
        baseinput: {
            item: "astralsorcery:illumination_powder",
        },
        addedinput: {
          item: "bloodmagic:blankslate"
        },
        output: {
          item: "bloodmagic:divinationsigil"
        }
      })
})