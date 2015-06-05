var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var server = require('gulp-develop-server');
var jest = require('gulp-jest');
require('harmonize')();

var options = {
    path: 'server.js'
};

var serverFiles = [
    'src/js/*.js',
    'src/index.ejs',
    'src/css/**/*.scss',
    'server.js'
];

gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

gulp.task('minify', function() {
	sass('src/stylesheets/', {})
	.pipe(plumber())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('styles', function() {
	sass('src/css/', {})
	.pipe(plumber())
	.pipe(gulp.dest('src/css/'))
	.pipe(livereload());
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

gulp.task('browserify', function() {
	gulp.src('src/js/main.js')
	.pipe(browserify({transform: 'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
	gulp.src('src/index.ejs')
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/**/*.*', ['default']);
	gulp.watch('src/css/**/*.scss', ['styles']);
	gulp.watch('test/**/*.js', ['test']);
});

gulp.task('default', ['browserify', 'copy', 'styles', 'watch', 'server:start', 'test'], function() {
	function restart( file ) {
		server.changed( function( error ) {
			if( ! error ) livereload.changed( file.path );
		});
	}

    	gulp.watch( serverFiles ).on( 'change', restart );
});