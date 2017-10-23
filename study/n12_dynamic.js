var http = require('http');
var readFile = require("./models/optfile");
var url = require("url");
var router = require("./models/rout01");
var exception = require("./models/Exception");
http.createServer(function (req, res) {
    if (req.url !== "/favicon.ico") {//清楚第2次访问
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');
        try{//同步异常
            router[pathname](req, res);
        }catch (err){
            console.log('aaaa=' + err);
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(err.toString());
            res.end('');
        }
        console.log("server执行完毕");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");