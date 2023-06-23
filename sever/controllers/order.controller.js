var fs = require('fs');
const myMD = require('../models/order.model');
const { log } = require('console');

exports.list = async (req, res, next) => {

    let dieu_kien_loc = null;
    if (typeof (req.query.price) != 'undefined') {
        dieu_kien_loc = { price: req.query.price };
    }

    var listOD = await myMD.orderModel.find(dieu_kien_loc)
        .populate('users')
        .populate('product')
        .sort({ statusduyet: 1 });

    console.log(listOD);

    res.render('order/list', { listOD: listOD });

}
// exports.add = async (req, res, next) => {

//     let msg = '';
//     let listTP = await myMD.sizeModel.find();

//     if (req.method == 'POST') {
//         let objTP = new myMD.sizeModel();
//         objTP.name = req.body.name;

//         try {
//             let new_tp = await objTP.save();
//             console.log(new_tp);
//             msg = 'Đã thêm thành công'

//         } catch (error) {
//             msg = 'Lỗi' + error.message();
//             console.log(err);

//         }
//     }
//     res.render('size/add', { msg: msg, listTP: listTP });
// }
// exports.editSize = async (req, res, next) => {

//     let msg = '';
//     let idtp = req.params.idtp;

//     try {
//         var objTP = await myMD.sizeModel.findById(idtp);
//     } catch (error) {
//         msg = 'Lỗi' + error.message;

//     }

//     if (req.method == 'POST') {

//         let objTP = new myMD.sizeModel();
//         objTP._id = idtp;

//         objTP.name = req.body.name;
//         try {

//             await myMD.sizeModel.findByIdAndUpdate({ _id: idtp, objTP }, objTP)
//             msg = 'Đã sửa thành công'


//         } catch (error) {
//             msg = 'Lỗi' + error.message();
//             console.log(err);

//         }
//     }
//     res.render('size/edit', { msg: msg, objTP: objTP});
// }
// exports.delSize = async (req, res, next) => {

//     let msg = '';
//     let msg2 = 'Loại đã được xóa';
//     let idtpdel = req.params.idtpdel;

//     try {
//         var objTP = await myMD.sizeModel.findById(idtpdel);
//         var name_size = objTP.name;

//     } catch (error) {
//         msg = 'Loại đã được xóa'

//     }

//     if (req.method == 'POST') {

//         let objTP = new myMD.sizeModel();
//         try {

//             await myMD.sizeModel.findByIdAndDelete(idtpdel)
//             msg = 'Đã xóa thành công'
//         } catch (error) {
//             msg = 'Lỗi ' + error.message();
//             console.log(err);

//         }
//     }
//     res.render('size/del', { msg: msg, msg2: msg2, name_size: name_size });
// }
