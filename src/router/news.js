const express = require('express')
const router = express.Router()

const newController = require('../app/controlers/NewsController')

// newController.index
// router.use('/', newController.show)

router.use('/', newController.index)

module.exports = router