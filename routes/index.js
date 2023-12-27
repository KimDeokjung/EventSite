var express = require('express');
const jwt = require("jsonwebtoken");
var router = express.Router();
const key = "secretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKeysecretKey"

const decodeJWT = (data) => {
  try {
    return jwt.verify(data, key)
  } catch (error) {
    return false
  }
}

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
  const log = req.cookies.log
  const logData = decodeJWT(log)

  if(logData && logData.stage > 0) {
    res.render('game/run', { title: 'Express' });
  }else {
    let token = jwt.sign({stage: 0}, key, {expiresIn: "100m"});
    res.cookie('log', token, { maxAge: 900000, httpOnly: true });
    res.render('game/fail', { title: 'Express' });
  }

});

router.get('/game/upgrade', function(req, res, next) {
  res.render('game/upgrade', { title: 'Express' });
});

router.get('/game/button', function(req, res, next) {
  res.render('game/button', { title: 'Express' });
});

router.get('/story', function(req, res, next) {
  res.render('story', { title: 'Express' });
});

router.get('/game/main', function(req, res, next) {
  res.render('game/main', { title: 'Express' });
});

router.get('/game/fail', function(req, res, next) {
  let token = jwt.sign({stage: 0}, key, {expiresIn: "100m"});
  res.cookie('log', token, { maxAge: 900000, httpOnly: true });
  res.render('game/fail', { title: 'Express' });
});

module.exports = router;
