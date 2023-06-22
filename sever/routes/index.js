var express = require('express');
var router = express.Router();

var homeCtl = require('../controllers/home.controller');
var checklogin = require('../middleware/checklogin');

router.get('/',checklogin.requiresLogin,homeCtl.welcome);

module.exports = router;
