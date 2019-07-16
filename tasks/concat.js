const concatDest = {
	"styles": [
		"resource/css/grid.css",
		"resource/css/style.css",
	],
	"scripts": [
        "resource/js/backToTop.js",
	]

}
const {
	task,
	src,
	dest
} = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins({
	lazy: true
});
const concat = require('gulp-concat');
export default function () {
	task('concatCSS', () => {
		return src(concatDest.styles, {
				allowEmpty: true
			})
			.pipe(plugins.concat('core.css'))
			.pipe(dest('dist/css'));
	});
	task('concatJS', () => {
		return src(concatDest.scripts, {
				allowEmpty: true
			})
			.pipe(plugins.concat('core.js'))
			.pipe(dest('dist/js'));
	});
}
