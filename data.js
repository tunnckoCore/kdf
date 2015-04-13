var gulp = require('gulp');
var through2 = require('through2');

var dataStream = gulp.src('./templates/*.{json,js}');
var templates = gulp.src('./templates/*.md');

templates
.pipe(through2.obj(function(file, _, next) {
  var self = this;
  dataStream.pipe(through2.obj(function(data, _, cb) {
    file.data = data.path;
    self.push(file)
    next(null, file)
    cb();
  }))
  next();
}))
.pipe(through2.obj(function(file, _, next) {
  console.log(JSON.stringify(file,0,2))
}))
