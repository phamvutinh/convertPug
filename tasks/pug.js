const {
	task,
	src,
	dest
} = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
export default function () {
	task('pug', function buildHTML() {
		return src('./src/pages/**/*.pug')
			.pipe(pug({}))
			.pipe(dest('./dist'))
			.pipe(browserSync.reload({ stream: true }));
	});
}
