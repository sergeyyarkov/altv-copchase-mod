import { registerCmd } from 'chat'
import { copchase } from '../../copchase.mjs'

import config from '../../../config.mjs'

registerCmd('spawn', player => {
  if (copchase.isPlayerInWaitingRoom(player)) return false
  if (copchase.isPlayerInGame(player)) return false

  player.pos = config.spawn
  player.dimension = 0
})