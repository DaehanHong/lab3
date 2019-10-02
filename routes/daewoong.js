'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var nameDaewoong = 'daewoong';
    var message2 = 'Daewoong who is my older brother works as a manager at a construction company called Daelim Industrial after graduating from a prestigious university in Korea.';
    res.render('daewoong', { person: nameDaewoong, para: message2 });
});

module.exports = router;