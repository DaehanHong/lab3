'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var nameDaehan = 'daehan';
    var message1 = "Before coming to Canada, Daehan has worked as a UN soldier for four years to protect the peace of a country called Lebanon in the Middle East.";
    res.render('daehan', { person: nameDaehan, p: message1 });
});

module.exports = router;