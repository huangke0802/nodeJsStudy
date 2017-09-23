var http = require('http');
var url = require('url');
var routesMy = require("./models/rout01");
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if(req.url !== "/favicon.ico"){
        //拿到地址栏中的url
        var pathname = url.parse(req.url).pathname;
        pathname = pathname.replace(/\//, '');

        console.log(pathname);

       routesMy[pathname](req, res);


        res.end("");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");