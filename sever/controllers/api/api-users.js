var md = require('../../models/user.model');
const { updateProduct } = require('./api-store');
var objReturn = {
    status: 1,
    msg: 'OK'
}


exports.listUser = async (req, res, next) => {
    let list = [];

    try {
        list = await md.userModel.find();
        if (list.length > 0)
            objReturn.data = list;
        else {
            objReturn.status = 0;
            objReturn.msg = 'Không có dữ liệu phù hợp';

        }
    } catch (error) {
        objReturn.status = 0;
        objReturn.msg = error.message;
    }

    res.json(objReturn);
}
exports.addUser = async (req, res, next) => {
    try {
        const user = req.body;
        const newUser = md.userModel(user);
        await newUser.save();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    res.json(objReturn);
}
exports.updateUser = async (req, res, next) => {

    try {
        const user = await md.userModel.findByIdAndUpdate(req.params.idu, req.body, { new: true });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    res.json(objReturn);
}
exports.deleteUser = async (req, res, next) => {

    try {
        const user = await md.userModel.findByIdAndDelete(req.params.idu);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    res.json(objReturn);
};