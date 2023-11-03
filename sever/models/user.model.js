var db = require('./db');
var userSchema = new db.mongoose.Schema(
    {
        username: { type: String, required: true },
        passwd: { type: String, required: true },
        email: { type: String, required: false },
        avata: { type: String, required: false },
        phonenumber: { type: Number, required: false },
        address: { type: String, required: false }
    },
    { collection: 'users' }
);
var adminSchema = new db.mongoose.Schema(
    {
        username: { type: String, required: true },
        passwd: { type: String, required: true }
    },
    { collection: 'admin' }
);
let userModel = db.mongoose.model('userModel', userSchema);
let adminModel = db.mongoose.model('adminModel', adminSchema);

module.exports = { userModel, adminModel };