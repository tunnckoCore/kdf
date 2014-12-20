var gulp = require('gulp');
var mustache = require('gulp-mustache');


gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache({
        pkgName: 'mustache-spec',
        pkgDesc: 'mustache/spec as package and more',
        pkgVers: 'v0.0.1',
        pkgOrgs: 'tunnckoCore'
    }))
    .pipe(gulp.dest('../mustache-spec'));
});

gulp.run()
