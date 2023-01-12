const express = require("express")
const app = express()

const HomeRouter = require("./route/HomeRouter")
const LoginRouter = require("./route/LoginRouter")

// 配置解析post参数的---内置
app.use(express.urlencoded({extended:false}))
//post参数--form格式  username=levi&&password=123
//Content-Type: application/x-www-form-urlencoded
app.use(express.json()) //post获取json格式参数

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