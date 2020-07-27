const pages = require('../models/pages')
const pageController = {
  async getPageByAlias(req, res, next) {
    try {
      const getPage = await pages.findOne({alias: req.params.alias})
      if(getPage) {
        return res.json(getPage)
      }
      else {
        return next(404, 'Страница не найдена')
      }
    }
    catch(err) {
      return err
    }
  }
}

module.exports = pageController