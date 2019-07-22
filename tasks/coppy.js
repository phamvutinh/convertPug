import {
	task,
	src,
	dest
} from 'gulp';

export default function () {
	task('images', () => {
		return src('./src/assets/images/**/*+(jpg|jpeg|gif|svg|png|ico)')
			.pipe(dest('./dist/assets/images'))
	})
	task('fonts', () => {
		return src('./src/assets/fonts/**/*')
			.pipe(dest('./dist/assets/fonts'))
	})
}
