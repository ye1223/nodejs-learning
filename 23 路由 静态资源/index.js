const server = require("./server")

const route = require("./route")
const api = require("./api")

// 注册路由
server.use(route) //use方法合并而已
server.use(api)

server.start()