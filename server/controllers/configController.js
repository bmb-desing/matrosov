const config = require('../models/config')
const configController = {
  async getByFront(req, res, next) {
    try {
      const getAll = await config.find({type: 'client'})
      return res.json(getAll)
    }
    catch(err) {
      return err
    }
  }
}

module.exports = configController