var express = require('express')
var router = express.Router()
const game = require('../controllers/gameController')

router.post('/button/reset', game.resetAction)
router.post('/button/check', game.checkAction)

module.exports = router
