settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
      event.player.stages.add('starting_items')
      event.player.give('ftbquests:book')
    }
})