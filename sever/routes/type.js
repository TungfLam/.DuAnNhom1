var express = require('express');
var router = express.Router();
var typeCtrl = require('../controllers/type.controller');
var checklogin = require('../middleware/checklogin');

router.get('/',checklogin.requiresLogin, typeCtrl.list);

router.get('/add',checklogin.requiresLogin,typeCtrl.add);
router.post('/add',checklogin.requiresLogin,typeCtrl.add);


router.get('/edit/:idtp',checklogin.requiresLogin,typeCtrl.editType);
router.post('/edit/:idtp',checklogin.requiresLogin,typeCtrl.editType);

router.get('/del/:idtpdel',checklogin.requiresLogin,typeCtrl.delType);
router.post('/del/:idtpdel',checklogin.requiresLogin,typeCtrl.delType);



module.exports = router;
