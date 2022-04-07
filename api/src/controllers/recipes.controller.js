const {
  getAllRecipes, createRecipe, getByName,
  getDetail
} = require('../services/recipes.js')

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
  async getRecipes(req, res) {
    const { page, ordered, name } = req.query
    const offset = (parseInt(page || 1)-1)*8
    const response = !name
    ? await getAllRecipes(orders[ordered] || orderedDefault, offset, name)
    : await getByName(name)
    if (response.detail) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['ok']).json(response)
    }
  },
  async createARecipe(req, res){
    const recipe = req.body
    if(!Array.isArray(recipe.diets) || recipe.diets.length === 0) {
      res.status(STATUS['bad-request']).json({ Error: 'Diets its necessary' })
    } else {
      const check = recipe.diets.every((x) => typeof x === 'number' )
      if (!check) {
        res.status(STATUS['bad-request']).json({ Error: 'Diets must be a number of arrays' })
      } else {
        const response = await createRecipe(recipe)
        if(response.Error) {
          res.status(STATUS['bad-request']).json(response)
        } else {
          res.status(STATUS['created']).json(response)
        }
      }
    }
  },
  async recipeDetailed(req, res){
    const { id } = req.params
    const response = await getDetail(parseInt(id))
    if (!response) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['ok']).json(response)
    }
  }
}
