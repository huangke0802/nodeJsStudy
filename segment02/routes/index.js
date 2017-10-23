var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '<div>欢迎来到Express</div>' });
    // res.send("Hello, index!");
});

router.get('/ab*cd', function(req, res){
  console.log('/ab*cd GET 请求');
    res.send('正则匹配');
})

module.exports = router;
