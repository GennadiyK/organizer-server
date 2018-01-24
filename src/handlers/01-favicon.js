const favicon = require('koa-favicon')

exports.init = app => app.use(favicon(`${__dirname}../assert/img/favicon.ico`))