const {task} = require('gulp');
const del = require('del');
export default function () {
	task('clear', function () {
		return del('./dist');
	});
}
