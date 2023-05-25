var express = require('express');
var router = express.Router();

var loginCtl = require('../controllers/login.controller');
var checklogin = require('../middleware/checklogin');

// router.use((req, res, next) => {

//     console.log("---> đã gọi middleware.....");
//     next();
//   });

router.get('/login',checklogin.noLoginRequired,loginCtl.Login);
router.post('/login',checklogin.noLoginRequired,loginCtl.Login);


// router.get('/register',checklogin.noLoginRequired,loginCtl.Register);
// router.post('/register',checklogin.noLoginRequired,loginCtl.Register);




module.exports = router;