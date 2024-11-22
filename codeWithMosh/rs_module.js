const fs = require('fs'); // files in node module (fs)

// Synchronic metod -> worse one
const files = fs.readdirSync('./'); // list of files and dir in the following directory 

console.log(files);

//asynchronic metos -> better one 
fs.readdir('./', function(err, files)
{
    if (err) console.log('Error', err);  // error handling
    else console.log('Result', files);
})