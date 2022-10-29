const fs = require("fs")


/* 
    如果文件没有，就新添内容，
    如果有文件有内容就覆盖内容
*/
fs.writeFile("./avatar/a.txt","你好 world",err=>{
    console.log(err)
})