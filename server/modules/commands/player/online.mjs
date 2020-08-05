import alt from 'alt-server'
import { registerCmd, send } from 'chat'

registerCmd('online', player => {
  return send(player, `{EE9A00}[SERVER]: {FFF}Онлайн сейчас: {3232FF}${alt.Player.all.length}`)
})