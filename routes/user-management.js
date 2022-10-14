var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('./utils/dbConnection.js');
var ticketMgmt = require('./utils/helpdeskManagement.js');
var emailMgmt = require('./utils/emailManagement');
var googleUserMgmt = require('./utils/googleUserCRUD')
var orgUnitFinder = require('./utils/other/orgUnitFinder');
var positionFinder = require('./utils/other/positionFinder');

/* POST home page. */
router.post('/', function(request, response, next) {
    //data transformation due to feedback
    var data = request.body;
    var expirationdateofpropationperiod =
        data.expirationdateofpropationperiod_year +
        "-" + data.expirationdateofpropationperiod_month +
        "-" + data.expirationdateofpropationperiod_day;
    var startdate =
        data.startdate_year +
        "-" + data.startdate_month +
        "-" + data.startdate_day;
    var enddate =
        data.enddate_year +
        "-" + data.enddate_month +
        "-" + data.enddate_day;
    var birthdate =
        data.birthdate_year +
        "-" + data.birthdate_month +
        "-" + data.birthdate_day;
    //Switch on Entry form use cases
    switch (request.body.usecase) {
        case "adduser":

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
            var emergencyPhoneNumber = "+" + data.emergencycontactphonecode + data.emergencycontactphone,
                personnalPhoneNumber = "+" + data.personalphonecode + data.personalphone;
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
                "','" + data.organisation + "','" + data.position + "','" + data.subject + "','" + startdate + "','" + enddate + "','" + birthdate +
                "','" + data.gender + "','" + data.nationality + "','" + data.identifier + "','" + data.identifiervalue + "','" + data.contryresidence + "','" + data.city +
                "','" + data.maritalstatus + "','" + data.othermaritalstatus + "','" + data.numberchildren + "','" + data.typeofcontract + "','" + data.typeofemployment + "','" + data.staffmemberreportingto + "',AES_ENCRYPT('" + data.netsalary + "',CURRENT_TIMESTAMP())" +
                ",AES_ENCRYPT('" + data.grosssalary + "',CURRENT_TIMESTAMP())" + ",'" + data.emergencycontactname + "','" + emergencyPhoneNumber + "','" + data.personalemail + "','" + personnalPhoneNumber + "','" + expirationdateofpropationperiod + "','" + data.isprobationperionrenewable +
                "','[" + it_tools + "]" +
                //"','[" + data.gsuite + "," + data.edadmin + "]" + //It admin tools
                "','[" + groups + "]" +
                //"','[" + data.allstaff + "," + data.allteacher + "," + data.allrh + "]" + // All groups
                "','entry');"
            );

            //creating Workspace account
            var admin_sdk = googleUserMgmt.UserProvisioning;
            var user_provisioning = new admin_sdk(googleUserMgmt.opts);
            new_user = {
                name: {
                    givenName: "" + data.firstname,
                    familyName: "" + data.lastname,
                },
                password: 'passworD' + new Date().toISOString().slice(0, 10),
                primaryEmail: "" + data.suggestedemail + "@enkoeducation.com",
                emails: [{
                        address: "" + data.personalemail,
                        type: "work"
                    },
                    {
                        "address": "" + data.suggestedemail + "@enkoeducation.com",
                        "primary": true
                    }
                ],
                relations: [{
                    value: "" + data.staffmemberreportingto,
                    type: "manager"
                }],
                organizations: [{
                    title: "" + data.subject,
                    primary: true,
                    customType: "",
                    department: "" + positionFinder.getPositionFullText(data.position),
                }],
                phones: [{
                    value: "" + personnalPhoneNumber,
                    type: "work"
                }],
                orgUnitPath: +orgUnitFinder.getOrgFullText(data.organisation),

                fields: "kind,nextPageToken,users(id,kind,name,orgUnitPath,primaryEmail)"
            };

            user_provisioning.insert(new_user, function(err, body) {
                if (err) {
                    console.log("An error occured: " + JSON.stringify(err.error));
                } else {
                    console.log("Received response: " + JSON.stringify(body));
                }
            });

            //Send IT email & Tickets
            var ITEmailForTools = new emailMgmt();
            var ITToolsTicket = new ticketMgmt(
                data.suggestedemail + "@enkoeducation.com",
                data.suggestedemail + "@enkoeducation.com",
                "ITtools: " + data.suggestedemail + "@enkoeducation.com",
                ITEmailForTools.getITOnComingMessageTools(
                    data.suggestedemail + "@enkoeducation.com", data.personalemail, it_tools
                ), HREmail.getITHelpTopic()
            );
            var ITEmailForGroups = new emailMgmt();
            var ITGroupsTicket = new ticketMgmt(
                data.suggestedemail + "@enkoeducation.com",
                data.suggestedemail + "@enkoeducation.com",
                "Groups: " + data.suggestedemail + "@enkoeducation.com",
                ITEmailForGroups.getITOnComingMessageGroups(
                    data.suggestedemail + "@enkoeducation.com", data.personalemail, groups
                ), HREmail.getITHelpTopic()
            );
            //var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnComingSubject(), ITEmail.getITOnComingMessage(ITticket.getTicketID(), data.suggestedemail, groups, it_tools));

            //Send HR email & ticket
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt(
                data.suggestedemail + "@enkoeducation.com",
                data.suggestedemail + "@enkoeducation.com",
                "Payspace for " + data.suggestedemail + "@enkoeducation.com",
                HREmail.getHROnComingMessage(
                    user, orgUnitFinder.getOrgFullText(data.organisation), data.firstname, data.lastname, data.suggestedemail, data.personalemail,
                    personnalPhoneNumber, birthdate, data.contryresidence, data.nationality, data.city, data.gender,
                    data.identifier, data.identifiervalue, data.maritalstatus, data.numberchildren, data.emergencycontactname,
                    emergencyPhoneNumber, positionFinder.getPositionFullText(data.position), data.subject, data.typeofcontract, data.typeofemployment,
                    data.staffmemberreportingto, expirationdateofpropationperiod, data.isprobationperionrenewable, startdate,
                    enddate, data.grosssalary
                ),
                HREmail.getHRHelpTopic()
            );
            /*
            var HRMailLog = HREmail.sendMail(
                HREmail.getHRMailAddress(),
                HREmail.getOnComingSubject(),
                HREmail.getHROnComingMessage(
                    orgUnitFinder.getOrgFullText(data.organisation), data.firstname, data.lastname, data.suggestedemail, data.personalemail,
                    personnalPhoneNumber, birthdate, data.contryresidence, data.nationality, data.city, data.gender,
                    data.identifier, data.identifier, data.maritalstatus, data.numberchildren, data.emergencycontactname,
                    emergencyPhoneNumber, positionFinder.getPositionFullText(data.position), data.subject, data.typeofcontract, data.typeofemployment,
                    data.staffmemberreportingto, expirationdateofpropationperiod, data.isprobationperionrenewable, startdate,
                    enddate, data.grosssalary, data.netsalary
                )
            );
            */

            //send fresher email
            var fresherEmail = new emailMgmt();
            //var fresherEmailLog = fresherEmail.sendMail("###", data.personalemail, fresherEmail.getWelcomeSubject(), fresherEmail.getFresherOnComingMessage(data.firstname));
            var fresherEmailLog = fresherEmail.sendMail(data.personalemail, fresherEmail.getWelcomeSubject(), fresherEmail.getFresherOnComingMessage(data.firstname));

            //Send user Email
            var userEmail = new emailMgmt();
            var userEmailLog = userEmail.sendMail(user, "Account creation - " + data.suggestedemail + "@enkoeducation.com", userEmail.getUserOncomingMessage(data.firstname, data.lastname, data.suggestedemail + "@enkoeducation.com"));


            response.render("entryform", {
                session: request.session
            });

            break;
        case "deleteuser":

            var user = request.session.email;
            var cnx1 = new mysqlCnx();
            var admin_sdk = googleUserMgmt.UserProvisioning;
            var user_provisioning = new admin_sdk(googleUserMgmt.opts);
            var req = cnx1.connection.query(
                "INSERT INTO `entry_exit_form`( " +
                "`initiator`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason` , `form_type`" +
                " ) VALUES " +
                "('" +
                user + "','" + data.employeeid + "','" + data.leavingdate + "','" + data.deprovisioningdate + "','" + data.leavingreason + "','leaving" +
                "');"
            );
            console.log("### userkey:" + data.employeeid);
            user_provisioning.update(data.employeeid, { "suspended": true },
                function(err, body) {
                    if (err) {
                        console.log("Return with error: " + JSON.stringify(err));
                    } else {
                        console.log("User suspended: " + JSON.stringify(body));
                    }
                });

            //creating Workspace account
            //var admin_sdk = googleUserMgmt.OrgUnitProvisioning;
            //var tmp = new admin_sdk(googleUserMgmt.opts);
            //console.log(tmp.list());
            //Send IT email
            //var ITEmail = new emailMgmt();
            //var ITticket = new ticketMgmt(ITEmail.getITTitle(), user, ITEmail.getOnLeavingSubject(), ITEmail.getITOnLeavingMessage("#", data.employeeid, data.deprovisioningdate), ITEmail.getITHelpTopic());
            //var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnLeavingSubject(), ITEmail.getITOnLeavingMessage(ITticket.getTicketID(), data.employeeid, data.deprovisioningdate));

            //Send HR email
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt(
                "Payspace acc suppression: " + data.employeeid,
                user,
                "Payspace acc suppression: " + data.employeeid,
                HREmail.getHROnLeavingMessage(
                    data.employeeid, data.leavingreason,
                    data.leavingdate, data.deprovisioningdate
                )
            );
            console.log("###HR Ticket:" + HRticket.getTicketID());
            //var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnLeavingSubject(), HREmail.getHROnLeavingMessage(HRticket.getTicketID(), data.employeeid, data.deprovisioningdate, data.leavingreason));
            //request.flash('success', 'User ### successfully!!');
            response.render("entryform", {
                session: request.session
            });

            break;
        case "modifyuser":
            console.log("####");

            var user = request.session.email;
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
            var ITticket = new ticketMgmt(ITEmail.getITTitle(), user, ITEmail.getOnChangingSubject(), ITEmail.getITOnChangingMessage("#", data.employeeid, changeString));
            //var ITMailLog = ITEmail.sendMail(ITEmail.getITMailAddress(), ITEmail.getOnChangingSubject(), ITEmail.getITOnChangingMessage(ITticket.getTicketID(), data.employeeid, changeString));

            //Send HR email
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt(HREmail.getHRTitle(), user, HREmail.getOnChangingSubject(), HREmail.getHROnChangingMessage("#", data.employeeid, changeString), HREmail.getHRHelpTopic());
            //var HRMailLog = HREmail.sendMail(HREmail.getHRMailAddress(), HREmail.getOnChangingSubject(), HREmail.getHROnChangingMessage(HRticket.getTicketID(), data.employeeid, changeString));

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
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Enko Education portal' });
});
module.exports = router;