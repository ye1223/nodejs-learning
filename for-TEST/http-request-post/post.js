const http = require('http')
http.createServer((req,res)=>{
    
    let data

    let options = {
        hostname:'http://127.0.0.1:5000',

    }

    let req_post = http.request(options,(res_post)=>{
        res_post.on('data',chunk=>{
            data+=chunk
        })
        res_post.on('end',()=>{
            console.log(data)
        })
    })

    req_post.end()
})