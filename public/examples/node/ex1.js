// node is for running javascript 
// express is for listening on ports - connects to the network 
var express = require('express')
var app = express()

// access object from object.js
// will look for the file and look for the module exports
// so it can access those elements 
const object = require('./includes/object.js'); 

console.log(object.objects)                         // prints out the object
console.log(object.objects.hello);                  // prints out a variable from object 
console.log(object.objects.loggin);                 // "" 



/*
LECTURE NOTES: 

https://www.csumb.edu:443/dashboard 

https: protocol
www: subdomain                |
csumb: domain name            | DOMAIN
edu: top level domain         |
443: port 
/dashboard: route

DNS translates the domain into an IP address
TCP/IP + DNS gets that IP and sends packets, etc. 
*/ 