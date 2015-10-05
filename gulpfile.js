var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');

gulp.task('sass', function () {
    gulp.src('scss/*.scss')
        .pipe(sass({includePaths: ['scss']}).on('error', notify.onError({
          message: "<%= error.message %>",
          title: "Error in scss"
        })))
        .pipe(gulp.dest('css'))
        .pipe(notify("Sass successfully compiled"));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});