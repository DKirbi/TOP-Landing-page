const sass = require('gulp-sass')(require('sass'));
var gulp = require('gulp');



// gulp.task('sass', () =>{
//     return gulp.src('sass/styles.scss')
//       .pipe(sass()) // Converts Sass to CSS with gulp-sass
//       .pipe(gulp.dest('css/'))
//   });
gulp.task("sass", () => gulp.src("sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css")));

  gulp.task('watch', () => {
    gulp.watch('sass/*.scss', gulp.series('sass'));
    
  });