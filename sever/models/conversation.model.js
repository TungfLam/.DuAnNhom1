var db = require('./db');

const ConversationSchema = new db.mongoose.Schema(
    {
        members: Array,
    },
    { collection: 'conversation' }
);

let ConversationModel = db.mongoose.model('ConversationModel', ConversationSchema);

module.exports = ConversationModel;
