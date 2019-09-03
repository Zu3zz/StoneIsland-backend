const util = require('util')
const axios = require('axios')
const {User} = require('../models/user')
const {generateToken} = require('../../core/util')

class WXManager {
  static async codeToToken(code) {
    // 只需要一个code码
    const url = util.format(global.config.wx.loginUrl,
      global.config.wx.appId,
      global.config.wx.appSecret,
      code)
    const result = await axios.get(url)
    if (result.status !== 200) {
      throw new global.errs.AuthFailed('openId获取失败')
      const errcode = result.data.errCode
      if (errcode !== 0) {
        throw new global.errs.AuthFailed('openid获取失败'+errcode)
      }
      // openid
      let user = await User.getUserByOpenid(result.data.openid)
      if(!user){
        user = await User.registerByOpenid(result.data.openid)
      }
      return generateToken(user.id, Auth.USER)
    }
  }
}
module.exports = {
  WXManager
}
