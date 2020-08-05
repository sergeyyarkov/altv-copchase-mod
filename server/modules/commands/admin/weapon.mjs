import alt from 'alt-server'
import { registerCmd, send } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

import weapons from '../../../weapons.json'

registerCmd('weapon', (player, args) => {
  if (!isPlayerAdmin(player)) return send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0]) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/weapon [weapon name]`);
  }
  
  alt.emitClient(player, 'admin:setStat')

  Object.keys(weapons).map(category => {
    if (weapons[category].hasOwnProperty(args[0])) {
      player.giveWeapon(weapons[category][args[0]], 9999, true)
      return
    }
  })
})