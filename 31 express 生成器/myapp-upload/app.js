var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login')

const MongoStore = require('connect-mongo')
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

const JWT = require("./util/JWT")
app.use((req,res,next)=>{
  //排除login相关路由和接口（login相关 直接next放行，因为不同token）
  if(req.url.includes('login')){
    next() 
    return
  }

  //#有些页面用不着token，也是直接放行(用可选链 )
  const token = req.headers["authorization"]?.split(" ")[1] //!因为前面添加了barer，所以要分离一下字符串
  if(token){
     console.log(token)
     const payload = JWT.verify(token)
 
     //如果token有效
     if(payload){
      //重新设置token过期时间
      const newToken = JWT.generate({
        _id:payload._id,
        username:payload.username
      },'10s')
      res.header('Authoriaztion',newToken)
      next()
     }else{
      res.status(401).send({errCode:-1,errInfo:'token过期'})
     }


  }else{
    next()
  }
 // console.log('okkr',req.headers["authorization"]?.split(" ")[1])
  //next()
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
