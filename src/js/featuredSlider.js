import { getPreviousAll, getNextAll } from "./utils";

const moviePosters = document.querySelectorAll(".featured__movie");

const postersArray = Array.from(moviePosters);

let posterTimeout;

postersArray.forEach(poster => {
  poster.addEventListener("mouseover", handleMouseOver);
  poster.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver() {
  const posterImagesContainer = this.firstElementChild;
  const allPrevious = getPreviousAll(this);
  const allNext = getNextAll(this);
  allPrevious.forEach(poster => poster.classList.add("previous"));
  allNext.forEach(poster => poster.classList.add("next"));
  setTimeout(() => {
    startSlideshow(posterImagesContainer);
  }, 500);
}

function handleMouseLeave() {
  const posterImagesContainer = this.firstElementChild;
  postersArray.forEach(poster => poster.classList.remove("next", "previous"));
  setTimeout(() => stopSlideshow(posterImagesContainer), 1000);
}

function startSlideshow(father) {
  const posters = Array.from(father.children);
  posters.forEach((poster, index) => {
    posterTimeout = setTimeout(() => {
      poster.classList.add("showing");
    }, 1000 * index);
  });
  setTimeout(() => {
    posters.forEach(poster => poster.classList.remove("showing"));
  }, 1000 * posters.length);
}

function stopSlideshow(father) {
  const posters = Array.from(father.children);
  poster.forEach(poster => {
    poster.classList.remove("showing");
    clearTimeout(posterTimeout);
  });
}
