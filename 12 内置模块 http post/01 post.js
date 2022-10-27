var http = require("http")
var https = require("https")
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
            // 客户端   去小米有品要数据
            // httpGet(res)

            // 异步函数编程
            httpPost((data)=>{
                res.end(data)
            })

            break
        default:
            res.end("404")
    }
}).listen(3000,()=>{
    console.log('调用成功')
})

// function httpGet(response){
function httpPost(callback){
    var data=""

    var options = {
        hostname:"xiaomiyoupin.com",
        port:"443",//知道这是http||https   Remote Adress
        path:"/mtop/market/search/placeHolder",
        method:"POST",
        headers:{
            "Content-Type":"application/json"

            /* //"content-type:"x-www-form-urlencoded"
                res.write("name=levi&age=10)
            */
        }
    }
    var req = https.request(options,(res)=>{
        res.on("data",chunk=>{
            data+=chunk
        })

        res.on("end",()=>{
            callback(data)
        })
    })

    req.write(JSON.stringify([{}, {ypClient: 3}]))//发送的是json数据
    req.end()

}