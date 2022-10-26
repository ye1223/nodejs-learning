var querystring = require("querystring")

var str1 = "'id=3&city=北京&url=https://www.baidu.com'"

var escaped = querystring.escape(str1)
console.log(escaped)
/*      转义后的字符串，没有特殊符号，不影响sql注入
    'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
*/

var escape1='id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
var str2 = querystring.unescape(escape1)
console.log(str2)//id=3&city=北京&url=https://www.baidu.com