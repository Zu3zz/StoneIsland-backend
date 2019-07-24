const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/book/latest', (ctx, next) => {
  // 获取path headers query body四个参数
  // postman 发送post请求 http://localhost:3000/v1/23/book/latest?qq=773835 自定义一个header name: 3zz 自定义body内容
  const path = ctx.params // post请求中的路径参数 id: "23"
  const query = ctx.request.query // post请求中?后面带的参数 qq: "773835"
  const headers = ctx.request.header // post请求中http的header部分 也可以带参数 name: "3zz"
  const body = ctx.request.body // post请求中的body部分 可以选择文件格式 通常是json 需要通过koa-bodyparser获取

  ctx.body = {
    key: 'book'
  }
})

module.exports = router