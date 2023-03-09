const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.set('strictQuery', false);

const UserType = {
    username:String,
    password:String,
    age:Number
}
// 创建user模型，将会创建对应users集合Collection
const UserModel = mongoose.model("user",new Schema(UserType))//限制filed类型


module.exports = UserModel