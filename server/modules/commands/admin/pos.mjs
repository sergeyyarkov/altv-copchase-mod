import { registerCmd, send } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

registerCmd('pos', player => {
  if (!isPlayerAdmin(player)) return send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)
  
  send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`)
})