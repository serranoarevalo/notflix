import "../css/styles.css";
const video = document.querySelector(".player__video-file");
const videoParent = video.parentElement;
const playerControls = document.querySelector(".player__controls");
const SHOWING_CLASS = "showing";
let controlsInterval;

video.autoplay = true;
video.volume = 0.5;
video.muted = false;
video.poster = require("../img/videoPlaceholder.jpg");

document.addEventListener("mousemove", handleMouseMove);

function handleMouseMove() {
  clearTimeout(controlsInterval);
  playerControls.classList.add(SHOWING_CLASS);
  controlsInterval = setTimeout(
    () => playerControls.classList.remove(SHOWING_CLASS),
    5000
  );
}
