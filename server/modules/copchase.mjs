import alt from 'alt-server'
import { send, broadcast } from 'chat'

import config from '../config.mjs'
import skins from '../skins.json'

class Copchase {
  constructor({ dimension, waitingRoomDimension, minPlayers, maxPlayers, timeRemaining, timeToStart }) {
    this.dimension = dimension
    this.waitingRoomDimension = waitingRoomDimension
    this.minPlayers = minPlayers
    this.maxPlayers = maxPlayers
    this.timeRemaining = timeRemaining
    this.timeRemainingInterval = null
    this.timeToStart = timeToStart
    this.isStarted = false
    this.isTimeToStartStarted = false
    this.isSuspectLeavesCar = false
    this.suspectCars = [
      'asea',
      'tornado',
      'futo',
      'taxi',
      'picador',
      'phoenix',
      'ruiner',
      'sabregt',
      'rancherxl',
      'regina',
      'stanier',
      'washington',
      'emperor',
      'blista',
      'tulip',
      'vamos',
      'chino',
      'moonbeam',
      'dubsta',
      'dominator',
      'rebla',
      'sanchez',
      'superd',
      'dilettante',
      'huntley',
      'monroe',
      'windsor',
      'novak',
      'gauntlet3'
    ]
    this.policeCars = [
      'police2',
      'police3'
    ]
    this.weather = [
      'EXTRASUNNY',
      'CLEAR',
      'CLOUDS',
      'SMOG',
      'FOGGY',
      'OVERCAST',
      'RAIN',
      'THUNDER',
      'CLEARING',
      'NEUTRAL',
      'SNOW',
      'BLIZZARD',
      'SNOWLIGHT',
      'XMAS',
      'HALLOWEEN'
    ]
    this.players = []
    this.waitingPlayers = []
    this.cars = []
    this.suspect = null
    this.positions = {
      suspect: [
        { x: 387.006, y: -766.760, z: 28.723 },
        { x: 442.483, y: -1507.068, z: 28.605 },
        { x: 1924.773, y: 3819.125, z: 31.588 }
      ],
      police: [
        { x: 442.308, y: -1025.066, z: 28.231 },
        { x: 396.105, y: -1643.973, z: 28.757 },
        { x: 1847.670, y: 3671.854, z: 33.172 }
      ]
    }
  }

  setDefaultState() {
    this.timeRemainingInterval = null
    this.isSuspectLeavesCar = false
    this.isStarted = false
    this.suspect = null
    this.players = []

    setTimeout(() => {
      this.cars.forEach(car => car.destroy())
      this.cars = []
    }, 5000)
  }

  isPlayerInGame(player) {
    if(this.players.find(_player => _player.id === player.id) !== undefined) {
      send(player, '{EE9A00}[COPCHASE]: {FF0000}Дождитесь окончания игры!')
      return true
    } else {
      return false
    }
  }

  isPlayerInWaitingRoom(player) {
    if(this.waitingPlayers.find(_player => _player.id === player.id) !== undefined) {
      return true
    } else {
      return false
    }
  }

  addPlayerToWaitingRoom(player) {
    this.waitingPlayers.push(player)
  }

  pushWaitingPlayersToGame(waitingPlayers) {
    waitingPlayers.forEach(_player => this.players.push(_player))
    this.waitingPlayers = []
  }

  selectSuspect() {
    this.suspect = this.players[Math.floor(Math.random() * this.players.length)]
  }

  messageToPlayersInGame(message) {
    this.players.forEach(_player => send(_player, message))
  }

  messageToWaitingPlayers(message) {
    this.waitingPlayers.forEach(_player => send(_player, message))
  }

  midsizedMessageToWaitingPlayers(message, description, delay) {
    this.waitingPlayers.forEach(_player => {
      alt.emitClient(_player, 'player:showMidsizedMessage', message, description, delay)
    })
  }

  notifyPolicePlayers(message) {
    this.players.forEach(_player => _player.id !== this.suspect.id ? alt.emitClient(_player, 'player:notify', message) : false)
  }

  notifySuspectPlayer(message) {
    alt.emitClient(this.suspect, 'player:notify', message)
  }

  spawnPlayers() {
    let posX = 0
    let suspectRandomNumber = Math.floor(Math.random() * this.positions.suspect.length)
    let suspectPosition = this.positions.suspect[suspectRandomNumber]

    return new Promise((resolve, reject) => {
      this.players.forEach(_player => {
        if (_player.id === this.suspect.id) {
          _player.pos = suspectPosition
          setTimeout(() => _player.health = 200, 300)
          _player.dimension = this.dimension
          _player.model = skins[Math.floor(Math.random() * (430 - 1 - 422) + 422)]
          alt.emitClient(_player, 'player:delInvincible')
          alt.emitClient(_player, 'player:showMidsizedMessage', '~r~Вы саспект!', 'Уйдите от полицейских.', 5000)
        } else {
          posX = posX + 3  
          _player.pos = {
            x: this.positions.police[suspectRandomNumber].x + posX,
            y: this.positions.police[suspectRandomNumber].y,
            z: this.positions.police[suspectRandomNumber].z
          }
          setTimeout(() => _player.armour = 100, 300)
          setTimeout(() => _player.health = 200, 300)
          _player.dimension = this.dimension
          _player.model = 's_m_y_cop_01'
          
          alt.emitClient(_player, 'player:delInvincible')
          alt.emitClient(_player, 'player:showMidsizedMessage', `~w~Саспект: ~r~${this.suspect.name}`, 'Нейтрализуйте саспекта.', 5000)
          alt.emitClient(_player, 'player:createBlipPlayers', { 
            players: this.players.filter(player => player.id !== this.suspect.id), 
            color: 38 
          }) // create friendly blips
          alt.emitClient(_player, 'player:createBlipPlayers', { 
            players: this.players.filter(player => player.id === this.suspect.id), 
            color: 1 
          }) // create suspec blip
        }
      })

      resolve()
    })
  }

  spawnCars() {
    this.players.forEach(_player => {
      if (_player.id === this.suspect.id) {
        const carSuspect = new alt.Vehicle(
          this.suspectCars[Math.floor(Math.random() * (this.suspectCars.length - 1 - 0) + 0)], 
          _player.pos.x, _player.pos.y, _player.pos.z, 
          0, 0, 0
        )
        
        carSuspect.numberPlateText = 'SUSPECT'
        carSuspect.dimension = this.dimension
      
        alt.emitClient(_player, 'vehicle:setInto', carSuspect)
        carSuspect.engineHealth = 500

        this.cars.push(carSuspect)
      } else {
        const carPolice = new alt.Vehicle(
          this.policeCars[Math.floor(Math.random() * (this.policeCars.length - 1 - 0) + 0)], 
          _player.pos.x, _player.pos.y, _player.pos.z, 
          0, 0, 0
        )

        carPolice.numberPlateText = 'POLICE'
        carPolice.dimension = this.dimension
        
        alt.emitClient(_player, 'vehicle:setInto', carPolice)
        this.cars.push(carPolice)
      }
    })
  }

  startGame() {
    let timeToStart = this.timeToStart
    this.isTimeToStartStarted = true
    const interval = setInterval(() => {
      timeToStart = timeToStart - 1

      if (this.waitingPlayers.length < this.minPlayers) {
        this.midsizedMessageToWaitingPlayers('~r~Недостаточно игроков для старта!', '', 3000)
        this.isTimeToStartStarted = false

        clearInterval(interval)
        return
      }

      if (timeToStart <= 0) {

        this.isStarted = true
        this.isTimeToStartStarted = false

        this.pushWaitingPlayersToGame(this.waitingPlayers)
        this.selectSuspect()

        this.notifyPolicePlayers(`~w~ Остановите саспекта!`)
        this.notifySuspectPlayer(`~w~ Уйдите от полицейских!`)

        this.spawnPlayers().then(() => this.spawnCars())
        
        let timeRemaining = this.timeRemaining
        this.timeRemainingInterval = setInterval(() => {
          timeRemaining = timeRemaining - 1
          if (timeRemaining !== 0) {
            this.players.forEach(_player => alt.emitClient(_player, 'player:showMidsizedMessage', `Осталось: ~b~${timeRemaining} ~w~мин.`, '', 5000))
          }

          if (timeRemaining <= 0) {
            this.stopGame({ winner: 'suspect' })

            clearInterval(this.timeRemainingInterval)
            return true
          }
        }, 60000)

        clearInterval(interval)
        return true
      }
      this.midsizedMessageToWaitingPlayers(timeToStart, '', 1000)
    }, 1000)
  }

  stopGame({ winner }) {
    clearInterval(this.timeRemainingInterval)

    alt.Player.all.forEach(_player => alt.emitClient(_player, 'player:deleteBlipPlayers'))

    this.players.forEach(_player => {
      _player.removeAllWeapons()
      
      alt.setTimeout(() => {
        _player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
        _player.dimension = 0
        alt.emitClient(_player, 'player:setInvincible')
      }, 5000)

    })
  
    if (winner === 'police') {
      this.players.forEach(_player => {
        if (_player.id !== this.suspect.id) {
          alt.emitClient(_player, 'player:showMidsizedMessage', '~g~Вы выиграли', 'Саспект был нейтрализован.')
        }
      })
      console.log(`[COPCHASE]: Игра закончилась! Саспект был нейтрализован.`)
    }

    if (winner === 'suspect') {
      this.players.forEach(_player => {
        if (_player.id === this.suspect.id) {
          alt.emitClient(_player, 'player:showMidsizedMessage', '~g~Вы выиграли', 'Вы успешно ушли от полиции.')
        } else {
          alt.emitClient(_player, 'player:showMidsizedMessage', '~r~Вы проиграли', 'Саспект скрылся.')
        }
      })
      console.log(`[COPCHASE]: Игра закончилась! Саспект скрылся.`)
    }

    this.setDefaultState()
  }

}

const copchase = new Copchase({ 
  dimension: 10, 
  waitingRoomDimension: 5, 
  maxPlayers: 11,
  minPlayers: 2, 
  timeRemaining: 10, 
  timeToStart: 5
})

export {
  copchase
}