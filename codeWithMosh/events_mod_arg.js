const EventEmitter = require('events')
const emitter = new EventEmitter;
const logging = new EventEmitter;

// Register a listener
emitter.on('messageLogged', (event_arg) => {  // arrow function tzn. " function(arg) " == " (arg) => "
    console.log('Listener called :)', event_arg);
});

// Raise an event 
emitter.emit('messageLogged', {id: '1', udl: 'http://' });

// czyli kiedy wzywamy event on wywołuje listenera ktory tylko czeka na znak zeby sie odezwac
// order is imposrtant, logiczne pierwsze zdefiniowany listener potem emit
logging.on('mess', (arg) => {
    console.log('Message: ',(arg));
});

logging.emit('mess', {data: 'message'});
