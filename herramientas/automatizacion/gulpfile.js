const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
	console.log('Building the site');
	setTimeout(cb, 1200);
});

gulp.task('serve', function (cb) {
	console.log('Serving the site');
	gulp.src('www').pipe(
		server({
			livereload: true,
			open: true,
		})
	);
});

gulp.task('default', gulp.series('build', 'serve'));
