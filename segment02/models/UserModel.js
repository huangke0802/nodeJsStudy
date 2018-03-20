var connPool = require("./ConnPool");
var LoginBean = require("../jsBean/LoginBean");
module.exports = {
  zhuce: function(req, res) {
    pool = connPool();
    //从pool中获取连接（异步，取到后回调）
    pool.getConnection(function(err, conn) {
      if (err) {
        res.send("数据库错误，错误原因：" + err.message);
        return;
      }

      var userAddSql =
        "insert into user(email, pwd, nicheng, createtime) values(?, ?, ?, current_timestamp)";
      var param = [req.body["email"], req.body["pwd"], req.body["nicheng"]];

      conn.query(userAddSql, param, function(err, rs) {
        if (err) {
          let message = err.message;
          let mesStr = "<script>";

          if (message.indexOf("emailuniq") > -1) {
            mesStr += "alert('email重复！');";
          } else if (message.indexOf("nichenguiq") > -1) {
            mesStr += "alert('昵称重复！');";
          } else {
            mesStr += "alert('数据库异常，稍后再试！');";
          }
          mesStr += "history.back();</script>";
          res.send(mesStr);
          return;
        }
        // res.send("<script>alert('注册成功');location.href='/';</script>");
        res.redirect(307, "./login");
      });

      conn.release();
    });
  },

  login: function(req, res) {
    pool = connPool();
    //从pool中获取连接（异步，取到后回调）
    pool.getConnection(function(err, conn) {
      if (err) {
        res.send("数据库错误，错误原因：" + err.message);
        return;
      }
      var userSelectSql =
        "select uid, nicheng from user where email = ? and pwd =?";
      var param = [req.body["email"], req.body["pwd"]];

      conn.query(userSelectSql, param, function(err, rs) {
        if (err) {
          res.send("数据连接错误；" + err.message);
          return;
        }
        if (rs.length > 0) {
            loginBean = new LoginBean();
            loginBean.id = rs[0].uid;
            loginBean.nicheng = rs[0].nicheng;
            req.session.loginBean = loginBean;
            res.redirect("/"); //跳转会index页面
            // res.send("登录成功");
        } else {
          res.send("email/密码错误");
        }
      });
      conn.release();
    });
  }
};
