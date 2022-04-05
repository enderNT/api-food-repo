const { Recipes } = require('../db/models/index.js').sequelize.models

module.exports = {
  getAllRecipes: async (ordered, page=1) => {
    const {count, rows} = await Recipes.findAndCountAll({ order: [ordered],
      limit: 8,
      offset: (page-1)*8
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
  createRecipe: async (recipe) => {
    const { name, summary, instructions,
    image, readyInMinutes, score, healthScore,
    priceServing, servings, diets } = recipe
    try {
      const recipeCreated = await Recipes.create({
        name, summary, instructions, image, readyInMinutes,
        score, healthScore, priceServing, servings,
      })
      return recipeCreated
    } catch (error) {
      const { fields, errors } = error
      return { Error: `${errors[0].type.toUpperCase()}. Recipe: ${fields.name}, ${errors[0].message}.` }
    }
  }
}