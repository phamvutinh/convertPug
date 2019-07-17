const {
	task,
	src,
	dest
} = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
export default function () {
	task('script', function () {
		return src('./src/**/*.js',{ sourcemaps: true })
			.pipe(concat('main.js'))
			.pipe(
				babel({
					presets: ['@babel/env'],
				})
			)
			.pipe(dest('./dist/js',{ sourcemaps: true }))
			.pipe(browserSync.reload({
				stream: true
			}));
	});

}
