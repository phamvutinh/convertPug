const {
	gulp,
	task,
	series,
	parallel
} = require('gulp');

const glob = require('glob');

/// load all file tasks
glob.sync('./tasks/**/*.js')
	.filter(function (file) {
		return /\.(js)$/i.test(file);
	})
	.map(function (file) {
		require(file)(gulp);
	});
// start default task
task(
	'serve',
	series([
		'clear',
		parallel(
			'images',
			'fonts',
			'pug',
			'sass',
			'script',
			'concatCSS',
			'concatJS'
		),
		'browserSync'
	])
);
