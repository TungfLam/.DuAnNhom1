var express = require('express');
var router = express.Router();
var multer = require('multer');

var spCtrl = require('../controllers/sanpham.controller');
var checklogin = require('../middleware/checklogin');
var uploadAvatarProduct = multer({dest: './tmp'});


router.get('/',checklogin.noLoginRequired,spCtrl.list);

router.get('/add',checklogin.noLoginRequired,spCtrl.add);
router.post('/add',uploadAvatarProduct.single("avata"),checklogin.noLoginRequired,spCtrl.add);



router.get('/edit/:idpd',checklogin.noLoginRequired,spCtrl.editProduct);
router.post('/edit/:idpd',uploadAvatarProduct.single("avata"),checklogin.noLoginRequired,spCtrl.editProduct);

router.get('/del/:idpd',checklogin.noLoginRequired,spCtrl.delProduct);
router.post('/del/:idpd',checklogin.noLoginRequired,spCtrl.delProduct);

router.get('/detail/:idpd',checklogin.noLoginRequired,spCtrl.detailProduct);
router.post('/detail/:idpd',checklogin.noLoginRequired,spCtrl.detailProduct);




module.exports = router;