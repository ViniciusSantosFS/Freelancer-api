'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      // define association here
    }
  }
  Client.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Client',
    }
  )
  return Client
}
