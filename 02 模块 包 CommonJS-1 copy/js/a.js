function test(){
    console.log('test-aaa')
}
function upper(str){
    // return str.substring(0,1).toUpperCase()+str.substring(1)
    return 'upper'
}

//!导出一个方法
/* module.exports = test
// module.exports = upper 不能写多个，只能写一个 */

//!导出多个方法
/* module.exports={
    test,
    upper
} */

//!分别导出多个方法
exports.test=test
exports.upper=upper