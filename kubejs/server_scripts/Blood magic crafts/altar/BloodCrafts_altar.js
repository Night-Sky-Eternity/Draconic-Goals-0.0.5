onEvent("recipes", (event) => {
  event.remove({ output: "bloodmagic:soulsnare" });
  event.recipes.bloodmagic
    .altar("bloodmagic:soulsnare", "botania:mana_string")
    .upgradeLevel(0)
    .altarSyphon(500);

  event.remove({ output: "bloodmagic:weakbloodorb" });
  event.recipes.bloodmagic
    .altar("bloodmagic:weakbloodorb", "botania:mana_powder")
    .upgradeLevel(0)
    .altarSyphon(2000);

  event.remove({ output: "bloodmagic:apprenticebloodorb" });
  event.recipes.bloodmagic
    .altar("bloodmagic:apprenticebloodorb", "astralsorcery:stardust")
    .upgradeLevel(1)
    .altarSyphon(5000);

  event.remove({ output: "bloodmagic:magicianbloodorb" });
  event.recipes.bloodmagic
    .altar("bloodmagic:magicianbloodorb", "botania:dragonstone")
    .upgradeLevel(2)
    .altarSyphon(25000);

  event.remove({ output: "bloodmagic:blankslate" });
  event.recipes.bloodmagic
    .altar("bloodmagic:blankslate", "botania:livingrock")
    .upgradeLevel(0)
    .altarSyphon(1000);

  event.recipes.bloodmagic
    .altar("botania:blacker_lotus", "botania:black_lotus")
    .upgradeLevel(3)
    .altarSyphon(100000);
});
