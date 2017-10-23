var aysc = require('async');
function oneFun()
{
    ii = 0;
    setInterval(function(){
        console.log("aaa = " + new Date());
        ii++;
        if(ii == 3){
            clearInterval(this);
        }
    }, 1000);
    console.log("oneFun");
}

function twoFun()
{
    jj = 0;
    setInterval(function(){
        console.log("bbb = " + new Date());
        jj++;
        if(jj == 3){
            clearInterval(this);
        }
    }, 1000);
    console.log("oneFun执行完了");
}


/*oneFun();
twoFun();*/

//串行有关联
function exec(){
    aysc.waterfall(
        [
        function(done){
            ii = 0;
            setInterval(function(){
                console.log("aaa = " + new Date());
                ii++;
                if(ii == 3){
                    clearInterval(this);
                    done(null, 'one完毕');
                }
            }, 1000);
            console.log("oneFun");

        },
       function(preVal,done){
            jj = 0;
            setInterval(function(){
                console.log(preVal  + "= " + new Date());
                jj++;
                if(jj == 3){
                    clearInterval(this);
                    done(null, preVal + ' +++++++ two完毕');
                }
            }, 1000);
            console.log("oneFun执行完了");

        }
    ], function(err, rs){
        console.log(err);
        console.log(rs);
    })
}

exec();

console.log("主进程执行完毕");