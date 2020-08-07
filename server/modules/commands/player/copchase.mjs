import alt from 'alt-server'
import { registerCmd, send } from 'chat'
import { copchase } from '../../copchase.mjs'

import config from '../../../config.mjs'

registerCmd('copchase', player => {
  if (copchase.isPlayerInWaitingRoom(player)) return false
  if (copchase.isPlayerInGame(player)) return false

  player.dimension = copchase.waitingRoomDimension
  player.pos = config.waitingRoom

  copchase.addPlayerToWaitingRoom(player)
  alt.emitClient(player, 'player:setInvincible')

  if (copchase.isStarted && copchase.players.length > 0) {
    // copchase.addPlayerToWaitingRoom(player)
    return alt.emitClient(player, 'player:showMidsizedMessage', '~b~Игра уже начата', 'Ожидание игроков...')
  }

  if (copchase.waitingPlayers.length < copchase.minPlayers) {
    return alt.emitClient(player, 'player:showMidsizedMessage', '~b~Ожидание игроков...', '')
  }

  copchase.startGame()
})