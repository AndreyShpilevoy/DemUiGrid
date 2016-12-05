/* eslint no-undef: 0*/
/* eslint import/no-extraneous-dependencies: 0*/

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const scssify = require('scssify');

const config = {
  prod: (process.env.NODE_ENV === 'production'),
  scriptEntry: 'src/index.js',
  scriptDest: 'dist/'
};

function lint() {
  return gulp.src('src/**/*.{js,jsx}')
    .pipe($.eslint())
    .pipe($.eslint.format());
}

const b = browserify({
  entries: config.scriptEntry,
  debug: !config.prod,
});

b.transform('babelify', {
  presets: ['es2015', 'stage-1', 'react'],
  plugins: ['transform-class-properties']
})
  .transform(scssify, {
        'sass': {
          'outputStyle': 'compressed'
        }
      })
  .transform({
    global: true,
  }, 'uglifyify');

function bundle() {
  lint();

  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(config.scriptDest));
}

gulp.task('build', bundle);

gulp.task('default', ['build']);
