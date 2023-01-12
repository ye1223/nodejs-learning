
const http = require("http")

    // const route = require("./route")
    // const api = require("./api")

const Router = {}
// Object.assign(Router,route,api)

function use(obj){
    Object.assign(Router,obj)
}

function start(){
    http.createServer((req,res)=>{  

        const myURL = new URL(req.url,"http://127.0.0.1")
        // 当前路由下的路径
        // console.log(myURL.pathname)
    
        // route(res,myURL.pathname)
        try{
            Router[myURL.pathname](req,res)
        }catch(e){
            Router["/404"](req,res)
        }
    
        res.end()
    }).listen(3000,()=>{
        console.log("server-start")
    })
}

exports.start = start
exports.use = use