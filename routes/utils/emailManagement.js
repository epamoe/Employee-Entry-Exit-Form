var nodemailer = require('nodemailer');
class Mail {

    constructor() {
        this.ITTitle = "IT team";
        this.ITMailAddress = "estebanc.pamoe@enkoeducation.com";
        this.ITHelpTopic = "IT form";
        this.HRTitle = "HR Team";
        this.HRMailAddress = "epamoe@gmail.com";
        this.HRHelpTopic = "HR form";
        this.OnLeavingSubject = "Employee Leaving";
        this.OnComingSubject = "New employee creation";
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

    getITOnComingMessage(ticketID, employeeID, groups, ITTools) {
            return "Hello\n\n\
            Please make sure the following user is created: \n\
            Create an account on the following tools: " + ITTools + "n\
            Regards\n\
            IT Support - itsupport @enkoeducation.com ";
        }
        /*
              
            */
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

    getHROnComingMessage(ticketID, employeeID) {
        return "Ticket number: " + ticketID + "\n" +
            "There is a new member in our organisation. \n " +
            "His/Her ENKO email is : " + employeeID + "@enkoeducation.com \n " +
            "Would you please create his/her payspace account ?";
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
            from: 'ENKO IT Support <itsupport@enkoeducation.com>', //create an alias
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