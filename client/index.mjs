import * as alt from 'alt'
import * as native from 'natives'
import * as NativeUI from './includes/nativeui/nativeui.min.js'

import './ui.mjs'


alt.setMsPerGameMinute(30000)

alt.onServer('player:death', () => {
  native.animpostfxPlay('DeathFailNeutralIn', 5000, false)
  NativeUI.BigMessage.ShowWastedMessage('Мертв', 'Вы умерли', NativeUI.HudColor.HUD_COLOUR_RED, 5000)
})

alt.onServer('player:notify', message => {
  native.beginTextCommandThefeedPost('STRING')
  native.addTextComponentSubstringPlayerName(message)
  native.endTextCommandThefeedPostTicker(false, false)
})

alt.onServer('player:showMidsizedMessage', (message, description, delay) => {
  NativeUI.MidsizedMessage.ShowMidsizedMessage(message, description, delay)
})

alt.onServer('player:setInvincible', () => {
  native.setEntityInvincible(alt.Player.local.scriptID, true)
})

alt.onServer('player:delInvincible', () => {
  native.setEntityInvincible(alt.Player.local.scriptID, false)
})

alt.onServer('vehicle:setInto', (newVehicle) => {
  const localPlayer = alt.Player.local.scriptID

  alt.setTimeout(() => {
    native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1)
  }, 400)
})

alt.onServer('admin:setStat', () => {
  alt.setStat('shooting_ability', 99999)
})

alt.onServer('admin:setInvincible', toggle => {
  native.setEntityInvincible(alt.Player.local.scriptID, toggle)
})