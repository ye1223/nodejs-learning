const express = require('express')
const router = express.Router()

router.get('/a-get',(req,res)=>{
    console.log(req.query)
    res.send('aaaa')
})

router.post('/a-post',(req,res)=>{
    console.log(req.body)
    res.send("11")
})

module.exports = router