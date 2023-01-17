var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //! 判断req.session.user
  if(res.session.user){
    res.render('index', { title: 'Express' });
  }else{
    res.redirect("/login")
  }
  
});

module.exports = router;
