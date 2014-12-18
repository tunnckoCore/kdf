var gulp = require('gulp');
var mustache = require('gulp-mustache');


gulp.task('default', function defaultFn() {
  gulp.src(['./templates/*.', './templates/.*', './templates/*'])
    .pipe(mustache({
        pkgName: 'regex-templates',
        pkgDesc: 'regex for {{mustache}}-like templates',
        pkgVers: 'v0.0.1',
        pkgOrgs: 'tunnckoCore'
    }))
    .pipe(gulp.dest('./regex-templates'));
});

gulp.run()
