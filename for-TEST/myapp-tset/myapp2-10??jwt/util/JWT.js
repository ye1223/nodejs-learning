let jwt = require('jsonwebtoken')

const secret = 'levi-secret'
 
const JWT = {
    generate(value,expires){
        return jwt.sign(value,secret,{expiresIn:expires})
    },
    verify(token){
        try{
            return jwt.verify(token,secret)
        }catch(e){
            // console.log(e)
            return false
        }
    }
}
module.exports = JWT