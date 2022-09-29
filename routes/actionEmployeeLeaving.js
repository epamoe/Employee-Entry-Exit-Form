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
    var user = request.session.email;
    let cnx1 = new mysqlCnx();

    var req = cnx1.connection.query(
        "INSERT INTO `entry_exit_form`( " +
        "`initiator`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason` , `form_type`" +
        " ) VALUES " +
        "('" +
        user + "','" + data.employeeid + "@enkoeducation.com','" + data.leavingdate + "','" + data.deprovisioningdate + "','" + data.leavingreason + "','leaving" +
        "');"
    );

    //Send IT email
    let ITEmail = new emailMgmt();
    let ITticket = new ticketMgmt(ITEmail.getITTitle(), ITEmail.getITMailAddress(), ITEmail.getOnLeavingSubject(), ITEmail.getITOnLeavingMessage("#", data.employeeid, data.deprovisioningdate), ITEmail.getITHelpTopic());
    var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnLeavingSubject(), ITEmail.getITOnLeavingMessage(ITticket.getTicketID(), data.employeeid, data.deprovisioningdate));

    //Send HR email
    let HREmail = new emailMgmt();
    let HRticket = new ticketMgmt(HREmail.getHRTitle(), HREmail.getHRMailAddress(), HREmail.getOnLeavingSubject(), HREmail.getHROnLeavingMessage("#", data.employeeid, data.deprovisioningdate, data.leavingreason), HREmail.getHRHelpTopic());
    var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnLeavingSubject(), HREmail.getHROnLeavingMessage(HRticket.getTicketID(), data.employeeid, data.deprovisioningdate, data.leavingreason));

    response.render("entryform", {
        session: request.session
    });
});


module.exports = router;