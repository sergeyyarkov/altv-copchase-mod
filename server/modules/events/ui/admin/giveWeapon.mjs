import alt from 'alt-server'
import { isPlayerAdmin } from '../../../helpers/helpers.mjs'

import weapons from '../../../../weapons.json'

alt.onClient('giveWeapon', (player, weaponName) => {
  if (!isPlayerAdmin(player)) return false
  
  alt.emitClient(player, 'admin:setStat')

  Object.keys(weapons).map(category => {
    if (weapons[category].hasOwnProperty(weaponName)) {
      player.giveWeapon(weapons[category][weaponName], 9999, true)
      return
    }
  })
})