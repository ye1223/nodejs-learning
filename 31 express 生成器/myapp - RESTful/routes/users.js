var express = require('express');
var router = express.Router();

const UserModel = require("../model/UserModel")

/* GET users listing. */
router.get('/', function(req, res, next) {
  //读取前端的cookie值
  console.log(req.cookies)
  // 设置cookie
  res.cookie("gender","male")
  res.send('respond with a resource');
});

// 响应前端POST请求，增加用户数据
router.post("/user",(req,res)=>{
  console.log("后端接收到数据 ",req.body)
  //!插入数据库
  // 1.创建一个模型（user,限制filed类型）,——对应生成数据库的集合（users）
  const {username,password,age} = req.body
  //创建filed
  UserModel.create(
    {username,password,age} //对象简写
  ).then(data=>{//成功回调
    console.log(data)
    res.send({ok:1})
  })

})

// 动态路由，获取id
router.put("/user/:id",(req,res)=>{
  console.log(req.body,req.params.id)

  const {username,password,age} = req.body
  UserModel.updateOne({_id:req.params.id},{ //匹配内容
    username,password,age //更新内容
  }).then(data=>{
    res.send({
      ok:1
    })
  })

  /* res.send({
    ok:1
  }) */
})

router.delete("/user/:id",(req,res)=>{
  UserModel.deleteOne({
    _id:req.params.id
  }).then(data=>{
    res.send({
      ok:1
    })
  })
})

router.get("/user/list",(req,res)=>{
  const {page,limit} = req.query
  /* UserModel.find({},["_id","username","age"]).sort({age:-1})
  .skip((page-1)*limit).limit(limit) */
  UserModel.find()
  .then(data=>{
    res.send(data)
  })
})
module.exports = router;
