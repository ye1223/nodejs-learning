const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa() 
// const router = new Router()

const router = require('./routes/index')

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)