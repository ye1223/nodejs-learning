const crypto = require("crypto")

//加密
/* 
    key 加密密钥
    iv（可选），指定加密所需要的向量
    data 
*/
function encrypto(key,iv,data){
    let dep = crypto.createCipheriv("aes-128-cbc",key,iv)
    
    //                  
    return dep.update(data,'binary','hex') + dep.final("hex")//结束
}

//解密
function decrypto(key,iv,crypted){
    // 转换成16进制buffer对象，再转换成二进制字符串
    crypted = Buffer.from(crypted,"hex").toString("binary")
    let dep = crypto.createDecipheriv("aes-128-cbc",key,iv)
    return dep.update(crypted,'binary','utf-8') + dep.final('utf-8')

}

//16*8 = 128
let key = "abcdef1234567890"
let iv = "abcttt1234567890"

let data = "Levi"

let cryted = encrypto(key,iv,data)
console.log(cryted)

let decrypted = decrypto(key,iv,cryted)
console.log("解密结果",decrypted)