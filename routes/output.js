var express = require('express')
var router = express.Router()
const output = require('../controllers/outputController')

router.post('/submit', output.submit)
router.post('/item', output.items)
router.post('/item/view', output.item)
router.post('/problem/view', output.problem)
router.post('/pageload', output.pageLoad)
router.post('/add/light', output.addLight)

module.exports = router
