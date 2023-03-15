const UserService = require('../services/UserService')
const JWT = require('../util/JWT')
const UserController = {
  addUser: async (req, res) => {
/*     console.log('adduser req.file',req.file) */
    // console.log(req.body)
    //!public文件夹不用写，因为它是默认被托管在服务器上的
    //!如果没存头像的话，就读取默认头像
    const avatar = req.file?`/uploads/${req.file.filename}`:'/images/default.png'   
    const { username, password, age } = req.body
    //console.log(username, password, age)

    //调用service层的增加用户方法，并且传入实参
    await UserService.addUser(username, password, age,avatar)

    res.send(JSON.stringify('收到'))
  },

  updateUser: async (req, res) => {
    // console.log(req.body)
    const { username, password, age } = req.body
    // console.log(username, password)


    await UserService.updateUser(req.params.myid, username, password, age)

    res.send(JSON.stringify('收到更新'))

  },
  deleteUser: async (req, res) => {


    await UserService.deleteUser(req.params.myid)

    res.send(JSON.stringify('收到,已经删除'))
  },
  getUser: async (req, res) => {
    let data = await UserService.getUser()
    // console.log("这时data？",data)
    res.send(JSON.stringify(data))
  },
  login:async(req,res)=>{
    const {username,password} = req.body
    const data = await UserService.login(username,password)
    if(data.length===0){
        res.send({
            ok:0
        })
    }else{
      console.log(data[0])
        //设置token 
        const token = JWT.generate({
          _id:data[0]._id,
          username:data[0].username
        },"1h")  
        //token返回在header
        res.header("Authorization",token)
        //默认存在内存中。
        res.send({
            ok:1
        })
    }
},
  logout:(req,res)=>{
    req.session.destroy(()=>{
      res.send({ok:1}) 
    })
    
  }

}

module.exports = UserController