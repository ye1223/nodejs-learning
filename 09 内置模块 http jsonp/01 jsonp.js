var http = require("http")
var url = require("url")


http.createServer((req,res)=>{
    

    var urlObj=url.parse(req.url,true)

    console.log(urlObj.query.callback)//query参数携带函数名字

    switch(urlObj.pathname){
        case '/api/aaa':
            res.end(
                `${urlObj.query.callback}(
                    ${JSON.stringify({
                    name:'Levi',
                    age:20
            })}
            )`)
            break
        default:
            res.end("404")
    }
}).listen(3000,()=>{
    console.log('调用成功')
})