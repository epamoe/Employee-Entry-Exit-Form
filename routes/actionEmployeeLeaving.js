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
    let cnx1 = new mysqlCnx();
    var req = cnx1.connection.query(
        "INSERT INTO `entry_exit_form`( " +
        "`initiator`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason` , `form_type`" +
        " ) VALUES " +
        "('" +
        user + "','" + data.employeeid + "@enkoeducation.com','" + data.leavingdate + "','" + data.deprovisioningdate + "','" + data.leavingreason + "','leaving" +
        "');"
    );
    response.render("entryform");
});
module.exports = router;