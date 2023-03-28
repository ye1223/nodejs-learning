const Koa = require('koa')
const app = new Koa() 
const router = require('./routes/index')
const static = require('koa-static')
const path = require('path')
const bodyparser = require('koa-bodyparser')

app.use(static(path.join(__dirname,'public'))) //path.join解决反斜杠问题

app.use(bodyparser())

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)