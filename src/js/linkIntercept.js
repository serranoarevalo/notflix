const movies = document.querySelectorAll(".movie-list__movie");
const body = document.querySelector("body");

const moviesArray = Array.from(movies);

moviesArray.forEach(movie => {
  movie.addEventListener("click", handleClick);
});

function handleClick() {
  body.classList.add("leaving");
  setTimeout(() => (window.location = "/view.html"), 500);
}
