import {
	task,
	src,
	dest
} from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import notifier from 'node-notifier';

export default function () {
	task('sass', function () {
		return src('./src/shared/*.sass', {
				sourcemaps: true
			})
			.pipe(sass({
				outputStyle: 'expanded',
				sourceComments: false,
				style: 'expanded'
			}).on('error', (err) => notifier.notify({
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
