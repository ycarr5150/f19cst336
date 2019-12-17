var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var app = express();

app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'password'
  }
)); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('html', require('ejs').renderFile); 
app.use(express.static("public"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//////////////////////////////////////////////////////////////////////
// ROUTING 
//////////////////////////////////////////////////////////////////////

// examples 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var basicRouter = require('./routes/basic');
var mysqlRouter = require('./public/examples/my_sql/router'); 
var myauthRouter = require('./public/examples/auth/router');

// project and labs 
var proj4Router = require('./public/projects/project4/router');
var lab7Router = require('./public/labs/lab7_pixabay/router');
var lab9Router = require('./public/labs/lab9_quotes/router'); 
var lab10Router = require('./public/labs/lab10_quotesAdmin/router');
var myfinalRouter = require('./public/final/router'); 


// examples
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/basic', basicRouter);
app.use('/mysql', mysqlRouter); 
app.use('/auth', myauthRouter); 

// project and labs 
app.use('/public/projects/project4', proj4Router); 
app.use('/labs/lab7_pixabay', lab7Router);
app.use('/labs/lab9_quotes', lab9Router); 
app.use('/labs/lab10_quotesAdmin', lab10Router);
app.use('/scheduler', myfinalRouter); 

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