var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login')

let session = require('express-session')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//注册session中间件（在路由中间件之前）
app.use(session({
  name:'levy-system',
  secret:'awdscnkdcjw1',
  cookie:{
    maxAge:1000*60*60, // 过期时间（毫秒） 
    secure:false //false表示http下，true：https下
  },
  resave:true ,//重新设置session，重新开始设置过期时间
  saveUninitialized:true,//一开始就生成一个cookie，但是处于未激活状态，无效 

}))
//设置中间件，session过期校验
app.use((req,res,next)=>{
  //排除login相关路由和接口
  if(req.url.includes('login')){
    next()
    return
  }

  if(req.session.user){
    //#重新设置一下session , 这样才能保证重置过期时间
    req.session.mydate = Date.now()
    next()
  }else{
    //是接口，返回错误码
    //不是接口，重定向
    req.url.includes('api')
    ?res.status(401).json({ok:0}):res.redirect('/login')
  }
})

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login',loginRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
