const express = require('express');
const router = express.Router();
var faker = require('faker');

// routes
router.get("/", function(req, res) {
    res.render("../public/projects/project4a/views/index.html", {
        "quote": "I'm looking to expand my portfolio while I'm on top and I'm young.", 
        "person": "- Floyd Mayweather Jr."
    }); 
});

router.get("/about", function(req, res) {
    res.render("../public/projects/project4a/views/about.html", {
        "about1" : faker.lorem.paragraphs(),
        "about2" : faker.lorem.paragraphs()
    }); 
});

router.get("/resume", function(req, res) {
    res.render("../public/projects/project4a/views/resume.html"); 
});

router.get("/contact", function(req, res) {
    res.render("../public/projects/project4a/views/contact.html"); 
});

module.exports = router;
