'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

// Plumber
var onError = function(err) {
    console.log('An error occurred:', err.message);
    this.emit('end');
};

// Scripts
gulp.task('vendor', function() {

    // mainBowerFiles([[filter, ]options][, callback]);

    // filter
    // Type: RegExp or function or glob Default: null

    // Tell gulp your bower base path (the path to the bower_components directory) explicitly.
    // return gulp.src(mainBowerFiles(/* options */), { base: 'path/to/bower_components' })

    gulp.src(mainBowerFiles('**/*.js', {
            // paths: {
            //     bowerDirectory: 'path/for/bower_components',
            //     bowerrc: 'path/for/.bowerrc',
            //     bowerJson: 'path/for/bower.json'
            // },
            overrides: {
                // 'BOWER-PACKAGE': {
                //   'main': ['./dist/example.pkgd.min.js']
                // },
                'jquery': {
                    // Set to true if you want to ignore this package.
                    // 'ignore': true
                }
            }
        }))
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({
            message: 'Vendor task complete'
        }));
});

gulp.task('default', [ 'vendor' ]);
