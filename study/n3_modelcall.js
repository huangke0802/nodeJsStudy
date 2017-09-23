var http = require('http');
var User = require('./models/User');

var Teacher = require('./models/Teacher');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    if(req.url !== "/favicon.ico"){
        var user = new User(1, "张三", 20);
        var teacher = new Teacher(2, "陈星", 30);
        user.enter();
        teacher.teach(res);
        teacher.enter();
        res.end("你好世界");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");