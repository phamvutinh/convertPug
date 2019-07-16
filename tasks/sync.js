const {
	task,
	parallel,
	watch
} = require('gulp');
const browserSync = require('browser-sync').create();
export default function () {
	task('browserSync', function () {
		browserSync.init({
			wacth: true,
			port: 8000 || 3000,
			server: {
				baseDir: "./dist",
			},
			logPrefix: "TinhPhạm",
			logFileChanges: false,
		});
		browserSync.notify("HTML <span color='green'>is supported</span> too!");
		watch(['src/**/*.+(sass)'], parallel('sass'));
		watch(['src/**/*.+(js)'], parallel('script'));
		watch(['src/**/*.+(pug)'], parallel('pug'));
		watch("dist/").on('change', browserSync.reload);
	});
}
