import { getPreviousAll, getNextAll } from "./utils";

const moviePosters = document.querySelectorAll(".featured__movie");

const postersArray = Array.from(moviePosters);

let posterInterval;

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
  startSlideshow(posterImagesContainer);
}

function handleMouseLeave() {
  const posterImagesContainer = this.firstElementChild;
  postersArray.forEach(poster => poster.classList.remove("next", "previous"));
  stopSlideshow(posterImagesContainer);
}

function startSlideshow(father) {
  const posters = Array.from(father.children);
  let currentPoster = 0;
  posterInterval = setInterval(() => {
    if (!father.classList.contains("showing")) {
      father.classList.add("showing");
    }
    if (currentPoster === 0) {
      posters[currentPoster].classList.add("showing");
      currentPoster = currentPoster + 1;
    } else if (currentPoster === posters.length) {
      posters[currentPoster - 1].classList.remove("showing");
      posters[0].classList.add("showing");
      currentPoster = 1;
    } else {
      posters[currentPoster - 1].classList.remove("showing");
      posters[currentPoster].classList.add("showing");
      currentPoster = currentPoster + 1;
    }
  }, 2500);
}

function stopSlideshow(father) {
  father.classList.remove("showing");
  const posters = Array.from(father.children);
  clearInterval(posterInterval);
  posters.forEach(poster => {
    poster.classList.remove("showing");
  });
}
