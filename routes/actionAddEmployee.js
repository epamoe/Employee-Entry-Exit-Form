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
    var user = request.session.userId;
    var it_tools = [
        data.gsuite, data.edadmin, data.payspace,
        data.turnitin, data.canvas, data.pipedrive, data.docusign,
        data.slack, data.helpdesk, data.jazzhr, data.asana, data.mailchimp,
        data.surveymonkey, data.powerbi, data.office365
    ];
    it_tools = it_tools.filter(n => n); //remove null and undefined values
    var groups = [data.allstaff, data.allteacher, data.allrh];
    groups = groups.filter(n => n); //remove null and undefined values
    //establishing connection and running query
    let cnx1 = new mysqlCnx();
    var rq = cnx1.connection.query(" INSERT INTO `entry_exit_form` " +
        "(`initiator`, `firstname`, `lastname`, `suggested_email`, " +
        " `organisation`, `position`, `subject`, `begining_date`, `end_date`, `birthdate`, " +
        "`gender`, `nationality`, `id_passport_type`, `id_passport_number`, `country_residence`, `city_residence`, " +
        "`marital_status`, `other_marital_status`, `number_children`, `contract_type`, `employment_type`, `staff_member_repporting_to`,`crypted_net_salary`," +
        "`crypted_gross_salary`, `emergency_name`, `emergency_phone`, `personal_email`, `personal_phone`, `expiration_date_of_probation_period`, `is_probation_period_renewable`, " +
        "`it_tools`, " +
        "`it_groups`, " +
        "`form_type`" +
        " ) VALUES (" +
        "'" + user + "','" + data.firstname + "','" + data.lastname + "','" + data.suggestedemail + "@enkoeducation.com" +
        "','" + data.school + "','" + data.position + "','" + data.subject + "','" + data.startdate + "','" + data.enddate + "','" + data.enddate +
        "','" + data.gender + "','" + data.nationality + "','" + data.identifier + "','" + data.identifiervalue + "','" + data.contryresidence + "','" + data.city +
        "','" + data.maritalstatus + "','" + data.othermaritalstatus + "','" + data.numberchildren + "','" + data.typeofcontract + "','" + data.typeofemployment + "','" + data.staffmemberreportingto + "',AES_ENCRYPT('" + data.netsalary + "',CURRENT_TIMESTAMP())" +
        ",AES_ENCRYPT('" + data.grosssalary + "',CURRENT_TIMESTAMP())" + ",'" + data.emergencycontactname + "','" + data.emergencycontactphone + "','" + data.personalemail + "','" + data.personalphone + "','" + data.expirationdateofpropationperiod + "','" + data.isprobationperionrenewable +
        "','[" + it_tools + "]" +
        //"','[" + data.gsuite + "," + data.edadmin + "]" + //It admin tools
        "','[" + groups + "]" +
        //"','[" + data.allstaff + "," + data.allteacher + "," + data.allrh + "]" + // All groups
        "','entry');"
    );
    //Send IT email
    let ITEmail = new emailMgmt();
    let ITticket = new ticketMgmt(ITEmail.getITTitle(), ITEmail.getITMailAddress(), ITEmail.getOnComingSubject(), ITEmail.getITOnComingMessage("#", data.suggestedemail, groups, it_tools), ITEmail.getITHelpTopic());
    var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnComingSubject(), ITEmail.getITOnComingMessage(ITticket.getTicketID(), data.suggestedemail, groups, it_tools));

    //Send HR email
    let HREmail = new emailMgmt();
    let HRticket = new ticketMgmt(HREmail.getHRTitle(), HREmail.getHRMailAddress(), HREmail.getOnComingSubject(), HREmail.getHROnComingMessage("#", data.suggestedemail), HREmail.getHRHelpTopic());
    var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnComingSubject(), HREmail.getHROnComingMessage(HRticket.getTicketID(), data.suggestedemail));


    response.render("entryform");
});

module.exports = router;