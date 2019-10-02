'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var nameDosun = 'dosun';
    var message3 = 'As a mother, Do-sun has cared for our family so much and has worked hard to make a happy home.';
    res.render('dosun', { person: nameDosun, paragraph: message3 });
});

module.exports = router;