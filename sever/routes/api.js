var express = require('express');
var router = express.Router();
var api_users = require('../controllers/api/api-users')
var api_store = require('../controllers/api/api-store')

router.get('/users',api_users.listUser);           
router.post('/users',api_users.addUser);           
router.put('/users/:idu',api_users.updateUser);    
router.delete('/users/:idu',api_users.deleteUser); 


router.get('/product',api_store.listProduct);           
router.post('/product',api_store.addProduct);           
// router.put('/product/:idp',api_store.updateProlistProduct);    
// router.delete('/product/:idp',api_store.deleteProlistProduct); 

module.exports = router;
