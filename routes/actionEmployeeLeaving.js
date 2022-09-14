var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const mysqlCnx = require('./utilsFunctions/dbConnection.js');
const mail = require('./utilsFunctions/mailSender');

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
    var mailObject = "Employee leaving";
    //Send email to IT admin
    var itContent = " Please, be sure you have made these actions: \n" +
        "1) Deprovision " + data.employeeid + "@enkoeducation.com on " + data.deprovisioningdate;
    let ItEmail = new mail();
    var itEmailLog = ItEmail.emailSender('frederic.tchouli@enkoeducation.com', mailObject, itContent);
    //Send email to employee's manager
    var managerContent = "Dear manager the employee identified by " + data.employeeid + "@enkoeducation.com is leaving \n" +
        "He will no loger have accès to enko tools on " + data.deprovisioningdate + "\n" +
        "Reason: " + data.leavingreason + "\n" +
        "Schedule departure date: " + data.leavingdate;
    let ManagerEmail = new mail();
    var managerEmailLog = ManagerEmail.emailSender('estebanc.pamoe@enkoeducation.com', mailObject, managerContent);
    //Send email to The employee
    var employeeContent = "Dear Sr, we wish you the best \n" +
        "You will loss access to our tools on " + data.deprovisioningdate + "\n" +
        "Reason: " + data.leavingreason + "\n" +
        "Schedule departure date: " + data.leavingdate;
    let EmployeeEmail = new mail();
    var employeeEmailLog = EmployeeEmail.emailSender('epamoe@gmail.com', mailObject, employeeContent);

    console.log("\n" + itEmailLog + "\n" + managerEmailLog + "\n" + employeeEmailLog);
    response.render("entryform");
});


module.exports = router;