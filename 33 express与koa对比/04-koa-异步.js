const Koa = require('koa')
const app = new Koa()

// 同步打印 1111 2222 3333 4444 token

app.use(async (ctx,next)=>{
    if(ctx.url === '/favicon.ico') return

    console.log('1111')
    await next()

    console.log('4444',ctx.token)

    ctx.body = {ok:1111111}
})
app.use(async (ctx,next)=>{ 
    console.log('2222')

    await delay(1000)
    ctx.token = 'axcsjkcbjqdac'

    console.log('3333')


})

function delay(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, time);
    })
}

app.listen(3000)