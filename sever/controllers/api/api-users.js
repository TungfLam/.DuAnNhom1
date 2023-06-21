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

    const user = req.body;
    const newUser = md.userModel(user);
    await newUser.save();


    res.json(objReturn);
}
exports.updateUser = async (req, res, next) => {

    // const updataUser = req.body;
    // const post = md.userModel.findByIdAndUpdate(
    //     { _id: updataUser._id },
    //     updateProduct,
    //     { new: true });

    res.json(objReturn);
}
exports.deleteUser = async (req, res, next) => {
    

    // const delUser = req.body;
    // const post = md.userModel.findByIdAndDelete(
    //     { _id: delUser._id },
    //     updateProduct,
    //     { new: true });

    res.json(objReturn);
};