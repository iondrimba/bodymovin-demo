var gulp = require('gulp');

module.exports = function () {
	gulp.src(['./src/scripts/app.js'])
		.pipe(gulp.dest('./public/js'));

	gulp.src(['./src/styles/app.css'])
		.pipe(gulp.dest('./public/css'));

	gulp.src(['./src/scripts/bodymovin.js'])
		.pipe(gulp.dest('./public/js'));

	return gulp.src(['./src/templates/index.html'])
		.pipe(gulp.dest('./public'));
};