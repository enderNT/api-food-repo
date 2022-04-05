const { getAllDiets } = require('../services/diets.js')

const STATUS = {
  'ok': 200,
  'created': 201,
  'accepted': 202,
  'bad-request': 400
}

module.exports = {
  getDiets: async (req, res) => {
    const response = await getAllDiets()
    if (response.detail) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['ok']).json(response)
    }
  }
}
