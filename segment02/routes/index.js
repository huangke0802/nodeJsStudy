var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: '欢迎来到Express' });
    // res.send("Hello, index!");
    var loginbean = req.session.loginBean;
    console.log(loginbean);
    if (loginbean) {
      console.log(loginbean.id, loginbean.nicheng);
    }
    res.render('index', {loginbean : loginbean});
});

//注销
router.get('/logout', function(req, res){
  req.session.destroy(function(err){ //清除session
    res.redirect('/');
  })
})

module.exports = router;
