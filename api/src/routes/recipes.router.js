const { Router } = require('express')
const controll_recipes = require('../controllers/recipes.controller.js')
const route_recipes = Router()

route_recipes.get('/', controll_recipes.getRecipes)
route_recipes.post('/', controll_recipes.createARecipe)

module.exports = route_recipes
