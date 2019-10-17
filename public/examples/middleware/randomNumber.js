module.exports = function(req, res, next) {
    var randomNumber = Math.floor(Math.random() * 99) + 1; 
    req.randomNumber = randomNumber; 
    console.log(req.randomNumber); 
}