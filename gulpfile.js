#!/usr/bin/env node
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var context = {
  pkgName: 'is-missing',
  pkgDesc: 'Check that given `name` exists in npm registry or github as user`s repository.',
  pkgVers: '0.0.0',
  pkgOrgs: 'tunnckoCore',
  pkgDate: dateformat('longDate')
};
context.pkgSens = camelCase(context.pkgName)


gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache(context))
    .pipe(gulp.dest(path.join('../', context.pkgName)));
    console.log('YOU GENERATE PROJECT:', path.join('../', context.pkgName));
});

gulp.start()
