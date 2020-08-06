import alt from 'alt-server'
import { broadcast } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

alt.onClient('kickPlayer', (player, targetId) => {
  if (!isPlayerAdmin(player)) return false
  const target = alt.Player.getByID(+/\d+/.exec(targetId.split(':')[0]))
  alt.emitClient(target, 'player:notify', `Вы были кикнуты с этого сервера`)

  alt.setTimeout(() => target.kick(), 300)
  broadcast(`{EE9A00}[SERVER]: {FFF}Игрок {1CD8FD}${target.name} {FFF}был кикнут с сервера`)
})