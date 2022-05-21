'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const { transporter, mailOptions } = require('../config/nodemailer')

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {}
  }

  Account.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Account',
    }
  )
  return Account
}
