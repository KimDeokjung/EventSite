var express = require('express')
var router = express.Router()
const game = require('../controllers/gameController')

router.post('/button/reset', game.resetAction)
router.post('/button/check', game.checkAction)

router.post('/run/answer', game.getAnswer)
router.post('/run/a', game.checkA)
router.post('/run/b', game.checkB)
router.post('/run/c', game.checkC)
router.post('/run/result', game.checkRunResult)

router.post('/upgrade/sword', game.upgradeSword)

module.exports = router
