var express = require('express');
var router = express.Router();
var checkSession = require('../jsbean/CheckSession');
var questionModel = require('../models/QuestionModel');

router.all('/ask', function(req, res){
  loginBean = checkSession.check(req, res);

  if(!loginBean){
    return;
  }

  subflag = req.body['subflag'];
  if (subflag == undefined) {
    res.render('ask', { title: '提问题', loginBean: loginBean });
  } else {
    //发提问
    questionModel.ask(req, res);
  }

/*   if (loginBean == undefined){
    console.log(loginBean);
    res.send("<script>alert('登录过期，请重新登录');location.href='/';</script>");
    return;
  } */
  res.render("ask");
})
module.exports = router;
