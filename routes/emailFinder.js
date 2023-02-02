const http = require('http');
const url = require('url');
var express = require('express');
const { response } = require('../app');
var router = express.Router();
var googleUserMgmt = require('./utils/googleUserCRUD');
const { ConnectionClosedEvent } = require('mongodb');

var output = "";

function save(elmt) {
    output += elmt;
    //console.log(output);
}
var open = " <select name='staffmemberreportingto'> ";
var close = " </select>"

var admin_sdk = googleUserMgmt.UserProvisioning;
var user_provisioning = new admin_sdk(googleUserMgmt.opts);

router.get('/', function(request, response, next) {
    var inputKeyWord = request.query.keyword;
    params = {
        customer: "my_customer",
        domain: "" + request.session.email.split("@")[1],
        event: "add",
        orderBy: "email",
        projection: "custom",
        query: "",
        sortOrder: "ASCENDING",
        viewType: "admin_view"
    };
    if (inputKeyWord) {

        inputKeyWord.split(";").forEach(element => { //effectuer la recherche sur chaque mot entré
            params.query = element;
            //console.log("## " + request.session.email.split("@")[1]);
            log = "";
            user_provisioning.list(params, function(err, body) { //effectuer la recherche sur 
                if (err) {
                    log = "Network Error."
                    response.send(log);
                } else {
                    if (Object.keys(body).length <= 2) {
                        log = "Not Found.";
                        response.send(log);
                    } else {
                        body.users.forEach(elementInstance => {
                            save(
                                "<option value='" + elementInstance.primaryEmail + "' >" +
                                elementInstance.primaryEmail + "</option>"
                            );
                        });
                        response.send(open + output + close);
                    }
                }

            });

        });
        //response.send("Not found.");
        //console.log(tmp.filter(n => n));
        //console.log(open + output + close);
    } else {
        response.redirect('/user-management/');
    }
});
module.exports = router;