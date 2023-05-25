var fs = require('fs');
const myMD = require('../models/user.model');
const { log } = require('console');

exports.welcome = async (req, res, next) => {

    // var listUS = await myMD.userModel.find(req.session.userLogin)
    // res.render('home/index', { listUS: listUS });

    // console.log(req.session.userLogin);
    res.render('home/index');
}