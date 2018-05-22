define({ "api": [
  {
    "type": "get",
    "url": "/user/_out",
    "title": "用户退出",
    "description": "<p>前端清除token</p>",
    "name": "_out",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "token",
            "description": "<p>返回token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{success:1,msg:\"退出成功\"}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3030/v1/user/_out"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>0失败1成功</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "token",
            "description": "<p>返回token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {success:1,msg:\"登录成功\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhleGlhbmd5dSIsImV4cCI6MT\nUyNjk3MzYwNSwiaWF0IjoxNTI2MzY4ODA1fQ.mvxQV2v7Wsyd_geZC6WqgZgb8WyUdh8M_G-Rpe6HrP4\"}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3030/v1/user/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "注册",
    "description": "<p>用户登录</p>",
    "name": "signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "passwordSec",
            "description": "<p>重复密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "success",
            "description": "<p>0失败1成功</p>"
          },
          {
            "group": "Success 200",
            "optional": false,
            "field": "msg",
            "description": "<p>消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{success:1,msg:\"注册成功\"}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3030/v1/user/signup"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/user",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "token",
            "description": "<p>返回token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"token\":\"\"}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3030/v1/user/user"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/index.js",
    "groupTitle": "User"
  }
] });
