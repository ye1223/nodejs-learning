function render(res,data,type=""){
    res.writeHead(200,{"Content-Type":`${type?type:"application/json"};charset=utf-8`})
    res.write(data)
    res.end()
}

const apiRouter = {
    "/api/login":(req,res)=>{
        const myURL = new URL(req.url,"http://127.0.0.1")
        //URL这种方式只能获取get请求的数据
        // console.log(myURL.searchParams)
        if(myURL.searchParams.get("username")==="Levi" 
            && myURL.searchParams.get("password")==="123456"){
                render(res,`{"ok":1}`)
            }else{
                render(res,`{"ok":0}`)
            }

        // render(res,`{"ok":1}`)
    },
    "/api/login-post":(req,res)=>{
       //获取参数
       var post=""
       req.on("data",chunk=>{
        // console.log(chunk)
        post+=chunk
       })
       req.on("end",()=>{
        // 数据收集终止
        // console.log(post)
        post = JSON.parse(post)
        console.log(post)
        if(post.username==='Levi' && post.password==='123456'){
            render(res,`{"ok":1}`)
            
        }else{
            render(res,`{"ok":0}`)
        }
        
       })
    }
}
module.exports = apiRouter