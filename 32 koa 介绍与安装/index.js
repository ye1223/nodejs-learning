const Koa = require('koa')

const app = new Koa()

// context--->ctx 上下文
app.use((ctx,next)=>{
    // ctx.response.body = '<b>hello world</b>' //返回html片段
    ctx.response.body = {name:'liuy'} //返回json

})

app.listen(3000)