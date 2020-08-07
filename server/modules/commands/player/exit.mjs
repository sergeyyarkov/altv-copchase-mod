import { registerCmd, send } from 'chat'
import { copchase } from '../../copchase.mjs'

import config from '../../../config.mjs'

registerCmd('exit', player => {
  if (copchase.isPlayerInWaitingRoom(player)) {
    const exitPlayerIndex = copchase.waitingPlayers.findIndex(_player => _player.name === player.name)
    copchase.waitingPlayers.splice(exitPlayerIndex, 1)

    player.pos = config.spawn
    player.dimension = 0

    return
  }

  send(player, `{EE9A00}[COPCHASE]: {FF0000}Вы должны находиться в комнате ожидания!`)
})