var _ = require('lodash');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var mergeStream = require('merge-stream');
var source = require('vinyl-source-stream');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

gulp.task('css', function() {
    var merged = mergeStream();

    _.each({
        'ebook.less': 'ebook/ebook.css',
        'pdf.less': 'ebook/pdf.css',
        'mobi.less': 'ebook/mobi.css',
        'epub.less': 'ebook/epub.css',
        'website.less': 'website/style.css'
    }, function(out, input) {
        gutil.log('compiling', input, 'into', out);
        merged.add(gulp.src('theme/stylesheets/'+input)
            .pipe(less())
            .pipe(minifyCSS())
            .pipe(rename(out))
            .pipe(gulp.dest('theme/assets/')));
    });

    return merged;
});

gulp.task('js', function() {
    return browserify('./theme/javascript/index.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./theme/assets/website'));
});

gulp.task('assets', function() {
    return gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('theme/assets/website/fonts/fontawesome/'));
});

gulp.task('default', ['css', 'js', 'assets'], function() {

});

gulp.task('build', shell.task(['gitbook build']));
gulp.task('serve', shell.task(['gitbook serve']));
gulp.task('pdf', shell.task(['gitbook pdf']));
gulp.task('update', shell.task(['git add . && git commit -m "Book has been updated" && git push origin master']));

gulp.task('deploy', ['build'], function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages());
});

gulp.task('deploy:update', runSequence('deploy', 'update'));

