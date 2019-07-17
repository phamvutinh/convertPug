const {
	task,
	src,
	dest
} = require('gulp');

export default function () {
	task('images', () => {
		return src('./src/assets/images/**/*+(jpg|jpeg|gif|svg|png)')
			.pipe(dest('./dist/assets/images'))
	})
	task('fonts',() =>{
		return src('./src/assets/fonts/**/*')
			.pipe(dest('./dist/assets/fonts'))
	})
}
