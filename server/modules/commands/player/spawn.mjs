import { registerCmd } from 'chat'

import config from '../../../config.mjs'

registerCmd('spawn', player => {
  player.pos = config.spawn
  player.dimension = 0
})