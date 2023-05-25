var db = require('./db');
var userSchema = new db.mongoose.Schema(
    {
        username: { type: String, required: true },
        passwd: { type: String, required: true },
        email: { type: String, required: true },
        avata: { type: String, required: true },
        phonenumber: { type: Number, required: true },
        address: { type: String, required: false }
    },
    { collection: 'users' }
);
let userModel = db.mongoose.model('userModel', userSchema);

module.exports = { userModel };