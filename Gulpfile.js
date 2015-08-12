var gulp = require('gulp');
var traceur = require('gulp-traceur');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

var dist = "public/dist/";

var gulp_src = gulp.src;
gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    })
  );
};

gulp.task('compile', function() {
    return gulp.src('src/**/*.js')
        .pipe(traceur())
        .pipe(gulp.dest(dist));
});

gulp.task('serve', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['compile', 'serve'], function() {
    gulp.watch('src/*.js', ['compile']);
});
