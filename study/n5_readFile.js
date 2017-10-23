//node读取文件
var http = require('http');
var url = require('url');
var routesMy = require("./models/rout01");
// var readFile = require("./models/optfile");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    if (req.url !== "/favicon.ico") {//清楚第2次访问
        // readFile.readfileSync("./views/login.html");
        // function recall(data){
        //     res.write(data);
        //     res.end("");//http响应尾，不写则没有http响应尾
        // }
        // readFile.readfile("./views/login.html", recall);

        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');

        console.log(pathname);

        if (pathname != "") {
            routesMy[pathname](req, res);
        } else {

            res.write("首页");
            res.end("");//http响应尾，不写则没有http响应尾
        }



        console.log("主程序执行完毕");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");