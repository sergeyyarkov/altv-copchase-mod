import alt from 'alt-server'
import { broadcast } from 'chat'

alt.on('playerDisconnect', (player) => {
  broadcast(`{EE9A00}[SERVER]: {1CD8FD}😭 ${player.name} {FFF}покинул нас`)
})