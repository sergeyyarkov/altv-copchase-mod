import * as alt from 'alt-server'
import chat from 'chat'
import config from '../../config.mjs'

alt.on('playerConnect', (player) => {
  chat.broadcast(`{EE9A00}[SERVER]: {FFF}${player.name} присоеденился к серверу`)
  alt.emitClient(player, 'onConnect')
})

alt.on('playerDeath', (player) => {
  alt.setTimeout(() => {
    player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
    player.removeAllWeapons()
  }, 3000);
})

alt.onClient('spawnPlayer', (player) => {
  player.model = config.skins[Math.floor(Math.random() * (config.skins.length - 1 - 0) + 0)]
  player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
})
