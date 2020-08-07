import alt from 'alt-server'
import { registerCmd, send } from 'chat'
import { copchase } from '../../copchase.mjs'

import config from '../../../config.mjs'

registerCmd('copchase', player => {
  if (copchase.isPlayerInWaitingRoom(player)) {
    send(player, '{EE9A00}[COPCHASE]: {FF0000}Вы уже в комнате ожидания!')
    send(player, '{EE9A00}[COPCHASE]: {FF0000}/exit чтобы выйти')
    return false
  } 
  if (copchase.isPlayerInGame(player)) return false

  player.dimension = copchase.waitingRoomDimension
  player.pos = config.waitingRoom

  copchase.addPlayerToWaitingRoom(player)
  alt.emitClient(player, 'player:setInvincible')

  if (copchase.isStarted && copchase.players.length > 0) {
    return alt.emitClient(player, 'player:showMidsizedMessage', '~b~Игра уже начата', 'Ожидание игроков...')
  }

  if (copchase.waitingPlayers.length < copchase.minPlayers) {
    return alt.emitClient(player, 'player:showMidsizedMessage', '~b~Ожидание игроков...', '')
  }

  copchase.startGame()
})