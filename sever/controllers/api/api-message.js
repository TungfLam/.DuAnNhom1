const MessageModel = require('../../models/message.model');

var objReturn = {
    status: 1,
    msg: 'OK'
}

exports.createMessage = async (req, res) => {
    const { conversationId, sender, text } = req.body;

    try {
        const message = new MessageModel({ conversationId, sender, text });

        await message.save();

        objReturn.data = message;
    } catch (error) {
        objReturn.status = 0;
        objReturn.msg = error.message;
    }

    res.json(objReturn);
};

exports.getMessagesByConversation = async (req, res) => {
    let list = [];

    const { conversationId } = req.params;

    try {
        list = await MessageModel.find({
            conversationId
        });

        if (messages.length > 0) {
            objReturn.data = list;
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
