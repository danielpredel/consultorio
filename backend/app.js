var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var doctoresRouter = require('./routes/doctores');
var medicinasRouter = require('./routes/medicinas');
var correoRouter = require('./routes/correo');
var qrRouter = require('./routes/codigoqr');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Ruta inicial
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/doctores', doctoresRouter);
app.use('/api/medicinas', medicinasRouter);
app.use('/api/correo', correoRouter);
app.use('/api/codigoqr', qrRouter);

// Rutas virtuales de Angular
app.use('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
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
