'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RECIPEs_DIETs', {
      RecipeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference : {
          model : 'Recipes',
          key : 'id'
        }
      },
      DietId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference : {
          model : 'Diets',
          key : 'id'
        }
      }
    }, {
      freezeTableName: true,
      timestamps: false
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RECIPEs_DIETs')
  }
}