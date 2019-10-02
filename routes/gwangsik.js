'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var nameGwangsik = 'gwangsik';
    var message5 = 'Kwangsik who is my father has worked for a lifetime for us, and he has tried to make us happy. Also, he always respects the opinions of our families and supports them for what we want to do.';
    res.render('gwangsik', { person: nameGwangsik, message: message5 });
});

module.exports = router;