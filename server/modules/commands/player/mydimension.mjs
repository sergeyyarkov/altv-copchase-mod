import { registerCmd, send } from 'chat'

registerCmd('mydimension', player => {
  return send(player, `{EE9A00}[SERVER]: {FFF}Dimension: ${player.dimension}`)
})