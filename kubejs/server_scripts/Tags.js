onEvent('item.tags', event => {
	event.get('forge:ores/starmetal').add('astralsorcery:starmetal_ore')
	event.get('forge:ingots').add('astralsorcery:starmetal_ingot')
	event.get('forge:ingots/starmetal').add('astralsorcery:starmetal_ingot')
	event.get('minecraft:beacon_payement_items').add('astralsorcery:starmetal_ingot')
	event.get('create:crushed_ores').add('astralsorcery:stardust')
})