const Sequelize = require('sequelize')
const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config.js').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updateAt: 'update_at',
    deleteAt: 'delete_at',
    underscored: true
  }
})

sequelize.sync({
  force: false
})

module.exports = {
  sequelize
}