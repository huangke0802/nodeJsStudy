var express = require('express');
var router = express.Router();
var userModel = require("../models/UserModel");

/* GET users listing. */

router.all('/login', function (req, res) {
    let subflag = req.body["subflag"];

    if(subflag == undefined)
    {
        res.render("login");
    }
    else
    {
        userModel.login(req, res);
    }

});

/* router.post("/zhuce", function(req, res) {
    var nicheng = req.param("nicheng");
    console.log(nicheng);
    res.send("注册");
}); */

/* router.post('/zhuce/:id', function(req, res){
    console.log("bbbbbbbbb=" + req.params.id);
    res.send("注册");
}) */

router.get("/zhuce", function(req, res) {
    var nicheng = req.query["nicheng"]; //req.query()：获取参数只能是get提交的方式
    console.log(nicheng); ///users/zhuce?email=huangke0802%40163.com&pwd=12345&repwd=12344&nicheng=%E9%BB%84%E5%85%8B
    res.send("注册");
});

router.post("/zhuce", function(req, res) {
  var nicheng = req.body["nicheng"]; //req.query()：获取参数只能是get提交的方式
  userModel.zhuce(req, res);
  console.log(nicheng); //黄克
//   res.send("注册");
});

module.exports = router;
