//const express = require('express')
//const app = express();
//const mongodb = require('mongodb');
const MongoClient = require("mongodb").MongoClient;
//const cors = require ('cors');

//app.use(cors());
//app.use(express.json());

var url = 'mongodb://84.172.40.34:22/user'; 


MongoClient.connect(url,function(err, db){console.log("DB Connected.")});


// let userList = []

// app.post('/create', (request, response) => {
//     const name = request.body.name;
//     if (userList.indexOf(name) !== -1)
//     {
//         userList.push(name);
//         console.log("User wird der Liste hinzugefügt.");
//     }
//     else
//     {
//         console.log("User existiert bereits.");
//     }
//     response.send("/create Route wurde erfolgreich aufgerufen.");
//     console.log(userList);

// });

// app.post('/login', (request, response) => {
//     const name = request.body.name;

//     response.send("/create Route wurde erfolgreich aufgerufen.");
// });

