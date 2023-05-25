exports.requiresLogin = (req, res, next) => {
    if (req.session.userLogin) {
        // có tồn tại session login đã đăng nhập
        next();

    } else {
        return res.redirect('/login/login')
    }
}
exports.noLoginRequired = (req, res, next) => {
    if (!req.session.userLogin) {
        next();

    } else {
        return res.redirect('/')
    }

}