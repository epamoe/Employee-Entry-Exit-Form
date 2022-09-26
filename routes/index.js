var express = require('express');
var router = express.Router();

// Google Auth
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '245661520998-kpur0fcekfgbdkgja419q3hddngcdhdg.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Enko Education portal' });
});
/* POST home page. */
router.post('/', function(req, res, next) {
    let token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
    }
    verify()
        .then(() => {
            res.cookie('session-token', token);
            res.send('success')
        })
        .catch(console.error);
    //res.render('index', { title: 'Enko Education portal' });
});
module.exports = router;