const express = require("express")

const app = express()

// req 请求来数据 res返回给前端的内容
app.get("/",(req,res)=>{
    res.send({
        name:'Levi',
        age:21
    })
})

//!提供多个回调函数，其行为类似 中间件
// 中间件之间传递数据，挂在res身上

//              这个回调函数也叫中间件
/* app.get("/home",(req,res,next)=>{
    // 验证用户token过期，cookie过期
    
    console.log("验证token")
    const isValid = true
    if(isValid){
        next()
    }else{
        res.send("error")
    }
},(req,res)=>{
    // 查询数据库
    // 返回查询
    res.send({list:[1,2,3]})
}) */


var func1 = (req,res,next)=>{
    // 验证用户token过期，cookie过期
    
    console.log("验证token")
    const isValid = true
    if(isValid){
        next()
    }else{
        res.send("error")
    }
}

var func2 = (req,res)=>{
    // 查询数据库
    // 返回查询
    res.send({list:[1,2,3]})
}

app.get("/home",[func1,func2])






/* // b可有可无
app.get("/ab?cd",(req,res)=>{
    res.send("ok")
})

// 占位符
app.get("/abcd/:id",(req,res)=>{
    res.send("okk")
})

// b可以一次或多次
app.get("/ab+cd",(req,res)=>{
    res.send("okk")
})
// b后可以写任意（多）字符
app.get("/ab*cd",(req,res)=>{
    res.send("okk")
})
// (bc) 可有可无
app.get("/a(bc)?d",(req,res)=>{
    res.send("okk")
}) */

app.listen(3000,()=>{
    console.log("server-start")
})