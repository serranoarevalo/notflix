import "../css/styles.css";
const video = document.querySelector(".player__video-file");
const videoParent = video.parentElement;
const backButton = document.querySelector(".player__backbutton");
const playerControls = document.querySelector(".player__controls");
const playBtn = document.querySelector(".js-play");
const volumeBtn = document.querySelector(".js-volume");
const fullScreenBtn = document.querySelector(".js-fullscreen");
const SHOWING_CLASS = "showing";
let controlsInterval;
let isFullScreen = false;

video.autoplay = true;
video.volume = 0.5;
video.muted = false;
video.poster = require("../img/videoPlaceholder.jpg");

document.addEventListener("mousemove", handleMouseMove);
playBtn.addEventListener("click", handlePlayClick);
fullScreenBtn.addEventListener("click", handleFullscreen);
backButton.addEventListener("click", handleBackBtn);
volumeBtn.addEventListener("click", handleVolumeBtn);

function handleMouseMove() {
  clearTimeout(controlsInterval);
  playerControls.classList.add(SHOWING_CLASS);
  controlsInterval = setTimeout(
    () => playerControls.classList.remove(SHOWING_CLASS),
    2000
  );
}

function handlePlayClick() {
  if (video.paused) {
    video.play();
    this.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    this.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleFullscreen() {
  if (!isFullScreen) {
    this.innerHTML = '<i class="fas fa-compress"></i>';
    videoParent.webkitRequestFullScreen();
    isFullScreen = true;
  } else {
    this.innerHTML = '<i class="fas fa-expand"></i>';
    document.webkitExitFullscreen();
    isFullScreen = false;
  }
}

function handleBackBtn() {
  window.history.back();
}

function handleVolumeBtn() {
  if (video.muted) {
    video.muted = false;
    this.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    video.muted = true;
    this.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}
