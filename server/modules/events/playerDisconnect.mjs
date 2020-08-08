import alt from 'alt-server'
import { broadcast } from 'chat'
import { copchase } from '../copchase.mjs'

alt.on('playerDisconnect', (player) => {
  broadcast(`{EE9A00}[SERVER]: {1CD8FD}😭 ${player.name} {FFF}покинул нас`)

  if (copchase.isPlayerInWaitingRoom(player)) {
    const disconnectedPlayerIndex = copchase.waitingPlayers.findIndex(_player => _player.name === player.name)
    copchase.waitingPlayers.splice(disconnectedPlayerIndex, 1)
  }

  if (copchase.isStarted) {
    if (player.name === copchase.suspect.name) {
      const suspectIndex = copchase.players.findIndex(_player => _player.name === copchase.suspect.name)
      copchase.players.splice(suspectIndex, 1)
      copchase.stopGame({ winner: 'police' })
    }
    
    const policemanIndex = copchase.players.findIndex(_player => _player.name === player.name && _player.name !== copchase.suspect.name)

    if (policemanIndex !== -1) copchase.players.splice(policemanIndex, 1)
    if (copchase.players.length <= 1 && copchase.suspect !== null) copchase.stopGame({ winner: 'suspect' })
  }
  
  alt.Player.all.forEach(_player => alt.emitClient(_player, 'player:deleteBlipPlayer', player))
})