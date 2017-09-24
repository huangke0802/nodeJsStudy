//操作文件
var fs = require('fs'); //fs是node操作文件的模块

module.exports = {
    readfileSync: function (path) {     //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log('同步方法执行完毕');
        return data;
    },
    readfile: function (path, recall) {    //异步执行
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                // console.log(data.toString());
                //res.write(data.toString());  //打印到前端这种方式会报错
                recall(data); //这种方式使用函数的方式解决上面的报错问题
            }
        });
        console.log("异步方法执行完毕");
    },
    readImg : function(path, res){
        fs.readFile(path, 'binary', function(err, filedata){  //binary  二进制流的文件
            if(err){
                console.log(err);
                return;
            }else{
                // console.log("输出文件");
                res.write(filedata, 'binary');
                res.end();
            }
        })
    },
    writefile : function(path, data, recall){   //异步方式写文件
        fs.writeFile(path, data, function(err){
            if(err){
                throw err;
            }
            console.log("It\'s saved!");   //文件被保存
            recall("写文件成功");
        });

    },
    writeFileSync : function(path, data){//同步写文件
        fs.writeFileSync(path, data);
        console.log("同步写文件完成");
    }

}