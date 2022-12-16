//引入crypto模块
const crypto = require("crypto")
//创建hash md5 hmac模式
const hash = crypto.createHmac("md5","levi")

hash.update("hello,hash")
hash.update("sssss") //update可以执行多次


// 显示为16进制
console.log(hash.digest("hex"))

