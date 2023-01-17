//导入UserModel
const UserModel = require("../model/UserModel")

const UserService = {
    addUser:(username,password,age)=>{
        return UserModel.create(
            {username,password,age} //对象简写
          ).then(data=>{//成功回调
            console.log(data)
          })
    },
    updateUser:(_id,username,password,age)=>{
        return UserModel.updateOne({_id:req.params.id},{ //匹配内容
            username,password,age //更新内容
          }).then(data=>{
            
          })
    },
    deleteUser:(_id)=>{
        return UserModel.deleteOne({
            _id:_id
          }).then(data=>{
            
          })
    },
    getUser:(page,limit)=>{
        /* return UserModel.find({},["_id","username","age"])
        .sort({age:-1})
        .skip((page-1)*limit).limit(limit)
        .then(data=>{
        }) */
        return UserModel.find()
    },
    loginVerification:(username,password)=>{
      return UserModel.find({username,password})
    }
}
module.exports = UserService