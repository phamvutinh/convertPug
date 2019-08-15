const concatDest = {
	"styles": [
		"resource/css/grid.css",
		"resource/css/reset.css",
		"bower_components/swiper/dist/css/swiper.min.css",
		"node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css",
		"node_modules/@fortawesome/fontawesome-free/css/regular.min.css",
		"node_modules/@fortawesome/fontawesome-free/css/brands.min.css",
		"node_modules/@fortawesome/fontawesome-free/css/v4-shims.min.css",
		"node_modules/@fortawesome/fontawesome-free/css/solid.min.css"
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
