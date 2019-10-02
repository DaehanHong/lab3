'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var nameSohi = 'sohi';
    var message4 = 'Sohi who is my younger sister is working as a secretary in Samsung Electronics, and her personality is meticulous and calm.';
    res.render('sohi', { person: nameSohi, mes: message4 });
});

module.exports = router;