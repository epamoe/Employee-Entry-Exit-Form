const osTicketAPI = require('osticket-nodejs-api-wrapper');

class TicketMgr {

    constructor(agentTitle, agentEmailAddress, ticketSubject, ticketBody, ticketTopic) {
        this.ticketID = osTicketAPI({
            API_KEY: 'E63B50AB002D9131AD017E6EBF72DE49', // The API key created inside the osTicket settings.
            INSTALL_URL_PATH: 'https://support.enkoeducation.com/helpdesk/', // URL path of your osTicket server installation.
            ALERT: true,
            AUTO_RESPOND: true
        }, { //passing required tiket's data to function
            name: agentTitle,
            email: agentEmailAddress,
            subject: ticketSubject,
            message: ticketBody,
            topicId: ticketTopic
        }, function(err, osTicketId) {
            if (!err) {
                //console.log("Your osTicket Support Ticket ID #", osTicketId);
                return osTicketId;
            } else {
                //console.log("Error creating support ticket! ", err);
                return "000000";
            }
        });
    }

    getTicketID() { return this.ticketID; }
}
module.exports = TicketMgr;