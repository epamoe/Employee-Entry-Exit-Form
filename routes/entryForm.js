var express = require('express');
var router = express.Router();


//import group data from BD
const mysqlCnx = require('./utils/dbConnection.js');


/* GET users listing. */
router.post('/', function(request, response, next) {
    var concerns = request.body.concerns;
    switch (concerns) {
        case "newemployee":
            let groups;
            let cnx = new mysqlCnx();
            var groupQuery = "SELECT * FROM Enko_groups WHERE `important`=1";
            var accessQuerry = "SELECT * FROM Enko_tool_access ";
            cnx.connection.query(groupQuery, function(err, resultGroup, fields) {
                if (err) throw err;
                cnx.connection.query(accessQuerry, function(err, resultAccess, fields) {
                    if (err) throw err;
                    response.render("formNewEmployee", {
                        //userid: request.session.userId
                        groups: Object.values(JSON.parse(JSON.stringify(resultGroup))),
                        access: Object.values(JSON.parse(JSON.stringify(resultAccess))),
                        session: request.session
                    });
                });
            });
            break;

        case "employeeleaving":
            response.render("formEmployeeLeaving", {
                session: request.session
            });
            break;
        case "employeechanging":
            response.render("formEmployeeChanging", {
                session: request.session
            });
            break;
        default:
            response.render('entryform', {
                session: request.session
            });
    }
});
router.get('/', function(request, response, next) {
    response.render('entryform', {
        session: request.session
    });
});
module.exports = router;