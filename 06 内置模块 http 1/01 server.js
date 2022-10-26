var http =require('http')


//创建服务器
http.createServer((req,res)=>{
    //接受浏览器传递的参数 返回渲染的内容
    //req   接受浏览器返回的参数
    //res   返回渲染的内容，给浏览器的响应

    /* res.write('Hello World\n')
    res.write('Hello World2')
    res.write('Hello World3')
    res.end("[1,2,3]")//表示write完事  JSON格式 */

    //如果要解析html，最好写上以下响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write(`
        <html> 
            <b>bold</b>
            <p>中文未乱码</p>
        </html>
    `)

    res.end()

}).listen(3000,()=>{            //监听端口号
    console.log('server start')
})