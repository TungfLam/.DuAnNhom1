var express = require('express');
var router = express.Router();
var sizeCtrl = require('../controllers/size.controller');
var checklogin = require('../middleware/checklogin');

router.get('/',checklogin.requiresLogin, sizeCtrl.list);

router.get('/add',checklogin.requiresLogin,sizeCtrl.add);
router.post('/add',checklogin.requiresLogin,sizeCtrl.add);


router.get('/edit/:idtp',checklogin.requiresLogin,sizeCtrl.editSize);
router.post('/edit/:idtp',checklogin.requiresLogin,sizeCtrl.editSize);

router.get('/del/:idtpdel',checklogin.requiresLogin,sizeCtrl.delSize);
router.post('/del/:idtpdel',checklogin.requiresLogin,sizeCtrl.delSize);



module.exports = router;
