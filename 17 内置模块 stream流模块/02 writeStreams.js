const fs = require("fs")

const ws = fs.createWriteStream("./2.txt","utf-8")

ws.write("111111111111")
ws.write("333333333333")
ws.write("555555555555")

ws.end()