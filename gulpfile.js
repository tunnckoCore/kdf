'use strict';
var path = require('path');
var gulp = require('gulp');
var dateformat = require('dateformat');
var camelCase = require('camelcase');
var mustache = require('gulp-mustache');
var meow = require('meow');

var context = {
  pkgName: 'milwaukee-charlike',
  pkgDesc: 'Scrape data from tutiempo.net/climate for Milwaukee (USA) and build Excel file, lol',
  pkgVers: '0.0.0',
  pkgOrgs: 'tunnckoCore',
  pkgDate: dateformat('longDate')
};
context.pkgSens = camelCase(context.pkgName)

var dest = path.join('../', context.pkgName);

gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache(context))
    .pipe(gulp.dest(dest));
    console.log('YOU GENERATE PROJECT:', dest);
});

gulp.start()
