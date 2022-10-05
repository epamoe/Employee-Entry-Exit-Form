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
        var inputEmail = request.query.prefix;
        user_provisioning.get(inputEmail + "@enkoeducation.com", function(err, body) {
            if (err) {
                //response.send(err.error.toString());
                response.send("Looks good!");
                //console.log("An error occured: " + JSON.stringify(err.error.code));
            } else {
                //response.send(body.primaryEmail.toString());
                response.send("This email already exist. Try " + inputEmail + "1");
                console.log("Received response: " + JSON.stringify(body));
            }
        });
    } else {
        response.redirect('/user-management/');
    }
});
module.exports = router;