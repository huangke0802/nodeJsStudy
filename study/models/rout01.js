var readFile = require("./optfile");

//闭包函数
function reCall (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    function backCall(data){
        res.write(data);
        res.end("");//http响应尾，不写则没有http响应尾
    };

    return backCall;
}

module.exports ={
    login : function(req, res){
        // res.write("我是login方法");
        // function recall(data){
        //     res.write(data);
        //     res.end("");//http响应尾，不写则没有http响应尾
        // }

        var recall = reCall (req, res);

        readFile.readfile("./views/login.html", recall);
    },
    zhuce : function(req, res){
        // res.write("我是注册方法");
        // function recall(data){
        //     res.write(data);
        //     res.end("");//http响应尾，不写则没有http响应尾
        // }

        var recall = reCall (req, res);

        readFile.readfile("./views/zhuce.html", recall);
    },

    writefile : function(req, res){
        // function recall(data){
        //     res.write(data);
        //     res.end("");//http响应尾，不写则没有http响应尾
        // };

        var recall = reCall (req, res);

        readFile.writefile("./views/one.text", '我的写入的文件',recall)
    },
    
    showImg : function (req, res) {
        res.writeHead(200, {'Content-Type': 'image/jpeg;'});
        readFile.readImg('./imgs/pingbao01.jpg', res);
    }

}