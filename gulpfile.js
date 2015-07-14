var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var jest = require('gulp-jest');
var shell = require('gulp-shell');

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
  'node build',
  'node index'
]));

gulp.task('document', function() {
	gulp.src("./src/**/.js")
  	.pipe(jsdoc('./documentation'));
});

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
		"scriptPreprocessor": "../node_modules/babel-jest",
    	"testFileExtensions": ["es6", "js"],
    	"moduleFileExtensions": ["js", "json", "es6"],
		unmockedModulePathPatterns: [
		"node_modules/react"
		]
	}));
});


gulp.task('default', ['styles', 'browserify'], function() {

});