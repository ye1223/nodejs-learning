const UserService = require('../services/UserService')
const UserController = {
  addUser: async (req, res) => {
    // console.log(req.body)
    const { username, password, age } = req.body
    //console.log(username, password, age)

    //调用service层的增加用户方法，并且传入实参
    await UserService.addUser(username, password, age)

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
  login: async (req, res) => {
    const { username, password } = req.body
    let data = await UserService.login(username, password) //返回一个查询数组结果
    
    if(data.length ===0){
      res.send(JSON.stringify("数据库没有此人!"))
    }else{
      //成功登录设置session
      req.session.user = data[0]//设置session对象，唯一标识，（随便在req.session挂载一个数据） 
      //!默认存于内存中
      res.send(JSON.stringify("数据库有此人--登录!"))
    }

  }

}

module.exports = UserController