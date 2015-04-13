#!/usr/bin/env node
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var context = {
  pkgName: 'bubs',
  pkgDesc: 'Bubbles. Transform string to a much cooler string than what you had initially. Javascript port of the Holman`s bubs.rb!',
  pkgVers: '0.0.0',
  pkgOrgs: 'tunnckoCore',
  pkgDate: dateformat('longDate')
};
context.pkgSens = camelCase(context.pkgName)

var dest = path.join('../jstransformers', context.pkgName);

gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache(context))
    .pipe(gulp.dest(dest));
    console.log('YOU GENERATE PROJECT:', dest);
});

gulp.start()
