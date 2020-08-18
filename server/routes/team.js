const express = require('express')
const router = express.Router()

const teamController = require('../controllers/teamController')

router.get('/', teamController.getAll)
router.get('/:alias', teamController.getByAlias)

module.exports = router