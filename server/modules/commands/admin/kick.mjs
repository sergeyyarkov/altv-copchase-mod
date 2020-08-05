import alt from 'alt-server'
import { registerCmd, send } from 'chat'
import { isPlayerAdmin } from '../../helpers/helpers.mjs'

registerCmd('kick', (player, args) => {
  if (!isPlayerAdmin(player)) return send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0] || isNaN(args[0])) {
    return send(player, `{EE9A00}[SERVER]: {FFF}/kick [id игрока]`);
  }

  const target = alt.Player.getByID(parseInt(args[0]))

  if (target === null) {
    return send(player, `{EE9A00}[SERVER]: {FFF}Игрок с ID: "${args[0]}" не найден`);
  }

  target.kick()
})