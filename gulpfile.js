#!/usr/bin/env node
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var context = {
  pkgName: 'berck',
  pkgDesc: 'The missing framework-agnostic and style-agnostic (BDD and TDD) assertions library for Node.JS and the browser',
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
