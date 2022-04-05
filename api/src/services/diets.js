const { Diets } = require('../db/models/index.js').sequelize.models

module.exports = {
  getAllDiets: async () => {
    const { count, rows } = await Diets.findAndCountAll()
    if (rows.length === 0) {
      return { detail: 'Nothing be found' }
    } else {
      return {
        count,
        results: rows.length,
        diets: rows
      }
    }
  }
}
