var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 36000000) })
  res.render('index', { title: 'Express' });
});


router.get('/light', function(req, res, next) {
  res.render('light', { title: 'Express' });
});

router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


module.exports = router;
