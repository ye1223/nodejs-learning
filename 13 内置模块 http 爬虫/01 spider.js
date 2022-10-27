var http = require("http")
var https = require("https")
var url = require("url")
var cheerio=require("cheerio")


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
            // httpGet(res)

            // 异步函数编程
            httpGet((data)=>{
                res.end(spider(data))
            })

            break
        default:
            res.end("404")
    }
}).listen(3000,()=>{
    console.log('调用成功')
})

// function httpGet(response){
function httpGet(callback){
    var data=""
    https.get(
        `https://i.maoyan.com`
        ,res=>{
            res.on("data",(chunk)=>{
                data+=chunk
            })

            // 所有数据
            res.on("end",()=>{
                // console.log(data)
                // response.end(data)
                callback(data)
            })
        }
        )
}

function spider(data){
    // npm i cheerio
    let $ = cheerio.load(data)

    let $movielist= $(".column.content")
    // console.log($movielist)

    let movies = []

    $movielist.each((index,value)=>{
        movies.push({
            title:$(value).find(".title").text(),
            grade:$(value).find(".grade").text(),
            actor:$(value).find(".actor").text()
        })
    })
    console.log(movies)
    return JSON.stringify(movies)
}