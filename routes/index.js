var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('./utils/dbConnection.js');
var ticketMgmt = require('./utils/helpdeskManagement.js');
var emailMgmt = require('./utils/emailManagement');


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Enko Education portal' });
});
/* POST home page. */
router.post('/', function(request, response, next) {
    //Switch on Entry form use cases

    switch (request.body.usecase) {
        case "adduser":
            var data = request.body;
            console.log(data.enkogroups);
            var user = request.session.email;
            var it_tools = [
                data.asana, data.canvas, data.docusign, data.edadmin,
                data.gsuite, data.helpdesk, data.jazzhr, data.mailchimp,
                data.office365, data.payspace, data.pipedrive, data.powerbi,
                data.slack, data.surveymonkey, data.turnitin, data.zoom
            ];
            it_tools = it_tools.filter(n => n); //remove null and undefined values
            var groups = [data.enkogroups];
            groups = groups.filter(n => n); //remove null and undefined values
            //establishing connection and running query
            var cnx1 = new mysqlCnx();
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
            var ITEmail = new emailMgmt();
            var ITticket = new ticketMgmt(ITEmail.getITTitle(), ITEmail.getITMailAddress(), ITEmail.getOnComingSubject(), ITEmail.getITOnComingMessage("#", data.suggestedemail, groups, it_tools), ITEmail.getITHelpTopic());
            var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnComingSubject(), ITEmail.getITOnComingMessage(ITticket.getTicketID(), data.suggestedemail, groups, it_tools));

            //Send HR email
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt(HREmail.getHRTitle(), HREmail.getHRMailAddress(), HREmail.getOnComingSubject(), HREmail.getHROnComingMessage("#", data.suggestedemail), HREmail.getHRHelpTopic());
            var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnComingSubject(), HREmail.getHROnComingMessage(HRticket.getTicketID(), data.suggestedemail));


            response.render("entryform", {
                session: request.session
            });

            break;
        case "deleteuser":

            var data = request.body;
            var user = request.session.email;
            var cnx1 = new mysqlCnx();

            var req = cnx1.connection.query(
                "INSERT INTO `entry_exit_form`( " +
                "`initiator`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason` , `form_type`" +
                " ) VALUES " +
                "('" +
                user + "','" + data.employeeid + "@enkoeducation.com','" + data.leavingdate + "','" + data.deprovisioningdate + "','" + data.leavingreason + "','leaving" +
                "');"
            );

            //Send IT email
            var ITEmail = new emailMgmt();
            var ITticket = new ticketMgmt(ITEmail.getITTitle(), ITEmail.getITMailAddress(), ITEmail.getOnLeavingSubject(), ITEmail.getITOnLeavingMessage("#", data.employeeid, data.deprovisioningdate), ITEmail.getITHelpTopic());
            var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnLeavingSubject(), ITEmail.getITOnLeavingMessage(ITticket.getTicketID(), data.employeeid, data.deprovisioningdate));

            //Send HR email
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt(HREmail.getHRTitle(), HREmail.getHRMailAddress(), HREmail.getOnLeavingSubject(), HREmail.getHROnLeavingMessage("#", data.employeeid, data.deprovisioningdate, data.leavingreason), HREmail.getHRHelpTopic());
            var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnLeavingSubject(), HREmail.getHROnLeavingMessage(HRticket.getTicketID(), data.employeeid, data.deprovisioningdate, data.leavingreason));

            response.render("entryform", {
                session: request.session
            });

            break;
        case "modifyuser":
            console.log("####");
            var data = request.body;
            var user = request.session.email;
            var reqOrganisation = "NA",
                reqPosition = "NA",
                reqContractType = "NA",
                reqEmploymentType = "NA";
            var changeString = "";
            var cnx1 = new mysqlCnx();
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
            var ITEmail = new emailMgmt();
            var ITticket = new ticketMgmt(ITEmail.getITTitle(), ITEmail.getITMailAddress(), ITEmail.getOnChangingSubject(), ITEmail.getITOnChangingMessage("#", data.employeeid, changeString));
            var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnChangingSubject(), ITEmail.getITOnChangingMessage(ITticket.getTicketID(), data.employeeid, changeString));

            //Send HR email
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt(HREmail.getHRTitle(), HREmail.getHRMailAddress(), HREmail.getOnChangingSubject(), HREmail.getHROnChangingMessage("#", data.employeeid, changeString), HREmail.getHRHelpTopic());
            var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnChangingSubject(), HREmail.getHROnChangingMessage(HRticket.getTicketID(), data.employeeid, changeString));

            response.render("entryform", {
                session: request.session
            });

            break;
        default:
            console.log("error! EEF use case:" + request.body.usecase);
            break;
    }
    //console.log("###error!" + request.body.usecase);
});
module.exports = router;