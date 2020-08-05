import * as alt from 'alt-server'
import * as chat from 'chat'
import config from '../../config.mjs'
import { isPlayerAdmin } from '../helpers/helpers.mjs'

chat.registerCmd('pos', player => {
  if (!isPlayerAdmin(player)) return chat.send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)
  
  chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`)
})

chat.registerCmd('kill', (player, args) => {
  if (!isPlayerAdmin(player)) return chat.send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0] || isNaN(args[0])) {
    return chat.send(player, `{EE9A00}[SERVER]: {FFF}/kill [id игрока]`);
  }

  const target = alt.Player.getByID(parseInt(args[0]))

  if (target === null) {
    return chat.send(player, `{EE9A00}[SERVER]: {FFF}Игрок с ID - ${args[0]} не найден`);
  }

  target.health = 0
})

chat.registerCmd('car', (player, args) => {
  if (!isPlayerAdmin(player)) return chat.send(player, `{EE9A00}[SERVER]: {FF0000}Вам недоступна эта команда!`)

  if (!args || !args[0]) {
    return chat.send(player, `{EE9A00}[SERVER]: {FFF}/car [reference машины]`);
  }

  try {
    const newVehicle = new alt.Vehicle(args[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 0)
    alt.emitClient(player, 'vehicle:setInto', newVehicle)
  } catch (error) {
    chat.send(player, `{EE9A00}[SERVER]: {FF0000}Машины "${args[0]}" не существует!`)
  }
})