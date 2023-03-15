var express = require('express');
var router = express.Router();

//let UserModel = require("../model/UserModel")

const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const UserController = require('../controllers/UserController')
router.post('/users',upload.single("avatar"),UserController.addUser)

router.put('/users/:myid',UserController.updateUser)

router.delete('/users/:myid',UserController.deleteUser)

router.get('/users',UserController.getUser)

// 登录
router.post('/login',UserController.login)

//退出，销毁session
router.get('/logout',UserController.logout)
module.exports = router;
