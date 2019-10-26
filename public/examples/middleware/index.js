var express = require('express')
var app = express()

const randomNumber = require('./randomNumber'); 
const substitute = require('./substitute'); 
app.use('/', randomNumber); 
app.use('/', substitute);

app.listen(8080); 