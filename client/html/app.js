class Component {
  constructor({ id }) {
    this.$el = document.getElementById(id)
  }
}

class DateComponent extends Component {
  constructor(id) {
    super(id)
    this.renderDate()
  }

  renderDate() {
    setInterval(() => {
      const date = new Date()
      this.$el.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    })
  }
}

class EngineHealthComponent extends Component {
  constructor(id) {
    super(id)
  }

  renderEngineHealth(engineHealth) {
    this.$el.textContent = `engine health: ${engineHealth}`
  }

  clearDisplay() {
    this.$el.textContent = ``
  }
}


const dateComponent = new DateComponent({ id: 'date' })
const engineHealthComponent = new EngineHealthComponent({ id: 'engineHealth' })

if ('alt' in window) {
  alt.on('display:engineHealth', ({ engineHealth }) => engineHealthComponent.renderEngineHealth(engineHealth))
  alt.on('displayClear:engineHealth', () => engineHealthComponent.clearDisplay())
  alt.emit('ready')
} else {
  engineHealthComponent.$el.textContent = `engine health: 0`
}