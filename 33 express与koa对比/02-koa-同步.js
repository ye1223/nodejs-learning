const Koa = require('koa')
const app = new Koa()

// 同步打印 1111 2222 3333

app.use((ctx,next)=>{
    if(ctx.url === '/favicon.ico') return

    console.log('1111')
    next()

    console.log('3333')
    ctx.body = {ok:1}
})
app.use((ctx,next)=>{ 
    console.log('2222')
})

app.listen(3000)