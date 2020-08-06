import alt from 'alt-server'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

alt.onClient('showAdminPanel', player => {
  if (!isPlayerAdmin(player)) return false

  alt.emitClient(player, 'ui:showAdminPanel')
})