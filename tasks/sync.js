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
			logFileChanges: false
		});
		watch(['src/**/*.+(sass)'], parallel('sass'));
		watch(['src/**/*.+(js)'], parallel('script'));
		watch(['src/**/*.+(pug)'], parallel('pug'));
		watch(['src/assets/images/**/*.+(jpg|jpeg|gif|svg|png)'], parallel('images'));
		watch(['src/assets/fonts/**/*'], parallel('fonts'));
		watch("dist/").on('change', browserSync.reload);
	});
}
