var md = require('../../models/order.model')
var objReturn = {
    status: 1,
    msg: 'OK'
}


exports.listOrder = async (req, res, next) => {
    let list = [];

    try {
        list = await md.orderModel.find();
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
exports.addOrder = async (req, res, next) => {


    const order = req.body;
    const neworder = md.orderModel(order);
    await neworder.save();


    res.json(objReturn);
}
// exports.updateProduct = (req, res, next) => {




//     res.json(objReturn);
// }
// exports.deleteProduct = (req, res, next) => {


//     res.json(objReturn);
// }