const express = require("express"); 
var faker = require('faker');
const app = express(); 
app.engine('html', require('ejs').renderFile); 
app.use(express.static("public")); 

// routes
app.get("/", function(req, res) {
    res.render("index.html", {
        "quote": "I'm looking to expand my portfolio while I'm on top and I'm young.", 
        "person": "- Floyd Mayweather Jr."
    }); 
});

app.get("/about", function(req, res) {
    res.render("about.html", {
        "about1" : faker.lorem.paragraphs(),
        "about2" : faker.lorem.paragraphs()
    }); 
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
