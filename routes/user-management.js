var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('./utils/dbConnection.js');
var ticketMgmt = require('./utils/helpdeskManagement.js');
var emailMgmt = require('./utils/emailManagement');
var addUser = require('./sub-user-management/addUser.js');
var modifyUser = require('./sub-user-management/modifyUser');
var deleteUser = require('./sub-user-management/deleteUser');

/* POST home page. */
router.post('/', function(request, response, next) {

    //Switch on Entry form use cases
    switch (request.body.usecase) {
        case "adduser":
            addUser.addUser(request, response);
            break;

        case "deleteuser":
            deleteUser.deleteUser(request, response);
            break;
        case "modifyuser":
            modifyUser.modifyUser(request, response)

            break;
        default:
            console.log("error! EEF use case:" + request.body.usecase);
            break;
    }
    //console.log("###error!" + request.body.usecase);
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Enko Education portal' });
});
module.exports = router;