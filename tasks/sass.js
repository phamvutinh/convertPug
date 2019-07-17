const {
	task,
	src,
	dest
} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const notifier = require('node-notifier');
export default function () {
	task('sass', function () {
		return src('./src/shared/*.sass', {
				sourcemaps: true
			})
			.pipe(sass({
				outputStyle: 'expanded',
				sourceComments: false,
			}).on('error',(err) => notifier.notify({
				title: `[TinhPhạm] Error from ${err.plugin}`,
				message: err.message
			})).on('error', sass.logError))
			.pipe(dest('./dist/css', {
				sourcemaps: true
			}))
			.pipe(browserSync.reload({
				stream: true
			}));;
	});

}
