import {
	task,
	src,
	dest
} from 'gulp';
import browserSync from 'browser-sync';
import babel from 'gulp-babel';

import concat from 'gulp-concat';
export default function () {
	task('script', function () {
		return src('./src/**/*.js', {
				sourcemaps: true
			})
			.pipe(concat('main.js'))
			.pipe(
				babel({
					presets: ['@babel/env'],
				})
			)
			.pipe(dest('./dist/js', {
				sourcemaps: true
			}))
			.pipe(browserSync.reload({
				stream: true
			}));
	});
}
