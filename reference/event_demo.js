const EventEmitter = require('events')

// create a class:
class MyEmitter extends EventEmitter {}

// Init Object
const myEmitter = new MyEmitter()

// Event Listener
myEmitter.on('run', () => console.log('I am RUNNING'))
myEmitter.on('stop', () => console.log('I am STOPPING'))
myEmitter.on('play', () => console.log('I am PLAYING'))

myEmitter.emit('run')
myEmitter.emit('stop')
myEmitter.emit('play')
