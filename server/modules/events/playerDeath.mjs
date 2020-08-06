import alt from 'alt-server'

import config from '../../config.mjs'

alt.on('playerDeath', (player) => {
  alt.emitClient(player, 'player:death')
  alt.Player.all.forEach(_player => alt.emitClient(_player, 'player:notify', `Игрок <C>${player.name}</C> погиб`))
  alt.setTimeout(() => {
    player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
    player.removeAllWeapons()
    alt.emitClient(player, 'player:setInvincible')
  }, 5000)
})