require('babel-core/register');

const gulp = require('gulp');
const babel = require('gulp-babel');

const files = [
  'src/*.js',
  'src/**/*.js',
];

function isFixed(file) {
  return file.eslint !== null && file.eslint.fixed;
}

gulp.task('transpile', () => {
  gulp.src(files)
    .pipe(babel({
      presets: ['es2015', 'react', 'stage-0'],
    }))
    .pipe(gulp.dest('lib'));
});
