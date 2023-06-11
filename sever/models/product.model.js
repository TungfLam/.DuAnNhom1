var db = require('./db');
const productSchema = new db.mongoose.Schema(
    {
        name: { type: String, required: true },
        type: { type: db.mongoose.Schema.Types.ObjectId, ref: 'typeModel' },
        size: { type: db.mongoose.Schema.Types.ObjectId, ref: 'sizeModel' },
        color: { type: db.mongoose.Schema.Types.ObjectId, ref: 'colorModel' },
        
        avata: { type: String, required: false },
        introduction: { type: String, required: true },
        price: { type: Number, required: true },
        promotion: { type: Number, required: true },
        quantity: { type: Number, required: true }

    },
    { collection: 'product' }
);
const typeChema = new db.mongoose.Schema(
    {
        name: { type: String, required: true }
    },
    { collection: 'type' }
);
const sizeChema = new db.mongoose.Schema(
    {
        name: { type: String, required: true }
    },
    { collection: 'size' }
);
const colorChema = new db.mongoose.Schema(
    {
        name: { type: String, required: true }
    },
    { collection: 'color' }
);

let productModel = db.mongoose.model('productModel', productSchema);

let typeModel = db.mongoose.model('typeModel', typeChema);
let sizeModel = db.mongoose.model('sizeModel', sizeChema);
let colorModel = db.mongoose.model('colorModel', colorChema);

module.exports = { productModel, typeModel, sizeModel, colorModel };