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
		return src('./src/**/*.js')
			.pipe(concat('main.js'))
			.pipe(
				babel({
					presets: ['@babel/env'],
				})
			)
			.pipe(dest('./dist/js'))
			.pipe(browserSync.reload({
				stream: true
			}));
	});

}
