var gulp=require('gulp');
var uglify=require('gulp-uglify');
var gutil=require('gulp-util');

gulp.task('js',function(){
	
gulp.scr('*.js')
 .pipe(uglify())
 .pipe(gulp.dest('minjs'))
 .pipe(notify({message:'Javascript is now ugly!'}));
});

gulp.task('default',['js']);