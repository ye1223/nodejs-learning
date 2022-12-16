// 删除文件
const fs = require("fs")
fs.unlink("./avatar/a.txt",err=>{
    console.log(err)
})