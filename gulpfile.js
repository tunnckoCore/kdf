#!/usr/bin/env node
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var opts = {
  pkgName: 'current-week-number',
  pkgDesc: 'Get current week number of the current year or given date string format.',
  pkgVers: '0.0.0',
  pkgOrgs: 'datetime',
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
