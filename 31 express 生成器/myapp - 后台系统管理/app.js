var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require("./routes/login")

var app = express();

// view engine setup //#配置模板引擎
app.set('views', path.join(__dirname, 'views')); //!path模块，绝对路径下的views文件夹地址
app.set('view engine', 'ejs');

app.use(logger('dev'));//#记录请求日志
/* GET / 200 28.105 ms - 207
GET /stylesheets/style.css 200 10.776 ms - 111 */
app.use(express.json());//!获取前端post过来的数据（json格式）
app.use(express.urlencoded({ extended: false }));//! （form-urlencoded格式）
app.use(cookieParser());//#解析cookie
app.use(express.static(path.join(__dirname, 'public')));//!设置public文件夹托管静态资源

app.use('/', indexRouter);//!应用级别路由
// app.use('/users', usersRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;//!local相当于一个上下文对象，不用给render函数传参，其ejs文件也能接收到参数
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
