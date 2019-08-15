const bcrypt = require('bcryptjs')
const {
  Sequelize,
  Model
} = require('sequelize')

const {
  sequelize
} = require('../../core/db')

class User extends Model {

}

User.init({
  // 主键
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128),
    unique: true
  },
  password: {
    // 扩展 设计模式
    type: Sequelize.STRING,
    set(val){
      const salt = bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(val, salt)
      this.setDataValue(psw)
    }
  },
  openid: {
    type: Sequelize.STRING(64),
    unique:true
  }
},{
  sequelize, 
  tableName: 'user'
})

module.exports = {
  User
}