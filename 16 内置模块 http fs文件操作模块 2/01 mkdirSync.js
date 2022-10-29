const fs = require("fs")


// 自己捕获错误
try{
    fs.mkdirSync("./avatar")
}catch(error){
    console.log("111",error)
}

// 阻塞后面代码执行
