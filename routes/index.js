var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // render is associated with templates 
  res.render('index', 
  { 
      title: 'Yazmin\'s site',
      message: 'Howdy!'
  });
});

module.exports = router;
