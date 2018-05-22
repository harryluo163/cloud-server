/**
 * 日志
 */

var log4js = require('log4js');

log4js.configure({
    "appenders": {
        "console": {
            "type": "console"
        },
        "trace": {
            "type": "file",
            "filename": "log/access.log",
            "maxLogSize ": 31457280
        },
        "http": {
            "type": "logLevelFilter",
            "appender": "trace",
            "level": "trace",
            "maxLevel": "trace"
        },
        "info": {
            "type": "dateFile",
            "filename": "log/app-info.log",
            "pattern": ".yyyy-MM-dd",
            "layout": {
                "type": "pattern",
                "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
            },
            "compress": true
        },
        "maxInfo": {
            "type": "logLevelFilter",
            "appender": "info",
            "level": "debug",
            "maxLevel": "info"
        },
        "error": {
            "type": "dateFile",
            "filename": "log/app-error.log",
            "pattern": ".yyyy-MM-dd",
            "layout": {
                "type": "pattern",
                "pattern": "[%d{ISO8601}][%5p  %z  %c] %m"
            },
            "compress": true
        },
        "minError": {
            "type": "logLevelFilter",
            "appender": "error",
            "level": "error"
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "console",
                "http",
                "maxInfo",
                "minError"
            ],
            "level": "all"
        }
    }
});

module.exports = {
  default: function () {
    return log4js.getLogger('default');
  },
  access: function () {
    return log4js.connectLogger(log4js.getLogger('access'), {
      level: log4js.levels.INFO,
      format: ':remote-addr :method :url HTTP/:http-version :status ":user-agent" :response-timems',
      nolog: /\/static\/.*/
    })
  }
};