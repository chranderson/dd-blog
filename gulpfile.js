var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var jest = require('gulp-jest');
var shell = require('gulp-shell')

var options = {
    path: 'index.js'
};

var serverFiles = [
    'src/*.js',
    'src/*.jsx',
    'src/**/*.jsx',
    'src/css/**/*.scss',
    'src/css/*.scss'
];

gulp.task('browserify', shell.task([
  'browserify src/browser.js -o public/build.js',
  'node index'
]))

gulp.task('minify', function() {
	sass('src/css/', {})
	.pipe(plumber())
	.pipe(gulp.dest('public/css'))
	.pipe(minifycss())
	.pipe(gulp.dest('public/css'));
});

gulp.task('styles', function() {
	sass('src/css/', {})
	.pipe(plumber())
	.pipe(gulp.dest('public/css/'))
});

gulp.task('test', function() {
	return gulp.src('test').pipe(jest({
		testDirectoryName: 'test',
		scriptPreprocessor: "./preprocessor.js",
		unmockedModulePathPatterns: [
		"node_modules/react"
		]
	}));
});


gulp.task('default', ['styles', 'browserify', 'test'], function() {

});