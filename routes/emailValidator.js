const http = require('http');
const url = require('url');
var express = require('express');
const { response } = require('../app');
var router = express.Router();
var googleUserMgmt = require('./utils/googleUserCRUD')

router.get('/', function(request, response, next) {
    var inputEmail = request.query.prefix;
    if (inputEmail) {
        var admin_sdk = googleUserMgmt.UserProvisioning;
        var user_provisioning = new admin_sdk(googleUserMgmt.opts);
        params = {
            customer: "my_customer",
            domain: "enkoeducation.com",
            event: "add",
            orderBy: "email",
            projection: "custom",
            query: inputEmail + "@enkoeducation.com",
            sortOrder: "ASCENDING",
            viewType: "admin_view"
        };
        user_provisioning.list(params, function(err, body) {
            if (err) {
                //response.send(err.error.toString());
                response.send("internal server error. Repport the problem to to itsupport@enkoeducation.com.");
                //console.log("An error occured: " + JSON.stringify(err.error.code));
            } else if (Object.keys(body).length <= 2) {
                log = "Not Found.";
                response.send("Looks good!");
            } else {
                response.send("This email already exist. Try " + inputEmail + "1");
                console.log("Received response: " + JSON.stringify(body));
            }
        });
    } else {
        response.redirect('/user-management/');
    }
});
module.exports = router;