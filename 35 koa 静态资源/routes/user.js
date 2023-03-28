const Router = require('koa-router')
const router = new Router()

router.get('/',(ctx,next)=>{
    console.log('get参数',ctx.query,ctx.querystring)
    ctx.body = {
        ActionType:'OK',
        method:'GET',
    }
})
.post('/',(ctx,next)=>{
    console.log('post参数',ctx.request.body)
    ctx.body = {
        ActionType:'OK',
        method:'POST'
    }
})
.put('/:id',(ctx,next)=>{
    ctx.body = {
        ActionType:'OK',
        method:'PUT'
    }
})
.del('/:id',(ctx,next)=>{
    ctx.body = {
        ActionType:'OK',
        method:'DELETE'
    }
})

module.exports = router