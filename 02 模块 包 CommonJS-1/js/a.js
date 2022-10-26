function test(){
    console.log('test-aaa')
}

function upper(str){
    //调用的内部方法，不成文的规定
    _init()
    return str.substring(0,1).toUpperCase()+str.substring(1)
}

function _init(){
    console.log('init')
}