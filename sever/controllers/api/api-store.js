var md = require('../../models/product.model')
var objReturn = {
    status: 1,
    msg: 'OK'
}


exports.listProduct = async (req, res, next) => {
    let list = [];

    try {
        list = await md.productModel.find();
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
exports.addProduct = (req, res, next) => {




    res.json(objReturn);
}
exports.updateProduct = (req, res, next) => {




    res.json(objReturn);
}
exports.deleteProduct = (req, res, next) => {


    res.json(objReturn);
}