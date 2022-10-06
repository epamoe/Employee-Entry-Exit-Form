var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
//const session = require('express-session');
var session = require('client-sessions');
var logger = require('morgan');
const { exec } = require("child_process");
var csrf = require('csurf');
var bodyParser = require('body-parser');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

/*
 * Middleware function to check if the user is logged in
 */
function isLogedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/user-management/login');
    }

};


/*  PASSPORT SETUP  */
app.use(session({
    cookieName: 'session', // cookie name dictates the key name added to the request object 
    secret: 'superSecret', // should be a large unguessable string 
    duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms 
    activeDuration: 1000 * 60 * 5, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds 
    httpOnly: true,
    secure: true
}));


var passport = require('passport');
var userProfile;
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


var indexRouter = require('./routes/user-management');
var emailVerificationRoute = require('./routes/emailVerificator');
//var usersRouter = require('./routes/users');
//var authRouter = require('./routes/auth');
var formRouter = require('./routes/entryForm');
var concernsRouterRedirection = require('./routes/entryForm');
//var fresherRouter = require('./routes/fresher-management ');
//var manageUserRouter = require('./routes/manageUsers'); 
const { ConnectionClosedEvent } = require('mongodb');

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//serving public file
app.use(express.static(__dirname));
// cookie parser middleware i002KiCcr_N7J-liN6-PseoTDcfYnAT6
app.use(cookieParser());


var callbackpage = "";
app.get('/user-management/', isLogedIn, function(request, response) {
    response.render("entryform", {
        session: request.session
    });
});
app.get('/user-management/home', (request, response) => {

    request.session.email = userProfile.emails[0].value;
    request.session.username = userProfile.name.givenName
    response.render("entryform", {
        session: request.session

    });
});
app.get('/user-management/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/user-management/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/user-management/error' }),
    function(request, response) {; // Successful authentication, redirect home.
        if (!(userProfile.emails[0].value).toString().includes("@enkoeducation.com")) {
            request.session.reset()
            response.redirect("/user-management/fresher-management");
        } else {
            request.session.email = userProfile.emails[0].value;
            request.session.username = userProfile.name.givenName
            response.redirect("/user-management/home");
        }
    });


app.get('/user-management/fresher-management', (request, response) => {
    response.render('fresher-management');
});

/*
app.get('/user-management/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/user-management/error' }),
    function(request, response) {; // Successful authentication, redirect home.

        if (!(userProfile.emails[0].value).toString().includes("@enkoeducation.com")) {
            request.session.reset()
            response.render("error", {
                message: "Please, use your ENKO Education address",
            })
        } else {
            request.session.email = userProfile.emails[0].value;
            request.session.username = userProfile.name.givenName
            response.render("entryform", {
                session: request.session
            });
        }
    });
*/
/**
 * Logout route
 */
app.get('/user-management/logout', function(req, res) {
    req.session.reset()
    res.redirect('/user-management/');
});

/* -- End Session setup */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
var googleUserMgmt = require('./routes/utils/googleUserCRUD')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = googleUserMgmt.opts.client.id;
const GOOGLE_CLIENT_SECRET = googleUserMgmt.opts.client.secret;
passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/user-management/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        userProfile = profile;
        if ((userProfile.emails[0].value).toString().includes('@enkoeducation.com')) {
            console.log("### ENKO Staff ");
            console.log("###A " + accessToken);
            console.log("###R " + JSON.stringify(refreshToken));
            callbackpage = "/home";
        } else {
            console.log("### Not ENKO Staff ");
            callbackpage = '/fresher-management';
        }
        return done(null, userProfile);
    }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user-management/', indexRouter);
app.use('/user-management/verify-email', emailVerificationRoute);

app.use('/user-management/login', indexRouter);
//app.use('/user-management/auth/google/callback', formRouter);
//app.use('/user-management/auth', authRouter);
app.use('/user-management/entryform', formRouter);
app.use('/user-management/createuser', concernsRouterRedirection);
app.use('/user-management/deleteuser', concernsRouterRedirection);
app.use('/user-management/modifyuser', concernsRouterRedirection);
app.use('/user-management/home', indexRouter); // 
//app.use('/fresher-management', fresherRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'production' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;