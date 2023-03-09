const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'application/json;charset=utf-8',
        'access-control-allow-origin':'*'
    })
    res.write(JSON.stringify('hhh'))
    res.end()
}).listen(3000,()=>{
    console.log('http-server-on')
})