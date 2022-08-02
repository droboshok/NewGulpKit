const { src, dest } = require("gulp");
const path = require("../config/path.js");


const vendor = function () {
  return src(path.vendor.src)
  .pipe(dest(path.vendor.dest));
};



module.exports = vendor;
