const team = require('../models/team')
const teamController = {
  async getAll(req, res, next) {
    try {
      const teams = await team
        .find()
        .sort({ sort: 1 })
        .select(['-content', '-head'])
      return res.json(teams)
    } catch (err) {
      return next(err)
    }
  },
  async getByAlias(req, res, next) {
    try {
      const alias = req.params.alias
      const teams = await team.findOne({ alias: alias })
      if (!teams) {
        return res.status(404).json('Страница не найдена')
      } else {
        return res.json(teams)
      }
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = teamController
