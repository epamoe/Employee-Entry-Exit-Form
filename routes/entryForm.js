var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(request, response, next) {
    var concerns = request.body.concerns;
    switch (concerns) {
        case "newemployee":
            {
                response.render("formNewEmployee", {
                    userid: request.session.userId
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

module.exports = router;