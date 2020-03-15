var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csso = require('postcss-csso');
var server = require('browser-sync').create();
var reload = server.reload;
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');

var cssSRC = ['_src/scss/*.scss', '_src/scss/demos/*.scss'];
var cssDEST = 'assets/css';

var jsSRC = '_src/**/*.js';
var jsDEST = 'assets';

gulp.task('style', function() {
  return gulp.src(cssSRC)
    // .pipe(changed(cssDEST))
    // .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
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
    // .pipe(server.stream());
});

gulp.task('js', function () {
  return gulp.src(jsSRC)
    .pipe(changed(jsDEST))
    .pipe(uglify())
    .pipe(gulp.dest(jsDEST))
    .pipe(reload({ stream:true }));
});

gulp.task('serve',
  // series breaks function below
  // gulp.series(['style','js']),

  function() {
    server.init({
      notify: false,
      open: false,
      ui: false,
      watch: true,
      server: {
        baseDir: '.'
      },
      port: 7500,
    });

    gulp.watch(['_src/**/*.scss'], gulp.series('style'));
    //gulp.watch('*.html').on('change', server.reload);
  }
);
