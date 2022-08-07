const { src, dest } = require("gulp");
const path = require("../config/path.js");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");


const copy = function () {
  return src("./src/icon_font/*")
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "COPY",
          message: error.message,
        })),
      })
    )

    .pipe(dest("./dest/icon_font"));
};

module.exports = copy;
