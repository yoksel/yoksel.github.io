'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');
var server = require('browser-sync');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('style', function() {
  gulp.src(['_src/scss/*.scss', '_src/scss/demos/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        'last 1 version',
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Opera versions',
        'last 2 Edge versions'
        ]}),
        csso
    ]))
    .pipe(gulp.dest('assets/css'))
    .pipe(server.reload({stream: true}));
});

gulp.task('js', function (cb) {
  pump([
        gulp.src('_src/**/*.js'),
        uglify(),
        gulp.dest('assets')
    ],
    cb
  );
});

gulp.task('serve', ['style','js'], function() {
  server.init({
    server: '.',
    notify: false,
    open: false,
    ui: false
  });

  gulp.watch('_src/**/*.{scss,sass}', ['style']);
  //gulp.watch('*.html').on('change', server.reload);
});
