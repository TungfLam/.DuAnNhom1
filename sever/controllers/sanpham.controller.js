const { log } = require('console');
const myMD = require('../models/product.model');
var fs = require('fs');
exports.list = async (req, res, next) => {

    let dieu_kien_loc = null;
    if (typeof (req.query.price) != 'undefined') {
        dieu_kien_loc = { price: req.query.price };
    }

    var listPD = await myMD.productModel.find(dieu_kien_loc)
        .populate('type')
        .populate('color')
        .populate('size')
        .sort({ name: 1 });

    console.log(listPD);

    // if (req.method == 'POST') {

    //     dieu_kien_loc = req.body.searchname;
    //     var listPD = await myMD.productModel.find(dieu_kien_loc);
    //     res.render('sanpham/list', { listPD: listPD });


    // }

    res.render('product/list', { listPD: listPD });

}
exports.add = async (req, res, next) => {

    let msg = '';
    let listTP = await myMD.typeModel.find();
    let listCL = await myMD.colorModel.find();
    let listSZ = await myMD.sizeModel.find();

    if (req.method == 'POST') {

        fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
        let url_file = '/uploads/' + req.file.originalname;

        let objPD = new myMD.productModel();
        objPD.name = req.body.name;
        objPD.avata = url_file;
        objPD.introduction = req.body.introduction;
        objPD.price = req.body.price;
        objPD.promotion = req.body.promotion;
        objPD.type = req.body.type;
        objPD.color = req.body.color;
        objPD.size = req.body.size;
        objPD.quantity = req.body.quantity;


        try {


            let new_sp = await objPD.save();
            console.log(new_sp);
            msg = 'Đã thêm thành công'

        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('product/add', { msg: msg, listTP: listTP, listCL: listCL, listSZ: listSZ });
}
exports.detailProduct = async (req, res, next) => {

    let msg = '';
    let idpd = req.params.idpd;

    try {
        var objPD = await myMD.productModel.findById(idpd);
        var listTP = await myMD.typeModel.find();
        var listCL = await myMD.colorModel.find();
        var listSZ = await myMD.sizeModel.find();
    } catch (error) {
        msg = 'Lỗi ' + error.message;

    }

    res.render('product/detail', { msg: msg, objPD: objPD, listTP: listTP, listCL: listCL, listSZ: listSZ });
}
exports.editProduct = async (req, res, next) => {

    let msg = '';
    let idpd = req.params.idpd;


    try {
        var objPD = await myMD.productModel.findById(idpd);
        var listTP = await myMD.typeModel.find();
        var listCL = await myMD.colorModel.find();
        var listSZ = await myMD.sizeModel.find();
    } catch (error) {
        msg = 'Lỗi' + error.message;

    }
    if (req.method == 'POST') {

        try {
            fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
            var url_file = '/uploads/' + req.file.originalname;
        } catch (error) {
        }


        let objPD = new myMD.productModel();

        objPD.name = req.body.name;
        objPD.avata = url_file;
        objPD.introduction = req.body.introduction;
        objPD.price = req.body.price;
        objPD.promotion = req.body.promotion;
        objPD.type = req.body.type;
        objPD.color = req.body.color;
        objPD.size = req.body.size;
        objPD.quantity = req.body.quantity;
        objPD._id = idpd;


        try {

            await myMD.productModel.findByIdAndUpdate({ _id: idpd, objPD }, objPD)
            msg = 'Đã sửa thành công'


        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('product/edit', { msg: msg, objPD: objPD, listTP: listTP, listCL: listCL, listSZ: listSZ });
}
exports.delProduct = async (req, res, next) => {

    let msg = '';
    let msg2 = 'Sản phẩm đã được xóa';
    let idpd = req.params.idpd;

    try {
        var objPD = await myMD.productModel.findById(idpd);
        var name_product = objPD.name;

    } catch (error) {
        msg = 'Sản phẩm đã được xóa'

    }

    if (req.method == 'POST') {

        let objPD = new myMD.productModel();
        try {

            await myMD.productModel.findByIdAndDelete(idpd)
            msg = 'Đã xóa thành công'
        } catch (error) {
            msg = 'Lỗi ' + error.message();
            console.log(err);

        }
    }
    res.render('product/del', { msg: msg, msg2: msg2, name_product: name_product });
}
