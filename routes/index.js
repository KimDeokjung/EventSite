var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 36000000) })
  res.render('index', { title: 'Express' });
});



module.exports = router;
