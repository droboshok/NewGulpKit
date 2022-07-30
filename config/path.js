const pathSrc = "./src";
const pathDest = "./dest";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest,
  },
  scss: {
    src: pathSrc + "/styles/*.scss",
    watch: pathSrc + "/styles/**/*.scss",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/main.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },
  svg: {
    src: pathSrc + "/img/svg/*.svg",
    watch: pathSrc + "/img/svg/*.svg",
    dest: pathDest + "/img/svg",
  },
  font: {
    src: pathSrc + "/font/*.{ttf,otf,otc,ttc,woff,woff2,eot,svg}",
    watch: pathSrc + "/font/*.{ttf,otf,otc,ttc,woff,woff2,eot,svg}",
    dest: pathDest + "/fonts",
  },
  img: {
    src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img",
  },
  fontstyle: {
    src: pathSrc + "/styles/_components/_stylesheet.scss",
    watch: pathSrc + "/font/*.{ttf,otf,otc,ttc,woff,woff2,eot,svg}",
    dest: pathDest + "/font",
  },
};