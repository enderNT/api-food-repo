'use strict'
const recipes_diets = require('../jsons/recipes_diets copy.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {})
    */
      await queryInterface.bulkInsert('RECIPEs_DIETs', recipes_diets)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkInsert('RECIPEs_DIETs', null, {})
  }
}
