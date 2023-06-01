var fs = require('fs');
const myMD = require('../models/user.model');
const { log } = require('console');

exports.list = async (req, res, next) => {

    let dieu_kien_loc = null;
    if (typeof (req.query.username) != 'undefined') {
        dieu_kien_loc = { username: req.query.username };
    }

    var listUS = await myMD.userModel.find(dieu_kien_loc)
        // .populate('type')
        .sort({ username: 1 }); 

    console.log(listUS);


    res.render('users/list', { listUS: listUS, loc: dieu_kien_loc });

}
exports.detailUser = async (req, res, next) => {

    let msg = '';
    let idusdel = req.params.idusdel;

    try {
        var objUS = await myMD.userModel.findById(idusdel);
    } catch (error) {
        msg = 'Lỗi' + error.message;

    }

    res.render('users/detail', { msg: msg, objUS: objUS });

}
exports.add = async (req, res, next) => {

    let msg = '';

    if (req.method == 'POST') {
        fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
        let url_file = '/uploads/' + req.file.originalname;

        let objUS = new myMD.userModel();
        objUS.username = req.body.username;
        objUS.passwd = req.body.passwd;
        objUS.email = req.body.email;

        objUS.avata = url_file;
        objUS.phonenumber = req.body.phonenumber;
        objUS.address = req.body.address;

        try {
            let new_us = await objUS.save();
            console.log(new_us);
            msg = 'Đăng kí thành công';

        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('users/add', { msg: msg });
}
exports.editUs = async (req, res, next) => {

    let msg = '';
    let idus = req.params.idus;

    try {
        var objUS = await myMD.userModel.findById(idus);
    } catch (error) {
        msg = 'Lỗi' + error.message;

    }

    if (req.method == 'POST') {
        fs.renameSync(req.file.path, './public/uploads/' + req.file.originalname);
        let url_file = '/uploads/' + req.file.originalname;
        let objUS = new myMD.userModel();

        objUS.username = req.body.username;
        objUS.passwd = req.body.passwd;
        objUS.email = req.body.email;
        objUS.avata = url_file;
        objUS.phonenumber = req.body.phonenumber;
        objUS.address = req.body.address;
        objUS._id = idus;


        try {

            await myMD.userModel.findByIdAndUpdate({ _id: idus, objUS }, objUS)
            msg = 'Đã sửa thành công'


        } catch (error) {
            msg = 'Lỗi' + error.message();
            console.log(err);

        }
    }
    res.render('users/edit', { msg: msg, objUS: objUS });
}
exports.delUers = async (req, res, next) => {

    let msg = '';
    let msg2 = 'Tài khoản đã được xóa';
    let idusdel = req.params.idusdel;

    try {
        var objUS = await myMD.userModel.findById(idusdel);
        var name_username = objUS.username;

    } catch (error) {
        msg = 'Tài khoản đã được xóa'
    }

    if (req.method == 'POST') {

        let objUS = new myMD.userModel();

        objUS._id;

        try {
            await myMD.userModel.findByIdAndDelete(idusdel);
            msg = 'Đã xóa thành công'
        } catch (error) {
            msg = 'Lỗi ' + error.message();
            console.log(err);

        }
    }
    res.render('users/del', { msg: msg, msg2: msg2, name_username: name_username });
}