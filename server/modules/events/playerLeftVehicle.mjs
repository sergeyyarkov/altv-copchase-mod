import alt from 'alt-server'
import { copchase } from '../copchase.mjs'

alt.on('playerLeftVehicle', player => {
  if (copchase.isStarted && player.name === copchase.suspect.name) {
    player.giveWeapon('0x1B06D571', 25, true);

    copchase.players.forEach(_player => {
      if (_player.name !== copchase.suspect.name) {
        _player.giveWeapon('0x1B06D571', 50, true);
      }
    })
  } 
})