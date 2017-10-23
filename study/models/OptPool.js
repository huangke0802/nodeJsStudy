// 创建链接池
var mysql = require('mysql'); //调用MySql模块
function OptPool(){
    this.flag = true; //是否链接过
    this.pool = mysql.createPool({
        host: 'localhost', //主机
        user: 'root',
        password: 'HUI18821871351.',
        database: 'sys',
        port: '3306'
    });

    this.getPool = function(){
        if(this.flag){
            //监听connection事件
            this.pool.on('connection', function(connection){
                connection.query("SET SESSION auto_increament_increment=1");
                this.flag = false;
            });
        }
        return this.pool;
    }
};
module.exports = OptPool;