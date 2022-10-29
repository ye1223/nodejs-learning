const fs = require("fs")

fs.readdir("./avatar",(err,data)=>{
    data.forEach(item=>{
        // 同步删除文件
        fs.unlinkSync(`./avatar/${item}`,err=>{})
    })

    // 
    fs.rmdir("./avatar",err=>{
        console.log("删除目录的错误",err)
    })
})

