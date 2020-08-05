import { registerCmd, send } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

registerCmd('carHealth', (player, args) => {
  if (!isPlayerAdmin(player)) return send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0] || isNaN(args[0])) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/carHealth [engine hp]`);
  }

  if (player.vehicle) {
    player.vehicle.engineHealth = args[0]
  } else {
    return send(player, `{EE9A00}[SERVER]: {FF0000}Вы должны находиться в машине!`);
  }
})