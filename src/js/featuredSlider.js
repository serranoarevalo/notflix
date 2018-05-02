import { getPreviousAll, getNextAll } from "./utils";

const moviePosters = document.querySelectorAll(".featured__movie");

const postersArray = Array.from(moviePosters);

postersArray.forEach(poster =>
  poster.addEventListener("mouseover", handleMouseOver)
);

function handleMouseOver() {
  const allPrevious = getPreviousAll(this);
  const allNext = getNextAll(this);
  console.log(allPrevious, allNext);
}
