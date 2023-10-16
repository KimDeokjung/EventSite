var express = require('express')
var router = express.Router()
const output = require('../controllers/outputController')

router.post('/submit', output.submit)
router.post('/item/view', output.item)

module.exports = router
