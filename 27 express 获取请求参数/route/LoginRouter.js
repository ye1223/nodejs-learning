const express = require("express")
const router = express.Router()

// 路由级别，相应前端get请求
router.get("/",(req,res)=>{
    console.log(req.query)
    res.send("login-success")
})

// 路由级别，相应前端post请求
router.post("/",(req,res)=>{
    console.log(req.body)//!必须配置中间件
    res.send({ok:1})
})


// 路由级别，相应前端put,delete请求


module.exports = router