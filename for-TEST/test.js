/* const EventEmitter = require('events')
const event = new EventEmitter

event.on('play',(data)=>{
    console.log('play music',data)
})

setTimeout(() => {
    event.emit('play',6666)
}, 1000);

function main(agrv){
    console.log(arg)
} */

const http = require('http')

http.createServer()