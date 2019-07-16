const {
	gulp,
	task,
	series,
	parallel
} = require('gulp');

const glob = require('glob');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins({
	lazy: true
});
/// load all file tasks
glob.sync('./tasks/**/*.js')
	.filter(function (file) {
		return /\.(js)$/i.test(file);
	})
	.map(function (file) {
		require(file)(gulp,
			plugins);
	});

// start default task
task(
	'serve',
	series([
		'clear',
		parallel(
			'pug',
			'sass',
			'script',
			'concatCSS',
			'concatJS'
		),
		'browserSync'
	])
);
