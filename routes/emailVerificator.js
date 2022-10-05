const http = require('http');
const url = require('url');
var express = require('express');
const { response } = require('../app');
var router = express.Router();
//var opts = require("./utils/GoogleLib/options.json");

var opts = {
    client: {
        id: '245661520998-kpur0fcekfgbdkgja419q3hddngcdhdg.apps.googleusercontent.com',
        secret: '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'
    },
    token: {
        refresh: "1//03UQ3sJTV5sapCgYIARAAGAMSNwF-L9IrJJRQdg70OjmWt-tH1L6UKPNj9TPA06P-jSaT10mnlXDVOCTraGFxjyI3nR8YesNTg8s"
    }
};
router.get('/', function(request, response, next) {
    var inputEmail = request.query.prefix;
    if (inputEmail) {
        var admin_sdk = require('./utils/GoogleLib/user_provisioning.coffee');
        var user_provisioning = new admin_sdk(opts);
        var inputEmail = request.query.prefix;
        user_provisioning.get(inputEmail + "@enkoeducation.com", function(err, body) {
            if (err) {
                //response.send(err.error.code.toString());
                response.send("Looks good!");
                //console.log("An error occured: " + JSON.stringify(err.error.code));
            } else {
                //response.send(body.primaryEmail.toString());
                response.send("This email already exist. Try " + inputEmail + "1");
                //console.log("Received response: " + JSON.stringify(body));
            }
        });
    } else {
        response.redirect('/user-management/');
    }
});
module.exports = router;