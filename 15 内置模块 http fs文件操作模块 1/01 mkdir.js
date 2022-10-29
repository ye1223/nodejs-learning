const fs = require("fs")
// 在当前目录下，创建一个avatar目录
// 第一个参数err 返回当前错误信息
fs.mkdir("./avatar",(err)=>{
    console.log(err)
    if(err&&err.code==="EXIST"){
        console.log("目录已经存在")
    }
})