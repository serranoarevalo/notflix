const searchButton = document.querySelector(".js-search");
const searchBox = document.querySelector(".site-header__search");
const CLASS_NAME = "active";

searchButton.addEventListener("click", toggleSearch);
searchBox.addEventListener("click", killSearchClick);
window.addEventListener("click", outClick);

function toggleSearch(event) {
  event.stopPropagation();
  this.classList.toggle(CLASS_NAME);
}

function outClick(event) {
  if (searchButton.classList.contains(CLASS_NAME)) {
    searchButton.classList.remove(CLASS_NAME);
  }
}

function killSearchClick(event) {
  event.stopPropagation();
}
