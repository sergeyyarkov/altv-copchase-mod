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
    this.suspectCars = [
      'asea',
      'bison',
      'bobcatxl',
      'burrito',
      'emperor',
      'emperor2',
      'ardent',
      'ingot',
      'journey',
      'clique',
      'vamos',
      'tulip',
      'stafford',
      'cheburek',
      'streiter',
      'nebula',
      'hellion',
      'gauntlet4'
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
    this.blips = {}
    this.suspect = null
    this.positions = {
      suspect: [
        { x: 395.185, y: -999.645, z: 28.755 },
        { x: 404.691, y: -1907.0604, z: 24.723 },
        { x: 2619.436, y: 3374.145, z: 55.619 }
      ],
      police: [
        { x: 442.308, y: -1025.066, z: 28.231 },
        { x: 348.865, y: -1966.507, z:24.133 },
        { x: 2678.454, y: 3459.637, z: 55.340 }
      ]
    }
  }

  setDefaultState() {
    this.timeRemainingInterval = null
    this.isStarted = false
    this.suspect = null
    this.players = []
    // this.waitingPlayers = []
    this.blips = {}

    setTimeout(() => {
      this.cars.forEach(car => car.destroy())
      this.cars = []
    }, 5000)
  }

  isPlayerInGame(player) {
    if(this.players.find(_player => _player.name === player.name) !== undefined) {
      send(player, '{EE9A00}[COPCHASE]: {FF0000}Дождитесь окончания игры!')
      return true
    } else {
      return false
    }
  }

  isPlayerInWaitingRoom(player) {
    if(this.waitingPlayers.find(_player => _player.name === player.name) !== undefined) {
      send(player, '{EE9A00}[COPCHASE]: {FF0000}Вы уже в комнате ожидания!')
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
    this.suspect = this.players[Math.floor(Math.random() * (this.players.length - 1 - 0 + 1) + 0)]
  }

  messageToPlayersInGame(message) {
    this.players.forEach(_player => send(_player, message))
  }

  messageToWaitingPlayers(message) {
    this.waitingPlayers.forEach(_player => send(_player, message))
  }

  notifyPolicePlayers(message) {
    this.players.forEach(_player => _player.name !== this.suspect.name ? alt.emitClient(_player, 'player:notify', message) : false)
  }

  notifySuspectPlayer(message) {
    alt.emitClient(this.suspect, 'player:notify', message)
  }

  spawnPlayers() {
    let suspectRandomNumber = Math.floor(Math.random() * this.positions.suspect.length)
    let suspectPosition = this.positions.suspect[suspectRandomNumber]

    this.players.forEach(_player => {
      if (_player.name === this.suspect.name) {
        _player.pos = suspectPosition
        _player.dimension = this.dimension
        _player.model = skins[Math.floor(Math.random() * (430 - 1 - 422) + 422)]
        alt.emitClient(_player, 'player:delInvincible')
        alt.emitClient(_player, 'player:showMidsizedMessage', '~r~Вы саспект!', 'Уйдите от полицейских.', 5000)
        
        // this.blips[_player.id] = mp.blips.new(1, suspectPosition)
        // this.blips[_player.id].name = _player.name
        // this.blips[_player.id].dimension = this.dimension
        // this.blips[_player.id].color = 1
      } else {  
        _player.pos = {
          x: this.positions.police[suspectRandomNumber].x + 2,
          y: this.positions.police[suspectRandomNumber].y,
          z: this.positions.police[suspectRandomNumber].z
        }
        // _player.heading = 260
        _player.dimension = this.dimension
        _player.model = 's_m_y_cop_01'
        _player.giveWeapon('0x3656C8C1', 100, true)
        alt.emitClient(_player, 'player:delInvincible')
        alt.emitClient(_player, 'player:showMidsizedMessage', `~w~Саспект: ~r~${this.suspect.name}`, 'Нейтрализуйте саспекта.', 5000)

        // this.blips[_player.id] = mp.blips.new(1, suspectPosition)
        // this.blips[_player.id].name = _player.name
        // this.blips[_player.id].dimension = this.dimension
        // this.blips[_player.id].color = 38
      }
    })
  }

  spawnCars() {
    this.players.forEach(_player => {
      if (_player.name === this.suspect.name) {
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
    const interval = setInterval(() => {
      timeToStart = timeToStart - 1

      if (timeToStart <= 0) {
        // if (this.waitingPlayers.length >= 2) {
        //   broadcast(`Недостаточно игроков для старта!`)
        //   return
        // }

        this.isStarted = true

        this.pushWaitingPlayersToGame(this.waitingPlayers)
        this.selectSuspect()

        this.notifyPolicePlayers(`~w~ Остановите саспекта!`)
        this.notifySuspectPlayer(`~w~ Уйдите от полицейских!`)

        this.spawnPlayers()
        this.spawnCars()
        // setInterval(() => {
        //   this.players.forEach((player, id) => {
        //     if (this.blips[player.id] && player.health > 0) {
        //       this.  [player.id].position = player.position;
        //     }
        //   })
        // }, 1000)

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

      this.waitingPlayers.forEach(_player => {
        alt.emitClient(_player, 'player:showMidsizedMessage', `${timeToStart}`, '', 1000)
      })
      // this.messageToWaitingPlayers(`[COPCHASE]: Игра начнется через: ${timeToStart}`)
    }, 1000)
  }

  stopGame({ winner }) {

    clearInterval(this.timeRemainingInterval)

    this.players.forEach(_player => {
      // if (this.blips[_player.id]) {
      //   this.blips[_player.id].destroy();
      // }

      
      _player.removeAllWeapons()
      
      alt.setTimeout(() => {
        _player.spawn(config.spawn.x, config.spawn.y,config.spawn.z)
        _player.dimension = 0
        alt.emitClient(_player, 'player:setInvincible')
      }, 5000)

    })
  
    if (winner === 'police') {
      this.players.forEach(_player => {
        if (_player.name !== this.suspect.name) {
          alt.emitClient(_player, 'player:showMidsizedMessage', '~g~Вы выиграли', 'Саспект был нейтрализован.')
        }
      })
      console.log(`[COPCHASE]: Игра закончилась! Саспект был нейтрализован.`)
    }

    if (winner === 'suspect') {
      this.players.forEach(_player => {
        if (_player.name === this.suspect.name) {
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
  timeRemaining: 2, 
  timeToStart: 5
})

export {
  copchase
}