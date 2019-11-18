const express = require("express");
const request = require('request');
const router = express.Router();

//routes
router.get("/", async function(req, res) {
    let parsedData = await getImages("otters");
    let randomNumbers = new Array(); 
    randomNumbers = getRandomNumbers(parsedData.hits.length, 4); 
    
    res.render("../public/labs/lab7_pixabay/views/index.ejs", { 
        "image1": parsedData.hits[randomNumbers[0]], 
        "image2": parsedData.hits[randomNumbers[1]], 
        "image3": parsedData.hits[randomNumbers[2]], 
        "image4": parsedData.hits[randomNumbers[3]], 
    });
}); //root route


router.get("/results", async function(req, res) {
    //console.dir(req);
    let keyword = req.query.keyword; //gets the value that the user typed in the form using the GET method
    keyword = keyword.replace(/\s+/g, "%20");
    let orientation = req.query.orientation; 
    console.log(orientation); 
    let parsedData = await getImages(keyword, orientation);
    let randomNumbers = new Array(); 
    randomNumbers = getRandomNumbers(parsedData.hits.length, 7); 
    
    res.render("../public/labs/lab7_pixabay/views/results.ejs", { 
        "image1": parsedData.hits[randomNumbers[0]], 
        "image2": parsedData.hits[randomNumbers[1]], 
        "image3": parsedData.hits[randomNumbers[2]], 
        "image4": parsedData.hits[randomNumbers[3]], 
        "image5": parsedData.hits[randomNumbers[4]], 
        "image6": parsedData.hits[randomNumbers[5]], 
        "image7": parsedData.hits[randomNumbers[6]], 
    });
}); //results route

//Returns all data from the Pixabay API as JSON format
function getImages(keyword, orientation) {
    return new Promise(function(resolve, reject) {
        request('https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=' + keyword 
        + "&orientation=" + orientation,
            function(error, response, body) {
                if (!error && response.statusCode == 200) { //no issues in the request
                    let parsedData = JSON.parse(body); //converts string to JSON
                    resolve(parsedData);
                } else {
                    reject(error);
                    console.log(response.statusCode);
                    console.log(error);
                }
            }); //request
    });
}

function getRandomNumbers(totalHits, size) {
    var randomNumber = new Array(); 
                
    while(randomNumber.length != size) {
        let previous = false; 
        let number = Math.floor(Math.random() * totalHits); 
                    
        for (let i = 0; i < randomNumber.length; i++) {
            if(number == randomNumber[i]) {
                previous = true; 
            }
        }
                    
        if (!previous) {
            randomNumber.push(number); 
        }
    }
    
    return randomNumber; 
}

module.exports = router;
