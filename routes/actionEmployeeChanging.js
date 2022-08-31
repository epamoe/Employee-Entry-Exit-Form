var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const mysqlCnx = require('./utilsFunctions/dbConnection.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

/* GET users listing. */
router.post('/', function(request, response, next) {

    var data = request.body;
    var user = "NA";
    var req1 = "",
        req2 = "",
        req3 = "",
        req4 = "";
    let cnx1 = new mysqlCnx();
    if (!data.change + "".localeCompare("organisation")) {
        req1 = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `organisation`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.organisation + "','changing" +
            "');"
        );
    }
    if (!data.change + "".localeCompare("position")) {
        req2 = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `position`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.position + "','changing" +
            "');"
        );
    }
    if (!data.change + "".localeCompare("contracttype")) {
        req3 = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `contract_type`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.contracttype + "','changing" +
            "');"
        );
    }
    if (!data.change + "".localeCompare("employmenttype")) {
        req4 = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `employment_type`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.employmenttype + "','changing" +
            "');"
        );
    }
    //zfz
    response.render("entryform");
});
module.exports = router;