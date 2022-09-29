var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');
const { exec } = require("child_process");
const oneDay = 1000 * 60 * 60 * 24;

/*  PASSPORT SETUP  */
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
    cookie: { secure: true, maxAge: oneDay, userID: "###" }
}));
const passport = require('passport');
var userProfile;
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
//var authRouter = require('./routes/auth');
var formRouter = require('./routes/entryForm');
var concernsRouterRedirection = require('./routes/entryForm');
var actionAdEMployeeRouter = require('./routes/actionAddEmployee');
var actionEMployeeChangingRouter = require('./routes/actionEmployeeChanging');
var actionEMployeeLeavingRouter = require('./routes/actionEmployeeLeaving');
const { ConnectionClosedEvent } = require('mongodb');

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//serving public file
app.use(express.static(__dirname));
// cookie parser middleware i002KiCcr_N7J-liN6-PseoTDcfYnAT6
app.use(cookieParser());


app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    function(request, response) {; // Successful authentication, redirect success.

        request.session.cookie.userID = userProfile.emails[0].value;
        response.render("entryform");
    });

/* -- End Session setup */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '245661520998-kpur0fcekfgbdkgja419q3hddngcdhdg.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        userProfile = profile;
        return done(null, userProfile);
    }
));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/login', authRouter);
app.use('/', indexRouter);
//app.use('/auth/google/callback', formRouter);
//app.use('/auth', authRouter);
app.use('/entryform', formRouter);
app.use('/concerns', concernsRouterRedirection);
app.use('/add_employee', actionAdEMployeeRouter);
app.use('/change_employee', actionEMployeeChangingRouter);
app.use('/delete_employee', actionEMployeeLeavingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;