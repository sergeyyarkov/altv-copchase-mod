import * as alt from 'alt-server'
import * as chat from 'chat'
import config from '../../config.mjs'


chat.registerCmd('spawn', (player, args) => {
  player.pos = config.spawn
})

chat.registerCmd('online', (player, args) => {
  return chat.send(player, `{EE9A00}[SERVER]: {FFF}Онлайн сейчас: {3232FF}${alt.Player.all.length}`)
})

chat.registerCmd('skin', (player, args) => {
  if (!args || !args[0] || isNaN(args[0])) {
    return chat.send(player, `{EE9A00}[SERVER]: {FFF}/skin [0 - 700]`)
  }

  if (args[0] > config.skins.length - 1 || args[0] < 0) {
    return chat.send(player, `{EE9A00}[SERVER]: {FFF}/skin [0 - 700]`)
  }

  player.model = config.skins[parseInt(args[0])]
})

chat.registerCmd('scid', (player, args) => {
  return chat.send(player, `{EE9A00}[SERVER]: {FFF}SCID: ${player.socialId}`)
})