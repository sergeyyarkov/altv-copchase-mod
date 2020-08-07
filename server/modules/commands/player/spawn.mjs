import { registerCmd, send } from 'chat'
import { copchase } from '../../copchase.mjs'

import config from '../../../config.mjs'

registerCmd('spawn', player => {
  if (copchase.isPlayerInWaitingRoom(player)) {
    send(player, '{EE9A00}[COPCHASE]: {FF0000}Вы в комнате ожидания!')
    send(player, '{EE9A00}[COPCHASE]: {FF0000}/exit чтобы выйти')
    return false
  }
  if (copchase.isPlayerInGame(player)) return false

  player.pos = config.spawn
  player.dimension = 0
})