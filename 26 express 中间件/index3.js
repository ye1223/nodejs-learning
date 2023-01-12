const express = require("express")
const app = express()

const HomeRouter = require("./router3/HomeRouter")
const LoginRouter = require("./router3/LoginRouter")


//应用级别
app.use((req,res,next)=>{
    console.log("验证token")
    next()
})

//应用级别
app.use("/home",HomeRouter)
app.use("/login",LoginRouter)


// 错误中间件
app.use((req,res)=>{
    res.status(404).send("not found")
})

app.listen(3000,()=>{
    console.log("服务器启动")
})