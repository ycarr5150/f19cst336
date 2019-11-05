const express = require("express"); 
const app = express(); 
app.engine('html', require('ejs').renderFile); 
app.use(express.static("public")); 

// routes
app.get("/", function(req, res) {
    res.render("index.html"); 
});

app.get("/about", function(req, res) {
    res.render("about.html"); 
});

app.get("/resume", function(req, res) {
    res.render("resume.html"); 
});

app.get("/contact", function(req, res) {
    res.render("contact.html"); 
});

// server listener 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server..."); 
});
