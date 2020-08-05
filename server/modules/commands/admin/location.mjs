import { registerCmd, send } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

import config from '../../../config.mjs'

registerCmd('location', (player, args) => {
  if (!isPlayerAdmin(player)) return send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0]) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/location [локация]`);
  }

  const findLocation = Object.keys(config.locations).find(_location => _location === args[0])

  if (findLocation === undefined) return send(player, '{EE9A00}[SERVER]: {FF0000}Локация не найдена!')

  player.pos = config.locations[args[0]]
})
