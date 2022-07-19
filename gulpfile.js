"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

const css = function () {
	return gulp
		.src("src/scss/style.scss")
		.pipe(
			sass({
				outputStyle: "compressed", //styl kodu - extended, copressed
			}).on("error", sass.logError)
		)
		.pipe(gulp.dest("dist/css"));
};

const watch = function (cb) {
	gulp.watch("src/scss/**/*.scss", gulp.series(css));
	cb();
};

exports.default = gulp.series(css, watch);
exports.css = css;
exports.watch = watch;
