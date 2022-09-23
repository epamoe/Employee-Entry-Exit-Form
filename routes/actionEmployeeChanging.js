var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const session = require('express-session');
const path = require('path');
const mysqlCnx = require('./utils/dbConnection.js');
var ticketMgmt = require('./utils/helpdeskManagement.js');
var emailMgmt = require('./utils/emailManagement');
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
    //Send IT email
    let ITEmail = new emailMgmt();
    let ITticket = new ticketMgmt(ITEmail.getITTitle(), ITEmail.getITMailAddress(), ITEmail.getOnChangingSubject(), ITEmail.getITOnChangingMessage("#", data.employeeid, changeString));
    var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnChangingSubject(), ITEmail.getITOnChangingMessage(ITticket.getTicketID(), data.employeeid, changeString));

    //Send HR email
    let HREmail = new emailMgmt();
    let HRticket = new ticketMgmt(HREmail.getHRTitle(), HREmail.getHRMailAddress(), HREmail.getOnChangingSubject(), HREmail.getHROnChangingMessage("#", data.employeeid, changeString), HREmail.getHRHelpTopic());
    var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnChangingSubject(), HREmail.getHROnChangingMessage(HRticket.getTicketID(), data.employeeid, changeString));

    response.render("entryform");
});
module.exports = router;