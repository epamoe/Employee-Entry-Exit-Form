var nodemailer = require('nodemailer');
class Mail {

    constructor() {
        this.ITTitle = "IT team";
        this.ITMailAddress = "estebanc.pamoe@enkoeducation.com";
        this.ITHelpTopic = "IT questions";
        this.HRTitle = "HR Team";
        this.HRMailAddress = "epamoe@gmail.com";
        this.HRHelpTopic = "HR questions";
        this.OnLeavingSubject = "Employee Leaving";
        this.OnComingSubject = "New employee creation";
        this.OnComingSubjectEmployee = "Welcome to ENKO Education Group";
        this.OnChangingSubject = "Employee changing";
    }
    getITTitle() { return this.ITTitle; }
    getITMailAddress() { return this.ITMailAddress; }
    getITHelpTopic() { return this.ITHelpTopic; }
    getITHelpTopic() { return this.ITHelpTopic; }
    getHRTitle() { return this.HRTitle; }
    getHRMailAddress() { return this.HRMailAddress; }
    getHRHelpTopic() { return this.HRHelpTopic; }
    getOnLeavingSubject() { return this.OnLeavingSubject; }
    getOnComingSubject() { return this.OnComingSubject; }
    getOnChangingSubject() { return this.OnChangingSubject; }
    getWelcomeSubject() { return this.OnComingSubjectEmployee; }
        /*
            getRequesterOnCommingMessage(firstName, lastName, startDate, endDate, position) {
                return " Hi,\n\
                    You ask an employee creation, and your request has been transmitted to HR Department and IT Department.\n\
                    You will be keep informed of the status of the request very soon.\n\
                    Below are some details about your request:\n\
                    Organization: blablabla > xxxxxx\n\
                    First Name: " + firstName + "\n\
                    Last Name: " + lastName + "\n\
                    Start Date: " + startDate + "\n\
                    End Date: " + endDate + "\n\
                    Position: " + position + "\n\n\
                    Regards\n\
                    IT Support - itsupport @enkoeducation.com\n\
                    ";
            }
            */
    getITOnComingMessage(ticketID, employeeID, groups, ITTools) {
        return "Dear IT Support, \n\
                Please make sure the following user is created: " + employeeID + "@enkoeducation.com \n\
                Create an account on the following tools: " + ITTools + "n\
                Regards\n\
                IT Support - itsupport @enkoeducation.com ";
    }
    getEmployeeOnComingMessage(firstName) {
        return "Dear " + firstName + ",\n\
                Welcome to the ENKO Education group.\n\
                We are so happy to have you onboard with us, and know you will help us achieve the very high goals we have.\n\n\
                You will receive an email to set your ENKO email.\n\n\
              ";
    }

    getHROnComingMessage(ticketID, employeeID) {
        return "Dear HR team, \n\
                    There is a new employee at ENKO Education.\n\
                    A ticket Number" + ticketID + "\n\
                    is assigned to you so that you complete the new profile in Payspace.\n\
                    The ticket will provide you with all necessary information and attachment.\n\n\
                    Regards\n\
                    IT Support - itsupport@enkoeducation.com ";
    }

    getITOnChangingMessage(ticketID, employeeID, changes) {
        return "Ticket number: " + ticketID + "\n" +
            "There is a change in our organisation. \n Please, Give/suspend access to appropiate tools/groups if necessary:\n" +
            "Employee ID: " + employeeID + "@enkoeducation.com ASAP: \n " +
            changes;
    }
    getHROnChangingMessage(ticketID, employeeID, changes) {
        return "Ticket number: " + ticketID + "\n" +
            "1) Adjust the following information about " + employeeID + "@enkoeducation.com ASAP: \n" +
            changes;
    }
    getITOnLeavingMessage(ticketID, employeeID, deprovisioningDate) {
        return "Ticket number: " + ticketID + "\n" +
            "Please, be sure you have made these actions: \n" +
            "1) Deprovision " + employeeID + "@enkoeducation.com on " +
            deprovisioningDate;
    }
    getHROnLeavingMessage(ticketID, employeeID, departureDate, leavingReason) {
        return "Ticket number: " + ticketID + "\n" +
            "Please, be sure you have made these actions: \n" +
            "1) Send a goodbye mail to " + employeeID + "@enkoeducation.com on " +
            departureDate + "\n reason of leaving: " + leavingReason;
    }


    sendMail(to, subject, body) {
        var log;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'itsupport@enkoeducation.com',
                pass: 'AzErTy@12345'
            }
        });
        var mailOptions = {
            from: 'ENKO Education Group <itsupport@enkoeducation.com>', //create an alias
            to: '' + to,
            subject: '' + subject + " - " + new Date().toISOString().slice(0, 10),
            text: '' + body
        };
        transporter.sendMail(mailOptions, function(error, info) {

            if (error) {
                log = error;
                //console.log(error);
            } else {
                log = 'Email sent: ' + info.response;
                //console.log('Email sent: ' + info.response);
            }

        });
        return log;
    }
}
module.exports = Mail;