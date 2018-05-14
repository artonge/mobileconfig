'use strict';

const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');

gulp.task('clean-lib', () => {
  return gulp.src('lib', { read: false })
    .pipe(clean());
});

gulp.task('clean-lib-es5', () => {
  return gulp.src('lib/es5', { read: false })
    .pipe(clean());
});

gulp.task('clean-lib-es6', () => {
  return gulp.src('lib/es6', { read: false })
    .pipe(clean());
});

gulp.task('transpile', ['clean-lib-es5'], () => {
  return gulp.src(['./src/**/*.mjs'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('lib/es5'));
});

gulp.task('copy-source', ['clean-lib-es6'], () => {
  return gulp.src(['./src/**/*.mjs'])
    .pipe(gulp.dest('lib/es6'));
});

gulp.task('generateES5', ['clean-lib-es5', 'transpile']);
gulp.task('generateES6', ['clean-lib-es6', 'copy-source']);
gulp.task('generate-lib', ['generateES5', 'generateES6']);

// files: ['./src/*.mjs', './src/models/*.mjs'],
gulp.task('docs', () => {
  return jsdoc2md.render({
    files: ['./src/index.mjs', './src/models/profile.mjs', './src/models/payload.mjs', './src/models/airPlayPayload.mjs'],
    configure: './.jsdoc.json'
  })
    .then((output) => {
      return fs.writeFile('./docs/api.md', output);
    })
    .catch(console.error);
});
