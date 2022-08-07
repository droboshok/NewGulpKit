const acc = document.querySelectorAll(".accord__item");
const closed = document.querySelector(".accord");
for (item of acc) {
  item.addEventListener("click", function (argument) {
    if (document.querySelector(".accord").classList.contains("one")) {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        for (el of acc) {
          el.classList.remove("active");
        }
        this.classList.toggle("active");
      }
    }
  });
}
