const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    // *判断cookie里面有没有username
    res.render("login") //!如果有人想访问localhost:3000/login 直接跳转到login.ejs页面
})

module.exports = router