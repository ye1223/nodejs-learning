var express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();

// const UserModel = require("../model/UserModel")

/* GET users listing. */
router.get('/', function(req, res, next) {
  //读取前端的cookie值
  console.log(req.cookies)
  // 设置cookie
  res.cookie("gender","male")
  res.send('respond with a resource');
});

// 响应前端POST请求，--增加用户数据
router.post("/user",UserController.addUser)

// 动态路由，获取id --更新用户
router.put("/user/:id",UserController.updateUser)

router.delete("/user/:id",UserController.deleteUser)

router.get("/user",UserController.getUser)

module.exports = router;
