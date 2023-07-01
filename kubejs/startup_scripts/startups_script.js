// priority: 0

console.info('YOUR DOING GOOD LAD (items successfully loaded)')

onEvent('item.registry', event => {
	// Register new items here
	event.create('dragon_fire_charge').displayName('Dragon Fire Charge').maxStackSize(64).glow(true).burnTime(25600)
	event.create('dragon_ice_charge').displayName('Dragon Ice Charge').maxStackSize(64).glow(true).burnTime(25600)
	event.create('dragon_lightning_charge').displayName('Dragon Lightning Charge').maxStackSize(64).glow(true).burnTime(51200)
		
})

onEvent('block.registry', event => {
	// Regiser new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})