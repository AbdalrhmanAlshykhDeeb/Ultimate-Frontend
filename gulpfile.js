const gulp = require("gulp");

const concat = require("gulp-concat");

const sass = require("gulp-sass")(require("sass"));

const autoprefixer = require("gulp-autoprefixer");

const pug = require("gulp-pug");

const livereload = require("gulp-livereload");

const sourcemaps = require("gulp-sourcemaps");

const minify = require("gulp-minify");

const watch = require("gulp-watch");

gulp.task("html", function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

gulp.task("css", function () {
  return gulp
    .src("stage/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputstyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

gulp.task("js", function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

gulp.task("watch", function () {
  require("./server");
  livereload.listen();
  return watch("./stage", gulp.series("html", "css", "js"));
});

gulp.task("default", gulp.series("watch"));
