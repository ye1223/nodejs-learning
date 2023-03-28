const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa() 
const router = new Router()

router.get('/list',(ctx,next)=>{
    console.log('get')
    ctx.body = {
        ActionType:'OK',
        method:'GET'
    }
})
.post('/list',(ctx,next)=>{
    ctx.body = {
        ActionType:'OK',
        method:'POST'
    }
})
.put('/list/:id',(ctx,next)=>{
    ctx.body = {
        ActionType:'OK',
        method:'PUT'
    }
})
.del('/list/:id',(ctx,next)=>{
    ctx.body = {
        ActionType:'OK',
        method:'DELETE'
    }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)