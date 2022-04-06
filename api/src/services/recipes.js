const { Op } = require('sequelize')

const { Recipes } = require('../db/models/index.js').sequelize.models

module.exports = {
  async getAllRecipes(ordered, page){
    const {count, rows} = await Recipes.findAndCountAll({ order: [ordered],
      limit: 8,
      offset: page
    })
    if(rows.length === 0) {
      return { detail: 'Nothing be found' }
    } else {
      return {
        count: count,
        results: rows.length,
        recipes: rows,
      }
    }
  },
  async createRecipe(recipe){
    const { name, summary, instructions,
    image, readyInMinutes, score, healthScore,
    priceServing, servings, diets } = recipe
    try {
      const recipeCreated = await Recipes.create({
        name, summary, instructions, image, readyInMinutes,
        score, healthScore, priceServing, servings,
      })
      // const dietsAdded = await recipeCreated.addDiets(diets)
      return recipeCreated
    } catch (error) {
      const { errors } = error
      const { message, path, type, value } = errors[0]
      return { Error: `${type}`, Message: ` '${path}' ${message} `, Value: value }
    }
  },
  async getByName(name){
    const { count, rows } = await Recipes.findAndCountAll({ where: { name: { [Op.iRegexp]: `${name}` } } })
    if(rows.length === 0) {
      return { detail: 'Nothing be found' }
    } else {
      return {
        results: count,
        recipes: rows,
      }
    }
  }
}
