const fs = require("fs")

const rs = fs.createReadStream("./1.txt")
const ws = fs.createWriteStream("./2.txt")

// 复制文件
// 可读流通过管道传给可写流
rs.pipe(ws)