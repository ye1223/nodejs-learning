var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '后台系统-用户业务管理' });
});

module.exports = router;
