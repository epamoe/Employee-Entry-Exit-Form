var express = require('express');
var router = express.Router();
var session = require('express-session');
const path = require('path');
const { response } = require('../app.js');
const mysqlCnx = require('./utilsFunctions/dbConnection.js');
const parser = require('./utilsFunctions/parser.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname));

/* GET users listing. */
router.post('/', function(request, response, next) {
    console.log('Connecting to database...');
    // Capture the input fields
    let email = request.body.email;
    email = email.toLowerCase();
    //  Ensure if the user is working at enko
    // Ensure the input fields exists and are not empty
    if (email) {
        session = request.session;
        // Execute SQL query that'll select the account from the database based on the specified email
        let cnx1 = new mysqlCnx();
        cnx1.connection.query("SELECT * FROM users WHERE email = ? ", [email + '@enkoeducation.com'], function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                response.render('entryform', {
                    userid: request.body.email
                });
            } else {
                response.render('error', {
                    message: "" + email + " Does not appear in our system !"
                });
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});


router.get('/', function(request, response, next) {

    response.render('entryform', {
        //userid: "userProfile"
    });
    /*
        let parser1 = new parser();
        response.send(JSON.stringify(request.scope, parser1.getCircularReplacer()));
    */
});


module.exports = router;