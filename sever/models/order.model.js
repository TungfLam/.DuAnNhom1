var db = require('./db');
const orderSchema = new db.mongoose.Schema(
    {
        users: { type: db.mongoose.Schema.Types.ObjectId, ref: 'usersModel2' },
        product: { type: db.mongoose.Schema.Types.ObjectId, ref: 'productModel2' },
        
        statusduyet: { type: Number, required: false },
        statushuydon: { type: Number, required: false },
        statushoanthanh: { type: Number, required: false }

    },
    { collection: 'order' }
);
const userChema = new db.mongoose.Schema(
    {
        username: { type: String, required: true },
        passwd: { type: String, required: true },
        email: { type: String, required: true },
        avata: { type: String, required: false },
        phonenumber: { type: Number, required: true },
        address: { type: String, required: false }
    },
    { collection: 'users' }
);
const productChema = new db.mongoose.Schema(
    {
        name: { type: String, required: true },
        type: { type: db.mongoose.Schema.Types.ObjectId, ref: 'typeModel' },
        size: { type: db.mongoose.Schema.Types.ObjectId, ref: 'sizeModel' },
        color: { type: db.mongoose.Schema.Types.ObjectId, ref: 'colorModel' },
        
        avata: { type: String, required: false },
        introduction: { type: String, required: false },
        price: { type: Number, required: true },
        promotion: { type: Number, required: false },
        quantity: { type: Number, required: true }
    },
    { collection: 'product' }
);


let orderModel = db.mongoose.model('orderModel', orderSchema);

let usersModel = db.mongoose.model('usersModel2', userChema);
let productModel = db.mongoose.model('productModel2', productChema);

module.exports = { orderModel, usersModel, productModel};