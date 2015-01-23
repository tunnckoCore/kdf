#!/usr/bin/env node
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var opts = {
  pkgName: 'hybridify-all',
  pkgDesc: 'Hybridifies all the selected functions in an object.',
  pkgVers: '0.0.0',
  pkgOrgs: 'tunnckoCore',
  pkgDate: dateformat('longDate')
};
opts.pkgSens = camelCase(opts.pkgName)


gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache(opts))
    .pipe(gulp.dest(path.join('../', opts.pkgName)));
    console.log('YOU GENERATE PROJECT:', path.join('../', opts.pkgName));
});

gulp.start()
