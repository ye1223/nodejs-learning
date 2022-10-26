var http = require("http")
var url = require("url")


http.createServer((req,res)=>{
    

    var urlObj=url.parse(req.url,true)


    // 后端往前端输出
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin":"*"
    })

    switch(urlObj.pathname){
        case '/api/aaa':
            res.end(
                `
                    ${JSON.stringify({
                    name:'Levi',
                    age:20
            })}
            `)
            break
        default:
            res.end("404")
    }
}).listen(3000,()=>{
    console.log('调用成功')
})