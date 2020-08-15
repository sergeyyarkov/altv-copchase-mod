import alt from 'alt-server'
import { copchase } from '../copchase.mjs'

alt.on('playerEnteredVehicle', player => {
  if (copchase.isStarted && player.id !== copchase.suspect.id) {
    player.removeWeapon(0x3656C8C1)
  } 
})