import { getPreviousAll, getNextAll } from "./utils";
const PREVIOUS_CLASS = "previous";
const NEXT_CLASS = "next";
const SHOWING_CLASS = "slideShow";

const moviePosters = document.querySelectorAll(".featured__movie");
const postersArray = Array.from(moviePosters);
let posterInterval;
let slideshowTimeout;

postersArray.forEach(poster => {
  poster.addEventListener("mouseover", handleMouseOver);
  poster.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver() {
  const allPrevious = getPreviousAll(this);
  const allNext = getNextAll(this);
  allPrevious.forEach(poster => poster.classList.add(PREVIOUS_CLASS));
  allNext.forEach(poster => poster.classList.add(NEXT_CLASS));
  startSlideshow(this);
}

function handleMouseLeave() {
  stopSlideshow(this);
  stopIntervals();
  postersArray.forEach(poster =>
    poster.classList.remove(NEXT_CLASS, PREVIOUS_CLASS)
  );
}

function startSlideshow(element) {
  const postersContainer = element.firstElementChild;
  const posters = Array.from(postersContainer.children);
  let currentPoster = 0;
  element.classList.add(SHOWING_CLASS);
  if (!posterInterval) {
    posterInterval = setInterval(() => {
      if (currentPoster === 0) {
        posters[currentPoster].classList.add(SHOWING_CLASS);
        currentPoster = currentPoster + 1;
      } else if (currentPoster === posters.length) {
        posters[currentPoster - 1].classList.remove(SHOWING_CLASS);
        posters[0].classList.add(SHOWING_CLASS);
        currentPoster = 1;
      } else {
        posters[currentPoster - 1].classList.remove(SHOWING_CLASS);
        posters[currentPoster].classList.add(SHOWING_CLASS);
        currentPoster = currentPoster + 1;
      }
    }, 1500);
  }
}

function stopSlideshow(element) {
  element.classList.remove(SHOWING_CLASS);
  const postersContainer = element.firstElementChild;
  const posters = Array.from(postersContainer.children);
  posters.forEach(poster => {
    poster.classList.remove(SHOWING_CLASS);
  });
}

function stopIntervals() {
  clearInterval(posterInterval);
  posterInterval = null;
}
