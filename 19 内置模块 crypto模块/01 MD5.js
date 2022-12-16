//引入crypto模块
const crypto = require("crypto")
//创建hash md5模式 |sha1
const hash = crypto.createHash("md5")
//将内容转为MD5格式
hash.update("hello,hash")
hash.update("sssss") //update可以执行多次



// 显示为16进制
console.log(hash.digest("hex"))//3780399c464db8c9c4700a06f0352aae
// console.log(hash.digest("base64"))//N4A5nEZNuMnEcAoG8DUqrg==
