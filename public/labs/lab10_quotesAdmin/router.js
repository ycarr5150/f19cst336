const express = require('express');
const router = express.Router();
const mysql = require('mysql');

router.get('/quotes/add', (req, res) => {
    res.render('../public/labs/lab10_quotesAdmin/view', {
        title: 'Lab 10'
    });
});

router.post('/quotes/add', function(req, res, next) {

    // Get a query string value for filter
    const nameFilter = req.query.name;
    
    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
        password: 'pg64c5vi0g4loqpx',
        database: 'xc7tbl3qik69dioa'
    });
    
    connection.connect();

    connection.query(
        'INSERT INTO l9_quotes(authorId, quote, category) VALUES (?, ?, ?)', 
        [req.body.authorId, req.body.quote, req.body.category], // assuming POST
        (error, results, fields) => {
            if (error) throw error;
            res.json({
                id: results.insertId
            });
        });

    connection.end();
});

module.exports = router;