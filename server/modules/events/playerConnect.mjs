import alt from 'alt-server'
import { broadcast } from 'chat'

import config from '../../config.mjs'
import skins from '../../skins.json'


alt.on('playerConnect', (player) => {
  broadcast(`{EE9A00}[SERVER]: {1CD8FD}👋 ${player.name} {FFF}присоеденился к серверу`)
  const date = new Date()
 
  player.setDateTime(date.getDay(), date.getMonth(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds())
  player.model = skins[Math.floor(Math.random() * (skins.length - 1 - 0) + 0)]
  player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
  player.dimension = 0

  alt.emitClient(player, 'player:setInvincible')
  alt.emitClient(player, 'player:notify', '~g~Добро пожаловать на сервер!')
})
