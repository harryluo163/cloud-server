var jwt = require('jsonwebtoken');
var config = require('../../../config/jwt');
var log = require('../../../common/utils/log4js').default();

const DBHelp =require('../../../common/mongodb/DBHelp');

exports.signup=function (req, res, next) {
        //从前端获取到的用户填写的数据
        let newUser = { username: req.body.username, password: req.body.password, passwordSec: req.body.passwordSec };
        //准备添加到数据库的数据（数组格式）
        let addStr = [{ username: newUser.username, password: newUser.password}];
        //用于查询用户名是否存在的条件
        let dbhelp = new DBHelp();
        dbhelp.FindOne('users', { username: newUser.username }, function (result) {
            if (!result) {
                if (newUser.password === newUser.passwordSec) {
                    dbhelp.Add('users', addStr, function () {
                       res.json({success:1,msg:"注册成功"})
                    });
                } else {
                    res.json({success:0,msg:"两次密码不一致"})
    
                }
            } else {
                res.json({success:0,msg:"用户名已存在"})
            }
        });
}

exports.login=function (req, res, next) {
    //从前端获取到的用户填写的数据
    var user = { username: req.body.username, password: req.body.password };
    //用于查询用户名是否存在的条件
    var selectStr = user;
    var dbhelp = new DBHelp();
    dbhelp.FindOne('users', selectStr, function (result) {
        if (result) {
            if (result.password === user.password) {

                var authToken = jwt.sign({username: user.username,exp:parseInt(Date.now()/1000)+(60)}, config.session.secrets);
                res.json({success:1,msg:"登录成功",token: authToken});
            } else {
                res.json({success:0,msg:"用户名或者密码错误"});
            }
        } else {
            res.json({success:0,msg:"账号不存在！"});
        }
    });
}

exports.user=function  (req, res, next) {
    var username = req.body.username;
    var age = req.body.age;
    if (!username) {
        return res.status(400).send("username require");
    }
    if (!age) {
        return res.status(400).send("age require");
    }

    res.status(200).json({
        username: username,
        age: age
    })
}

exports._out=function (req, res, next) {
    res.json({success:1,msg:"退出成功"});
}