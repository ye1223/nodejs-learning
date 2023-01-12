const fs = require("fs")
const path = require("path")
const mime = require("mime")

function render(res,path,type=""){
    res.writeHead(200,{"Content-Type":`${type?type:"text/html"};charset=utf-8`})
    res.write(fs.readFileSync(path),"utf-8")
    res.end()
}

const route = {
    "/login":(req,res)=>{
        render(res,"./static/login.html")
    },
    "/home":(req,res)=>{
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        res.write(fs.readFileSync("./static/home.html"),"utf-8")
    },
    "/":(req,res)=>{
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        res.write(fs.readFileSync("./static/home.html"),"utf-8")
    },
    "/404":(req,res)=>{
        //判断是否请求的静态资源文件
        if(readStaticFile(req,res)){

            return
        }
        
        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
        res.write(fs.readFileSync("./static/404.html"),"utf-8")
    },
    /* "/favicon.ico":(req,res)=>{
        res.writeHead(404,{"Content-Type":"image/x-icon;charset=utf-8"})
        res.write(fs.readFileSync("./static/favicon.ico"))
    } */
}

//!静态资源管理
function readStaticFile(req,res){
    //获取路径
    const myURL = new URL(req.url,"http://127.0.0.1:3000")
    // console.log(path.join(__dirname,"/static",myURL.pathname))
    //建议绝对路径访问
    const pathname = path.join(__dirname,"/static",myURL.pathname)
    
    // if(myURL.pathname==="/") return false

    //判断静态资源（路径）是否存在
    if(fs.existsSync(pathname)){
        //处理显示返回
        // render(res,pathname,mime.getType('css'))
        render(res,pathname,mime.getType(myURL.pathname.split('.')[1]))
        return true
    }else{
        return false
    }

}

module.exports = route