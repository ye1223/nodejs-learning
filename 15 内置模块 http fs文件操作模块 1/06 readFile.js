const fs = require("fs")
// error first风格
fs.readFile("./avatar/a.txt",(err,data)=>{
    if(!err){
        // data返回buffer对象
        console.log(data.toString("utf-8"))
    }
})

// 也可以在参数设置 按照什么方式读取data
fs.readFile("./avatar/a.txt","utf-8",(err,data)=>{
    if(!err){
        // data返回buffer对象
        console.log(data)
    }
})