var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('../utils/dbConnection.js');
var ticketMgmt = require('../utils/helpdeskManagement.js');
var emailMgmt = require('../utils/emailManagement');


module.exports = {
    modifyUser(request, response) {

        var data = request.body;
        var user = request.session.email;

        //SQL promise for sequencing
        var modifyUserPromise = new Promise((solve, reject) => {
            var query = "INSERT INTO `entry_exit_form`( `initiator`,`changing_email`, `changing_reason`,`form_type`)" +
                "VALUES('" + user + "','" + data.employeeid + "', '" + data.changesdescription + "', 'changing')" +
                ";";
            var cnx = new mysqlCnx();
            var rq = cnx.connection.query(query);
            if (rq) {
                let message = {
                    topic: "DB insertion - modification ",
                    summary: "Successfully saved modified information in DB",
                    details: "" + query
                };
                solve(message);
            } else {
                let message = {
                    topic: "DB insertion - modification ",
                    summary: "Error saving modified information in DB",
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
                "Acc modification: " + data.employeeid,
                user,
                "Acc modification " + data.employeeid,
                ITEmail.getITOnChangingMessage(
                    user, data.employeeid, data.changesdescription
                )
            );
            if (ticketID) {
                let message = {
                    topic: "IT-Changing ticket",
                    summary: "Successfully create IT ticket",
                    details: "" + ""
                };
                solve(message);
            } else {
                let message = {
                    topic: "IT-Changing ticket",
                    summary: "Error creating IT ticket",
                    details: "" + ""
                };
                reject(message);
            }
        });
        //Create HR promise for cequencing
        let HRpromise = new Promise((solve, reject) => {
            //Send HR email & ticket
            var HREmail = new emailMgmt();
            var HRticket = new ticketMgmt();
            var ticketID = HRticket.createTicket(
                "Payspace acc modification: " + data.employeeid,
                user,
                "Payspace acc modification: " + data.employeeid,
                HREmail.getHROnChangingMessage(
                    user, data.employeeid, data.changesdescription
                )
            );
            if (ticketID) {
                let message = {
                    topic: "HR ticket - modification ",
                    summary: "Successfully create HR ticket",
                    details: "" + ""
                };
                solve(message);
            } else {
                let message = {
                    topic: "HR ticket - modification",
                    summary: "Error creating HR ticket",
                    details: "" + ""
                };
                reject(message);
            }
        });
        let promiseExecution = async() => {
                for (let promise of[modifyUserPromise, ITpromise, HRpromise]) {
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
                    } catch (error) {

                        var rq = cnx.connection.query(
                            "INSERT INTO `Enko_entry_exit_form_syslog`( `userID`,`topic`,`status`, `summary`, `details`) VALUES " +
                            "(" +
                            "'" + user + "','" + "" + "','error','" + "" + "','" + JSON.stringify(error) + "'" +
                            ");"
                        );
                        console.log("#PromiseError: " + JSON.stringify(error));
                    }
                }
            }
            //execute promise
        promiseExecution();
        response.render("entryform", {
            session: request.session
        });



    }
}