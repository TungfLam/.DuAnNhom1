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

    if (req.method == 'POST') {

        fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
        let url_file = '/uploads/' + req.file.originalname;

        let objPD = new myMD.productModel();
        objPD.name = req.body.name;
        objPD.avatar = url_file;
        objPD.description = req.body.description;
        objPD.price = req.body.price;
        objPD.type = req.body.type;

        //     name: 
        //     type: 
        //     avatar: 
        //     description:
        //     price: 

        try {


            let new_sp = await objPD.save();
            console.log(new_sp);
            msg = 'Đã thêm thành công'

        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('sanpham/add', { msg: msg, listTP: listTP });
}
exports.detailProduct = async (req, res, next) => {

    let msg = '';
    let idpd = req.params.idpd;

    try {
        var objPD = await myMD.productModel.findById(idpd);
        var listTP = await myMD.typeModel.find();
    } catch (error) {
        msg = 'Lỗi ' + error.message;

    }

    res.render('sanpham/detail', { msg: msg, objPD: objPD, listTP: listTP });
}
exports.editProduct = async (req, res, next) => {

    let msg = '';
    let idpd = req.params.idpd;


    try {
        var objPD = await myMD.productModel.findById(idpd);
        var listTP = await myMD.typeModel.find();
    } catch (error) {
        msg = 'Lỗi' + error.message;

    }
    if (req.method == 'POST') {

            fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
            let url_file = '/uploads/' + req.file.originalname;



        let objPD = new myMD.productModel();

        objPD.name = req.body.name;
        objPD.avatar = url_file;
        objPD.description = req.body.description;
        objPD.type = req.body.type;
        objPD.price = req.body.price;
        objPD._id = idpd;


        //     name: 
        //     type: 
        //     avatar: 
        //     description:
        //     price: 

        try {

            await myMD.productModel.findByIdAndUpdate({ _id: idpd, objPD }, objPD)
            msg = 'Đã sửa thành công'


        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('sanpham/edit', { msg: msg, objPD: objPD, listTP: listTP });
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
    res.render('sanpham/del', { msg: msg, msg2: msg2, name_product: name_product });
}
