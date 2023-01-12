const express = require("express")
const router = express.Router()

// 路由级别，相应前端get请求
router.get("/",(req,res)=>{
    console.log(req.query)
    res.send("login-success")
})

// 路由级别，相应前端post请求
router.post("/",(req,res)=>{
    console.log(req.body)//必须配置中间件

    const {username,password} = req.body
    if(username ==="1"&&password ==="1"){
        res.send({ok:1})
    }else{
        res.send({ok:0})
    }
    
})


// 路由级别，相应前端put,delete请求


module.exports = router