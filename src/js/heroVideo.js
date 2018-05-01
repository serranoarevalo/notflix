const video = document.querySelector(".js-hero-video__file");
const videoPlaceholder = document.querySelector(".js-hero-video__placeholder");
const CLASS_NAME = "js-hidden";

video.addEventListener("click", toggleVideoMute);
video.addEventListener("canplay", togglePlaceholder);
video.addEventListener("ended", togglePlaceholder);
window.addEventListener("scroll", handleScroll);

video.autoplay = true;
video.volume = 0.1;
video.muted = true;

function toggleVideoMute() {
  video.muted = !video.muted;
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
  }, 10000);
}
