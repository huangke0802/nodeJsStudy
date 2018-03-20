var express = require('express');
var router = express.Router();
var checkSession = require('../jsbean/CheckSession');

router.all('/ask', function(req, res){
  loginBean = checkSession.check(req, res);

  if(!loginBean){
    return;
  }

/*   if (loginBean == undefined){
    console.log(loginBean);
    res.send("<script>alert('登录过期，请重新登录');location.href='/';</script>");
    return;
  } */
  res.render("ask");
})
module.exports = router;
