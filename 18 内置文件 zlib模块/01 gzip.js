
const http = require("http")
const fs = require("fs")

const zlib = require("zlib")
const gzip = zlib.createGzip()

http.createServer((req,res)=>{
    //res 本身就是可写流
    const readStream = fs.createReadStream("./test.js")
    res.writeHead(200,{
        "Content-Type":"application/x-javascript;charset=uft-8",
        "Content-Encoding":"gzip"
    })
    //添加响应头
    // readStream.pipe(res) //1.5kb
    // gzip压缩
    readStream.pipe(gzip).pipe(res) //872b

}).listen(3000,()=>{
    console.log("server-start")
})