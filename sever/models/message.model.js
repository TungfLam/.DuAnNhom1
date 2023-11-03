var db = require('./db');

const MessageSchema = new db.mongoose.Schema(
    {
        conversationId: String,
        sender: String,
        text: String,
    },
    { collection: 'message' }
);

let MessageModel = db.mongoose.model('MessageModel', MessageSchema);

module.exports = MessageModel;
