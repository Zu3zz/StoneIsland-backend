const Router = require('koa-router')


const {RegisterValidator}  = require('../../validators/validator')
const {User} = require('../../models/user')

const router = new Router({
  prefix: '/v1/user'
})

// 注册 新增数据 put get delete

router.get('/register', async (ctx) => {
  // new 一个类 实例化
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    id: 1,
    email: v.get('body.email'),
    password: v.get('body.password2'),
    nickname: v.get('body.nickname')
  }
  const r = await User.create(user)
})

module.exports = router