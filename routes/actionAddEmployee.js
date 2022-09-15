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

    var mailObject = "New Employee comming";

    //Send email to IT admin

    var itaddress1 = new itaddress();
    var itContent = " Please, be sure you have created a new user with these informations: \n" +
        "<b>Firstname:</b> " + data.firstname + "\n" +
        "<b>Lastname:</b> " + data.lastname + "\n" +
        "<b>ENKO email:</b> " + data.suggestedemail + "@enkoeducation.com\n" +
        "<b>School:</b> " + data.school + "\n" +
        "<b>Position:</b> " + data.position + "\n" +
        "<b>Start:</b> " + data.startdate + "\n" +
        "<b>IT tools:</b> " + it_tools + "\n" +
        "<b>Groups:</b> " + groups + "\n" +
        "<b>Emergency contact:</b> " + data.emergencycontactname + "\n" +
        "<b>Emergency phone:</b> " + data.emergencycontactphone + "\n" +
        "";
    let ItEmail = new mail();
    var itEmailLog = ItEmail.emailSender('' + itaddress1.email, mailObject, itContent);

    //Send email to employee's manager
    var managerContent = "Dear manager You have proposed the creation of new employee: \n" +
        "<b>Firstname:</b> " + data.firstname + "\n" +
        "<b>Lastname:</b> " + data.lastname + "\n" +
        "<b>ENKO email:</b> " + data.suggestedemail + "@enkoeducation.com\n" +
        "<b>School:</b> " + data.school + "\n" +
        "<b>Position:</b> " + data.position + "\n" +
        "<b>Start:</b> " + data.startdate + "\n" +
        "<b>IT tools:</b> " + it_tools + "\n" +
        "<b>Groups:</b> " + groups + "\n" +
        "<b>Emergency contact:</b> " + data.emergencycontactname + "\n" +
        "<b>Emergency phone:</b> " + data.emergencycontactphone + "\n" +
        "";
    let ManagerEmail = new mail();
    var manageraddress1 = new manageraddress();
    var managerEmailLog = ManagerEmail.emailSender('' + manageraddress1.email, mailObject, managerContent);

    //Send email to The employee
    var employeeContent = "Dear Sr, welcome to ENKO Education group \n" +
        "You will soon receive an email from google to help you setting your ENKO Education account \n" +
        "Your email address is <b>" + data.suggestedemail + "@enkoeducation.com</b>" + "\n" +
        "When you receive an email, please find time to set your account into these platforms:<b>" + it_tools + "</b>\n" +
        "You have been added to the following groups: <b>" + groups + "</b>\n" +
        "";
    let EmployeeEmail = new mail();
    var employeeEmailLog = EmployeeEmail.emailSender(data.personalemail, mailObject, employeeContent);

    console.log("\n" + itEmailLog + "\n" + managerEmailLog + "\n" + employeeEmailLog);
    response.render("entryform");
});

module.exports = router;