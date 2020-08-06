import alt from 'alt-server'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

alt.onClient('killPlayer', (player, targetId) => {
  if (!isPlayerAdmin(player)) return false
  
  const id = +/\d+/.exec(targetId.split(':')[0])
  const target = alt.Player.getByID(id)

  if (target === null) {
    return send(player, `{EE9A00}[SERVER]: {FFF}Игрок с ID: "${id}" не найден`)
  }
  
  target.health = 0
  alt.emitClient(target, 'player:notify', `Вы были убиты администратором сервера`)
})