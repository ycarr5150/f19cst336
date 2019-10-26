// JavaScript File
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // render is associated with templates 
  res.render('basic', 
  { 
      message: 'Howdy!'
  });
});

/* POST user listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;