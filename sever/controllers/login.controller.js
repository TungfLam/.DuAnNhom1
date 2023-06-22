const myMD = require('../models/user.model');

exports.Login = async (req, res, next) => {
    let msg = '';

    if (req.method == 'POST') {

        try {
            let objU = await myMD.adminModel.findOne({ username: req.body.username });
            console.log(objU);
            console.log(req.body.username);
            console.log("passwd : "+objU.passwd);
         
            if (objU != null) {
                // tồn tại username ==> kiểm tra paswd
                if (objU.passwd == req.body.passwd) {
                    // đúng thông itn tài khoản ==> lưu vào session
                    req.session.userLogin = objU;
                    // chuyển trang về trang ('/abc')
                    return res.redirect('/');

                } else {
                    msg = 'Thông tin tài khoản hoặc mật khẩu không chính xác';

                }
            } else {
                // msg = 'Không tồn tại tài khoản: ' + req.body.username;
                msg = 'Thông tin tài khoản hoặc mật khẩu không chính xác';

            }



        } catch (error) {
            msg = 'Thông tin tài khoản hoặc mật khẩu không chính xác';
        }
    }


    res.render('login/login', { msg: msg })

}
// exports.Register = async (req, res, next) => {
//     let msg = '';

//     if (req.method == 'POST') {
//         console.log(req.body);
//         // kiểm tra hợp lệ
//         if (req.body.passwd != req.body.passwd2) {
//             let msg = 'Xác nhận passwword không đúng';
//             return res.render('login/register', { msg: msg })
//         }
//         // nếu có kiểm tra khác thì viết ở đây...

//         // lưu CSDL
//         try {
//             let objU = new myMD.userModel();
//             objU.username = req.body.username
//             objU.avatar = req.body.avatar
//             objU.email = req.body.email
//             objU.passwd = req.body.passwd

//             await objU.save();
//             msg = 'Đăng kí thành công';
//         } catch (error) {
//             msg = 'Lỗi: ' + error.message;
//         }
//     }
//     res.render('login/register', { msg: msg })
// }
exports.Logout = (req, res, next) => {

    req.session.destroy(function (err) {
        return res.status(200).json({ status: 'success', session: 'cannot access session here' })
    });
    res.render('login/login', { msg: msg });
}