var express = require('express');
var router = express.Router();

var api_conversationController = require('../controllers/api/api-conversation');
var api_messageController = require('../controllers/api/api-message');
var api_users = require('../controllers/api/api-users')
var api_store = require('../controllers/api/api-store')
var api_order = require('../controllers/api/api-order')

router.get('/users', api_users.listUser);
//== phân trang pagination          
router.get('/users/pagination', api_users.pagination);
//== ====
router.post('/userslogin', api_users.userLogin);

router.post('/users', api_users.addUser);
router.put('/users/:idu', api_users.updateUser);
router.delete('/users/:idu', api_users.deleteUser);


router.get('/product', api_store.listProduct);
router.post('/product', api_store.addProduct);
// router.put('/product/:idp',api_store.updateProlistProduct);    
// router.delete('/product/:idp',api_store.deleteProlistProduct); 


router.get('/order', api_order.listOrder);
router.post('/order', api_order.addOrder);
// nhan tin realtime
router.post('/conversation', api_conversationController.createConversation);
router.get('/conversation/:userId', api_conversationController.getConversationsByUser);

router.post('/message', api_messageController.createMessage);
router.get('/message/:conversationId', api_messageController.getMessagesByConversation);

//

module.exports = router;
