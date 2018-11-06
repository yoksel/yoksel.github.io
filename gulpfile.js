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
var changed = require('gulp-changed');

var cssSRC = ['_src/scss/*.scss', '_src/scss/demos/*.scss'];
var cssDEST = 'assets/css';

var jsSRC = '_src/**/*.js';
var jsDEST = 'assets';

gulp.task('style', function() {
  gulp.src(cssSRC)
    .pipe(changed(cssDEST))
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
    .pipe(gulp.dest(cssDEST))
    .pipe(server.reload({stream: true}));
});

gulp.task('js', function () {
    gulp.src(jsSRC)
        .pipe(changed(jsDEST))
        .pipe(uglify())
        .pipe(gulp.dest(jsDEST));
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
