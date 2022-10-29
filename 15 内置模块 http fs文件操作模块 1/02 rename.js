const fs = require("fs")
// 原名字  要改成的名字 
fs.rename("./avatar","./avatar2",(err)=>{
    console.log(err)
    if(err && err.code==="ENOENT"){
        console.log("当前并不存在")
    }
})