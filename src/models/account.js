'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {}
  }

  Account.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      hasEmailValidated: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Account',
    }
  )
  return Account
}
