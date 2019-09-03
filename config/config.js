module.exports = {
  // prod
  environment: 'dev',
  database: {
    dbName: 'island',
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '773835'
  },
  security: {
    secretKey: "blade",
    expiresIn: 60 * 60 * 24 * 30
  },
  wx:{
    appId:'',
    appSecret:"",
    loginUrl:'https://api.weixin.qq.com/sns/oauth2/access_token?appid=%s&secret=%s&code=%s&grant_type=authorization_code'
  }
}
