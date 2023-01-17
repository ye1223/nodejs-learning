const express = require("express")
const router = express.Router()

//与home有关的路由封装在此
router.get("/",(req,res)=>{
    // res.send("home")
    var list = ["111","222","333"]
    const myhtml = `<b>加粗</b>`
    res.render("home",{list,myhtml})
})




module.exports = router