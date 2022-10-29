const fs = require("fs")
// 查看详细信息
fs.stat("./avatar",(err,data)=>{
    if(!err){
        console.log(data)
        console.log(data.isDirectory())
        console.log(data.isFile())
    }
})
