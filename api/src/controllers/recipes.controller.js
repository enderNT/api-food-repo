const { getAllRecipes, createRecipe } = require('../services/recipes.js')

const STATUS = {
  'ok': 200,
  'created': 201,
  'accepted': 202,
  'bad-request': 400
}

const orders = {
  'nameASC': ['name', 'ASC'],
  'nameDESC': ['name', 'DESC'],
  'scoreASC': ['score', 'ASC'],
  'scoreDESC': ['score', 'DESC'],
}
const orderedDefault=['id', 'ASC']

module.exports = {
  getRecipes: async (req, res) => {
    const { page, ordered } = req.body
    const response = await getAllRecipes(orders[ordered] || orderedDefault, parseInt(page))
    if (response.detail) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['ok']).json(response)
    }
  },
  createARecipe: async (req, res) => {
    const recipe = req.body
    const response = await createRecipe(recipe)
    if(response.error) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['created']).json(response)
    }
  }
}
