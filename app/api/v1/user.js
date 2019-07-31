const Router = require('koa-router')

const {RegisterValidator}  = require('../../validators/validator')

const router = new Router({
  prefix: '/v1/user'
})

// 注册 新增数据 put get delete

router.get('/register', async (ctx) => {
  const v = new RegisterValidator().validate(ctx)
})

module.exports = router