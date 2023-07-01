onEvent("recipes", (event) => {
  if (true) {
    craft_shaped_list(event);
  }
  if (true) {
    craft_shapeless_list(event);
  }
});


function craft_shaped_list(event) {
  if (true) {
    event.remove({ output: "botania:mana_spreader" });
    event.shaped("botania:mana_spreader",  [
		"AAA", 
		"BC ", 
		"AAA"
	  ], {
      A: "botania:livingwood",
      B: "minecraft:gold_ingot",
      C: "astralsorcery:illumination_powder",
    });
  }

  if (true) {
    event.remove({ output: "botania:mana_pool" });
    event.shaped("botania:mana_pool",  [
		"   ", 
		"BAB", 
		"BBB"
	  ], {
      A: "astralsorcery:aquamarine",
	  B: "botania:livingrock"
    });
  }
  
  if (true) {
    event.remove({ output: "" });
    event.shaped("minecraft:stone",  [
		"   ", 
		" A ", 
		"   "
	  ], {
      A: "minecraft:stone"
    });
  }

  
}

function craft_shapeless_list(event) {
	if (true) {event.remove({output:"botania:diluted_pool"}); event.shapeless('2x botania:diluted_pool', ['botania:mana_pool'])}
	
	if (true) {event.shapeless('1x botania:mana_pool', ['botania:diluted_pool', 'botania:diluted_pool'])}
}
