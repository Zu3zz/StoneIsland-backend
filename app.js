const koa = require('koa')
const book = require('./api/v1/book')
const classic = require('./api/v1/classic')

const app = new koa()

app.use(book.routes())
app.use(classic.routes())

app.listen(3000)