const express = require('express')
const app = express()

//静态资源托管
app.use(express.static('public'))

app.use(express.urlencoded({extended:false}))
app.use(express.json()) //!post获取json格式参数

const ANormalRouter = require('./route/ANormalRouter')
//应用中间件（路由）
app.use('/',ANormalRouter)



// 错误中间件
app.use((req,res)=>{
    res.status(404).send('404 not found')
})

app.listen(3000,()=>{
    console.log('server-on')
})