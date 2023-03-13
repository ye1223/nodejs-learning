var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '后台系统-用户业务管理' });
});

/* const JWT = require('../util/JWT')
const token = JWT.generate({name:'levi'},'2s')

console.log(token)
console.log(JWT.verify(token))

setTimeout(() => {
  console.log(JWT.verify(token))
}, 4000)  */

module.exports = router;
