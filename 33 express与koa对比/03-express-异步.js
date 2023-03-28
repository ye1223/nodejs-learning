const express = require('express')
const app = express()


// 想打印 1111 2222 3333 4444
// 结果输出 1 2 4 3
/* 
    express next 并不是基于Promise的，所以用await并不会卡主next()
*/



app.use(async (req,res,next)=>{
    if(req.url === '/favicon.ico') return
    console.log('1111')
    await next()  //没用

    console.log(res.token) //undefined
     
    console.log('4444')
    res.send({ok:1})
})

app.use(async (req,res)=>{
    console.log('2222')

    // 异步
    await delay(1000)

    res.token = 'adjk wnkck'
    console.log('3333')
})


function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, time);
    })
}


app.listen(3000,()=>{
    console.log('3000监听开始')
})