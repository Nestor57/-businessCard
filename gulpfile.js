var gulp=require('gulp'),
uglify=require('gulp-uglify');

gulp.task('default',function(){
	
gulp.scr('*.js').pipe(uglify()).pipe(gulp.dest('minjs'));
});