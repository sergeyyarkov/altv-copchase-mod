import alt from 'alt-server'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

alt.onClient('godMode', (player, checked) => {
  if (!isPlayerAdmin(player)) return false

  if (checked) {
    alt.emitClient(player, 'admin:setInvincible', checked)
    alt.emitClient(player, 'player:notify', 'Неуязвимость: вкл') 
  } else {
    alt.emitClient(player, 'admin:setInvincible', checked)
    alt.emitClient(player, 'player:notify', 'Неуязвимость: выкл') 
  }
})