var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AnnoncesRouter =require('./routes/Annonces');
var Type_AnnoncesRouter =require('./routes/Type_Annonces')
var app = express();

var db=require('./models');
db.sequelize.sync().then(()=>{
  console.log('db connected')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Annonces', AnnoncesRouter);
app.use('/Type_Annonces', Type_AnnoncesRouter);


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_saroukh'
});
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/auth', (req, res) => {
  const mail = req.body.mail;
  const password = req.body.password;
  if (mail && password) {
    connection.query('SELECT * FROM users WHERE mail = ? AND password = ?', [mail, password], (error, results, fields) => {
      if (results && results.length > 0) {
        req.session.loggedin = true;
        req.session.mail = mail;
        res.redirect('/home');
      } else {
        res.send('Incorrect Email and/or password!');
      }
      res.end();
    });
  } else {
    res.send('Please enter Email and password!');
    res.end();
  }
});

app.get('/home', (req, res) => {
  if (req.session.loggedin) {
    res.send(`Welcome back!`);
  } 
  res.end();
});



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
