项目地址为：
[项目地址](https://github.com/harryluo163/cloud-server)


这个是一个RESTful API例子，登录认证采用的是JSON Web Token (JWT)，接口文档采用的是apidoc。

```
npm install
npm start
//生成接口文档
apidoc -i ./routes/  -o ./public/apidoc
```


这个是自动生成网页，我们就可以摆脱excel。
**一.首先是使用node安装apiDoc**

```
npm install apidoc -g
```


**二.在需要生成接口的添加注释**

```
/**
 * @api {post} /v1/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess  token 返回token
 * @apiSuccessExample {json} Success-Response:
 *  {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhleGlhbmd5dSIsImV4cCI6MT
 * UyNjk3MzYwNSwiaWF0IjoxNTI2MzY4ODA1fQ.mvxQV2v7Wsyd_geZC6WqgZgb8WyUdh8M_G-Rpe6HrP4"}
 * @apiSampleRequest http://localhost:3001/v1/login
 * @apiVersion 1.0.0
 */
```

```

/**
 * @api {post} /v1/user 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName user
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} age 年龄
 * @apiParam {string} token 签名
 * @apiSuccess  token 返回token
 * @apiSuccessExample {json} Success-Response:
 *  {"token":""}
 * @apiSampleRequest http://localhost:3001/v1/user
 * @apiVersion 1.0.0
 */
```

**三.项目目录配置创建apidoc.json文件**

```
{
    "name": "cloud-server",
    "version": "1.0.0",
    "description": "cloud-server项目API文档",
    "title": "cloud-server API",
    "url": "http://localhost:3030/v1",
    "forceLanguage": "zh-cn"
  }
```
或者在package.json文件中加

```
,
  "apidoc": {
    "name": "cloud-server",
    "version": "1.0.0",
    "description": "cloud-server项目API文档",
    "title": "cloud-server API",
    "url": "http://localhost:3030/v1",
    "forceLanguage": "zh-cn"
  }
```


**四.使用命令生成项目目录中接口的目录是routes，生成的今天网页我是放在了public/apidoc下**

```
apidoc -i ./routes/  -o ./public/apidoc
```

![这里写图片描述](https://img-blog.csdn.net/20180515173758228?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)