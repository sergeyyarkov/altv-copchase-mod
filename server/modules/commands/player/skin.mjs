import { registerCmd, send } from 'chat'

import skins from '../../../skins.json'

registerCmd('skin', (player, args) => {
  if (!args || !args[0] || isNaN(args[0])) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/skin [0 - 700]`)
  }

  if (args[0] > skins.length - 1 || args[0] < 0) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/skin [0 - 700]`)
  }

  player.model = skins[parseInt(args[0])]
})