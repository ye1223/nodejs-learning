const fs = require("fs")

const rs = fs.createReadStream('./1.txt','utf-8')

// 适合大文件
rs.on("data",(chunk)=>{
    console.log("chunk--",chunk)
})

rs.on("end",()=>{
    console.log("end")
})

rs.on("error",(err)=>{
    console.log("error",err)
})