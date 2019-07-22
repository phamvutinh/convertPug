import {task}from 'gulp';
import del from 'del';
export default function () {
	task('clear', function () {
		return del('./dist');
	});
}
