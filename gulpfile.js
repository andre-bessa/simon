const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js']).on('change', browserSync.reload);
});