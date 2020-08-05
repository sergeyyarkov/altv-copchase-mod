import * as alt from 'alt-server'
import * as chat from 'chat'
import config from '../../config.mjs'


chat.registerCmd('spawn', (player, args) => {
  player.pos = config.spawn
})

chat.registerCmd('online', (player, args) => {
  return chat.send(player, `{EE9A00}[SERVER]: {FFF}Онлайн сейчас: {3232FF}${alt.Player.all.length}`)
})

chat.registerCmd('scid', (player, args) => {
  return chat.send(player, `{EE9A00}[SERVER]: {FFF}SCID: ${player.socialId}`)
})