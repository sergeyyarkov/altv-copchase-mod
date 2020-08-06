import alt from 'alt-server'
import { send } from 'chat'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

import config from '../../../../config.mjs'

alt.onClient('teleportToLocation', (player, location) => {
  if (!isPlayerAdmin(player)) return false
  
  const findLocation = Object.keys(config.locations).find(_location => _location === location)

  if (findLocation === undefined) return send(player, '{EE9A00}[SERVER]: {FF0000}Локация не найдена!')

  player.pos = config.locations[location]
})