const fs = require("fs").promises

/* 
    Promise 要不兑现承诺，要不拒绝承诺
*/

/* fs.readdir("./avatar").then(async data => {
    data.forEach(item => {
        let arr = []
        // 删除文件
        arr.push(fs.unlink(`./avatar/${item}`))

    })

        //!如何等待for循环中异步执行完，再执行下面代码

    await Promise.all(arr)
    await fs.rmdir("./avatar")
}).catch(err => {
    console.log(err)
}) */

fs.readdir("./avatar").then(async data => {

    // 把普通数组data的内容映射成fs.unlink()Promise对象
    await Promise.all(data.map(item=>fs.unlink(`./avatar/${item}`)))
    await fs.rmdir("./avatar")
}).catch(err => {
    console.log(err)
})

