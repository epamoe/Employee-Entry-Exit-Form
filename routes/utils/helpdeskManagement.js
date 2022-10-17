const osTicketAPI = require('osticket-nodejs-api-wrapper');

class TicketMgr {
    constructor() {

    }
    createTicket(From, responsible, ticketSubject, ticketBody, ticketTopic) {
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
                console.log("Api-internal trace - Your osTicket Support Ticket ID #", osTicketId);
                console.log("Api-internal Trace - Error# name: " + From + " email: " + responsible + " topicId: " + ticketTopic);
                return osTicketId;
            } else {
                console.log("Api-internal Error - Creating support ticket! ", err);
                console.log("Api-internal Trace - Success:# name: " + From + " email: " + responsible + " topicId: " + ticketTopic);
                return "000000";
            }
        });
    }

    getTicketID() { return this.ticketID; }
}
module.exports = TicketMgr;