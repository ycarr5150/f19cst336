var express = require('express');
var router = express.Router();

/* GET users listing. (/exercises/promises) */
router.get('/', function(req, res, next) {
    res.render('exercises/promisesAsync', {
        title: 'Promises and Async Exercise'
    });
});


module.exports = router;