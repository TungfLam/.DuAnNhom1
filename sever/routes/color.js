var express = require('express');
var router = express.Router();
var colorCtrl = require('../controllers/color.controller');
var checklogin = require('../middleware/checklogin');

router.get('/',checklogin.requiresLogin, colorCtrl.list);

router.get('/add',checklogin.requiresLogin,colorCtrl.add);
router.post('/add',checklogin.requiresLogin,colorCtrl.add);


router.get('/edit/:idtp',checklogin.requiresLogin,colorCtrl.editColor);
router.post('/edit/:idtp',checklogin.requiresLogin,colorCtrl.editColor);

router.get('/del/:idtpdel',checklogin.requiresLogin,colorCtrl.delColor);
router.post('/del/:idtpdel',checklogin.requiresLogin,colorCtrl.delColor);



module.exports = router;
