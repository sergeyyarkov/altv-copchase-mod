import alt from 'alt-server'

import config from '../../config.mjs'

alt.on('playerDeath', (player) => {
  alt.emitClient(player, 'player:death')
  alt.setTimeout(() => {
    player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
    player.removeAllWeapons()
  }, 3000)
})