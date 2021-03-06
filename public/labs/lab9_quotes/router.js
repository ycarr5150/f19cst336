const express = require('express');
const router = express.Router();
const mysql = require('mysql');

/* GET users listening. (/) */
router.get('/', function(req, res, next) {
    // GET A QUERY STRING VALUE FOR FILTER
    const nameFilter = req.query.name; 

    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
        password: 'pg64c5vi0g4loqpx',
        database: 'xc7tbl3qik69dioa'
    });

    connection.connect();

    // connection.query(`
    // SELECT q.*, CONCAT(a.firstName, ' ', a.lastName) AS 'fullName', a.sex AS 'gender'
    // FROM l9_quotes q INNER JOIN 
    // l9_author a ON q.authorId = a.authorId
    // `, function(error, results, fields) {
    //     if (error) throw error;

    //     res.render('../public/labs/lab9_quotes/view', {
    //         title: 'Lab 9: Quotes Database', 
    //         quotes: results, 
    //     });
    // });
    
    connection.query(
    `SELECT category 
    FROM l9_quotes
    GROUP BY category`, function(error, results, fields) {
        if (error) throw error; 
        
        res.render('../public/labs/lab9_quotes/view', {
            title: 'Lab9: Quotes Database', 
            category: results
        });
    });

    connection.end();
});

module.exports = router;
