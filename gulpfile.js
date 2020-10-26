const PROJECT_FOLDER = 'build';
const ASSETS = 'assets';
const paths = {    
    build: {
        html: PROJECT_FOLDER + '/',
        styles: PROJECT_FOLDER + '/styles/',
        scripts: PROJECT_FOLDER + '/scripts/',
        imgs: PROJECT_FOLDER + '/imgs/',
        fonts: PROJECT_FOLDER + '/fonts/'
    },
    src: {
        html: ASSETS + '/*.html',
        styles: ASSETS + '/styles/main.scss',
        scripts: ASSETS + '/scripts/**/*.js',
        imgs: ASSETS + '/imgs/**/*.{png,jpg,svg,gif,webp,ico}',
        fonts: ASSETS + '/fonts/*.{ttf,woff,woff2}'
    },
    watch: {
        html: ASSETS + '/**/*.html',
        styles: ASSETS + '/styles/**/*.scss',
        scripts: ASSETS + '/scripts/**/*.js',
        imgs: ASSETS + '/imgs/**/*.{png,jpg,svg,gif,webp,ico}'
    },
    root: `./${PROJECT_FOLDER}/`
};

const { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    del = require('del'),
    ttf2woff = require('gulp-ttf2woff'),
    fonter = require('gulp-fonter'),
    fs = require('fs');

const browserSync = (params) => {
    browsersync.init({
        server : {
            baseDir: paths.root
        },
        port: 3000,
        notify: false  
    });
};

//HTML
const html = () => {
    return src(paths.src.html)
        .pipe(dest(paths.build.html))
        .pipe(browsersync.stream())
};

//SCSS
const styles = () => {
    return src(paths.src.styles)
        .pipe(sass())
        .pipe(dest(paths.build.styles))
        .pipe(browsersync.stream())
};

const scripts = () => {
    return src(paths.src.scripts)        
        .pipe(dest(paths.build.scripts))
        .pipe(browsersync.stream())
};

const images = () => {
    return src(paths.src.imgs)        
        .pipe(dest(paths.build.imgs))
        .pipe(browsersync.stream())
};

//WATCH FILES
const updateOnChange = (params) => {
    gulp.watch([paths.watch.html], html);
    gulp.watch([paths.watch.styles], styles);
    gulp.watch([paths.watch.scripts], scripts);
    gulp.watch([paths.watch.imgs], images);
};

// delete dist folder
const clean = () => del(paths.root);

//convert ttf to woff 
const fonts = () => {
    return src(paths.src.fonts)        
        .pipe(dest(paths.build.fonts))
        .pipe(browsersync.stream()) 
};

// task that will convert OTF to TTF
gulp.task('otf2ttf', () => {
    return src([`${ASSETS}/fonts/*.otf`])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(`${ASSETS}/fonts/`))
});
/*
https://www.youtube.com/watch?v=stFOy0Noahg */


let build = gulp.series(clean, gulp.parallel(styles, html, fonts, scripts, images));
let watch = gulp.parallel(build, updateOnChange, browserSync);

//exports.connectFonts = connectFonts;

exports.images = images;
exports.scripts = scripts;
exports.fonts = fonts;
exports.styles = styles;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;