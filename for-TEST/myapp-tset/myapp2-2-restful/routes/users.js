const { json } = require('express');
var express = require('express');
var router = express.Router();

let UserModel = require("../model/UserModel")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users',(req,res)=>{
  // console.log(req.body)
  const {username,password,age} = req.body
  console.log(username,password)

  UserModel.create({
    username,password,age
  }).then(data=>{
    console.log("成功添加数据到数据库",data)
    res.send(JSON.stringify('收到'))
  })
  
})

router.put('/users/:myid',(req,res)=>{
  // console.log(req.body)
  const {username,password,age} = req.body
  console.log(username,password)

  UserModel.updateOne({
    _id:req.params.myid
  },{
    username,password,age
  }).then(data=>{
    console.log("成功更新",data)
    res.send(JSON.stringify('收到更新'))
  })
  
})

router.delete('/users/:myid',(req,res)=>{
  UserModel.deleteOne({
    _id:req.params.myid
  }).then(data=>{
    console.log("成功删除",data)
    res.send(JSON.stringify('收到'))
  })
})

router.get('/users',(req,res)=>{
  UserModel.find().then(data=>{
    console.log(data)
    res.send(JSON.stringify(data))
  })
})
module.exports = router;
