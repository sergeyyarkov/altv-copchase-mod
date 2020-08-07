import alt from 'alt-server'
import { send } from 'chat'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

alt.onClient('spawnCar', (player, carRef) => {
  if (!isPlayerAdmin(player)) return false
  
  try {
    const newVehicle = new alt.Vehicle(carRef, player.pos.x, player.pos.y, player.pos.z, 0, 0, 0)
    newVehicle.numberPlateText = 'ADMIN'
    newVehicle.dimension = player.dimension
 
    alt.emitClient(player, 'vehicle:setInto', newVehicle)
  } catch (error) {
    console.log(error)
    send(player, `{EE9A00}[SERVER]: {FF0000}Машины "${args[0]}" не существует!`)
  }
})