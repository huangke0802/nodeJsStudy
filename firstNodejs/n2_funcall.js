var http = require('http');
var otherfun = require("./models/otherFun.js")
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type' : 'text/html; charset = utf-8'});
    if(req.url !== "/favicon.ico"){
        fun1(res);
        //用点调用函数
      /*  otherfun.fun2(res);
        otherfun.fun3(res);*/
        //用字符串调用对应的函数
        // otherfun['fun2'](res);
        // otherfun['fun3'](res);

        var funname = 'fun2';
        otherfun[funname](res);

        res.end('');
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");

function fun1(res){
    res.write("hello,我是本地fun1");
}
