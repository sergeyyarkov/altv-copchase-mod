import alt from 'alt-server'
import { send } from 'chat'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

alt.onClient('teleportToMe', (player, targetId) => {
  if (!isPlayerAdmin(player)) return false
  
  const id = +/\d+/.exec(targetId.split(':')[0])
  const target = alt.Player.getByID(id)

  if (target === null) {
    return send(player, `{EE9A00}[SERVER]: {FFF}Игрок с ID: "${id}" не найден`)
  }

  target.pos = player.pos
  target.dimension = player.dimension
})