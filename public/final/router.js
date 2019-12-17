const express = require("express");
const mysql = require('mysql');
const router = express.Router();

router.get("/login", function(req, res, next) { 
    delete req.session.username;
    res.render("../public/final/views/index.ejs"); 
}); 

router.post("/login", function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
            password: 'pg64c5vi0g4loqpx',
            database: 'xc7tbl3qik69dioa'
    });
    
    connection.connect();
    
    connection.query(
        `SELECT username, password FROM final_login
        WHERE username = '${req.body.username}' and password = '${req.body.password}' `, 
        function(error, results, fields) {
            if (error) throw error; 
                
            if(!results.length) {
                connection.end(); 
                
                res.json({
                    successful: false, 
                    message: "Error, incorrect information"
                }); 
            } else {
                connection.end(); 
                req.session.username = req.body.username; 
                
                res.json({
                    successful: true 
                }); 
            }
    });
}); 

router.get("/newuser", function(req, res, next) {
    res.render("../public/final/views/newuser.ejs"); 
}); 

router.post("/newuser", function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
        password: 'pg64c5vi0g4loqpx',
        database: 'xc7tbl3qik69dioa'
    });

    connection.connect();
    
    connection.query(
        `SELECT username, email FROM final_login
        WHERE username = '${req.body.username}' or email = '${req.body.email}' `, 
        function(error, results, fields) {
            if (error) throw error; 
            
            // IF NO RESULTS, USERNAME AND EMAIL ARE NOT TAKEN 
            if(!results.length) {
                // CREATE NEW USER 
                connection.query(
                    `INSERT INTO final_login
                    (username, password, email, fullname)
                    VALUES ('${req.body.username}', '${req.body.password}', 
                    '${req.body.email}', '${req.body.fullname}') `, 
                    function(error, results, fields) {
                    if (error) throw error; 
                        
                    connection.end(); 
                    
                    req.session.username = req.body.username; 
                    res.json({
                       successful: true
                    }); 
                });
            } else {
                connection.end();
                res.json({
                    successful: false,
                    message: 'Invalid: username or email already in use'
                });
            }
    }); 
}); 

router.get("/dashboard", function(req, res, next) {
    if(req.session && req.session.username && req.session.username.length) {
        let date = new Date(); 
        let month = date.getMonth() + 1; 
        let day = date.getDate() - 1; 
        let today = date.getFullYear() + "-" + month + "-" + day; 
        
        const connection = mysql.createConnection({
            host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'gwmjra9ipxh2mmvx',
            password: 'pg64c5vi0g4loqpx',
            database: 'xc7tbl3qik69dioa'
        });
    
        connection.connect();
        
        connection.query(
            `SELECT * from final_appointments
            WHERE username = '${req.session.username}' and date > '${today}'`, 
            function(error, results, fields) {
                if (error) throw error; 
                
                connection.end(); 
                res.render("../public/final/views/dashboard.hbs", {
                    results: results 
                }); 
        }); 
    } else {
        delete req.session.username;
        res.redirect("/scheduler/login");    
    }
}); 

router.post("/dashboard", function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gwmjra9ipxh2mmvx',
        password: 'pg64c5vi0g4loqpx',
        database: 'xc7tbl3qik69dioa'
    });

    connection.connect();
    
    connection.query(
        `SELECT username, date, start, end FROM final_appointments
        WHERE username = '${req.session.username}' and date = '${req.body.date}'
        and start = '${req.body.start}' and end = '${req.body.end}'`, 
        function(error, results, fields) {
            if (error) throw error; 
            
            if(!results.length) {
                connection.query(
                    `INSERT INTO final_appointments
                    (username, date, start, end, booked)
                    VALUES ('${req.session.username}', '${req.body.date}', 
                    '${req.body.start}', '${req.body.end}', 'Not Booked') `, 
                    function(error, results, fields) {
                        if (error) throw error; 
                        
                        connection.end(); 
                        res.json({
                            successful: true 
                        })
                });
            } else {
                connection.end(); 
                
                res.json({
                    successful: false, 
                    message: "Time already created"
                })
            }
    });
});

module.exports = router;