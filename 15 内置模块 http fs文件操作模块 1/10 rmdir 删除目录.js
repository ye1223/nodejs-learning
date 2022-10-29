const fs = require("fs")

fs.readdir("./avatar",(ere,data)=>{
    data.forEach(item=>{
        // 异步调用 forEach很快就调用完了，但是目录下的文件却没删完
        fs.unlink(`./avatar/${item}`,err=>{})
    })

    // 报错
    fs.rmdir("./avatar",err=>{})
})