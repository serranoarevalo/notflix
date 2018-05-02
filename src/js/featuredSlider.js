const moviePosters = document.querySelectorAll(".featured__movie");

const postersArray = Array.from(moviePosters);

postersArray.forEach(poster =>
  poster.addEventListener("mouseover", handleMouseOver)
);

function handleMouseOver() {
  const previosPosters = [];
  function getPrevious(element) {
    const previousFound = element.previousElementSibling;
    if (previousFound !== null) {
      previosPosters.push(element);
      getPrevious(previousFound);
    }
  }
  getPrevious(this);
  console.log(previosPosters);
}
