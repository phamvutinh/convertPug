const {
	task,
	parallel,
	watch
} = require('gulp');
const browserSync = require('browser-sync').create();
export default function () {
	task('browserSync', function () {
		browserSync.init({
			watch: true,
			injectChanges: true,
			open: 'local',
			port: 8000 || 3000,
			server: {
				baseDir: "./dist",
			},
		});
		watch(['src/components/**/*.+(sass|scss)', 'src/shared/**/*.+(sass|scss)','src/pages/**/*.+(sass|scss)' ],
			parallel('sass')
		);
		watch(['src/components/**/*.+(js)', 'src/shared/**/*.+(js)','src/pages/**/*.+(js)' ],
			parallel('script')
		);
		watch(['src/**/*.+(pug)'], parallel('pug'));
		watch("dist/").on('change', browserSync.reload);
	});
}
