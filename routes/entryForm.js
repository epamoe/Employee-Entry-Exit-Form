var express = require('express');
var router = express.Router();


//import group data from BD
const mysqlCnx = require('./utils/dbConnection.js');


/* GET users listing. */
router.post('/', function(request, response, next) {
    var concerns = request.body.concerns;

    switch (concerns) {
        case "newemployee":
            //request.flash('success', 'User ### successfully!!');
            let groups;
            let cnx = new mysqlCnx();
            var groupQuery = "SELECT * FROM Enko_groups WHERE `important`=1";
            var accessQuerry = "SELECT * FROM Enko_tool_access ";
            cnx.connection.query(groupQuery, function(err, resultGroup, fields) {
                if (err) throw err;
                cnx.connection.query(accessQuerry, function(err, resultAccess, fields) {
                    if (err) throw err;
                    response.render("formAddUser", {
                        groups: Object.values(JSON.parse(JSON.stringify(resultGroup))),
                        access: Object.values(JSON.parse(JSON.stringify(resultAccess))),
                        session: request.session,
                        headerMessage: "provide information about the new employee",
                    });
                });
            });
            break;

        case "employeeleaving":
            //console.log(JSON.stringify(request.session.opts));
            response.render("formDeleteUser", {
                session: request.session,
                headerMessage: "provide information about the employee who is leaving",
            });
            break;
        case "employeechanging":
            response.render("formModifyUser", {
                session: request.session,
                headerMessage: "provide the employee's data to change",
            });
            break;
        default:
            response.render('entryform', {
                session: request.session,
                headerMessage: "Choose an action below",
            });
    }
});


router.get('/', function(request, response, next) {
    response.render('entryform', {
        session: request.session,
        headerMessage: "Choose an action below",
    });
});


module.exports = router;