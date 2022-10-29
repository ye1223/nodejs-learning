const EventEmitter =require("events")

const event = new EventEmitter()

event.on("play",(data)=>{
    console.log("事件触发了",data) //可以传参
})



setTimeout(()=>{
    event.emit("play",1111)//触发play事件
},2000)