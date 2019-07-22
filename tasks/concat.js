const concatDest = {
	"styles": [
		"resource/css/grid.css",
		"resource/css/reset.css",
		"bower_components/swiper/dist/css/swiper.min.css"
	],
	"scripts": [
		"resource/js/backToTop.js",
	]

}
import {
	task,
	src,
	dest
} from 'gulp';

import concat from 'gulp-concat';
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
