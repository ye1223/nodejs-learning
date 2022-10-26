var http =require('http')

var moduleRenderHTML=require('./module/renderHTML.js')
var moduleRenderStatus=require('./module/renderStatus.js')

/* //创建服务器
http.createServer((req,res)=>{
    //接受浏览器传递的参数 返回渲染的内容
    //req   接受浏览器返回的参数
    //res   返回渲染的内容，给浏览器的响应

    
    if(req.url==='/favicon.ico'){
        //读取网站图标
        return
    }
    console.log(req.url)
    //如果要解析html，最好写上以下响应头
    res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHTML.renderHTML(req.url))

    res.end()

}).listen(3000,()=>{            //监听端口号
    console.log('server start')
})

 */

var server = http.createServer()

server.on('request',(req,res)=>{
    //接受浏览器传递的参数 返回渲染的内容
    //req   接受浏览器返回的参数
    //res   返回渲染的内容，给浏览器的响应

    
    if(req.url==='/favicon.ico'){
        //读取网站图标
        return
    }
    console.log(req.url)
    //如果要解析html，最好写上以下响应头
    res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
    res.write(moduleRenderHTML.renderHTML(req.url))

    res.end()

})

server.listen(3000,()=>{            //监听端口号
    console.log('server start')
})