const express = require("express")
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.render('login',{}) //渲染login页面
})


module.exports = router