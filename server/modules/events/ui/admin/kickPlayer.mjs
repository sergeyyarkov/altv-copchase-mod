import alt from 'alt-server'
import { broadcast } from 'chat'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

alt.onClient('kickPlayer', (player, targetId) => {
  if (!isPlayerAdmin(player)) return false

  const id = +/\d+/.exec(targetId.split(':')[0])
  const target = alt.Player.getByID(id)

  if (target === null) {
    return send(player, `{EE9A00}[SERVER]: {FFF}Игрок с ID: "${id}" не найден`);
  }

  alt.emitClient(target, 'player:notify', `Вы были кикнуты с этого сервера`)

  alt.setTimeout(() => target.kick(), 300)
  broadcast(`{EE9A00}[SERVER]: {FFF}Игрок {1CD8FD}${target.name} {FFF}был кикнут с сервера`)
})