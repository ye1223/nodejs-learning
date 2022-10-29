var http = require("http")
var https = require("https")
const { EventEmitter } = require("events")
var url = require("url")

var event=null

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
            // 客户端   去猫眼要数据

            event = new EventEmitter()
            event.on("play",(data)=>{
                console.log(data)
                res.end(data)
            })
            // 异步函数编程
            httpGet()

            break
        default:
            res.end("404")
    }
}).listen(3000,()=>{
    console.log('调用成功')
})

function httpGet(/* callback */){
    var data=""
    https.get(
        `https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%87%8D%E5%BA%86&ci=45&channelId=4`
        ,res=>{
            res.on("data",(chunk)=>{
                data+=chunk
            })

            // 所有数据
            res.on("end",()=>{
                // callback()
                event.emit("play",data)
                
            })
        }
        )
}