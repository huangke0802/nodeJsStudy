var http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if(req.url !== "/favicon.ico"){
        console.log("访问");
        res.write("hello world");
        res.end("你好世界");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");