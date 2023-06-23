var fs = require('fs');
const myMD = require('../models/product.model');
const { log } = require('console');

exports.list = async (req, res, next) => {

    let dieu_kien_loc = null;
    if (typeof (req.query.price) != 'undefined') {
        dieu_kien_loc = { price: req.query.price };
    }

    var listTP = await myMD.typeModel.find(dieu_kien_loc)
       
        .sort({ name: 1 });

    console.log(listTP);

    res.render('type/list', { listTP: listTP });

}
exports.add = async (req, res, next) => {

    let msg = '';
    let listTP = await myMD.typeModel.find();

    if (req.method == 'POST') {
        let objTP = new myMD.typeModel();
        objTP.name = req.body.name;

        try {
            let new_tp = await objTP.save();
            console.log(new_tp);
            msg = 'Đã thêm thành công'

        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('type/add', { msg: msg, listTP: listTP });
}
exports.editType = async (req, res, next) => {

    let msg = '';
    let idtp = req.params.idtp;

    try {
        var objTP = await myMD.typeModel.findById(idtp);
    } catch (error) {
        msg = 'Lỗi' + error.message;

    }

    if (req.method == 'POST') {

        let objTP = new myMD.typeModel();
        objTP._id = idtp;

        objTP.name = req.body.name;
        try {

            await myMD.typeModel.findByIdAndUpdate({ _id: idtp, objTP }, objTP)
            msg = 'Đã sửa thành công'


        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('type/edit', { msg: msg, objTP: objTP});
}
exports.delType = async (req, res, next) => {

    let msg = '';
    let msg2 = 'Loại đã được xóa';
    let idtpdel = req.params.idtpdel;

    try {
        var objTP = await myMD.typeModel.findById(idtpdel);
        var name_type = objTP.name;

    } catch (error) {
        msg = 'Loại đã được xóa'

    }

    if (req.method == 'POST') {

        let objTP = new myMD.typeModel();
        try {

            await myMD.typeModel.findByIdAndDelete(idtpdel)
            msg = 'Đã xóa thành công'
        } catch (error) {
            msg = 'Lỗi ' + error.message();
            console.log(err);

        }
    }
    res.render('type/del', { msg: msg, msg2: msg2, name_type: name_type });
}
