var express = require('express');
var router = express.Router();

//import groups list
//const groupsList = require('./utils/groupList.json');

//import group data from BD
const mysqlCnx = require('./utils/dbConnection.js');


/* GET users listing. */
router.post('/', function(request, response, next) {
    let cnx1 = new mysqlCnx();
    //var groups = "###";
    //let result = [];
    var concerns = request.body.concerns;
    switch (concerns) {
        case "newemployee":
            {
                cnx1.connection.query("SELECT * FROM `Enko_groups` ORDER BY mail desc ",
                    function(err, rows) {
                        if (err) {
                            console.log('error', err)

                        } else {
                            response.render('formNewEmployee', {
                                userid: request.session.userId,
                                groups: rows
                            })
                        }
                    });
                break;
            }
        case "employeeleaving":
            response.render("formEmployeeLeaving", {
                userid: request.session.userId
            });
            break;
        case "employeechanging":
            response.render("formEmployeeChanging", {
                userid: request.session.userId
            });
            break;
        default:
            response.render('entryform', {
                userid: request.session.userId
            });
    }
});
router.get('/', function(request, response, next) {
    response.render('entryform', {
        userid: request.session.userId
    });
});
module.exports = router;