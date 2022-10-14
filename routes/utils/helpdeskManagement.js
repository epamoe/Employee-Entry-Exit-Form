const osTicketAPI = require('osticket-nodejs-api-wrapper');

class TicketMgr {

    constructor(From, responsible, ticketSubject, ticketBody, ticketTopic) {
        this.ticketID = osTicketAPI({
            API_KEY: 'A1BCB130D5201817039C7F81BD7AE45A', // The API key created inside the osTicket settings.
            INSTALL_URL_PATH: 'https://support.enkoeducation.com/helpdesk/', // URL path of your osTicket server installation.
            ALERT: true,
            AUTO_RESPOND: true
        }, { //passing required tiket's data to function
            name: From,
            email: responsible,
            subject: ticketSubject,
            message: ticketBody,
            topicId: ticketTopic
        }, function(err, osTicketId) {
            if (!err) {
                console.log("Your osTicket Support Ticket ID #", osTicketId);
                return osTicketId;
            } else {
                console.log("Error creating support ticket! ", err);
                return "000000";
            }
        });
    }

    getTicketID() { return this.ticketID; }
}
module.exports = TicketMgr;