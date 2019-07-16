const {
	task,
	src,
	dest
} = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');

export default function () {
	task('script', function () {
		return src('./src/**/*.js')
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
