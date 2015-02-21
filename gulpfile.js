var gulp = require('gulp');
require('gulp-makdoc');

gulp.task('makdoc:done:after', function(done) {
    gulp.src('bower_components/**/*.{js,css,map}')
        .pipe(gulp.dest('dist/'));
   done();
});