const concatDest = {
	"styles": [
		"resource/css/grid.css",
		"resource/css/reset.css",
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

const concat = require('gulp-concat');
export default function () {
	task('concatCSS', () => {
		return src(concatDest.styles, {
				allowEmpty: true
			})
			.pipe(concat('core.css'))
			.pipe(dest('dist/css'));
	});
	task('concatJS', () => {
		return src(concatDest.scripts, {
				allowEmpty: true
			})
			.pipe(concat('core.js'))
			.pipe(dest('dist/js'));
	});
}
