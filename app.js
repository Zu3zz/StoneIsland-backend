const Koa = require('koa')
const parser=  require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exceptions')

const app = new Koa()

app.use(parser())
app.use(catchError)

// 注册路由
InitManager.initCore(app)

app.listen(3000)