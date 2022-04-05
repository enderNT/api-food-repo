'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      healthScore: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      readyInMinutes: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      servings: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      instructions: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      priceServing: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    }, {
      timestamps: false,
      freezeTableName: true
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recipes')
  }
}