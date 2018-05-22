项目地址为：
[项目地址](https://github.com/harryluo163/cloud-server)

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

name：项目名称 
version：项目版本 
description：项目介绍 
title：浏览器显示的标题内容 
url：endpoints的前缀，例如https://api.github.com/v1 
sampleUrl：如果设置了，则在api文档中出现一个测试用的from表单 
header 
title：导航文字包含header.md文件 
filename：markdown-file 文件名 
footer 
title：导航文字包含header.md文件 
filename：markdown-file 文件名 
order：用于配置输出 api-names/group-names 排序，在列表中的将按照列表中的顺序排序，不在列表中的名称将自动显示。


**四.使用命令生成项目目录中接口的目录是routes，生成的今天网页我是放在了public/apidoc下**

```
apidoc -i ./routes/  -o ./public/apidoc
```

![这里写图片描述](https://img-blog.csdn.net/20180515173758228?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)