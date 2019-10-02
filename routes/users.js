'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/daehan', function (req, res) {
    res.send('respond with a resource');
});

router.get('/daewoong', function (req, res) {
    res.send('respond with a resource');
});

router.get('/dosun', function (req, res) {
    res.send('respond with a resource');
});

router.get('/sohi', function (req, res) {
    res.send('respond with a resource');
});

router.get('/gwangsik', function (req, res) {
    res.send('respond with a resource');
});



module.exports = router;
