var express = require('express');
var router = express.Router();
var multer = require('multer');

var spCtrl = require('../controllers/sanpham.controller');
var checklogin = require('../middleware/checklogin');
var uploadAvatarProduct = multer({dest: './tmp'});


router.get('/',checklogin.requiresLogin,spCtrl.list);

router.get('/add',checklogin.requiresLogin,spCtrl.add);
router.post('/add',uploadAvatarProduct.single("avata"),checklogin.requiresLogin,spCtrl.add);



router.get('/edit/:idpd',checklogin.requiresLogin,spCtrl.editProduct);
router.post('/edit/:idpd',uploadAvatarProduct.single("avata"),checklogin.requiresLogin,spCtrl.editProduct);

router.get('/del/:idpd',checklogin.requiresLogin,spCtrl.delProduct);
router.post('/del/:idpd',checklogin.requiresLogin,spCtrl.delProduct);

router.get('/detail/:idpd',checklogin.requiresLogin,spCtrl.detailProduct);
router.post('/detail/:idpd',checklogin.requiresLogin,spCtrl.detailProduct);




module.exports = router;