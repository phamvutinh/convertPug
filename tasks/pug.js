const {
	task,
	src,
	dest
} = require('gulp');
const pug = require('gulp-pug');
const notifier = require('node-notifier');

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
