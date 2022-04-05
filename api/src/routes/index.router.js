const { Router } = require('express')

const router = Router()

router.use('/recipes', require('./recipes.router.js'))
router.use('/diets', require('./diets.router.js'))

module.exports = router
