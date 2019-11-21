const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const session = require('express-session'); 

router.get('/dashboard', function(req, res, next) {
    if (req.session && req.session.username && req.session.username.length) {
        res.render('../public/examples/auth/dashboard', {
            title: 'Dashboard', 
            username: req.session.username 
        });
    } else {
        delete req.session.username; 
        res.redirect('/auth/login'); 
    }
});

// deliver the view 
router.get('/login', function(req, res, next) {
    res.render('../public/examples/auth/login', {
        title: 'Login'
    });
});

// not rendering, pass back json 
router.post('/login', function(req, res, next) {
    // Do something to login... 
    let successful = false; 
    let message = ''; 
    if (req.body.username === 'hello' && req.body.password === 'world') {
        successful = true; 
        req.session.username = req.body.username; 
    } else {
        // delete user as punishment 
        delete req.session.username; 
        message = 'Wrong username or password!' 
    }
    
    // Return success or failure 
    res.json({
        result: successful, 
        message: message 
    });
});

module.exports = router;
