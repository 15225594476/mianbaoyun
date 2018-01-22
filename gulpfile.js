/**
 * Created by wyunfei on 2017/12/25.
 */

// 实际开发中还需：缓存处理、执行不同命令分别执行dev、pre、prod，上线流程介绍
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');   // sass编译
var concat = require('gulp-concat');    // js合并
var uglify = require('gulp-uglify');    // js压缩
var jshint = require('gulp-jshint');    // js语法检测
var cssmin = require('gulp-cssmin');    // css压缩
var rename = require('gulp-rename');    // 重命名
var imagemin = require('gulp-imagemin');    // 图片压缩
var htmlreplace = require('gulp-html-replace'); // html页面引用替换
var ngAnnotate = require('gulp-ng-annotate');   // 代码压缩 $scope注入
var webServer = require('gulp-webserver');  // 服务器


// html
gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
});

// 合并自定义JS
gulp.task('js', function () {
    gulp.src(['./app.js', './src/components/**/init.js', './src/components/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(concat('app.js'))
        .pipe(ngAnnotate()) // 压缩后找到$scope
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
});

// 替换页面引用
gulp.task('replace',['lib-bundle','js', 'html'], function () {
    var opts = {
        js: ['./js/lib-bundle.min.js', './js/app.min.js']
    };
    gulp.src('./dist/index.html')
        .pipe(htmlreplace(opts))
        .pipe(gulp.dest('./dist'));
});

// 合并第三方库
gulp.task('lib-bundle', function () {
    var files = [
        './src/lib/jquery/jquery-3.2.1.min.js',
        './src/lib/angular/angular.js',
        './src/lib/angular/angular-ui-router.js',
    ]
   gulp.src(files)
       .pipe(concat('lib-bundle.js'))
       // .pipe(uglify())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('./dist/js'))
});

// sass任务
gulp.task('sass', function () {
   return sass('./src/assets/css/app.scss')
       .on('error', sass.logError)
       .pipe(gulp.dest('./src/assets/css'))
       .pipe(cssmin())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('./dist/css'))
});

// imgs
gulp.task('imgs', function () {
   gulp.src('./src/assets/imgs/**/*')
       .pipe(imagemin())
       .pipe(gulp.dest('./dist/imgs'))
});

// 模板
gulp.task('templates', function () {
   gulp.src('./src/components/**/templates/*.html')
       .pipe(gulp.dest('./dist/components'))
});

// 监听sass
gulp.task('sassWatch', function () {
    gulp.watch('./src/assets/css/**/*.scss', ['sass']);
});

// 监听HTML
gulp.task('auto', function () {
    gulp.watch('./index.html', ['html']);
    gulp.watch('./src/components/**/templates/*.html', ['templates']);
    gulp.watch(['./src/components/**/*.js', './app.js'], ['js']);
})

// 服务器
gulp.task('webserver', ['sassWatch', 'auto'], function () {
   gulp.src('./dist')
       .pipe(webServer({
           host: '192.168.43.118',
           port: 8089,
           l    ivereload: true,
           open: true
       }))
});

gulp.task('default', function () {
   gulp.start('templates', 'imgs', 'lib-bundle', 'js', 'html', 'sass');
});

