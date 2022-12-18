function render(res,data,type=""){
    res.writeHead(200,{"Content-Type":`${type?type:"application/json"};charset=utf-8`})
    res.write(data,"utf-8")
    res.end()
}

const apiRouter = {
    "/api/login":(req,res)=>{
        render(res,`{"ok":"1"}`)
    }
}
module.exports = apiRouter