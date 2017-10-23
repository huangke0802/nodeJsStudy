var mysql = require('mysql'); //调用mysql模块
//创建一个connection
var connection = mysql.createConnection({
    host: 'localhost', //主机
    user: 'root',
    password: 'HUI18821871351.',
    database: 'sys',
    port: '3306'
});

//创建一个connection
connection.connect(function (err) {
    if (err) {
        console.log("[query]-:" + err);
        return;
    }
    console.log('[connection connect] succeed!');
});

//---插入
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['fff', 'fff'];
connection.query(userAddSql, param, function (err, rs) {
    if (err) {
        console.log('insert err:', err.message);
        return;
    }
    console.log('insert success');
});

//执行查询
connection.query('select * from user', function(err, rs, fields){
    if(err){
        console.log('[query] - :' + err);
        return;
    }
     for(var i = 0;i<rs.length;i++){
         console.log('The solution is:', rs[i].uname);
     }
    
})

//关闭connection
connection.end(function (err) {
    if (err) {
        console.log(err.toString());
        return;
    }

    console.log('[connection end] succeed!');
});
