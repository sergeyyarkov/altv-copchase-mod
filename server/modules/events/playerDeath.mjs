import alt from 'alt-server'
import { copchase } from '../copchase.mjs'

import config from '../../config.mjs'

alt.on('playerDeath', (player) => {
  alt.emitClient(player, 'player:death')
  alt.Player.all.forEach(_player => {
    alt.emitClient(_player, 'player:notify', `Игрок <C>${player.name}</C> погиб`)
    alt.emitClient(_player, 'player:deleteBlipPlayer', player)
  })
  
  if (copchase.isStarted) {
    if (player.id === copchase.suspect.id) copchase.stopGame({ winner: 'police' })
  
    const policemanIndex = copchase.players.findIndex(_player => _player.id === player.id && _player.id !== copchase.suspect.id)
    if (policemanIndex !== -1) copchase.players.splice(policemanIndex, 1)
    if (copchase.players.length <= 1 && copchase.suspect !== null) copchase.stopGame({ winner: 'suspect' })
  }
  
  alt.setTimeout(() => {
    player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
    player.dimension = 0
    player.removeAllWeapons()
    alt.emitClient(player, 'player:setInvincible')
    alt.emitClient(player, 'player:deleteBlipPlayers')
  }, 5000)
})