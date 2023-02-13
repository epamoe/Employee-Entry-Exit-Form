var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('../utils/dbConnection.js');
var ticketMgmt = require('../utils/helpdeskManagement.js');
var emailMgmt = require('../utils/emailManagement');
const { json } = require('body-parser');

module.exports = {
    deleteUser(request, response) {
        var data = request.body;
        var user = request.session.email;
        var cnx1 = new mysqlCnx();
        var leavingDate =
            "'" + data.leavingdate_year +
            "-" + data.leavingdate_month +
            "-" + data.leavingdate_day + "'";
        var deprovisioningDate =
            "'" + data.deprovisioningdate_year +
            "-" + data.deprovisioningdate_month +
            "-" + data.deprovisioningdate_day + "'";

        //Create Sql promise for cequencing
        let SQLpromise = new Promise((solve, reject) => {
            var query =
                "INSERT INTO `entry_exit_form`( " +
                "`initiator`, `leaving_email`, `departure_date`, `deprovisioning_date`, `leaving_reason` , `form_type`" +
                " ) VALUES " +
                "('" +
                user + "','" + data.employeeid + "'," + leavingDate + "," + deprovisioningDate + ",'" + data.leavingreason + "','leaving" +
                "');"
            var req = cnx1.connection.query(query);
            if (req) {
                let message = {
                    topic: "DB insertion - suspension ",
                    summary: "Successfully saved to DB",
                    details: "" + query
                };
                solve(message);
            } else {
                let message = {
                    topic: "DB insertion - suspension ",
                    summary: "Error inserting deleted user account in DB",
                    details: "" + query
                };
                reject(message);
            }
        });
        //Create IT promise for cequencing
        let ITpromise = new Promise((solve, reject) => {
            var ITEmail = new emailMgmt();
            var ITticket = new ticketMgmt();
            var ticketID = ITticket.createTicket(
                "Workspace acc Suspenssion: " + data.employeeid,
                user,
                "Workspace acc Suspenssion " + data.employeeid,
                ITEmail.getITOnLeavingMessage(
                    user, data.employeeid, deprovisioningDate
                )
            );
            if (ticketID) {
                let message = {
                    topic: "IT-Workspace ticket",
                    summary: "Successfully create IT ticket",
                    details: "" + ""
                };
                solve(message);
            } else {
                let message = {
                    topic: "IT-Workspace ticket",
                    summary: "Error creating IT ticket",
                    details: "" + ""
                };
                reject(message);
            }
        });
        //Create HR promise for cequencing
        let HRpromise = new Promise((solve, reject) => {
            try {
                //Send HR email & ticket
                var HREmail = new emailMgmt();
                HREmail.sendMail(
                    HREmail.getHREmailAddress(),
                    "Payspace acc suppression: " + data.employeeid,
                    HREmail.getHROnLeavingMessage(
                        data.employeeid, data.leavingreason,
                        leavingDate, deprovisioningDate
                    )
                );
                let message = {
                    topic: "HR Email - suspension ",
                    summary: "Successfully create HR ticket",
                    details: "" + ""
                };
                solve(message);
            } catch (error) {
                let message = {
                    topic: "HR Email -suspension",
                    summary: "Error creating HR ticket",
                    details: "" + JSON.stringify(error)
                };
                reject(message);
            }
        });
        //scheduling promise execution and error handling 
        let promiseExecution = async() => {
                for (let promise of[SQLpromise, ITpromise, HRpromise]) {
                    //Inserting log files into database
                    var cnx = new mysqlCnx();
                    try {
                        const message = await promise;
                        var rq = cnx.connection.query(
                            "INSERT INTO `Enko_entry_exit_form_syslog`( `userID`,`topic`,`status`, `summary`, `details`) VALUES " +
                            "(" +
                            "'" + user + "','" + message.topic + "','success','" + message.summary + "','" + ((message.details).toString()).replaceAll("'", "") + "'" +
                            ");"
                        );
                        console.log("#PromiseSuccess: " + JSON.stringify(message));
                    } catch (message) {

                        var rq = cnx.connection.query(
                            "INSERT INTO `Enko_entry_exit_form_syslog`( `userID`,`topic`,`status`, `summary`, `details`) VALUES " +
                            "(" +
                            "'" + user + "','" + message.topic + "','error','" + message.summary + "','" + message.details + "'" +
                            ");"
                        );
                        console.log("#PromiseError: " + JSON.stringify(message.details));
                    }
                }
            }
            //execute promise
        promiseExecution();
        response.render("entryform", {
            session: request.session,
            headerMessage: "the user " + data.employeeid + " deletion is successfully scheduled",
        });



    }
}