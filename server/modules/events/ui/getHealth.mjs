import alt from 'alt-server'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

alt.onClient('getHealth', player => {
  if (!isPlayerAdmin(player)) return false

  player.health = 200
  alt.emitClient(player, 'player:notify', 'Ваше здоровье было восстановлено')
})