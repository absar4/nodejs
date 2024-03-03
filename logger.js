const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
  logs(msg, name, job) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg, name, job })
  }
}

module.exports = Logger
