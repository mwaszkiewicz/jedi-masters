var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
const del = require('del');

var paths = {
    src: 'src/**/*.js',
    dist: 'dist',
    del: ['dist/**']
  };

  gulp.task('compile', function () {
    return gulp.src(paths.src)
        .pipe(babel())
        .pipe(gulp.dest(paths.dist));
});

  gulp.task('watch', ['compile'], function (done) {
    var stream = nodemon({
                   script: 'dist/server.js' 
                 , watch: paths.src
                 , tasks: ['lint','compile']
                 , done: done
                 })
    return stream
  });

  gulp.task("lint", function(){
    gulp.src(paths.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('clean', function () {
  return del(paths.del);
});