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
        this.OnComingSubject = "New employee creation: ";
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
    getITOnComingMessageTools(suggestedEmail, personalEmail, itToolsList) {
        return "Hello, " +
            "\nWe have a new colleague at ENKO organisation.\n" +
            "\nHis/Her Enko email: " + suggestedEmail +
            "\nHis/Her Personal email:" + personalEmail +
            "\nWould you provide access to the Following tools:" + itToolsList +
            "\n\n Rregards";
    }
    getITOnComingMessageGroups(suggestedEmail, personalEmail, groupsList) {
        return "Hello, " +
            "\nWe have a new colleague at ENKO organisation.\n" +
            "\nHis/Her Enko email: " + suggestedEmail +
            "\nHis/Her Personal email:" + personalEmail +
            "\nWould you provide access to the Following groups:" + groupsList +
            "\n\n Rregards";
    }
    getFresherOnComingMessage(firstName) {
        return "Dear " + firstName + "," +
            "\nWelcome to the ENKO Education group." +
            "\nWe are so happy to have you onboard with us, and know you will help us achieve the very high goals we have." +
            "\nYou will receive an email to set your ENKO email. " +
            "\n\n Regards,";
    }

    getHROnComingMessage(user, Entity, Firstname, Lastname, Enkoemail, PersonnalEmail, Phonenumber, Birthdate, countryofresidence, Nationality,
        Cityofresidence, Gender, NIC, Passport, Marital, children, EmergencyName, EmergencyPhone, Department, Position, Typecontract,
        Typeemployment, Manager, Expirationprobation, probationrenewable, startdate, Enddate, grossmonthlysalary, netmonthlysalary) {
        return "Hello \n" +
            "\nWe have a new employee in our our organisation\n" +
            "\nRequester email:" + user +
            "\nProvide an account with these informations:\n\n" +
            "\nEntity:" + Entity +
            "\nDepartment:" + Department +
            "\nPosition:" + Position +
            "\n\nFirstname:" + Firstname +
            "\nLastname:" + Lastname +
            "\nEnko email:" + Enkoemail +
            "\nPersonnal Email:" + PersonnalEmail +
            "\nPhone number:" + Phonenumber +
            "\nBirth date:" + Birthdate +
            "\nCountry of residence:" + countryofresidence +
            "\nNationality:" + Nationality +
            "\nCity of residence:" + Cityofresidence +
            "\nGender:" + Gender +
            "\nNIC identifier type:" + NIC +
            "\nPassport identifier number:" + Passport +
            "\nMarital status:" + Marital +
            "\nNumber of children:" + children +
            "\nEmergency contact - Name:" + EmergencyName +
            "\nEmergency contact - Phone:" + EmergencyPhone +
            "\nType of contract:" + Typecontract +
            "\nType of employment:" + Typeemployment +
            "\nManager email address:" + Manager +
            "\nExpiration date of the probation period:" + Expirationprobation +
            "\nIs the probation period renewable:" + probationrenewable +
            "\nEffective start date:" + startdate +
            "\nEnd date:" + Enddate +
            "\nGross monthly salary (in local currency) :" + grossmonthlysalary +
            "\nNet monthly salary (in local currency) :" + netmonthlysalary;
    }
    getUserOncomingMessage(firstName, lastName, email) {
        return "Hello\n" +
            "You have requested the creation of an employee account on :" + new Date().toISOString().slice(0, 10) + "\n" +
            "Names: " + firstName + lastName + "\n " +
            "Email: " + email +
            "\n The account should take up to 48H to be created. The user will be directly informed of the creation.\n" +
            "\n\nIt is not necessary to answer to this email\n\n" +
            "Regards \n " +
            "IT Support - itsupport@enkoeducation.com";
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
    getHROnLeavingMessage(employeeID, leavingReason, departureDate, deprovisioningDate) {
        return "Hello" +
            "\nOne of our coleague is leaving our organization." +
            "\nEmployee email:" + employeeID +
            "\nLeaving reason: " + leavingReason +
            "\nLeaving date: " + departureDate +
            "\nPlease be sure you delete/suspend his/her account on Payspace by " + deprovisioningDate +
            "\n\nRegards";
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