var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const path = require('path');
const mysqlCnx = require('../utils/dbConnection.js');
var ticketMgmt = require('../utils/helpdeskManagement.js');
var emailMgmt = require('../utils/emailManagement');
var googleUserMgmt = require('../utils/googleUserCRUD');

module.exports = {
    deleteUser(request, response) {
        var data = request.body;
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


    }
}