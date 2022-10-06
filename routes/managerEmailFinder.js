const http = require('http');
const url = require('url');
var express = require('express');
const { response } = require('../app');
var router = express.Router();
var googleUserMgmt = require('./utils/googleUserCRUD')

router.get('/', function(request, response, next) {
    var inputKeyWord = request.query.keyword;
    if (inputKeyWord) {
        var admin_sdk = googleUserMgmt.UserProvisioning;
        var user_provisioning = new admin_sdk(googleUserMgmt.opts);
        params = {
            customer: "my_customer",
            domain: "enkoeducation.com",
            event: "add",
            orderBy: "email",
            projection: "custom",
            query: inputKeyWord,
            sortOrder: "ASCENDING",
            viewType: "admin_view"
        };
        user_provisioning.list(params, function(err, body) {
            if (err) {
                //response.send(err.error.toString());
                if (err.error.code == 200) {
                    response.send("Not found!");
                } else {
                    response.send("Network error!");
                }
                //console.log("An error occured: " + JSON.stringify(err.error.code));
            } else {
                if (Object.keys(body).length <= 2) {
                    response.send("Not found!");
                } else {
                    //response.send(body.primaryEmail.toString());
                    response.send(body.users[0].primaryEmail);
                    console.log("Received response: " + JSON.stringify(body.users[0].primaryEmail));

                }
            }
        });
    } else {
        response.redirect('/user-management/');
    }
});
module.exports = router;