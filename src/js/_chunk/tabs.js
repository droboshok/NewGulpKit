const tabsCheck = document.querySelectorAll(".tab__item");
const contentScreen = document.querySelectorAll(".tab__content");
for (item of tabsCheck) {
  item.addEventListener("click", function (params) {
    let asd = this.dataset.tabs;
    console.log(asd);
    if (this.classList.contains("_active")) {
    } else {
      for (arg of contentScreen) {
        arg.classList.remove("_active");
        if (arg.dataset.content == asd) {
          arg.classList.toggle("_active");
        }
      }
      for (el of tabsCheck) {
        el.classList.remove("_active");
      }
      this.classList.toggle("_active");
    }
  });
}
