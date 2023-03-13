var express = require('express');
var router = express.Router();

let UserModel = require("../model/UserModel")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const UserController = require('../controllers/UserController')
router.post('/users',UserController.addUser)

router.put('/users/:myid',UserController.updateUser)

router.delete('/users/:myid',UserController.deleteUser)

router.get('/users',UserController.getUser)

// 登录
router.post('/login',UserController.login)
module.exports = router;
