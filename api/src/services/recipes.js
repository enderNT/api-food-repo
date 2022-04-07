const { Op } = require('sequelize')
const { Recipes, Diets } = require('../db/models/index.js').sequelize.models

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
    const check = diets.some((x) => x <= 0 || x > 28)
    if (check) {
      return { Error: 'Rage of recipes is between 1 and 28' }
    } else {
      try {
        const recipeCreated = await Recipes.create({
          name, summary, instructions, image, readyInMinutes,
          score, healthScore, priceServing, servings,
        })
        await recipeCreated.addDiets(diets)
        const resultDietsI = await recipeCreated.getDiets()
        return { ...recipeCreated.toJSON(), diets: resultDietsI }
      } catch (error) {
        const { errors } = error
        const { message, path, type, value } = errors[0]
        return { Error: `${type}`, Message: ` '${path}' ${message} `, Value: value }
      }
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
  },
  async getDetail(id){
    const recipe = await Recipes.findByPk(id, { include: Diets })
    return recipe
  }
}
