const header = document.querySelector(".js-site-header");
const CLASS_NAME = "scrolled";

window.addEventListener("scroll", handleScroll);

function handleScroll(e) {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 20) {
    scrolledHeader();
  } else {
    unscrollHeader();
  }
}

function scrolledHeader() {
  header.classList.add(CLASS_NAME);
}

function unscrollHeader() {
  header.classList.remove(CLASS_NAME);
}
