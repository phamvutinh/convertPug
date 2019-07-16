const {
	task,
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const autoprefixer  = require('gulp-autoprefixer');
// const postcss = require('gulp-postcss')

export default function () {
	task('sass', function () {
		return src('./src/**/*.sass',{ sourcemaps: true })
			.pipe(sass({
				outputStyle: 'expanded',
				sourceComments: false
			}))
			.pipe(dest('./dist/css', { sourcemaps: true }))
			.pipe(browserSync.reload({ stream: true }));
	});

}
