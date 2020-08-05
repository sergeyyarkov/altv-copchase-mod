import alt from 'alt-server'
import { registerCmd, send } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

registerCmd('car', (player, args) => {
  if (!isPlayerAdmin(player)) return send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0]) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/car [reference машины]`);
  }

  try {
    const newVehicle = new alt.Vehicle(args[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 0)
    newVehicle.numberPlateText = 'ADMIN'
 
    alt.emitClient(player, 'vehicle:setInto', newVehicle)
  } catch (error) {
    console.log(error)
    send(player, `{EE9A00}[SERVER]: {FF0000}Машины "${args[0]}" не существует!`)
  }
})