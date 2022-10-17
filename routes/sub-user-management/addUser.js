var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('../utils/dbConnection.js');
var ticketMgmt = require('../utils/helpdeskManagement.js');
var emailMgmt = require('../utils/emailManagement');
var googleUserMgmt = require('../utils/googleUserCRUD')
var orgUnitFinder = require('../utils/other/orgUnitFinder');
var positionFinder = require('../utils/other/positionFinder');


module.exports = {
    addUser(request, response) {
        var data = request.body;
        //data transformation due to date format
        var expirationdateofpropationperiod = (data.expirationdateofpropationperiod_year) ?
            "'" + data.expirationdateofpropationperiod_year +
            "-" + data.expirationdateofpropationperiod_month +
            "-" + data.expirationdateofpropationperiod_day + "'" : 'NULL';
        var startdate =
            "'" + data.startdate_year +
            "-" + data.startdate_month +
            "-" + data.startdate_day + "'";
        var enddate = (data.enddate_year) ?
            "'" + data.enddate_year +
            "-" + data.enddate_month +
            "-" + data.enddate_day + "'" : 'NULL';
        var birthdate =
            "'" + data.birthdate_year +
            "-" + data.birthdate_month +
            "-" + data.birthdate_day + "'";


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

        //promise to sync SQLquery
        let sqlPromise = new Promise((solve, reject) => {
            //establishing connection and running query
            var cnx1 = new mysqlCnx();
            var query =
                " INSERT INTO `entry_exit_form` " +
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
                "','" + data.organisation + "','" + data.position + "','" + data.subject + "'," + startdate + "," + enddate + "," + birthdate +
                ",'" + data.gender + "','" + data.nationality + "','" + data.identifier + "','" + data.identifiervalue + "','" + data.contryresidence + "','" + data.city +
                "','" + data.maritalstatus + "','" + data.othermaritalstatus + "','" + data.numberchildren + "','" + data.typeofcontract + "','" + data.typeofemployment + "','" + data.staffmemberreportingto + "',AES_ENCRYPT('" + data.netsalary + "',CURRENT_TIMESTAMP())" +
                ",AES_ENCRYPT('" + data.grosssalary + "',CURRENT_TIMESTAMP())" + ",'" + data.emergencycontactname + "','" + emergencyPhoneNumber + "','" + data.personalemail + "','" + personnalPhoneNumber + "'," + expirationdateofpropationperiod + ",'" + data.isprobationperionrenewable +
                "','[" + it_tools + "]" +
                //"','[" + data.gsuite + "," + data.edadmin + "]" + //It admin tools
                "','[" + groups + "]" +
                //"','[" + data.allstaff + "," + data.allteacher + "," + data.allrh + "]" + // All groups
                "','entry');"

            var rq = cnx1.connection.query(query);
            if (rq) {
                let message = {
                    topic: "DB insertion",
                    summary: "Successfully insert fresher data in database",
                    details: "query"
                };
                solve(message);
            } else {
                let message = {
                    topic: "DB insertion",
                    summary: "Error inserting fresher data in database",
                    details: "query"
                };
                reject(message);
            }
        });
        //promise to sync GoogleQueries
        let googlePromise = new Promise((solve, reject) => {
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
                    let message = {
                        topic: "Workspace user creation",
                        summary: "Error creating fresher account",
                        details: "query"
                    };
                    reject(message);
                    console.log("An error occured: " + JSON.stringify(err.error));
                } else {
                    let message = {
                        topic: "Workspace user creation",
                        summary: "Successfully creating fresher account",
                        details: "query"
                    };
                    solve(message);
                    console.log("Received response: " + JSON.stringify(body));
                }
            });
        });

        //promise for fresher sync
        let fresherPromise = new Promise((solve, reject) => {
            //send fresher email
            var fresherEmail = new emailMgmt();
            var fresherEmailLog = fresherEmail.sendMail(data.personalemail, fresherEmail.getWelcomeSubject(), fresherEmail.getFresherOnComingMessage(data.firstname));

            //Send user Email
            var userEmail = new emailMgmt();
            var userEmailLog = userEmail.sendMail(user, "Account creation - " + data.suggestedemail + "@enkoeducation.com", userEmail.getUserOncomingMessage(data.firstname, data.lastname, data.suggestedemail + "@enkoeducation.com"));
            let message = {
                topic: "Fresher user email",
                summary: "Error creating fresher account",
                details: "query"
            };
            solve(message);
        });

        //promise to HR tickets
        let HRPromise = new Promise((resolve, reject) => {
            //Send HR email & ticket
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt();
            HRticket.createTicket(
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
        });
        //promise to sync groups query
        let groupsPromise = new Promise((solve, reject) => {

            var ITEmailForGroups = new emailMgmt();
            var ITGroupsTicket = new ticketMgmt();
            ITGroupsTicket.createTicket(
                data.suggestedemail + "@enkoeducation.com",
                data.suggestedemail + "@enkoeducation.com",
                "Groups: " + data.suggestedemail + "@enkoeducation.com",
                ITEmailForGroups.getITOnComingMessageGroups(
                    data.suggestedemail + "@enkoeducation.com", data.personalemail, groups
                ), ITEmailForGroups.getITHelpTopic()
            );
            solve("Groups-ok");
        });
        //promise to sync ITTools
        let ITPromise = new Promise((solve, reject) => {

            //Send IT email & Tickets
            var ITEmailForTools = new emailMgmt();
            var ITToolsTicket = new ticketMgmt();
            var ticketID = ITToolsTicket.createTicket(
                data.suggestedemail + "@enkoeducation.com",
                data.suggestedemail + "@enkoeducation.com",
                "ITtools: " + data.suggestedemail + "@enkoeducation.com",
                ITEmailForTools.getITOnComingMessageTools(
                    data.suggestedemail + "@enkoeducation.com", data.personalemail, it_tools
                ), ITEmailForTools.getITHelpTopic()
            );
            solve("IT-ok: " + ticketID);
        });
        //scheduling promise execution and error handling 
        let promiseExecution = async() => {
            for (let promise of[sqlPromise, HRPromise, groupsPromise, ITPromise, googlePromise, fresherPromise]) {
                //Inserting log files into database
                var cnx = new mysqlCnx();
                try {
                    const message = await promise;
                    /*
                        var rq = cnx.connection.query(
                            "INSERT INTO `Enko_entry_exit_form_syslog`( `userID`,`topic`,`status`, `summary`, `details`) VALUES " +
                            "(" +
                            "'" + user + "','" + message.topic + "','success','" + message.summary + "','" + message.details + "'" +
                            ");"
                        );
                    */
                    console.log("#PromiseSuccess: " + JSON.stringify(message));
                } catch (error) {
                    /*
                        var rq = cnx.connection.query(
                            "INSERT INTO `Enko_entry_exit_form_syslog`( `userID`,`topic`,`status`, `summary`, `details`) VALUES " +
                            "(" +
                            "'" + user + "','" + message.topic + "','error','" + message.summary + "','" + (message.details).toString() + "'" +
                            ");"
                        );
                    */
                    console.log("#PromiseError: " + JSON.stringify(message));
                }
            }
        };
        //execute promise
        promiseExecution();


        response.render("entryform", {
            session: request.session
        });
    }
}