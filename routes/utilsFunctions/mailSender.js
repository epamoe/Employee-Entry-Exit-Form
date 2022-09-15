var nodemailer = require('nodemailer');

class Mail {


    emailSender(To, Subject, Content) {
        var log;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'itsupport@enkoeducation.com',
                pass: 'AzErTy@12345'
            }
        });

        var mailOptions = {
            from: 'ENKO IT Support <itsupport@enkoeducation.com>',
            to: '' + To,
            subject: '' + Subject,
            text: '' + Content
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