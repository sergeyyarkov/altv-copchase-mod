import * as alt from 'alt'
import * as native from 'natives'
import * as NativeUI from './includes/nativeui/nativeui.min.js'

import './ui.mjs'

import './modules/blips.mjs'

const webview = new alt.WebView('http://resource/client/html/index.html')

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
  let cleared = false;
    const interval = alt.setInterval(() => {
        const vehicleScriptId = newVehicle.scriptID;
        if (vehicleScriptId) {
            native.setPedIntoVehicle(alt.Player.local.scriptID, vehicleScriptId, -1);
            alt.clearInterval(interval);
            cleared = true;
        }
    }, 10);
    alt.setTimeout(() => {
        if (!cleared) {
            alt.clearInterval(interval);
        }
    }, 500);
})

alt.onServer('admin:setStat', () => {
  alt.setStat('shooting_ability', 99999)
})

alt.onServer('admin:setInvincible', toggle => {
  native.setEntityInvincible(alt.Player.local.scriptID, toggle)
})


alt.onServer('webview:load', () => {
  webview.on('ready', () => {
    
  })
})