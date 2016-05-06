var gulp = require("gulp");
var gulpTypings = require("gulp-typings");
var ts = require('gulp-typescript');

gulp.task('installTypings', function () {  
    return gulp.src("./typings.json")
        .pipe(gulpTypings());
});

gulp.task('compile', ['installTypings'], function () {  
    return gulp
    .src(["lib/*.ts", 'typings/index.d.ts'])
    .pipe(ts({
        module: "commonjs",
        target: "ES5"
    }))
    .pipe(gulp.dest("lib"))
});

gulp.task('default', ["compile"], function () {  
    return gulp
    .src(["*.ts", 'typings/index.d.ts'])
    .pipe(ts({
        module: "commonjs",
        target: "ES5"
    }))
    .pipe(gulp.dest("."))   
});