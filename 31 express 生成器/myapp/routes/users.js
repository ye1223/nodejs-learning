var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //读取前端的cookie值
  console.log(req.cookies)
  // 设置cookie
  res.cookie("gender","male")
  res.send('respond with a resource');
});

module.exports = router;
