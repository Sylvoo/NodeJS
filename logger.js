var url = 'http://mylogger.io/log';

function log(message)
{
    // send an HTTP request
    console.log(message);
}

module.exports.log = log;   // udostepnia poza modul wiec
module.exports.endPoint = url; // jakby zmienia na public 

console.log(module);
