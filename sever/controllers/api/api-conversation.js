const ConversationModel = require('../../models/conversation.model');

var objReturn = {
    status: 1,
    msg: 'OK'
}

exports.createConversation = async (req, res) => {
    const { members } = req.body;

    try {
        const conversation = new ConversationModel({ members });

        await conversation.save();

        objReturn.data = conversation;
    } catch (error) {
        objReturn.status = 0;
        objReturn.msg = error.message;
    }

    res.json(objReturn);
};

exports.getConversationsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const conversations = await ConversationModel.find({
            members: { $in: [userId] }
        });

        if (conversations.length > 0) {
            objReturn.data = conversations;
        } else {
            objReturn.status = 0;
            objReturn.msg = 'Không có dữ liệu phù hợp';
        }
    } catch (error) {
        objReturn.status = 0;
        objReturn.msg = error.message;
    }

    res.json(objReturn);
};
