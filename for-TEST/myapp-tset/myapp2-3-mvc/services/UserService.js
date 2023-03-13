const UserModel = require("../model/UserModel")

const UserService = {
    addUser: (username,password,age) => {
        return UserModel.create({
            username, password, age
        })
    },
    updateUser:(id,username,password,age)=>{
       UserModel.updateOne({
            _id: id
          }, {
            username, password, age
          }).then(data => {
            console.log("成功更新", data)
          })
    },
    deleteUser:(id)=>{
      UserModel.deleteOne({
        _id:id
      }).then(data=>{
        console.log("成功删除",data)
      })
    },
    getUser:()=>{
      /* return UserModel.find().then(data=>{
        console.log("获取data",data)
      }) */
      //这里return数据不能.then
      return UserModel.find()
    }
}

module.exports = UserService