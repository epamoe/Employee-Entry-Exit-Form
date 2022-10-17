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



    }
}