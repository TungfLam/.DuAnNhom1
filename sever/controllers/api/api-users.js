var md = require('../../models/user.model')
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
exports.updateUser = (req, res, next) => {




    res.json(objReturn);
}
exports.deleteUser = async (req, res, next) => {
    // const idusdel = req.params._id
    // const userModel = md.userModel();
    // await userModel.findByIdAndDelete(idusdel);
    res.json(objReturn);
};