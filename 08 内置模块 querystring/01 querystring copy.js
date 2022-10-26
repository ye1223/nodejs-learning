var str = "name=Levi&age=20&location=chongqing"

var querystring =require('querystring')

var obj =querystring.parse(str)

console.log(obj)
/* 
    [Object: null prototype] {
  name: 'Levi',
  age: '20',
  location: 'chongqing'
}
*/

var myObj={
    a:1,
    b:2,
    c:3
}

var myStr=querystring.stringify(myObj)
console.log(myStr)
/* 
    a=1&b=2&c=3
*/