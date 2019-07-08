var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('clean', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('lint', () => {
  return gulp.src('qurl.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', () => {
  return gulp.src('qurl.js')
    .pipe(uglify())
    .pipe(rename('qurl.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('lint', 'uglify'));