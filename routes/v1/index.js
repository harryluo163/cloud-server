const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/jwt');
const user =require('./routes/user');


router.use(function(req, res, next) {
    if (req.originalUrl.indexOf("/login") < 0&&req.originalUrl.indexOf("/signup")<0) {
    // 拿取token 数据 按照自己传递方式写
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        // 解码 token (验证 secret 和检查有效期（exp）)
        jwt.verify(token, config.session.secrets, function(err, decoded) {      
              if (err) {
            return res.json({ success: false, message: '无效的token.' });    
              } else {
                // 如果验证通过，在req中写入解密结果
                req.decoded = decoded;  
                //console.log(decoded)  ;
                next(); //继续下一步路由
          }
        });
      } else {
        // 没有拿到token 返回错误 
        return res.status(403).send({ 
            success: false, 
            message: '没有找到token.' 
        });
      }

    }else{
        next();
    }
    });


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


/**
 * @api {post} /user/signup 注册
 * @apiDescription 用户登录
 * @apiName signup
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiParam {string} passwordSec 重复密码
 * @apiSuccess  success 0失败1成功
 * @apiSuccess  msg 消息
 * @apiSuccessExample {json} Success-Response:
 *  {success:1,msg:"注册成功"}
 * @apiSampleRequest http://localhost:3030/v1/user/signup
 * @apiVersion 1.0.0
 */
router.post('/user/signup',  (req, res,next) => {
    user.signup(req, res,next) 

})

/**
 * @api {post} /user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess  success 0失败1成功
 * @apiSuccess  msg 消息
 * @apiSuccess  token 返回token
 * @apiSuccessExample {json} Success-Response:
 *  {success:1,msg:"登录成功","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhleGlhbmd5dSIsImV4cCI6MT
 * UyNjk3MzYwNSwiaWF0IjoxNTI2MzY4ODA1fQ.mvxQV2v7Wsyd_geZC6WqgZgb8WyUdh8M_G-Rpe6HrP4"}
 * @apiSampleRequest http://localhost:3030/v1/user/login
 * @apiVersion 1.0.0
 */
router.post("/user/login", function(req, res,next) {
    user.login(req, res,next)
});




/**
 * @api {post} /user/user 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName user
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} age 年龄
 * @apiParam {string} token 签名
 * @apiSuccess  token 返回token
 * @apiSuccessExample {json} Success-Response:
 *  {"token":""}
 * @apiSampleRequest http://localhost:3030/v1/user/user
 * @apiVersion 1.0.0
 */
router.post("/user/user",  function(req, res,next) {
  user.user(req, res,next)
})

/**
 * @api {get} /user/_out 用户退出
 * @apiDescription 前端清除token
 * @apiName _out
 * @apiGroup User
 * @apiParam {string} token token
 * @apiSuccess  token 返回token
 * @apiSuccessExample {json} Success-Response:
 *  {success:1,msg:"退出成功"}
 * @apiSampleRequest http://localhost:3030/v1/user/_out
 * @apiVersion 1.0.0
 */
router.get("/user/_out", function(req, res,next) {
        user._out(req, res,next)
});



module.exports = router;
