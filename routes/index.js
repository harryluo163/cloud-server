var express = require('express');
var v1 = require('./v1');

function setroute(app) {
    app.use(function (req, res, next) {
        next();
    });
    app.use('/v1', v1);
}
exports.setroute = setroute
