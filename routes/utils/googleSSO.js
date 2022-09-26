// Google Auth
const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '245661520998-kpur0fcekfgbdkgja419q3hddngcdhdg.apps.googleusercontent.com'
const client = new OAuth2Client(CLIENT_ID);

class SSO {
    checkAuthenticated(req, res, next) {

        let token = req.cookies['session-token'];

        let user = {};
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
            });
            const payload = ticket.getPayload();
            user.name = payload.name;
            user.email = payload.email;
            user.picture = payload.picture;
        }
        verify()
            .then(() => {
                req.user = user;
                next();
            })
            .catch(err => {
                res.redirect('/login')
            })

    }
    logout(req, res, next) {
        res.clearCookie('session-token');
        res.redirect('/')
    }

}
module.exports = SSO;