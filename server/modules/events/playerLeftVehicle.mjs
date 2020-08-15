import alt from 'alt-server'
import { copchase } from '../copchase.mjs'

alt.on('playerLeftVehicle', player => {
  if (copchase.isStarted && player.id === copchase.suspect.id) {

    if (!copchase.isSuspectLeavesCar) {
      copchase.isSuspectLeavesCar = true
      player.giveWeapon('0x1B06D571', 25, true)

      copchase.players.forEach(_player => {
        if (_player.id !== copchase.suspect.id) {
          _player.giveWeapon('0x1B06D571', 50, true);
        }
      })
    }
  }
  
  if (copchase.isStarted && player.id !== copchase.suspect.id) {
    player.giveWeapon('0x3656C8C1', 100, false)
  }
})