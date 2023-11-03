const backgroundColor = document.querySelector("body");
const header = document.querySelector("body h1");
function handleResize() {
  let width = window.innerWidth;
  if (width >= 900) {
    header.classList.add("active");
    backgroundColor.style.backgroundColor = "powderblue";
  } else if (width < 900 && width >= 700) {
    header.classList.add("active");
    backgroundColor.style.backgroundColor = "tomato";
  } else if (width < 700 && width >= 500) {
    header.classList.add("active");
    backgroundColor.style.backgroundColor = "pink";
  }
}
window.addEventListener("resize", handleResize);
