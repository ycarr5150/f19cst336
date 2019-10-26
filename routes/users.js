var express = require('express');
var router = express.Router();

/* GET users listing. (/users) */
router.get('/', function(req, res, next) {
    console.log('user id', req.params.id); 
    console.log('user name', req.query.name); 
    res.status(200).json({
        id: req.params.id,
        name: req.query.name  
    });
  res.send('respond with a specific user');
});

/* GET users listing. (/users/12345?name=jason) */
router.get('/:id?', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user listing. (/users) */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Delete user listing. (/users) */
router.delete('/', function(req, res, next) {
  res.send('delete and respond with status');
});

/* POST user listing. (/users) */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
