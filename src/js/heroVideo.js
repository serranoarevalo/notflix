const video = document.querySelector(".js-hero-video__file");
const volumeToggle = document.querySelector(".js-hero-video__volume");
const CLASS_NAME = "js-hidden";

volumeToggle.addEventListener("click", toggleVideoMute);
video.addEventListener("ended", resetVideoPoster);
window.addEventListener("scroll", handleScroll);

video.autoplay = true;
video.volume = 0.1;
video.muted = false;
video.poster = require("../img/videoPlaceholder.jpg");

function toggleVideoMute() {
  if (!video.muted) {
    video.muted = true;
    volumeToggle.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    video.muted = false;
    volumeToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
}

function pauseVideo() {
  if (!video.paused) {
    setTimeout(function() {
      video.pause();
    }, 500);
  }
}

function resumeVideo() {
  if (video.paused) {
    setTimeout(function() {
      video.play();
    }, 500);
  }
}

function handleScroll() {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 350) {
    pauseVideo();
  } else {
    resumeVideo();
  }
}

function resetVideoPoster() {
  video.autoplay = false;
  video.load();
}
