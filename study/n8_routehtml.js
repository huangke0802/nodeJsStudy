//node读取文件
var http = require('http');
var readFile = require("./models/optfile");
var url = require("url");
var router = require("./models/rout01");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if (req.url !== "/favicon.ico") {//清楚第2次访问
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        if(pathname != ""){
            router[pathname](req, res);
        }else{
            res.write("首页");
            res.end("");//http响应尾，不写则没有http响应尾
        }
    }
    console.log("主程序执行完毕");
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");