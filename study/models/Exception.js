//抛异常的方法
module.exports = {
    throwExceFun : function(flag){
        if(flag == 0){
            throw "我是例外"
        }
        return "success";
    }
}