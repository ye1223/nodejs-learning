const express = require("express")
const router = express.Router()

//与home有关的路由封装在此
router.get("/",(req,res)=>{
    res.send("home")
})
router.get("/swiper",(req,res)=>{
    res.send("home-swiper")
})
router.get("/slide",(req,res)=>{
    res.send("home-slide")
})

router.get("/list",(req,res)=>{
    res.send(["111","222","333"])
})



module.exports = router