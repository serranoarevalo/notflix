import { getPreviousAll, getNextAll } from "./utils";

const moviePosters = document.querySelectorAll(".featured__movie");

const postersArray = Array.from(moviePosters);

postersArray.forEach(poster => {
  poster.addEventListener("mouseover", handleMouseOver);
  poster.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver() {
  const allPrevious = getPreviousAll(this);
  const allNext = getNextAll(this);
  allPrevious.forEach(poster => poster.classList.add("previous"));
  allNext.forEach(poster => poster.classList.add("next"));
}

function handleMouseLeave() {
  postersArray.forEach(poster => poster.classList.remove("next", "previous"));
}
