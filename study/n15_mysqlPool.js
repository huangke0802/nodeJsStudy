var OptPool = require('./models/OptPool');

var optPool = new OptPool();
var pool = optPool.getPool();

//从连接池中获取一个连接
//异步操作使用回调
pool.getConnection(function(err, conn){
    //插入
    var userAddSql = "insert into user (uname, pwd) values(?,?)";
    var param = ['hhh', 'hhh'];
    conn.query(userAddSql, param, function(err, rs){
        if(err){
            console.log('insert err:', err.message);
            return;
        }
        console.log('insert succuss');
        // conn.release();//放回连接池
    });
    //查询
    conn.query("SELECT * from user", function(err, rs){
        if(err){
            console.log('[query] -  :' + err);
            return;
        }
        for(var i = 0;i<rs.length;i++){
            console.log(rs[i].uname +"---" +rs[i].pwd);
        }
        conn.release();//放回连接池
    });
});