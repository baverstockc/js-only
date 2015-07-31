var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

//SASS Compile Task
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
        .pipe(livereload());
});

//Watch SASS task
gulp.task('watch',function() {
    livereload.listen();
    gulp.watch('sass/**/*.scss',['styles']);
});