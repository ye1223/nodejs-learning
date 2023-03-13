let jwt = require('jsonwebtoken')
let token = jwt.sign({
    data: 'foobar'
}, 'anydata', { expiresIn: '10s' })

console.log(token)

setTimeout(() => {
    let decoded = jwt.verify(token, 'anydata')
    console.log(decoded)
}, 11000)