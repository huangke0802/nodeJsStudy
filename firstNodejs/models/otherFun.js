/*
function fun2(res){
    console.log("我是fun2");
    res.write("你好，我是fun2");
}

module.exports = fun2;  //对外接口,这样支持一个函数

*/

//支持多个函数
module.exports = {
    fun2 : function(res){
        console.log("我是fun2");
        res.write("你好，我是fun2");
    },

    fun3 : function(res){
        console.log("我是fun3");
        res.write("你好，我是fun3");
    }

}