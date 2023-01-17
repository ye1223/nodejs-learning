const UserService = require("../services/UserService")

const UserController = {
    addUser:async(req,res)=>{
        console.log("后端接收到数据 ",req.body)
        //!插入数据库
        // 1.创建一个模型（user,限制filed类型）,——对应生成数据库的集合（users）
        const {username,password,age} = req.body
        
        await UserService.addUser(username,password,age)
        
        res.send({ok:1})
      },
      updateUser:async(req,res)=>{
      
        const {username,password,age} = req.body
        await UserService.updateUser(req.params._id,username,password,age)
      
        res.send({
          ok:1
        })
      },
      deleteUser:async(req,res)=>{
        await UserService.deleteUser(req.params.id)
        res.send({
            ok:1
          })
      },
      getUser:async(req,res)=>{
        const {page,limit} = req.query
        console.log(req.query)
        const data = await UserService.getUser(page,limit)
        res.send(data)
      },
      loginVerification:async(req,res)=>{
        const {username,password} = req.body
        const data = await UserService.loginVerification(username,password)
        // 查询数据库，返回一个数组
        if(data.length===0){
          res.send({ok:0})
        }else{
          // 设置session
          req.session.user = data[0] //!给session挂载一个数据
          console.log(req.session.user)
          res.send({ok:1})
        }

      }
}


module.exports = UserController