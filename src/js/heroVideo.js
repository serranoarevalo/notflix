const video = document.querySelector(".js-hero-video__file");
const videoPlaceholder = document.querySelector(".js-hero-video__placeholder");
const volumeToggle = document.querySelector(".js-hero-video__volume");
const CLASS_NAME = "js-hidden";

video.addEventListener("canplay", togglePlaceholder);
video.addEventListener("ended", togglePlaceholder);
volumeToggle.addEventListener("click", toggleVideoMute);
window.addEventListener("scroll", handleScroll);

video.autoplay = true;
video.volume = 0.1;
video.muted = false;

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

function handleScroll(e) {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 350) {
    pauseVideo();
  } else {
    resumeVideo();
  }
}

function togglePlaceholder() {
  const { classList } = videoPlaceholder;
  setTimeout(() => {
    if (classList.contains(CLASS_NAME)) {
      classList.remove(CLASS_NAME);
    } else {
      classList.add(CLASS_NAME);
    }
  }, 1000);
}
