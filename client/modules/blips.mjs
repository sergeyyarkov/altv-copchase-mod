import * as alt from 'alt'

const blips = {}

alt.everyTick(() => {
  alt.Player.all.forEach(_player => {
    if (blips[_player.id]) {
      blips[_player.id].pos = _player.pos
    }
  })
})

alt.onServer('player:createBlipPlayers', ({ players, color }) => {
  players.forEach(_player => {
    if (_player.name !== alt.Player.local.name) {
      blips[_player.id] = new alt.PointBlip(_player.pos.x, _player.pos.y, _player.pos.z)
      blips[_player.id].name = _player.name
      blips[_player.id].color = color
    }
  })
})

alt.onServer('player:deleteBlipPlayers', () => {
  alt.Player.all.forEach(_player => {
    if (blips[_player.id]) {
      blips[_player.id].destroy()
      blips[_player.id] = null
    }
  })
})

alt.onServer('player:deleteBlipPlayer', player => {
  if (blips[player.id]) {
    blips[player.id].destroy()
    blips[player.id] = null
  }
})