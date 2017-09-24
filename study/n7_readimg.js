//node读取文件
var http = require('http');
var readFile = require("./models/optfile");
http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.writeHead(200, {'Content-Type': 'image/jpeg;'});
    if (req.url !== "/favicon.ico") {//清楚第2次访问

            readFile.readImg('./imgs/pingbao01.jpg', res);

        }



        console.log("主程序执行完毕");
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");