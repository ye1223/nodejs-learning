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



module.exports = router