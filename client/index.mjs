import * as alt from 'alt'
import * as native from 'natives'

alt.onServer('onConnect', () => {
  alt.log('Вы присоеденились!')
  alt.emitServer('spawnPlayer')
})

alt.onServer('vehicle:setInto', (newVehicle) => {
  const localPlayer = alt.Player.local.scriptID

  alt.setTimeout(() => {
    native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1)
  }, 300)
})
