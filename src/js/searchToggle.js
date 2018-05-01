const searchButton = document.querySelector(".js-search");
const searchBox = document.querySelector(".site-header__search");
const searchInput = searchBox.childNodes[1];
const CLASS_NAME = "active";

searchButton.addEventListener("click", toggleSearch);
searchBox.addEventListener("click", killSearchClick);
window.addEventListener("click", outClick);

function toggleSearch(event) {
  event.stopPropagation();
  if (searchButton.classList.contains(CLASS_NAME)) {
    hideSearch();
  } else {
    showSearch();
  }
}

function outClick(event) {
  if (searchButton.classList.contains(CLASS_NAME)) {
    hideSearch();
  }
}

function killSearchClick(event) {
  event.stopPropagation();
}

function showSearch() {
  searchInput.focus();
  searchButton.classList.add(CLASS_NAME);
}

function hideSearch() {
  searchButton.classList.remove(CLASS_NAME);
  searchInput.blur();
  searchInput.value = "";
  console.log(searchInput.value);
}
