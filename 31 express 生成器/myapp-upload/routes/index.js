var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

/*   if (req.session.user) {
    res.render('index', { title: '后台系统-用户业务管理' });

  } else {
    res.redirect('/login')
  } */

  res.render('index', { title: '后台系统-用户业务管理' });
});


module.exports = router;
