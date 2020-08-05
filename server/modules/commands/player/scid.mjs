import { registerCmd, send } from 'chat'

registerCmd('scid', player => {
  return send(player, `{EE9A00}[SERVER]: {FFF}SCID: ${player.socialId}`)
})