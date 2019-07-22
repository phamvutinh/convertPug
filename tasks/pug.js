import {
	task,
	src,
	dest
} from 'gulp';
import pug from 'gulp-pug';
import notifier from 'node-notifier';

export default function () {
	task('pug', function buildHTML() {
		return src('./src/pages/**/*.pug')
			.pipe(pug({}).on('error', (err) => notifier.notify({
				title: `[TinhPhạm] Error from ${err.plugin}`,
				message: err.message
			})))
			.pipe(dest('./dist'))
	});
}
