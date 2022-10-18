var nodemailer = require('nodemailer');
var mail = require("nodemailer").mail;

class Mail {

    constructor() {
        this.ITTitle = "IT team";
        this.ITHelpTopic = 12;
        this.HRTitle = "HR Team";
        this.HRHelpTopic = 14;
        this.OnLeavingSubject = "Employee Leaving";
        this.OnComingSubject = "New employee creation: ";
        this.OnComingSubjectEmployee = "Welcome to ENKO Education";
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

    getITOnComingMessageTools(suggestedEmail, personalEmail, itToolsList) {
        return "Hello, " +
            "\nWe have a new colleague at ENKO organisation.\n" +
            "\nHis/Her Enko email: " + suggestedEmail +
            "\nHis/Her Personal email:" + personalEmail +
            "\nWould you provide access to the Following tools:" + itToolsList +
            "\n\n Rregards";
    }
    getITOnComingMessageGroups(suggestedEmail, personalEmail, groupsList, organisation) {
        return "Hello, " +
            "\nWe have a new colleague at ENKO.\n" +
            "\nEnko email: " + suggestedEmail +
            "\nPersonal email:" + personalEmail +
            "\n\nWould you provide access to the Following groups:" + groupsList +
            "\n\nInsert this user into the following organisation unit:" + organisation +
            "";
    }
    getFresherOnComingMessage(firstName, email, password) {
        return "Dear " + firstName + "," +
            "\nWelcome to ENKO Education" +
            "\nWe are so happy to have you onboard with us, and know you will help us achieve the very high goals we have." +
            "\n\nUse this link to login: https://gmail.com" +
            "\nYour login: " + email +
            "\nYour password: " + password +
            "\n\nYou will have to change your password at first login," +
            "\n\nRegards" +
            "\nENKO IT Support" +
            "\nIf you have any request, drop us an email at itsupport@enkoeducation.com" +
            "\n" +
            "-----------------------------------------" +
            "\n\n" +
            "Bonjour " + firstName + "," +
            "\nBienvenue à ENKO Education" +
            "\n" +
            "\n\nUtilisez ce lien pour vous connecter: https://gmail.com" +
            "\nVotre login: " + email +
            "\nVotre mot de passe: " + password +
            "\n\nIl vous faudra changer de mot de passe dès la première connexion" +
            "\n\nCordialement" +
            "\nENKO IT Support" +
            "\nSi vous avez des questions, écrivez-nous à itsupport@enkoeducation.com" +
            "\n\n\n";
    }

    getHROnComingMessage(user, Entity, Firstname, Lastname, Enkoemail, PersonnalEmail, Phonenumber, Birthdate, countryofresidence, Nationality,
        Cityofresidence, Gender, NIC, Passport, Marital, children, EmergencyName, EmergencyPhone, Department, Position, Typecontract,
        Typeemployment, Manager, Expirationprobation, probationrenewable, startdate, Enddate, grossmonthlysalary, netmonthlysalary) {
        return "Hello \n" +
            "\nWe have a new employee in our our organisation\n" +
            "\nRequester email:" + user +
            "\nProvide an account with these informations:\n\n" +
            "\nEntity: " + Entity +
            "\nDepartment: " + Department +
            "\nPosition: " + Position +
            "\n\nFirstname: " + Firstname +
            "\nLastname: " + Lastname +
            "\nEnko email: " + Enkoemail +
            "\nPersonnal Email: " + PersonnalEmail +
            "\nPhone number: " + Phonenumber +
            "\nBirth date: " + Birthdate +
            "\nCountry of residence: " + countryofresidence +
            "\nNationality: " + Nationality +
            "\nCity of residence: " + Cityofresidence +
            "\nGender: " + Gender +
            "\nNIC identifier type: " + NIC +
            "\nPassport identifier number: " + Passport +
            "\nMarital status: " + Marital +
            "\nNumber of children: " + children +
            "\nEmergency contact - Name: " + EmergencyName +
            "\nEmergency contact - Phone: " + EmergencyPhone +
            "\nType of contract: " + Typecontract +
            "\nType of employment: " + Typeemployment +
            "\nManager email address: " + Manager +
            "\nExpiration date of the probation period: " + Expirationprobation +
            "\nIs the probation period renewable: " + probationrenewable +
            "\nEffective start date: " + startdate +
            "\nEnd date: " + Enddate +
            "\nGross monthly salary (in local currency): " + grossmonthlysalary;
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
    getITOnLeavingMessage(initiator, employeeID, deprovisioningDate) {
        return "Hello," +
            "\nThe user " + employeeID + "is leaving ENKO Education." +
            "\nComplete the following actions:" +
            "\n\n1)Delete user account in the IT tool" +
            "\n2)Suspend the email in the Woekspace" +
            "\n\nInitiator:" + initiator +
            "\nDue date:" + deprovisioningDate;
    }
    getHROnLeavingMessage(employeeID, leavingReason, departureDate, deprovisioningDate) {
        return "Hello" +
            "\nOne of our colleagues is leaving our organization." +
            "\nEmployee email: " + employeeID +
            "\nLeaving reason: " + leavingReason +
            "\nLeaving date: " + departureDate +
            "\nPlease be sure you delete/suspend his/her account on Payspace by " + deprovisioningDate + "" +
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
            from: 'ENKO Education <itsupport@enkoeducation.com>', //create an alias
            to: '' + to,
            subject: '' + subject + " - " + new Date().toISOString().slice(0, 10),
            text: '' + body
        };
        transporter.sendMail(mailOptions, function(error, info) {

            if (error) {
                log = "" + error;
                //console.log(error);
            } else {
                log = "Email sent: " + info.response;
                //console.log('Email sent: ' + info.response);
            }

        });
        return log;
    }
    sendMailWithouthSMTP(sender, receiver, subject, body) {
        mail({
            from: sender, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            text: body, // plaintext body
            html: "<html>" + body + "</html>" // html body
        });
        return 1;
    }
}
module.exports = Mail;