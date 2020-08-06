import alt from 'alt-server'
import { registerCmd, broadcast, send } from 'chat'
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

  alt.emitClient(target, 'player:notify', `Вы были кикнуты с этого сервера`)

  alt.setTimeout(() => target.kick(), 300)
  broadcast(`{EE9A00}[SERVER]: {FFF}Игрок {1CD8FD}${target.name} {FFF}был кикнут с сервера`)
})