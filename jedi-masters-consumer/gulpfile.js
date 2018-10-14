var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');
const del = require('del');

const paths = {
    src: 'src/**/*.js',
    dist: 'dist',
    del: ['dist/**']
};

gulp.task('setup', ['compile'], function () {
    return gulp.src('src/**/*.json')
        .pipe(gulp.dest(paths.dist,  {overwrite: false}));
});

gulp.task('compile',['clean'], function () {
    return gulp.src(paths.src)
        .pipe(babel())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', ['setup'], function (done) {
    const stream = nodemon({
        script: 'dist/server.js' 
        , watch: paths.src
        , tasks: ['compile']
        , done: done
    }).on('restart', function(){
        console.log('restarted');
    });
    return stream;
});

gulp.task('lint', function(){
    gulp.src(paths.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('clean', function () {
    return del(paths.del);
});