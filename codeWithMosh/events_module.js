const EventEmitter = require('events')
const emitter = new EventEmitter;

// Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called :) ')
});

// Raise an event 
emitter.emit('messageLogged');

// czyli kiedy wzywamy event on wywołuje listenera ktory tylko czeka na znak zeby sie odezwac
// order is imposrtant, logiczne pierwsze zdefiniowany listener potem emit