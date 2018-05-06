import "../css/styles.css";
import { toHHMMSS } from "./utils";
const video = document.querySelector(".player__video-file");
const videoParent = video.parentElement;
const backButton = document.querySelector(".player__backbutton");
const playerControls = document.querySelector(".player__controls");
const playBtn = document.querySelector(".js-play");
const volumeBtn = document.querySelector(".js-volume");
const fullScreenBtn = document.querySelector(".js-fullscreen");
const timeLeft = document.querySelector(".js-time-left");
const progressBar = document.querySelector(".js-player__progress-bar");
const bullet = document.querySelector(".js-bullet");
const SHOWING_CLASS = "showing";
let controlsInterval;
let isFullScreen = false;

video.autoplay = true;
video.volume = 0.5;
video.muted = false;
video.poster = require("../img/videoPlaceholder.jpg");
timeLeft.innerHTML = toHHMMSS(0);

document.addEventListener("mousemove", handleMouseMove);
playBtn.addEventListener("click", handlePlayClick);
fullScreenBtn.addEventListener("click", handleFullscreen);
backButton.addEventListener("click", handleBackBtn);
volumeBtn.addEventListener("click", handleVolumeBtn);
video.addEventListener("timeupdate", handleVideoProgress);

function handleMouseMove() {
  clearTimeout(controlsInterval);
  playerControls.classList.add(SHOWING_CLASS);
  backButton.classList.add(SHOWING_CLASS);
  controlsInterval = setTimeout(() => {
    playerControls.classList.remove(SHOWING_CLASS);
    backButton.classList.remove(SHOWING_CLASS);
  }, 2000);
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

function handleVideoProgress() {
  const progressNumber = Math.floor(100 / video.duration * video.currentTime);
  timeLeft.innerHTML = toHHMMSS(Math.floor(video.duration - video.currentTime));
  progressBar.value = Math.floor(100 / video.duration * video.currentTime);
  bullet.style.left = `${Math.floor(
    1215 / video.duration * video.currentTime - 20
  )}px`;
}
