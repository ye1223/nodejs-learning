const fs = require("fs")
// 追加文件内容
fs.appendFile("./avatar/a.txt","\nhello world",err=>{
    console.log(err)
})