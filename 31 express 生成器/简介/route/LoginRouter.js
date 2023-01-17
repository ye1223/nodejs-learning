const express = require("express")
const router = express.Router()

// 路由级别，相应前端get请求
router.get("/",(req,res)=>{
    // console.log(req.query)
    // res.send("login-success")
    res.render("login",{error:"",isShow:false}) //找views文件夹下的login.ejs
    //还可以传参给ejs文件
})

//响应post登录请求
router.post("/",(req,res)=>{
    if(req.body.username==="1"&&req.body.password==="1"){
        console.log("登陆成功")
        //重定向到home
        res.redirect("/home")
    }else{
        console.log("登录失败")
        res.render("login.ejs",{error:"用户密码错误",isShow:true})
    }
})

module.exports = router