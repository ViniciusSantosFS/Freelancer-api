'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Accounts', 'hasEmailValidated', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Accounts', 'hasEmailValidated')
  },
}
