var express = require('express');
var router = express.Router();
var orderCtrl = require('../controllers/order.controller');
var checklogin = require('../middleware/checklogin');

router.get('/',checklogin.requiresLogin, orderCtrl.list);

// router.get('/add',checklogin.requiresLogin,orderCtrl.add);
// router.post('/add',checklogin.requiresLogin,orderCtrl.add);


// router.get('/edit/:idtp',checklogin.requiresLogin,orderCtrl.editSize);
// router.post('/edit/:idtp',checklogin.requiresLogin,orderCtrl.editSize);

// router.get('/del/:idtpdel',checklogin.requiresLogin,orderCtrl.delSize);
// router.post('/del/:idtpdel',checklogin.requiresLogin,orderCtrl.delSize);



module.exports = router;
