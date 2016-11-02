var gulp = require("gulp");
var merge = require("merge2");
var clean = require("gulp-clean");
var browserify = require("gulp-browserify");
var mocha = require("gulp-mocha");

gulp.task("clean", function() {
    return createCleanStream();
});

gulp.task("install", [ "test" ], function() {
    var installConfigurationStream = createInstallConfigurationStream();
    var installServerStream = createInstallServerStream();
    var installCliStream = createInstallCliStream();
    var installServicesStream = createInstallServicesStream();
    return merge(installConfigurationStream, installServerStream, installCliStream, installServicesStream);
});

gulp.task("default", [ "install" ], function() {
    return gulp.watch([ "src/**", "GulpFile.js" ], [ "install" ]);
});

gulp.task("test", function() {
    return createTestStream();
});

function createTestStream() {
    return gulp.src("src/test/**/*.js")
    .pipe(mocha({
        reporter: "progress"
    }));
}

function createInstallConfigurationStream() {
    return gulp.src("src/main/configuration.js")
    .pipe(gulp.dest("target"));
}

function createInstallServerStream() {
    return gulp.src("src/main/server/**/*.js")
    .pipe(gulp.dest("target/server"));
}

function createInstallCliStream() {
    var installStaticStream = gulp.src([
        "src/main/client/**",
        "!src/main/client/js/app/**"
    ])
    .pipe(gulp.dest("target/server/public"));

    var installAppStream = gulp.src("src/main/client/js/app/app.js")
    .pipe(browserify({
        insertGlobals: false
    }))
    .pipe(gulp.dest("target/server/public/js/app"));

    return merge(installStaticStream, installAppStream);
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