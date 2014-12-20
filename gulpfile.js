var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');

var opts = {
  pkgName: 'block-comment-regex',
  pkgDesc: 'Regular expression(s) for block comments',
  pkgVers: '0.0.0',
  pkgOrgs: 'regexps',
  pkgDate: dateformat('longDate')
};
opts.pkgSens = camelCase(opts.pkgName)


gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache(opts))
    .pipe(gulp.dest(path.join('../', opts.pkgName)));
});

gulp.run()
