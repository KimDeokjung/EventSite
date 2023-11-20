var express = require('express')
var router = express.Router()
const log = require('../controllers/logController')

router.post('/start', log.startAction)
router.post('/id', log.idFinAction)
router.post('/puzzle', log.puzzleFinAction)
router.post('/quiz', log.quizFinAction)

module.exports = router
