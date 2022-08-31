var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var formRouter = require('./routes/entryForm');
var concernsRouterRedirection = require('./routes/entryForm');
//var formNewEMployeeRouter = require('./routes/formNewEmployee');
//var formEMployeeLeavingRouter = require('./routes/formEmployeeLeaving');
//var formEMployeeChangingRouter = require('./routes/formEmployeeChanging');
var actionAdEMployeeRouter = require('./routes/actionAddEmployee');
var actionEMployeeChangingRouter = require('./routes/actionEmployeeChanging');
var actionEMployeeLeavingRouter = require('./routes/actionEmployeeLeaving');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/entryform', formRouter);
app.use('/concerns', concernsRouterRedirection);
//app.use('/new_employee', formNewEMployeeRouter);
//app.use('/employee_leaving', formEMployeeLeavingRouter);
//app.use('/employee_changing', formEMployeeChangingRouter);
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