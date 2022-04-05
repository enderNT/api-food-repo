const { Router } = require('express')
const controll_diets = require('../controllers/diets.controller.js')
const route_diets = Router()

route_diets.get('/', controll_diets.getDiets)

module.exports = route_diets
