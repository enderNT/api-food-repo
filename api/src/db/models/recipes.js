'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipes.belongsToMany(models.Diets, { through: 'RECIPEs_DIETs' })
    }
  }
  Recipes.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'it already exists'
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: 'The image must be a valid param'
      }
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: 'Canont be less than 0'
        },
        max: {
          args: [10],
          msg: 'Cannont be greater than 10'
        }
      }
    },
    healthScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'Must be a number'
        },
        min: {
          args: [0],
          msg: 'Canont be less than 0'
        },
        max: {
          args: [10],
          msg: 'Cannont be greater than 10'
        }
      }
    },
    readyInMinutes: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'Must be a number'
        },
        min: {
          args: [0],
          msg: 'Cannont be less than 0'
        }
      }
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'Must be a number'
        },
        min: {
          args: [0],
          msg: 'Cannont be less than 0'
        }
      }
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Cannot be null'
        }
      }
    },
    priceServing: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'Must be a number'
        },
        min: {
          args: [0],
          msg: 'Cannont be less than 0'
        }
      }
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Cannont be null'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Recipes',
    freezeTableName: true,
    timestamps: false
  })
  return Recipes
}
