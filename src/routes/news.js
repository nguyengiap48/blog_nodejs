const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

// newsController.index

router.use('/:c', newsController.show)
router.use('/', newsController.index)

module.exports = router


