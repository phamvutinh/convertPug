const {
	task,
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass');
export default function () {
	task('sass', function () {
		return src('./src/shared/*.sass',{ sourcemaps: true })
			.pipe(sass({
				outputStyle: 'expanded',
				sourceComments: false
			}))
			.pipe(dest('./dist/css', { sourcemaps: true }));
	});

}
