项目地址为：
[项目地址](https://github.com/harryluo163/cloud-server)


这个是一个RESTful API例子，登录认证采用的是JSON Web Token (JWT)，接口文档采用的是apidoc。

```
npm install
npm start
//生成接口文档
apidoc -i ./routes/  -o ./public/apidoc
```

**1.登录授权返回token，设置有效期**
```
//登录验证成功后，返回给前端
    var authToken = jwt.sign({username: user.username,exp:parseInt(Date.now()/1000)+(60)}, config.session.secrets);
     res.json({success:1,msg:"登录成功",token: authToken});

```



**2.设置目录v1下面采用JWT验证，对每次访问进行解密排除url是login和signup**

```
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
```

**3.设置api注释自动生成文档,具体参考[apidoc](https://github.com/apidoc/apidoc)**

![这里写图片描述](https://img-blog.csdn.net/20180522111948607?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![这里写图片描述](https://img-blog.csdn.net/2018052211211640?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![这里写图片描述](https://img-blog.csdn.net/20180522112122880?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
![这里写图片描述](https://img-blog.csdn.net/20180522112306352?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

