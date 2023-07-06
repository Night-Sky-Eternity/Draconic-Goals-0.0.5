onEvent("recipes", (event) => {
    event.remove({ output: "bloodmagic:blankrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:blankrune",
          count: 1
        },
        mana: 1000,
        ingredients: [
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 0
            },
            {
                item: "bloodmagic:blankslate"
            },
            {
                tag: "forge:stone"
            },
            {
                tag: "forge:stone"
            },
        ]
    })
      
    event.remove({ output: "bloodmagic:speedrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:speedrune",
          count: 1
        },
        mana: 2000,
        ingredients: [
            {
                item: "bloodmagic:blankslate"
            },
            {
                item: "bloodmagic:blankslate"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                tag: "forge:stone"
            },
            {
                item: "minecraft:sugar"
            },
            {
                item: "minecraft:sugar"
            },
        ]
    })
    
    event.remove({ output: "bloodmagic:sacrificerune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:sacrificerune",
          count: 1
        },
        mana: 2300,
        ingredients: [
            {
                item: "bloodmagic:reinforcedslate"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                tag: "forge:stone"
            },
            {
                tag: "forge:ingots/gold"
            },
            {
                tag: "forge:ingots/gold"
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 2
            },
        ]
    })

    event.remove({ output: "bloodmagic:selfsacrificerune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:selfsacrificerune",
          count: 1
        },
        mana: 2300,
        ingredients: [
            {
                item: "bloodmagic:reinforcedslate"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                tag: "forge:stone"
            },
            {
                item: "astralsorcery:illumination_powder"
            },
            {
                item: "astralsorcery:illumination_powder"
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 2
            },
        ]
    })

    event.remove({ output: "bloodmagic:dislocationrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:dislocationrune",
          count: 1
        },
        mana: 3000,
        ingredients: [
            {
                item: "bloodmagic:infusedslate"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                tag: "forge:stone"
            },
            {
                item: "botania:rune_water"
            },
            {
                item: "botania:rune_water"
            },
        ]
    })

    event.remove({ output: "bloodmagic:altarcapacityrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:altarcapacityrune",
          count: 1
        },
        mana: 3100,
        ingredients: [
            {
                item: "bloodmagic:infusedslate"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                tag: "forge:stone"
            },
            {
                item: "minecraft:bucket"
            },
            {
                item: "minecraft:bucket"
            },
        ]
    })

    event.remove({ output: "bloodmagic:bettercapacityrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:bettercapacityrune",
          count: 1
        },
        mana: 4200,
        ingredients: [
            {
                item: "bloodmagic:demonslate"
            },
            {
                item: "bloodmagic:altarcapacityrune"
            },
            {
                tag: "forge:obsidian"
            },
            {
                item: "minecraft:bucket"
            },
            {
                item: "minecraft:bucket"
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 4
            },
        ]
    })

    event.remove({ output: "bloodmagic:orbcapacityrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:orbcapacityrune",
          count: 1
        },
        mana: 3200,
        ingredients: [
            {
                item: "bloodmagic:demonslate"
            },
            {
                item: "botania:rune_mana"
            },
            {
                tag: "forge:stone"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 4
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 1
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 1
            },
        ]
    })

    event.remove({ output: "bloodmagic:accelerationrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:accelerationrune",
          count: 1
        },
        mana: 4200,
        ingredients: [
            {
                item: "bloodmagic:demonslate"
            },
            {
                item: "bloodmagic:speedrune"
            },
            {
                tag: "forge:obsidian"
            },
            {
                tag: "forge:ingots/gold"
            },
            {
                tag: "forge:ingots/gold"
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 4
            },
        ]
    })
    event.remove({ output: "bloodmagic:chargingrune" });
    event.custom({
        type: "botania:runic_altar",
        output: {
          item: "bloodmagic:chargingrune",
          count: 1
        },
        mana: 3200,
        ingredients: [
            {
                item: "bloodmagic:demonslate"
            },
            {
                item: "bloodmagic:blankrune"
            },
            {
                item: "minecraft:redstone"
            },
            {
                item: "minecraft:redstone"
            },
            {
                item: "astralsorcery:illumination_powder"
            },
            {
                type: "bloodmagic:bloodorb",
                orb_tier: 4
            },
        ]
    })
})