#!/usr/bin/env node
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var opts = {
  pkgName: 'stringify-github-short-url',
  pkgDesc: 'Stringify github shorthand url object returned from `parse-github-short-url`',
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
