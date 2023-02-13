var nodemailer = require('nodemailer');
var mail = require("nodemailer").mail;

class Mail {

    constructor() {
        this.ITTitle = "IT team";
        this.ITHelpTopic = 12;
        this.HREmailAddress = "hrsupport@enkoeducation.com";
        this.HRTitle = "HR Team";
        this.HRHelpTopic = 14;
        this.OnLeavingSubject = "Employee Leaving";
        this.OnComingSubject = "New employee creation: ";
        this.OnComingSubjectEmployee = "Welcome to ENKO Education";
        this.OnChangingSubject = "Employee changing";
    }
    getHREmailAddress() {
        return this.HREmailAddress;
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

    getITOnComingMessageTools(user, Entity, Firstname, Lastname, Enkoemail, PersonnalEmail,
        Phonenumber, Birthdate, Gender, NIC, Passport, Position, subject, Manager, it_tools) {
        return "Hello \n" +
            "\nWe have a new employee in our our organisation( " + Entity + " )\n" +
            "\nWould you provide access to the Following tools : " + it_tools + "\n\n" +
            "\nPosition: " + Position +
            "\nSubject (if teacher): " + subject +
            "\n\nFirstname: " + Firstname +
            "\nLastname: " + Lastname +
            "\nEnko email: " + Enkoemail +
            "\nPersonnal Email: " + PersonnalEmail +
            "\nPhone number: " + Phonenumber +
            "\nBirth date: " + Birthdate +
            "\nGender: " + Gender +
            "\nNIC identifier type: " + NIC +
            "\nPassport identifier number: " + Passport +
            "\nManager email address: " + Manager +
            "\nInitiator: " + user +
            "\n\nRegards" +
            "\nIT Support - itsupport@enkoeducation.com";
    }
    getITOnComingMessageGroups(suggestedEmail, personalEmail, groupsList, organisation, initiator) {
        return "Hello, " +
            "\nWe have a new colleague at ENKO.\n" +
            "\nEnko email: " + suggestedEmail +
            "\nPersonal email:" + personalEmail +
            "\n\nWould you provide access to the Following groups:" + groupsList +
            "\nInsert this user into the following organisation unit:" + organisation +
            "\n\n" +
            "Initiator: " + initiator + "\n\n";
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
        Typeemployment, Manager, Expirationprobation, probationrenewable, startdate, Enddate, grossmonthlysalary, netmonthlysalary, linkToContract) {
        return "Hello \n" +
            "\nWe have a new employee in our our organisation\n" +
            "\nRequester email: " + user +
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
            "\nLink to contract: " + linkToContract +
            "\nType of employment: " + Typeemployment +
            "\nManager email address: " + Manager +
            "\nExpiration date of the probation period: " + Expirationprobation +
            "\nIs the probation period renewable: " + probationrenewable +
            "\nEffective start date: " + startdate +
            "\nEnd date: " + Enddate +
            "\n\nRegards" +
            "\nIT Support - itsupport@enkoeducation.com";
    }
    getUserOncomingMessage(firstName, lastName, email) {
        return "Hello\n" +
            "You have requested the creation of an employee account on: " + new Date().toISOString().slice(0, 10) + "\n" +
            "Names: " + firstName + " " + lastName + "\n" +
            "Email: " + email +
            "\nThe account should take up to 48H to be created. The user will be directly informed of the creation.\n" +
            "\n\nIt is not necessary to answer to this email\n\n" +
            "Regards " +
            "\nIT Support - itsupport@enkoeducation.com";
    }

    getITOnChangingMessage(initiator, employeeID, changesDescription) {
        return "Hello" +
            "\nProvide the following change on this account: " + employeeID +
            "\n\n" + changesDescription +
            "\n\nInitiator: " + initiator;
    }
    getHROnChangingMessage(initiator, employeeID, changesDescription) {
        return "Hello" +
            "\nProvide the following change on this account: " + employeeID +
            "\n\n" + changesDescription +
            "\n\nInitiator: " + initiator +
            "\n\nRegards," +
            "\nIT Support - itsupport@enkoeducation.com";
    }
    getITOnLeavingMessage(initiator, employeeID, deprovisioningDate) {
        return "Hello," +
            "\nThe user " + employeeID + " is leaving ENKO Education." +
            "\nComplete the following actions:" +
            "\n\n1)Delete user account in the IT tool" +
            "\n2)Suspend the email in the Workspace" +
            "\n\nInitiator:" + initiator +
            "\nDue date:" + deprovisioningDate;
    }
    getHROnLeavingMessage(employeeID, leavingReason, departureDate, deprovisioningDate) {
        return "Hello" +
            "\n\nOne of our colleagues is leaving our organization." +
            "\nEmployee email: " + employeeID +
            "\nLeaving reason: " + leavingReason +
            "\nLeaving date: " + departureDate +
            "\nPlease be sure you delete/suspend this employee account on Payspace by " + deprovisioningDate + "" +
            "\n\nRegards" +
            "\nIT Support - itsupport@enkoeducation.com";
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
                log = "";
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