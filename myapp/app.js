const { error } = require('console');
const express = require('express')
const app = express()
const port = 10000;


const clientDatabase = [];
const clientMessDatabase = [];

//////////////// modul /////
/*function checkId(UID,ClientDatabase)
{
  for ( i in ClientDatabase)
  {
    if (i == UID)
    {
      err = 1;
    }
  }
  if (err = 1)
    {
      return false;
    }
    else return true;
}
*/

function generateUuid() {
  // sprawdza czy sie nie powtorzy, sprawdz czy nie istnieje wbudowana w Node metoda
const { randomUUID } = require('crypto'); // Added in: node v14.17.0

  
x = randomUUID();
/*if (checkId(x,ClientDatabase)){
  return x
}
else generateUuid(); // unique value
*/
return x;
}

///////////////////////

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello User!! Welcome on my server :)');
})
app.post('/signin',(req, res) => { // zmieniam stan serwera 
  // co dostaje? -> dostajemy Nick klienta [DONE!]
  // co zwracam? -> generujemy unikalny CLIENT ID, zapis do bazy danych klientow, zwracamy status powowdzenia akcji oraz CLIENT ID [DONE]
  
  const entry = {
    nick : req.query["nick"],
    clientId : generateUuid()
  }
 
  clientDatabase.push(entry);
  res.status(201).send(entry);
  console.log(clientDatabase);

  const fs = require('fs');
  fs.readFile('myapp/clientDatabase.json', 'utf8', (err, data) => {
    if (err){
      console.error('Error',err)
    }
    let jsonData = JSON.parse(data);
    const newData = JSON.parse(JSON.stringify(entry));
    jsonData.push(newData);

    fs.writeFile('myapp/clientDatabase.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err){
        console.error('Error',err)
    }
    else{
      console.log("ok");
      res.status(201);
      res.send();
    }
  }
)
  });
});

app.put('/msg',(req, res) => {  // rejest danych na serwerze 
  // co dostaje? -> dostajemy dane od klienta do zapisu w bazie wiadomosci [DONE]
  // co zwracam? -> zwracam status http, czy pomyslnie sie udalo (200 to all OK) [DONE]
  const messageDatabaseItem = {
    clientId : req.body.clientId,
    contentType : req.body.contentType,
    content : req.body.message,
    destinationClientId : req.body.destinationClientId,
    synchroStatus : false,
    date : Date.now()
  }
  console.log(messageDatabaseItem);
  clientMessDatabase.push(messageDatabaseItem)
  console.log(clientMessDatabase)

  const fs = require('fs');
  fs.readFile('myapp/clientMessDatabase.json', 'utf8', (err, data) => {
    if (err){
      console.error('Error',err)
    }
    let jsonData = JSON.parse(data);
    const newData = JSON.parse(JSON.stringify(messageDatabaseItem));
    jsonData.push(newData);

    fs.writeFile('myapp/clientMessDatabase.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err){
        console.error('Error',err)
    }
    else{
      console.log("ok");
      res.status(200);
      res.send();
    }
  }
)
  });

  });


app.get('/msg',(req, res) => { // otrzymujemy zapytanie o wiadomosci do clienta
  // co dostaje? -> Client ID 
  // co zwracam? -> lista danych dla niego oraz zmieniam status wiadomosci na dostarczone do klienta  
const fs = require('fs');
const rawData = fs.readFileSync('myapp/clientDatabase.json', 'utf8');
const jsonData = JSON.parse(rawData);

jsonData.forEach(element => {
    if(element.clientId === req.body["client_id"]){
        console.log(`Finded: ${element.nick}, twoj id to: ${element.clientId}`);
        res.status(200).send(`Approved, we have you in our Database ${element.nick}`)
    }
    
});
send(`Get message: ${ req.body["client_id"]}`); 
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})