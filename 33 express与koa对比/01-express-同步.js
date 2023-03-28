const express = require('express')
const app = express()


// 同步打印 1111 2222 3333

app.use((req,res,next)=>{
    if(req.url === '/favicon.ico') return
    console.log('1111')
    next()

    console.log('3333')
    res.send({ok:1})
})

app.use((req,res)=>{
    console.log('2222')
})

app.listen(3000,()=>{
    console.log('3000监听开始')
})