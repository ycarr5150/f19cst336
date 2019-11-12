const express = require('express');
const router = express.Router();
const mysql = require('mysql');

/* GET users listening. (/mysql) */
router.get('/', function(req, res, next) {

    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
        password: 'pg64c5vi0g4loqpx',
        database: 'xc7tbl3qik69dioa'
    });

    connection.connect();

    connection.query('SELECT 41 + 1 AS solution', function(error, results, fields) {
        if (error) throw error;
        console.log('The soution is: ', results[0].solution);

        res.render('../public/examples/my_sql/view', {
            title: 'My SQL Example', 
            solution: results[0].solution 
        });
    });

    connection.end();
});

/*
router.get('/quotes', function(req, res, next) {

    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
        password: 'pg64c5vi0g4loqpx',
        database: 'xc7tbl3qik69dioa'
    });

    connection.connect();

    connection.query('SELECT * FROM ex_mysql_quote', function(error, results, fields) {
        if (error) throw error;
        console.log('The soution is: ', results[0].solution);

        res.render('../public/examples/my_sql/view', {
            title: 'My SQL Example', 
            solution: results[0].solution 
        });
    });

    connection.end();
}); */ 

module.exports = router;
