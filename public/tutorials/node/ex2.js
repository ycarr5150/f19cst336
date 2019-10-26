// node is for running javascript 
// express is for listening on ports - connects to the network
var express = require('express')
var app = express()

// access object from newable.js
// will look for the file and look for the module exports
// so it can access those elements 
const newable = require('./includes/newable.js'); 

console.log(newable);                               // prints out the object    
newable.function();                                 // runs the function 

newable.newfunction = function() {                  // creates a new function (can create a new variable) 
    console.log("does this work"); 
}

console.log(newable);                               // prints out the object, should have new funcitno 
newable.newfunction();                              // runs the new function 