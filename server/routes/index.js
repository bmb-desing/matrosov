const express = require('express')
const configController = require('../controllers/configController')
const pageController = require('../controllers/pageController')
const clientController = require('../controllers/clientController')
const router = express.Router()

router.get('/config', configController.getByFront)
router.get('/page/:alias', pageController.getPageByAlias)
router.get('/clients', clientController.getAll)

router.use('/team', require('./team'))

module.exports = router