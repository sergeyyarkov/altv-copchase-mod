import alt from 'alt-server'
import { copchase } from '../copchase.mjs'

import config from '../../config.mjs'

alt.on('playerDeath', (player) => {
  alt.emitClient(player, 'player:death')
  alt.Player.all.forEach(_player => alt.emitClient(_player, 'player:notify', `Игрок <C>${player.name}</C> погиб`))

  if (copchase.isStarted) {
    if (player.name === copchase.suspect.name) copchase.stopGame({ winner: 'police' })
  
    const policemanIndex = copchase.players.findIndex(_player => _player.name === player.name && _player.name !== copchase.suspect.name)
    if (policemanIndex !== -1) copchase.players.splice(policemanIndex, 1)
    if (copchase.players.length <= 1 && copchase.suspect !== null) copchase.stopGame({ winner: 'suspect' })
  }
  
  alt.setTimeout(() => {
    player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
    player.removeAllWeapons()
    alt.emitClient(player, 'player:setInvincible')
  }, 5000)
})