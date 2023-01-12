const express = require("express")

const app = express()

// req 请求来数据 res返回给前端的内容
app.get("/",(req,res)=>{
    /* res.write("hello express")
    res.end() */
    // res.send("hello express")
    /* res.send(`
        <html>
            <h1>TEST</h1>
        </html>
    `) */
    res.send({
        name:'Levi',
        age:21
    })
    
})

app.listen(3000,()=>{
    console.log("server-start")
})