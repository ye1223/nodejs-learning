const fs = require ("fs")

fs.rmdir("./avatar",err=>{
    console.log(err)
    if(err && err.code==="ENOENT"){
        console.log("当前目录并不存在")
    }
})

/* 
    如果当前要删除的目录有文件，rmdir不能删除目录
    需要unlink删除文件在rmdir删除目录
*/