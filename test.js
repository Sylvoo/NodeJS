const fs = require('fs');

const rawData = fs.readFileSync('myapp/clientDatabase.json', 'utf8');
const jsonData = JSON.parse(rawData);

jsonData.forEach(element => {
    if(element.clientId === 'f2d9776b-9d97-4985-bd4b-9fe0ce535f58'){
        console.log(`ZNALEZIONO: ${element.nick}, ktorej id to: ${element.clientId}`);
    }
    
});