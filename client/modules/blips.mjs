import * as alt from 'alt'

alt.everyTick(() => {
  alt.Player.all.forEach(_player => {
    if (!_player.valid) {
      return
    }

    if (_player.blip && _player.blip !== null) {
      _player.blip.pos = _player.getSyncedMeta('pos')
    }
  })
})

alt.onServer('player:createBlipPlayers', ({ players, color }) => {
  players.forEach(_player => {
    if (_player.id === alt.Player.local.id) {
      return
    }

    _player.blip = new alt.PointBlip(_player.pos.x, _player.pos.y, _player.pos.z)
    _player.blip.name = _player.name
    _player.blip.color = color
    _player.blip.shortRange = false;
    _player.blip.owner = _player;
  })
})

alt.onServer('player:deleteBlipPlayers', () => {
  alt.Player.all.forEach(_player => {
    if (_player.blip && _player.blip !== null) {
      _player.blip.destroy()
      _player.blip = null
    }
  })
})

alt.onServer('player:deleteBlipPlayer', player => {
  if (player.blip && player.blip !== null) {
    player.blip.destroy()
    player.blip = null
  }
})