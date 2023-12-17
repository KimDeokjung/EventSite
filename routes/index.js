var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.cookie('rememberme', '1', { expires: new Date(Date.now() + 36000000) })
//   res.render('index', { title: 'Express' });
// });
//
//
// router.get('/light', function(req, res, next) {
//   res.render('light', { title: 'Express' });
// });
//
// router.get('/quiz', function(req, res, next) {
//   res.render('quiz', { title: 'Express' });
// });

router.get('/signup', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/joinus', function(req, res, next) {
  res.render('joinus', { title: 'Express' });
});

router.get('/game/run', function(req, res, next) {
  res.render('game/run', { title: 'Express' });
});

router.get('/game/upgrade', function(req, res, next) {
  res.render('game/upgrade', { title: 'Express' });
});

router.get('/game/button', function(req, res, next) {
  res.render('game/button', { title: 'Express' });
});

module.exports = router;
