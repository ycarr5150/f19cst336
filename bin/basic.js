var express = require('express')
var app = express()

app.use((req, res, next) => {
    console.log('did i get here?(1)');
    req.commandName = 'hello nothing';
    next();
})

app.use('/', function(req, res, next) {
    console.log('did i get here?(2)');
    res.send(`<h1>${req.commandName}</h1>`) // terminator 
})

const useless = require('./useless'); 
app.use('/', useless); 

app.listen(8080)
