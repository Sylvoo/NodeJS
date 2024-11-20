const express = require('express')
const app = express()
const port = 10000;

/*
{
  nick : "ala",
  clientId : "1234-5678"
}

*/
const ClientDatabase = [];
const ClientMess = [];

//////////////// modul /////

function generateUuid() {
  // sprawdza czy sie nie powtorzy, sprawdz czy nie istnieje wbudowana w Node metoda
const { randomUUID } = require('crypto'); // Added in: node v14.17.0

  return randomUUID(); // unique value
}

///////////////////////

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello User!! Welcome on my server :)');
})
app.post('/signin',(req, res) => { // zmieniam stan serwera 
  // co dostaje? -> dostajemy Nick klienta
  // co zwracam? -> generujemy unikalny CLIENT ID, zapis do bazy danych klientow, zwracamy status powowdzenia akcji oraz CLIENT ID
  
  const entry = {
    nick : req.query["nick"],
    clientId : generateUuid()
  }

  ClientDatabase.push(entry);
  res.status(201).send(entry);
})

app.put('/msg',(req, res) => {  // rejest danych na serwerze 
  // co dostaje? -> dostajemy dane od klienta do zapisu w bazie wiadomosci
  // co zwracam? -> zwracam status http, czy pomyslnie sie udalo (200 to all OK)
  const messageDatabaseItem = {
    clientId : req.body.clientId,
    contentType : req.body.contentType,
    content : req.body.message,
    destinationClientId : req.body.destinationClientId,
    synchroStatus : false,
    date : Date.now()
  }
  ClientMess.push(messageDatabaseItem)
  res.status(201);
  res.send();
})

app.get('/msg',(req, res) => { // otrzymujemy
  // co dostaje? -> Client ID 
  // co zwracam? -> lista damych dla niego oraz zmieniam status wiadomosci na dostarczone do klienta  
  res.status(310).send(`Get message: ${ req.query["client_id"]}`); 
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})