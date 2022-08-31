var express = require('express');
var router = express.Router();
var csrf = require('csurf');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Enko Education portal' });
});

module.exports = router;