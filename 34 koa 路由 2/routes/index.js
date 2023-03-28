const Router = require('koa-router')
const router = new Router()

const userRouter = require('../routes/user')
const listRouter = require('../routes/list')


// 统一价前缀
// router.prefix('/api')

// 注册路由级别中间件
router.use('/user',userRouter.routes(),userRouter.allowedMethods())
router.use('/list',listRouter.routes(),listRouter.allowedMethods())

router.redirect('/','/list') 

module.exports = router
