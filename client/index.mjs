import * as alt from 'alt'
import * as native from 'natives'

alt.onServer('vehicle:setInto', (newVehicle) => {
  const localPlayer = alt.Player.local.scriptID

  alt.setTimeout(() => {
    native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1)
  }, 300)
})

alt.onServer('admin:setStat', () => {
  alt.setStat('shooting_ability', 99999)
})
