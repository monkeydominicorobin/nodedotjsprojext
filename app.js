var pagpapahayag = require('express');
var path = require('path');
var logger = require('morgan');

var index = require('./routes/index');

var aplikasyon = pagpapahayag();

// view engine setup
aplikasyon.set('views', path.join(__dirname, 'views'));
aplikasyon.set('view engine', 'jade');

aplikasyon.use(logger('dev'));
aplikasyon.use(pagpapahayag.static(path.join(__dirname, 'public')));

aplikasyon.use('/', index);

// catch 404 and forward to error handler
aplikasyon.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
aplikasyon.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.aplikasyon.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = aplikasyon;
