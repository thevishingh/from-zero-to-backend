const EventEmitter = require('events');

// Create a custom event emitter class
class MyEmitter extends EventEmitter { } 
// Create an instance of the custom event emitter
const myEmitter = new MyEmitter();

// Register an event listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit('greet', 'Vishal Singh'); // Output: Hello, Vishal Singh!
