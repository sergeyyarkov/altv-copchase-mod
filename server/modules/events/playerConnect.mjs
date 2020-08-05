import alt from 'alt-server'
import { broadcast } from 'chat'

import config from '../../config.mjs'
import skins from '../../skins.json'

alt.on('playerConnect', (player) => {
  broadcast(`{EE9A00}[SERVER]: {1CD8FD}👋 ${player.name} {FFF}присоеденился к серверу`)

  player.model = skins[Math.floor(Math.random() * (skins.length - 1 - 0) + 0)]
  player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
  player.dimension = 0
})