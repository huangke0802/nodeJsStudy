var readFile = require("./optfile");

var url = require("url");

var querystring = require("querystring");  //post需导入

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

        /*get方式接收参数*/
       /* var rdata = url.parse(req.url, true).query;
        console.log(rdata);

        if(rdata['email'] !== undefined){
            console.log(rdata['email']);
            console.log(rdata['pwd']);
        }*/

       /*post方式接收参数*/
       var post = '';  //定义一个变量来存储请求体的信息
        req.on('data', function(chunk){   //req事件监听
            post += chunk;
        })
        
        //注意异步
        req.on('end', function () {
            post = querystring.parse(post);
            console.log(post);
            console.log("收到参数 email：" + post['email'] + '\n');
            console.log("收到参数 pwd：" + post['pwd'] + '\n');
            var recall = reCall (req, res);

            readFile.readfile("./views/login.html", recall);
        })

        // var recall = reCall (req, res);
        //
        // readFile.readfile("./views/login.html", recall);
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