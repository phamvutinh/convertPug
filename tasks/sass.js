const {
	task,
	src,
	dest
} = require('gulp');
const sourceMap = require('gulp-sourcemaps')
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const autoprefixer  = require('gulp-autoprefixer');
// const postcss = require('gulp-postcss')

export default function () {
	task('sass', function () {
		return src('./src/**/*.sass')
			.pipe(sourceMap.init())
			.pipe(sass({
				outputStyle: 'expanded',
				sourceComments: false
			}))
			.pipe(sourceMap.write())
			.pipe(dest('./dist/css'))
			.pipe(browserSync.reload({ stream: true }));
	});

}
