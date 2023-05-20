const express = require('express');
const eobj = express();

const { MongoClient } = require('mongodb');
const URL = "mongodb://localhost:27017";
const mongoClient = new MongoClient(URL);

eobj.listen(5100, function(req, res){
console.log("server started listning...");
});


eobj.get('/', function(req, res){
  res.send("server is live...");
  });

async function getMongoConnetion(req, res)
{
   let result = await mongoClient.connect();
   let db = result.db('Marvellous');
   let collectn = db.collection("Batches");
   let resp = await collectn.find().toArray();
   res.send(resp);
}

// getMongoConnetion();

// Handling CORS : cross origin resource sharing
eobj.use((req, res,next) => {
  res.header("Access-Control-Allow-Origin", 
  "http://localhost:4200");
 
  res.header("Acess-Control-Allow-Header",
  "Origin, X-Requested-with, Content-Type, Accept");
 
  next();
 });

eobj.get('/getBatches', getMongoConnetion);
