var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users.controller');
var checklogin = require('../middleware/checklogin');
var multer = require('multer');
var uploadAvatarProduct = multer({dest: './tmp'});



router.get('/',checklogin.noLoginRequired, userCtrl.list)
router.get('/add',checklogin.noLoginRequired, userCtrl.add)


// router.get('/add',checklogin.requiresLogin,userCtrl.add);
router.post('/add',uploadAvatarProduct.single("avata"),checklogin.noLoginRequired,userCtrl.add);


router.get('/edit/:idus',checklogin.noLoginRequired,userCtrl.editUs);
router.post('/edit/:idus',uploadAvatarProduct.single("avata"),checklogin.noLoginRequired,userCtrl.editUs);

// router.get('/:username',checklogin.requiresLogin,userCtrl.list);
// router.post('/:username',checklogin.requiresLogin,userCtrl.list);

router.get('/del/:idusdel',checklogin.noLoginRequired,userCtrl.delUers);
router.post('/del/:idusdel',checklogin.noLoginRequired,userCtrl.delUers);


router.get('/detail/:idusdel',checklogin.noLoginRequired,userCtrl.detailUser);
router.post('/detail/:idusdel',checklogin.noLoginRequired,userCtrl.detailUser);



module.exports = router;
