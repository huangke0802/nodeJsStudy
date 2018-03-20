module.exports = {
        check: function (req, res) {
                var loginBean = req.session.loginBean;
                if (loginBean == undefined) {
                        res.send("<script>alert('登录过期，请重新登录');location.href='/';</script>");
                        return false;
                }
                return loginBean;
        }
}