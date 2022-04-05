'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class RECIPEs_DIETs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RECIPEs_DIETs.belongsTo(models.Recipes, {
        foreignKey: 'RecipeId',
        onDelete: 'CASCADE'
      })
      RECIPEs_DIETs.belongsTo(models.Diets, {
        foreignKey: 'DietId',
        onDelete: 'CASCADE'
      })
    }
  }
  RECIPEs_DIETs.init({
    RecipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      reference : {
        model : 'Recipes',
        key : 'id'
      }
    },
    DietId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      reference : {
        model : 'Diets',
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'RECIPEs_DIETs',
    freezeTableName: true,
    timestamps: false
  })
  return RECIPEs_DIETs
}