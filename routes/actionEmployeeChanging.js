var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const mysqlCnx = require('./utilsFunctions/dbConnection.js');
const mail = require('./utilsFunctions/mailSender');
const itaddress = require('./utilsObjects/itEmail.js');
const manageraddress = require('./utilsObjects/managerEmail.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

/* GET users listing. */
router.post('/', function(request, response, next) {

    var data = request.body;
    var user = request.body.userid;
    var reqOrganisation = "NA",
        reqPosition = "NA",
        reqContractType = "NA",
        reqEmploymentType = "NA";
    var changeString = "";
    let cnx1 = new mysqlCnx();
    if ((data.change).toString().includes("organisation")) {
        reqOrganisation = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `organisation`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.organisation + "','changing" +
            "');"
        );
        changeString += "New organisation: " + data.organisation + "\n";
    }
    if ((data.change).toString().includes("position")) {
        reqPosition = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `position`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.position + "','changing" +
            "');"
        );
        changeString += "New Position: " + data.position + "\n";
    }
    if ((data.change).toString().includes("contracttype")) {
        reqContractType = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `contract_type`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.contracttype + "','changing" +
            "');"
        );
        changeString += "New Contract type: " + data.contracttype + "\n";
    }
    if ((data.change).toString().includes("employmenttype")) {
        reqEmploymentType = cnx1.connection.query(
            "INSERT INTO `entry_exit_form`( " +
            "`initiator`, `changing_email`, `employment_type`, `form_type`" +
            " ) VALUES " +
            "('" +
            user + "','" + data.employeeid + "','" + data.employmenttype + "','changing" +
            "');"
        );
        changeString += "New Employment type: " + data.employmenttype + "\n";
    }

    //Email dispatcher
    var mailObject = "Employee Changing";

    //Send email to IT admin
    var itaddress1 = new itaddress();
    var itContent = "Dear IT, \n " +
        "be sure you have made set this new information to the account identified by: " + data.employeeid + "@enkoeducation.com \n" + changeString;
    let ItEmail = new mail();
    var itEmailLog = ItEmail.emailSender('' + itaddress1.email, mailObject, itContent);

    //Send email to employee's manager
    var managerContent = "Dear manager the employee identified by " + data.employeeid + "@enkoeducation.com is changing: \n" + changeString;
    let ManagerEmail = new mail();
    var manageraddress1 = new manageraddress();
    var managerEmailLog = ManagerEmail.emailSender('' + manageraddress1.email, mailObject, managerContent);

    //Send email to The employee
    var employeeContent = "Dear Sr, you profile at ENKO education have changed: \n" + changeString;
    let EmployeeEmail = new mail();
    var employeeEmailLog = EmployeeEmail.emailSender(data.employeeid, mailObject, employeeContent);

    console.log("\n" + itEmailLog + "\n" + managerEmailLog + "\n" + employeeEmailLog);
    response.render("entryform");
});
module.exports = router;