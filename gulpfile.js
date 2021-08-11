const { watch } = require('gulp');
const browserSync = require('browser-sync').create();

function server() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });

  watch('src/**', { events: 'change' }, cb => { browserSync.reload(); cb(); });
}

exports.server = server;
