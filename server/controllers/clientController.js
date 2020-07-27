const client = require('../models/clients')
const clientController = {
  async getAll(req, res, next) {
    try {
      const all = await client.find()
      return res.json(all)
    }
    catch(err) {
      return err
    }
  }
}

module.exports = clientController