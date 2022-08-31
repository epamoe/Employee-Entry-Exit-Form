var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(request, response, next) {
    var concerns = request.body.concerns;
    switch (concerns) {
        case "newemployee":
            {
                response.render("formNewEmployee", {
                    useridentry: request.body.concerns
                });
                break;
            }
        case "employeeleaving":
            response.render("formEmployeeLeaving");
            break;
        case "employeechanging":
            response.render("formEmployeeChanging");
            break;
        default:
            response.render('entryform');
    }
});

module.exports = router;