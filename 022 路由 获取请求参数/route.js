const fs = require("fs")

function render(res,path,type=""){
    res.writeHead(200,{"Content-Type":`${type?type:"text/html"};charset=utf-8`})
    res.write(fs.readFileSync(path),"utf-8")
}

const route = {
    "/login":(req,res)=>{
        render(res,"./static/login.html")
    },
    "/home":(req,res)=>{
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
        res.write(fs.readFileSync("./static/home.html"),"utf-8")
    },
    "/404":(req,res)=>{
        res.writeHead(404,{"Content-Type":"text/html;charset=utf-8"})
        res.write(fs.readFileSync("./static/404.html"),"utf-8")
    },
    "/favicon.ico":(req,res)=>{
        res.writeHead(404,{"Content-Type":"image/x-icon;charset=utf-8"})
        res.write(fs.readFileSync("./static/favicon.ico"))
    }
}

module.exports = route