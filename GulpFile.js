var gulp = require("gulp");
var merge = require("merge2");
var clean = require("gulp-clean");
var browserify = require("gulp-browserify");

gulp.task("clean", function() {
    return createCleanStream();
});

gulp.task("install", function() {
    var installServerStream = createInstallServerStream();
    var installCliStream = createInstallCliStream();
    var installServicesStream = createInstallServicesStream();
    return merge(installServerStream, installCliStream, installServicesStream);
});

gulp.task("default", [ "install" ], function() {
    return gulp.watch([ "src/**", "GulpFile.js" ], [ "install" ]);
});

function createInstallServerStream() {
    return gulp.src("src/main/server/**/*.js")
    .pipe(gulp.dest("target/server"));
}

function createInstallCliStream() {
    return gulp.src("src/main/client/**")
    .pipe(gulp.dest("target/server/public"));
}

function createInstallServicesStream() {
    return gulp.src("src/main/services/**")
    .pipe(gulp.dest("target/services"));
}

function createCleanStream() {
    return gulp.src("target", {
        read: false
    })
    .pipe(clean({
        force: true
    }));
}