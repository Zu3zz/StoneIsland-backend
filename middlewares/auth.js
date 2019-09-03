const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')

class Auth {
  constructor(level) {
    this.level = level || 1
    Auth.USER = 8
    Auth.ADMIN = 16
    Auth.SUPER_ADMIN = 32
  }
  
  get m() {
    return async (ctx, next) => {
      // 获取token并且检测token
      // 如何获取token body header
      // HTTP 规定 身份验证
      const userToken = basicAuth(ctx.req)
      // ctx.req -> node.js原生request对象
      // ctx.request
      let errMsg = 'token不合法'
      
      if (!userToken || !userToken.name) {
        throw new global.errs.Forbidden(errMsg)
      }
      try {
        var decode = jwt.verify(userToken.name, global.config.security.secretKey)
      } catch (error) {
        // 明确提示是哪种方式的不合法
        // 1. token不合法 2.token过期
        if (error.name === 'TokenExpiredError') {
          errMsg = 'token已过期'
        }
        throw new global.errs.Forbidden(errMsg)
      }
      if(decode.scope < this.level){
        errMsg = '权限不足'
        throw new global.errs.Forbidden(errMsg)
      }
      // uid, scope
      ctx.auth = {
        uid: decode.uid,
        scope: decode.scope
      }
      await next()
    }
  }
}

module.exports = {
  Auth
}
